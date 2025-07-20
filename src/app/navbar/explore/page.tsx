"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ExplorePage() {
  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-black to-gray-900 text-white px-6 md:px-16 lg:px-32 py-12">
      {/* ✅ Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-300 via-pink-400 to-gray-400 bg-clip-text text-transparent"
        >
          Explore Asia 48 🌏
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Asia 48 is an open-source project to bring authentic Asian recipes to your table using AI.  
          Learn, contribute, and explore the flavors of 48 Asian countries.
        </p>
      </section>

      {/* ✅ Contribute Section */}
      <section className="bg-gray-800 rounded-2xl shadow-xl p-8 text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Contribute to Asia 48</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Want to make Asia 48 even better? Add recipes, improve features, or suggest ideas!  
          Your contributions make this project thrive.
        </p>
        <Link
          href="https://github.com/AnushkaaaaaaShar/ASIA48"
          target="_blank"
          className="inline-block px-8 py-4 text-lg font-semibold rounded-full 
          bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-105 transform transition duration-300 shadow-lg"
        >
          ⭐ Contribute on GitHub
        </Link>
      </section>

      {/* ✅ About Me Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-6">
          About the Creator
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Hi! I'm <span className="font-semibold text-white">Anushka Sharma</span>,  
          a web developer passionate about creating beautiful and useful apps.  
          Asia 48 was born out of my love for food, culture, and technology.  
          Connect with me on GitHub to see more of my work!
        </p>
      </section>

      {/* ✅ Inspiration Section */}
      <section className="bg-gray-800 rounded-2xl shadow-xl p-8 text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-pink-400">What Inspired Asia 48?</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          During my travels (and food cravings!), I realized how hard it is to explore authentic Asian dishes.  
          Asia 48 makes it easy: Enter your ingredients, choose a country, and let AI cook it up!
        </p>
        <Link
          href="/recipes"
          className="mt-6 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-500 hover:scale-105 transform transition duration-300 shadow-lg font-semibold text-white hover:from-gray-500 hover:to-gray-400"
        >
          🍜 Try Asia 48 Now
        </Link>
      </section>

     
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-300">
          Check Out My Other Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-2">Evolve</h3>
            <p className="text-gray-400 mb-4">A Notion-inspired productivity app with Bento UI and tools like habit tracker, Pomodoro, and more.</p>
            <a href="#" className="text-pink-400 hover:underline">View Project →</a>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-2">Expense Tracker</h3>
            <p className="text-gray-400 mb-4">Track your daily expenses with a clean UI and smart analytics.</p>
            <a href="#" className="text-pink-400 hover:underline">View Project →</a>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-2">Twitter Clone</h3>
            <p className="text-gray-400 mb-4">A UI/UX clone of X (Twitter) built with Tailwind CSS.</p>
            <a href="#" className="text-pink-400 hover:underline">View Project →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
