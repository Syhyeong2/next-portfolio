// app/layout.tsx
"use client";

import "aos/dist/aos.css";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="ko" data-theme="light">
      <body>
        <div className="mt-10 flex flex-col items-center justify-center gap-10 bg-base-400">
          <div className="text-4xl font-bold">Lee Syhyeong</div>
          <ul className="menu menu-vertical sm:menu-horizontal bg-base-200 rounded-box gap-1">
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
                href="/projects"
                className={pathname === "/projects" ? "active" : ""}
              >
                Projects
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
        {children}
      </body>
    </html>
  );
}
