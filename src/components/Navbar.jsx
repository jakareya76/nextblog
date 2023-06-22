"use client";

import { useState } from "react";

import Link from "next/link";
import { links } from "@/constants";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="container mx-auto w-full">
      <nav className="flex items-center justify-between py-5">
        <Link href="/" className="text-2xl font-bold mb-1 px-4 sm:px-0">
          NextBlog
        </Link>
        <div className="hidden md:flex md:items-center">
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="mx-3 text-lg font-semibold duration-200 hover:text-green-400"
              >
                {link.title}
              </Link>
            );
          })}

          <button
            className="bg-green-600 text-white px-4 py-2 rounded ml-2 mb-1 duration-200 hover:bg-green-700"
            onClick={() => console.log("Logout")}
          >
            Login
          </button>
        </div>

        <Hamburger toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

        <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </nav>
    </header>
  );
};
export default Navbar;
