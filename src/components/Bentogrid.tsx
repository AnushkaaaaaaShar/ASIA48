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
   
      <h1 className="mt-20 md:mt-0 text-xl md:text-7xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-500">
        Get Inspired  </h1>
         <h2 className="text-center sm:text-left text-[#C060A1] font-semibold text-base sm:text-lg mb-10 mt-2 px-2"> 🍽️ Not sure what to make? Here’s what others are cooking with Asia 48.
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
            <span className="absolute bottom-6 text-semibold w-full text-[#ffffff] opacity-0 group-hover:opacity-800 transition-opacity duration-300  bg-transparent">
              {item.title}
            </span>
          }
          description={null}
          header={

              <a
      href={item.videourl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full h-full block"
    >
            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-full h-full rounded-xl"
            />
            </a>

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
  videourl: string; 
};

const items: Item[] =[
  {
    title: "Pho from Vietnam 🇻🇳",
    img: "/bento/pho.jpg",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    videourl: "http://www.youtube.com/watch?v=9Sg21AHuO4A"
  },
  {
    title: "Biryani from India 🇮🇳",
    img: "/bento/biryani.jpg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    videourl: "http://www.youtube.com/watch?v=K9qJQmOeohU"
  },
  {
    title: "Curry from India 🇮🇳", // While Japanese curry is popular, the origin of curry is India.
    img: "/bento/curryM.jpg",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    videourl: "http://www.youtube.com/watch?v=mIfE6-Pra8s"
  },
  {
    title: "Pad Thai from Thailand 🇹🇭",
    img: "/bento/padthai.jpg",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    videourl: "http://www.youtube.com/watch?v=b7YnoRFuZ9o"
  },
  {
    title: "Dim Sum from China 🇨🇳",
    img: "/bento/dimsum.jpg",
   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
   videourl: "http://www.youtube.com/watch?v=FKRHHjrvo6A"
  },
  {
    title: "Peking Duck from China 🇨🇳",
    img: "/bento/PekingDuck.jpg",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    videourl: "http://www.youtube.com/watch?v=KnJ3abXjgME"
  },
  {
    title: "Sushi from Japan 🇯🇵",
    img: "/bento/sushi.jpg",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    videourl: "http://www.youtube.com/watch?v=xAjb1lfIVUw"
  },
  {
    title: "Kimchi from Korea 🇰🇷",
    img: "/bento/kimchi.jpg",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    videourl: "http://www.youtube.com/watch?v=eTucCw1w6Ak"

  },
];

export default BentoGridDemo;