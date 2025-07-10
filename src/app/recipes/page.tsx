"use client";
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';


interface RecipeData {
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  country: string;
  Time: string;
}


const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

function DemoApp() {
  const [ingredients, setIngredients] = useState<string>('');
  const [country, setCountry] = useState<string>('India'); // Default country
  const [recipe, setRecipe] = useState<RecipeData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  

  // List of Asian countries for the dropdown menu
  const asianCountries: string[] = [
    'Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia',
    'China', 'Cyprus', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan',
    'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia',
    'Myanmar (Burma)', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar',
    'Russia', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 'Taiwan', 'Tajikistan',
    'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam',
    'Yemen'
  ];

 
  const getRecipe = async () => {
    setIsLoading(true); // Set loading state
    setRecipe(null);     // Clear previous recipe
    setError(null);      // Clear previous errors

 
    if (!API_KEY) {
      setError("API Key is not configured. Please ensure VITE_GEMINI_API_KEY is set in your .env.local file.");
      setIsLoading(false);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: API_KEY });

  
      const model = "gemini-2.0-flash"; 

    // prompt 
      const prompt = `Generate a unique recipe for a dish from ${country} using the following main ingredients: ${ingredients}. Ensure the response is a JSON object with properties: "recipeName" (string), "ingredients" (array of strings), "instructions" (array of strings), "country" (string), and "Time" (string, e.g., '30 minutes', '1 hour').`;

      
      const response = await ai.models.generateContent({
        model: model,
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        config: {
          responseMimeType: "application/json",
      
        },
      });

      const candidate = response.candidates?.[0]; 
      const text = candidate?.content?.parts?.[0]?.text;

      if (!text) {
        setError("The AI did not return a valid recipe. Please try again or refine your prompt.");
        setIsLoading(false);
        return; 
      }

      try {
       //parse str to json
        const parsedJson: RecipeData = JSON.parse(text);
        setRecipe(parsedJson); 
      } catch (jsonError: any) {
        setError(`Failed to parse recipe data. The AI might not have returned valid JSON. Raw response: ${text}`);
        console.error('JSON parsing error:', jsonError, 'Raw response:', text);
      }

    } catch (apiError: any) {
      setError(`Failed to fetch recipe: ${apiError.message}`);
      console.error('API call error:', apiError);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    // Main container with responsive styling
   <div className="min-h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02] flex items-center justify-center p-4 font-inter text-gray-100">
  <div className=" mt-20 bg-gray-850 p-8 rounded-xl shadow-lg w-full max-w-2xl transform transition-all duration-300 hover:shadow-xl">
    <h1 className="text-3xl font-bold text-pink-400 mb-6 text-center">Asia 48 Recipe Generator</h1>

    {/* Input for Ingredients */}
    <div className="mb-4">
      <label htmlFor="ingredients" className="block text-sm font-medium text-gray-300 mb-2">
        Available Ingredients (e.g., chicken, rice, soy sauce):
      </label>
      <input
        type="text"
        id="ingredients"
        className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-100 placeholder-gray-500 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Type ingredients separated by commas"
      />
    </div>

    {/* Dropdown for Country Selection */}
    <div className="mb-6">
      <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
        Select an Asian Country:
      </label>
      <select
        id="country"
        className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-100 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        {asianCountries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>

    {/* Generate Recipe Button */}
    <button
      onClick={getRecipe}
      disabled={isLoading || !ingredients.trim()}
      className={`w-full py-3 px-4 rounded-lg text-white font-semibold shadow-md transition-all duration-300
        ${isLoading || !ingredients.trim()
          ? 'bg-pink-500/50 cursor-not-allowed'
          : 'bg-pink-600 hover:bg-pink-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2'
        }`}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Generating Recipe...
        </span>
      ) : (
        'Get Recipe'
      )}
    </button>

    {/* Error Message Display */}
    {error && (
      <div className="mt-6 p-4 bg-pink-900/40 border border-pink-700 text-pink-300 rounded-lg">
        <p className="font-semibold">Error:</p>
        <p>{error}</p>
      </div>
    )}

    {/* Recipe Display Area */}
    {recipe && (
      <div className="mt-8 bg-gray-900 p-6 rounded-xl shadow-inner border border-gray-700">
        <h2 className="text-2xl font-bold text-pink-400 mb-4">{recipe.recipeName}</h2>
        <h2 className="text-xl font-semibold text-pink-300 mb-2">Prep Time: {recipe.Time}</h2>
        <p className="text-lg text-pink-300 mb-4 italic">A delicious dish from {recipe.country}</p>

        {/* Ingredients List */}
        <h3 className="text-xl font-semibold text-pink-300 mb-3">Ingredients:</h3>
        <ul className="list-disc list-inside text-gray-300 mb-5 space-y-1">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Instructions List */}
        <h3 className="text-xl font-semibold text-pink-300 mb-3">Instructions:</h3>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    )}
  </div>
</div>

  );
}

export default DemoApp;
