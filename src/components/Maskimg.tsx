import { Press_Start_2P } from 'next/font/google';
import { Pixelify_Sans , Jersey_15} from 'next/font/google';


const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400'], // Available: 400, 500, 600, 700
  display: 'swap',
});


const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});



const jersey = Jersey_15({
  subsets: ['latin'],
  weight: '400', // Jersey 15 only has 400
  display: 'swap',
});
export default function Maskimg() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className={`text-[75vw] leading-none text-transparent bg-cover bg-center ${jersey.className}`}
        style={{
          backgroundImage: `url('/hero.jpg')`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        48
      </div>
    </div>
  );
}
