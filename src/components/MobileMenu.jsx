"use client";

import Link from "next/link";
import { links } from "@/constants";

const MobileMenu = ({ toggleMenu, setToggleMenu }) => {
  return (
    <div
      className={`flex flex-col bg-zinc-800 p-5 gap-2 absolute top-16 right-5 rounded duration-300 md:hidden ${
        toggleMenu ? "opacity-100 z-50" : "opacity-0 -z-50 hidden"
      }`}
    >
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.url}
            className="mx-3 text-lg font-semibold duration-200 hover:text-green-400"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {link.title}
          </Link>
        );
      })}

      <button
        className="bg-green-600 text-white px-4 py-2 rounded ml-2 mb-1 duration-200 hover:bg-green-700"
        onClick={() => console.log("Logout")}
      >
        Logout
      </button>
    </div>
  );
};
export default MobileMenu;
