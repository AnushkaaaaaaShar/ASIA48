"use client"; // This directive marks the component as a Client Component in Next.js

import React, { useState } from 'react';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai'; // Import SchemaType

// Define an interface for the Recipe object to provide type safety
interface Recipe {
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  country: string;
}

// Initialize the Generative AI model with your API key
// In this Canvas environment, the API key is automatically provided
// by leaving it as an empty string. You do not need to access process.env here.
// If you were running this in a real Next.js project outside of Canvas,
// and wanted to use an environment variable directly in a client component,
// it would need to be prefixed with NEXT_PUBLIC_ (e.g., process.env.NEXT_PUBLIC_GEMINI_API_KEY).
const API_KEY = ""; // Canvas will provide this value automatically

const genAI = new GoogleGenerativeAI(API_KEY);

// The main component, renamed from App to RecipeGenerator for clarity in a Next.js context
export default function RecipeGenerator() {
  // State variables for inputs, recipe data, loading status, and errors
  const [ingredients, setIngredients] = useState('');
  const [country, setCountry] = useState('India'); // Default country
  const [recipe, setRecipe] = useState<Recipe | null>(null); // Use the Recipe interface for type safety
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Explicitly type error state as string or null

  // List of Asian countries for the dropdown menu
  const asianCountries = [
    'Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia',
    'China', 'Cyprus', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan',
    'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia',
    'Myanmar (Burma)', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar',
    'Russia', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 'Taiwan', 'Tajikistan',
    'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam',
    'Yemen'
  ];

  /**
   * Handles the recipe generation process.
   * Sends user inputs to the Gemini API and updates the UI with the response.
   */
  const getRecipe = async () => {
    setIsLoading(true); // Set loading state
    setRecipe(null);     // Clear previous recipe
    setError(null);      // Clear previous errors

    try {
      // Get the generative model instance.
      // We pass the generationConfig directly here to ensure the response is JSON.
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash',
        generationConfig: {
          responseMimeType: "application/json", // Request a JSON response
          responseSchema: { // Define the expected structure of the JSON using SchemaType
            type: SchemaType.OBJECT,
            properties: {
              "recipeName": { type: SchemaType.STRING },
              "ingredients": { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
              "instructions": { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
              "country": { type: SchemaType.STRING }
            },
            // propertyOrdering is not a recognized property in SchemaType.OBJECT
            // While it helps in direct API calls, the client library's types do not include it.
            // The model generally respects the order of properties defined above.
          }
        }
      });

      // Construct the prompt for the Gemini model
      const prompt = `Generate a unique recipe for a dish from ${country} using the following main ingredients: ${ingredients}.`;

      // Generate content with the specified prompt and configuration
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text(); // Get the response as a string

      try {
        // Attempt to parse the string as JSON and cast it to our Recipe interface
        const parsedJson: Recipe = JSON.parse(text);
        setRecipe(parsedJson); // Set the recipe state with the parsed JSON object
      } catch (jsonError) {
        // Ensure setError accepts string or null
        setError('Failed to parse recipe data. The AI might not have returned valid JSON.');
        console.error('JSON parsing error:', jsonError, 'Raw response:', text);
      }

    } catch (apiError: unknown) { // Explicitly type apiError as unknown
      // Cast apiError to Error to access .message property safely
      setError(`Failed to fetch recipe: ${(apiError as Error).message}`);
      console.error('API call error:', apiError);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    // Main container with responsive styling
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4 font-inter text-gray-800">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl transform transition-all duration-300 hover:shadow-xl">
        <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">Asia 48 Recipe Generator</h1>

        {/* Input for Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
            Available Ingredients (e.g., chicken, rice, soy sauce):
          </label>
          <input
            type="text"
            id="ingredients"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Type ingredients separated by commas"
          />
        </div>

        {/* Dropdown for Country Selection */}
        <div className="mb-6">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
            Select an Asian Country:
          </label>
          <select
            id="country"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
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
          disabled={isLoading || !ingredients} // Disable button if loading or no ingredients
          className={`w-full py-3 px-4 rounded-lg text-white font-semibold shadow-md transition-all duration-300
            ${isLoading || !ingredients
              ? 'bg-teal-300 cursor-not-allowed'
              : 'bg-teal-600 hover:bg-teal-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'
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
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
          </div>
        )}

        {/* Recipe Display Area */}
        {recipe && (
          <div className="mt-8 bg-teal-50 p-6 rounded-xl shadow-inner border border-teal-200">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">{recipe.recipeName}</h2>
            <p className="text-lg text-teal-700 mb-4 italic">A delicious dish from {recipe.country}</p>

            {/* Ingredients List */}
            <h3 className="text-xl font-semibold text-teal-700 mb-3">Ingredients:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-5 space-y-1">
              {/* Type of 'item' and 'index' is now correctly inferred from Recipe interface */}
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Instructions List */}
            <h3 className="text-xl font-semibold text-teal-700 mb-3">Instructions:</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {/* Type of 'step' and 'index' is now correctly inferred from Recipe interface */}
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