"use client";

// app/layout.tsx
import "aos/dist/aos.css";
import "./globals.css";
import Navbar from "@/components/navbar";
import I18nProviderWrapper from "./I18nProviderWrapper";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbLanguageHiragana } from "react-icons/tb";
import ThemeBtn from "@/components/themeBtn";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// 여기서는 params를 무조건 Promise<{ locale: string }>로 지정합니다.
type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  const [currentLocale, setCurrentLocale] = useState<string>("");

  const { t } = useTranslation();

  useEffect(() => {
    async function fetchLocale() {
      const { locale } = await params;
      setCurrentLocale(locale);
    }
    fetchLocale();
  }, [params]);

  // Function to toggle language
  const toggleLanguage = () => {
    const newLocale = currentLocale === "jp" ? "en" : "jp"; // Example toggle between English and Japanese
    setCurrentLocale(newLocale);
    // You might need to update the context or reload the page here
    // For example, you could use a context or a global state management solution
  };

  return (
    <html lang={currentLocale} data-theme="light">
      <body>
        <I18nProviderWrapper locale={currentLocale}>
          <div className="mt-4 flex flex-col justify-center items-center bg-base-400 ">
            <div className="flex sm:w-1/2 w-[90%] justify-end gap-1">
              <TbLanguageHiragana
                className="size-8 hover:bg-base-300 cursor-pointer p-1 rounded-lg"
                onClick={toggleLanguage} // Add onClick handler
              />
              <ThemeBtn />
            </div>
            <div className="flex items-end gap-1">
              <div className="text-4xl font-bold mt-2">{t("header.name")}</div>
              <div className="flex items-center">
                <FaGithub className="size-8 hover:bg-base-300 cursor-pointer p-1 rounded-lg" />
                <FaLinkedin className="size-8 hover:bg-base-300 cursor-pointer p-1 rounded-lg -ml-[2px]" />
              </div>
            </div>
            <div className="italic font-normal">{t("header.intro")}</div>{" "}
          </div>
          <Navbar />
          {children}
          <footer className="footer p-10 bg-base-100 text-base-content mt-20">
            {/* Footer 내용 */}
          </footer>
        </I18nProviderWrapper>
      </body>
    </html>
  );
}
