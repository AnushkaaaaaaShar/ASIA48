import React from 'react';

const Intro = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white px-4">
      
      {/* Decorative SVGs */}
      <img
        src="/Intro/spoon.svg"
        alt="ramen doodle"
        className="absolute top-12 left-24 w-10 sm:w-14 md:w-16 opacity-80 rotate-12 filter invert hidden lg:block"
      />
      <img
        src="/Intro/prawn.svg"
        alt="prawn doodle"
        className="absolute bottom-40 left-28 w-12 sm:w-16 md:w-20 opacity-80 -rotate-6 filter invert hidden lg:block"
      />
      <img
        src="/Intro/wheat.svg"
        alt="wheat doodle"
        className="absolute top-12 right-24 w-10 sm:w-12 md:w-14 opacity-80 rotate-6 filter invert hidden lg:block"
      />
      <img
        src="/Intro/chilli.svg"
        alt="chilli doodle"
        className="absolute bottom-40 right-28 w-12 sm:w-14 md:w-16 opacity-80 -rotate-12 filter invert hidden lg:block"
      />
      <img
        src="/Intro/cook.svg"
        alt="cook doodle"
        className="absolute top-1/3 left-48 w-8 sm:w-10 md:w-12 opacity-80 rotate-3 filter invert hidden lg:block"
      />
      <img
        src="/Intro/chicken.svg"
        alt="chicken doodle"
        className="absolute top-1/3 right-48 w-8 sm:w-12 md:w-14 opacity-80 -rotate-3 filter invert hidden lg:block"
      />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-16 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl bg-gradient-to-b from-gray-200 to-gray-500 bg-clip-text text-transparent">
          The #1 platform to explore & cook authentic Asian recipes
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-gray-200">
          Enter your ingredients, pick a country, and let AI create dishes from 48 Asian cultures.
          Discover flavors you’ll love—fast, fun, and easy.
        </p>
        <a
          href="/recipes"
          className="mt-6 sm:mt-8 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white hover:bg-white hover:text-purple-900 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Intro;
