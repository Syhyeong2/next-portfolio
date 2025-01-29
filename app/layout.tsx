// app/layout.tsx
"use client";

import "aos/dist/aos.css";
import "./globals.css";
import Navbar from "./navbar";
import { I18nextProvider, useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18n from "../i18n/i18n";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { t } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true);
    } else {
      i18n.on("initialized", () => setReady(true));
    }

    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }

    return () => {
      i18n.off("initialized", () => setReady(true));
    };
  }, [locale]);

  if (!ready) {
    return (
      <html lang={locale} data-theme="light">
        <body>
          <span></span>
        </body>
      </html>
    );
  }

  console.log(t("header.home"));

  return (
    <html lang={locale} data-theme="light">
      <body>
        <I18nextProvider i18n={i18n}>
          <div className="mt-10 flex flex-col items-center justify-center gap-10 bg-base-400 ">
            <div className="text-4xl font-bold mt-2">{t("header.name")}</div>
            <div className="italic font-light -mt-8">{t("header.intro")}</div>
          </div>
          <Navbar />
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
        </I18nextProvider>
      </body>
    </html>
  );
}
