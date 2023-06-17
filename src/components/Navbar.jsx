"use client";

import Link from "next/link";
import { links } from "@/constants";

const Navbar = () => {
  return (
    <header className="container mx-auto">
      <nav className="flex items-center justify-between py-5">
        <Link href="/" className="text-2xl font-bold">
          NextBlog
        </Link>
        <div className="flex items-center">
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="mx-3 text-lg font-semibold"
              >
                {link.title}
              </Link>
            );
          })}

          <button
            className="bg-green-600 text-white px-4 py-2 rounded ml-2 mb-1"
            onClick={() => console.log("Logout")}
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
