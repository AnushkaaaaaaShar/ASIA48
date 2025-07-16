// import Image from "next/image";
import Herosection from "@/components/Herosection";
import  BentoGrid  from "@/components/Bentogrid";
import Map from "@/components/Map";
import Cards from "@/components/Cards"
import Newcards from '@/components/Newcards'; 
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="mih-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]"> 
    <h1>  </h1>
    
    <Herosection/> 
    <BentoGrid/>
    <Map/>
  <Newcards/> 
  <Footer/>
    </main>

  );
}
