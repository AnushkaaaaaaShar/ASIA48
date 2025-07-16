
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Press_Start_2P } from 'next/font/google';
import { Pixelify_Sans, Jersey_15 } from 'next/font/google';



// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



const jersey = Jersey_15({
  subsets: ['latin'],
  weight: '400', // Jersey 15 only has 400
  display: 'swap',
});
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className="relative w-full flex items-center justify-center">
           <Navbar/>
        
        </div>
        
        
      
        {children}
      </body>
    </html>
  );
}
