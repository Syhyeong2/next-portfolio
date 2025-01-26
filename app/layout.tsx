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
          <div className="italic font-light -mt-8">
            Front-end & Back-end developer
          </div>
          <ul className="menu menu-horizontal bg-base-200 rounded-box gap-1">
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
        {children}
        <footer className="footer p-10 bg-base-100 text-base-content mt-20">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
