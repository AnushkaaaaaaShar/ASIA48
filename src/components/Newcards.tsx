import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

export default function CardHoverEffectDemo() {
  return (
    <> 

<div className="text-center text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#99F6E4] bg-clip-text text-transparent tracking-wide animate-fade-in">
  How to Cook with <span className="font-italic">Asia 48</span>
</div>

    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={countries} />
    </div>

     {/* <div className='text-center'> 
            <Link 
                href="/recipes"
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            > 
                let's Cook 
            </Link> 
        </div> */}
        </>
  );
}
export const countries = [
  {
    title: "Step 1: Add Your Ingredients",
    description:
      "Start by listing the ingredients you have on hand — no need for exact amounts! Just type what’s in your kitchen.",
    link: "",
  },
  {
    title: "Step 2: Pick a Country",
    description:
      "Select one of 48 Asian countries to explore authentic flavors and regional cooking styles.",
    link: "",
  },
  {
    title: "Step 3: Let AI Work Its Magic",
    description:
      "Click “Generate Recipe” and watch AI create a unique dish tailored to your ingredients and chosen cuisine.",
    link: "",
  },
  {
    title: "Step 4: Get Your Custom Recipe",
    description:
      "Receive a complete recipe with ingredients, step-by-step instructions, and cultural cooking tips.",
    link: "",
  },
  {
    title: "❤️ Save & Explore More",
    description:
      "Loved your dish? Bookmark it! Craving something new? Switch ingredients or countries and try again.",
    link: "",
  },
  {
    title: "View on GitHub",
    description:
      "Check out the full source code and contribute to Asia 48 on GitHub. Don't forget to give my repo a star",
    link: "https://github.com/AnushkaaaaaaShar/ASIA48",
  },
];

