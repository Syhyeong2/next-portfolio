"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-5 z-50 flex justify-center mt-10 transition-opacity duration-300 ${
        isSticky ? "opacity-70" : "opacity-100"
      }`}
    >
      <ul className="menu menu-horizontal bg-base-200 rounded-box gap-1 ">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className={pathname === "/resume" ? "active" : ""}
          >
            Resume
          </Link>
        </li>

        <li>
          <Link
            href="/articles"
            className={pathname === "/articles" ? "active" : ""}
          >
            Articles
          </Link>
        </li>
      </ul>
    </div>
  );
}
