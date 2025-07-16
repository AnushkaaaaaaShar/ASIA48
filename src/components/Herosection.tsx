import Link from "next/link"
import Maskimg from "./Maskimg"


const Herosection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center relative overflow-hidden py-10 md:py-0"> 
      <div className="relative z-10 w-full flex justify-end px-20">
        <div className="max-w-sm text-center">
         <h1 className="mt-20 md:mt-0 text-l md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-500">
  Discover Recipes with AI
</h1>

          <p className="mt-4 md:text-sm mx-auto">
Turn your ingredients into delicious recipes from 48 Asian countries — powered by AI.   </p> 
          <div className="mt-4"> 
               <Link
                href="/recipes"
                className="inline-block px-8 py-4 mt-4 text-white font-medium rounded-full 
                          bg-gradient-to-r from-[#C060A1] to-[#D57AE3] 
                          shadow-md hover:from-[#D57AE3] hover:to-[#C060A1] 
                          transition-all duration-300 ease-in-out"
              >
  Get My Recipe
</Link>


          </div>
        </div>
      </div>

      <div className="absolute left-10 top-0 h-full w-1/2 z-0 hidden md:block">
        <Maskimg />
      </div>
    </div>
  )
}

export default Herosection
