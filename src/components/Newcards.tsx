import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

export default function CardHoverEffectDemo() {
  return (
    <> 

    <div className="text-center font-extrabold text-teal-800 text-5xl">  How to Cook with Asia 48 </div>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={countries} />
    </div>

     <div className='text-center'> 
            <Link 
                href="/recipes"
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            > 
                let's Cook 
            </Link> 
        </div>
        </>
  );
}
export const countries = [
  {
    title: " Step 1: Add Your Ingredients",
    description:"Make a list of whatever ingredients you already have. Don’t worry about exact quantities — just name them!",
    link: "https://en.wikipedia.org/wiki/Japan",
  },
  {
    title: "Step 2: Pick a Country or Use the Map",
    description:
      "Choose your desired country from the dropdown — or simply click on a country on the interactive map to auto-select!",
    link: "https://en.wikipedia.org/wiki/India",
  },
  {
    title: " Step 3: Let AI Cook It Up!",
    description:
      "Hit “Generate Recipe” and our AI will give you a dish that matches your ingredients and chosen cuisine.",
    link: "https://en.wikipedia.org/wiki/China",
  },
  {
    title: "Step 4: Get Your Custom Recipe",
    description:
      "You'll receive a recipe with ingredients, steps, and country-specific cooking style.",
    link: "https://en.wikipedia.org/wiki/South_Korea",
  },
  {
    title: "❤️ Save or Try Again",
    description:
      "Love the recipe? Bookmark it! Not what you were craving? Change your country or ingredients and try again!",
    link: "https://en.wikipedia.org/wiki/Indonesia",
  },
  {
    title: "Github",
    description:
      "here is the code for .",
    link: "https://en.wikipedia.org/wiki/Thailand",
  },
];

