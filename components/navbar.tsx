"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <div
      className={`sticky top-5 z-50 flex justify-center transition-opacity duration-300 ${
        isSticky ? "opacity-70" : "opacity-100"
      }`}
    >
      <ul className="menu menu-horizontal bg-base-200 rounded-box gap-1 ">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            {t("navbar.aboutMe")}
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className={pathname.startsWith("/resume") ? "active" : ""}
          >
            {t("navbar.resume")}
          </Link>
        </li>

        <li>
          <Link
            href="/projects"
            className={pathname.startsWith("/projects") ? "active" : ""}
          >
            {t("navbar.articles")}
          </Link>
        </li>
      </ul>
    </div>
  );
}
