"use client";

import React, { useState } from "react";
import { MenuItem, Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={cn("fixed w-full top-4 inset-x-0 z-50 flex justify-center", className)}>
      <div className="flex items-center justify-center w-full px-6">

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home" href="/" />
            <MenuItem setActive={setActive} active={active} item="Explore" href="/navbar/explore" />
            <MenuItem setActive={setActive} active={active} item="About Us" href="/navbar/aboutus" />
            <MenuItem setActive={setActive} active={active} item="Contact Us" href="/navbar/contact" />
          </Menu>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black dark:text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full bg-white dark:bg-black shadow-lg rounded-lg flex flex-col items-center space-y-6 py-6 md:hidden"
        >
          <Link href="/" className={`text-lg ${pathname === "/" ? "text-teal-500 font-bold" : ""}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/navbar/explore" className={`text-lg ${pathname === "/navbar/explore" ? "text-teal-500 font-bold" : ""}`} onClick={() => setMobileMenuOpen(false)}>Explore</Link>
          <Link href="/navbar/aboutus" className={`text-lg ${pathname === "/navbar/aboutus" ? "text-teal-500 font-bold" : ""}`} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/navbar/contact" className={`text-lg ${pathname === "/navbar/contact" ? "text-teal-500 font-bold" : ""}`} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
