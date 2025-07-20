"use client";
import React, { useState } from 'react';
import { Copy, Download, Check } from 'lucide-react';

// Recipe interface
interface Recipe {
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  country: string;
}

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState('');
  const [country, setCountry] = useState('Afghanistan');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

 

  const asianCountries = [
    'Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia',
    'China', 'Cyprus', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan',
    'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia',
    'Myanmar (Burma)', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar',
    'Russia', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 'Taiwan', 'Tajikistan',
    'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam',
    'Yemen'
  ];

  const getRecipe = async () => {
    setIsLoading(true);
    setRecipe(null);
    setError(null);

    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockRecipe: Recipe = {
        recipeName: `Traditional ${country} Delight`,
        ingredients: [
          ...ingredients.split(',').map(ing => ing.trim()),
          '2 cups jasmine rice',
          '3 tbsp vegetable oil',
          '1 onion, diced',
          '3 cloves garlic, minced',
          '2 tbsp soy sauce',
          'Salt and pepper to taste'
        ],
        instructions: [
          'Wash and soak the rice for 30 minutes, then drain.',
          'Heat oil in a large pan over medium-high heat.',
          'Add onions and garlic, sauté until fragrant.',
          'Add your main ingredients and cook for 5-7 minutes.',
          'Season with soy sauce, salt, and pepper.',
          'Add rice and mix well with all ingredients.',
          'Cover and simmer for 15-20 minutes until rice is tender.',
          'Let it rest for 5 minutes before serving.',
          'Garnish with fresh herbs and serve hot.'
        ],
        country: country
      };

      setRecipe(mockRecipe);
    } catch (apiError: unknown) {
      setError(`Failed to fetch recipe: ${(apiError as Error).message}`);
      console.error('API call error:', apiError);
    } finally {
      setIsLoading(false);
    }
  };

  const copyRecipe = async () => {
    if (!recipe) return;

    const recipeText = `${recipe.recipeName}
A delicious dish from ${recipe.country}

Ingredients:
${recipe.ingredients.map((item, index) => `${index + 1}. ${item}`).join('\n')}

Instructions:
${recipe.instructions.map((step, index) => `${index + 1}. ${step}`).join('\n')}`;

    try {
      await navigator.clipboard.writeText(recipeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy recipe:', err);
    }
  };

  const saveToPDF = () => {
    if (!recipe) return;

    const recipeContent = `
      <html>
        <head>
          <title>${recipe.recipeName}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; background-color: #1f2937; color: #f3f4f6; }
            h1 { color: #f472b6; border-bottom: 2px solid #f472b6; }
            h2 { color: #f9a8d4; margin-top: 20px; }
            .country { font-style: italic; color: #9ca3af; margin-bottom: 20px; }
            ul, ol { margin-left: 20px; }
            li { margin-bottom: 5px; }
          </style>
        </head>
        <body>
          <h1>${recipe.recipeName}</h1>
          <p class="country">A delicious dish from ${recipe.country}</p>
          
          <h2>Ingredients:</h2>
          <ul>
            ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
          </ul>
          
          <h2>Instructions:</h2>
          <ol>
            ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </body>
      </html>
    `;

    const blob = new Blob([recipeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${recipe.recipeName.replace(/[^a-z0-9]/gi, '_')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  

  return (
    <div className=" min-h-screen bg-gradient-to-br from-black via-gray-800 to-black p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="mt-26 text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent mb-8 text-center">Asia 48 Recipe Generator</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Input Form */}
          <div className="bg-black p-8 rounded-xl shadow-xl h-fit">
            <h2 className="text-2xl font-semibold text-pink-400 mb-6">Generate Your Recipe</h2>
            
            {/* Input for Ingredients */}
            <div className="mb-6">
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-300 mb-2">
                Available Ingredients (e.g., chicken, rice, soy sauce):
              </label>
              <input
                type="text"
                id="ingredients"
                className="w-full p-3 bg-gradient-to-br from-black via-gray-800 to-black rounded-lg text-white placeholder-gray-400 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Type ingredients separated by commas"
              />
            </div>

            {/* Country Selection */}
            <div className="mb-6">
              <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                Select an Asian Country:
              </label>
              <select
                id="country"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
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

            <button
              onClick={getRecipe}
              disabled={isLoading || !ingredients}
              className={`w-full py-3 px-4 rounded-lg font-semibold shadow-md transition-all duration-300
                ${isLoading || !ingredients
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-800'
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
              <div className="mt-6 p-4 bg-red-900 border border-red-700 text-red-300 rounded-lg">
                <p className="font-semibold">Error:</p>
                <p>{error}</p>
              </div>
            )}
          </div>

          {/* Right Side - Recipe Display */}
          <div className=" bg-gradient-to-br from-black via-gray-800 to-black rounded-xl shadow-xl overflow-hidden">
            {recipe ? (
              <div 
                className="relative cursor-pointer hover:bg-gray-750 transition-colors duration-200 h-full"
                onClick={copyRecipe}
              >
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyRecipe();
                    }}
                    className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200 shadow-md"
                    title="Copy Recipe"
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      saveToPDF();
                    }}
                    className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors duration-200 shadow-md"
                    title="Save as PDF"
                  >
                    <Download size={20} />
                  </button>
                </div>

                {/* Copy Success Message */}
                {copied && (
                  <div className="absolute top-16 right-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg z-20 animate-pulse">
                    Recipe Copied!
                  </div>
                )}

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-pink-400 mb-4 pr-20">{recipe.recipeName}</h2>
                  <p className="text-lg text-gray-300 mb-6 italic">A delicious dish from {recipe.country}</p>

                  <h3 className="text-xl font-semibold text-pink-300 mb-4">Ingredients:</h3>
                  <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
                    {recipe.ingredients.map((item, index) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-pink-300 mb-4">Instructions:</h3>
                  <ol className="list-decimal list-inside text-gray-200 space-y-3">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="leading-relaxed">{step}</li>
                    ))}
                  </ol>
                </div>

                {/* Click anywhere hint */}
                <div className="absolute bottom-4 left-8 text-sm text-gray-400 opacity-70">
                  Click anywhere on the recipe to copy
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 text-gray-400">
                <div className="text-center">
                  <div className="text-6xl mb-4">🍽️</div>
                  <p className="text-xl">Your delicious recipe will appear here</p>
                  <p className="text-sm mt-2">Enter ingredients and generate a recipe to get started</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeGenerator;
