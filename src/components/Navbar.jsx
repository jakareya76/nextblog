"use client";

import Link from "next/link";
import { links } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/" className="text-2xl font-bold">
        NextBlog
      </Link>
      <div>
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
      </div>
    </nav>
  );
};
export default Navbar;
