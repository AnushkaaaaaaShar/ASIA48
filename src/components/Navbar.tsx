"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center ">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}
 
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-4 inset-x-0 w-full z-50 px-4 gap-6" , className)}
    >
      
      <Menu setActive={setActive}>
        <div className="flex gap-0 md:gap-12 items-end justify-end">
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        <MenuItem setActive={setActive} active={active}  item="Explore">
          {/* <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="/web-dev">India</HoveredLink>
            <HoveredLink href="/interface-design">Bhutan</HoveredLink>
            <HoveredLink href="/seo">Sri Lanka</HoveredLink>
            <HoveredLink href="/branding">BaseCamp</HoveredLink>
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us" >
          {/* <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us"   >
        </MenuItem>
      
         </div>
      </Menu>
     
    </div>
  );
}
export default Navbar; 