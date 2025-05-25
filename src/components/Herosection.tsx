import Link from "next/link"
import Maskimg from "./Maskimg"


const Herosection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center relative overflow-hidden py-10 md:py-0"> 
      <div className="relative z-10 w-full flex justify-end px-20">
        <div className="max-w-sm text-center">
         <h1 className="mt-20 md:mt-0 text-xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-500">
  Explore Asia
</h1>

          <p className="mt-2 md:text-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quod nisi eveniet quos nulla repudiandae architecto vel sit tenetur hic voluptatum. Vitae voluptatum similique assumenda quam, ut ratione itaque! Neque.
          </p>
          <div className="mt-4"> 
                <Link
                href="/courses"
                className="inline-block px-8 py-4 mt-4 text-white bg-gradient-to-r from-pink-400 to-neutral-900 rounded-full shadow-lg hover:from-neutral-700 hover:to-pink-400 transition-all duration-300"
                    >
                Explore Us
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
