import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

export default function CardHoverEffectDemo() {
  return (
    <> 

    <div className="text-center font-extrabold text-teal-800"> EXPLORE </div>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={countries} />
    </div>

     <div className='text-center'> 
            <Link 
                href={"/courses"}
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            > 
                View All Countries
            </Link> 
        </div>
        </>
  );
}
export const countries = [
  {
    title: "Japan",
    description:
      "An island nation in East Asia known for its blend of traditional culture and advanced technology. Famous for cities like Tokyo, Kyoto, and Osaka.",
    link: "https://en.wikipedia.org/wiki/Japan",
  },
  {
    title: "India",
    description:
      "A diverse South Asian country known for its rich history, vibrant cultures, and being the world's largest democracy.",
    link: "https://en.wikipedia.org/wiki/India",
  },
  {
    title: "China",
    description:
      "The world's most populous country with a long civilization history, rapid economic growth, and cultural landmarks like the Great Wall.",
    link: "https://en.wikipedia.org/wiki/China",
  },
  {
    title: "South Korea",
    description:
      "A high-tech country in East Asia known for K-pop, advanced electronics, and a vibrant mix of modern and traditional culture.",
    link: "https://en.wikipedia.org/wiki/South_Korea",
  },
  {
    title: "Indonesia",
    description:
      "A Southeast Asian archipelago of over 17,000 islands, rich in biodiversity and cultural variety, and the world's largest island country.",
    link: "https://en.wikipedia.org/wiki/Indonesia",
  },
  {
    title: "Thailand",
    description:
      "Known for its tropical beaches, ancient temples, and bustling capital Bangkok. A major tourist destination in Southeast Asia.",
    link: "https://en.wikipedia.org/wiki/Thailand",
  },
];

