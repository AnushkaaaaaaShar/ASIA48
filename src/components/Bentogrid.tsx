import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return ( 
  <>

  <div className="flex flex-col items-center justify-center mt-10"> 
   
      <h1 className="mt-20 md:mt-0 text-xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-500">
        Get Inspired  </h1>
         <h2 className="text-pink-700 font-bold text-lg mb-10 mt-2" > 🍽️ Not sure what to make? Here’s what others are cooking with Asia 48.
</h2> 
  </div>
         
    <BentoGrid className="max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          className={`relative group flex items-center justify-center overflow-hidden ${
            i === 3 || i === 8 ? "md:col-span-2" : ""
          }`}
          title={
            <span className="absolute bottom-4 left-4 text-lg font-semibold text-[#c8ac62] opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-transparent">
              {item.title}
            </span>
          }
          description={null}
          header={
            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-full h-full rounded-xl"
            />
          }
        //   icon={item.icon}
        />
      ))}
    </BentoGrid>
    </>
  );
}

type Item = {
  title: string;
  img: string;
  icon: React.JSX.Element;
};

const items: Item[] =[
  {
    title: "The Dawn of Innovation",
    img: "/pho.jpg", // Replace with your image path
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    img: "/biryani.jpg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    img: "/curryM.jpg",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    img: "/padthai.jpg",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    img: "/dimsum.jpg",
   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    img: "/PekingDuck.jpg",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    img: "/sushi.jpg",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    img: "/kimchi.jpg",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  
  },
];

export default BentoGridDemo;