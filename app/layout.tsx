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
    const newLocale = currentLocale === "en" ? "jp" : "en"; // Example toggle between English and Japanese
    setCurrentLocale(newLocale);
    // You might need to update the context or reload the page here
    // For example, you could use a context or a global state management solution
  };

  return (
    <html lang={currentLocale} data-theme="light">
      <body className="w-100% flex justify-center">
        <div className="md:w-[691px] w-[90%]">
          <I18nProviderWrapper locale={currentLocale}>
            <div className="sm:mt-10 flex flex-col justify-center bg-400 mt-4">
              <div className="flex justify-end gap-1">
                <TbLanguageHiragana
                  className="size-8 hover:bg-base-300 cursor-pointer p-1 rounded-lg"
                  onClick={toggleLanguage} // Add onClick handler
                />
                <ThemeBtn />
              </div>
              <div className="text-4xl font-bold mt-8">{t("header.name")}</div>
              <div className="italic font-normal">{t("header.intro")}</div>{" "}
            </div>
            <div className="flex gap-1 mt-4 mb-4">
              <FaGithub
                className="size-8 hover:bg-base-300 cursor-pointer p-1 rounded-lg"
                onClick={() => window.open("https://github.com/Syhyeong2")}
              />
              <FaLinkedin
                className="size-8 hover:bg-base-300 cursor-pointer p-1 rounded-lg -ml-[2px]"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/sihyeong-lee-0a026b26b"
                  )
                }
              />
            </div>
            <Navbar />
            {children}
            <footer className="footer p-10 bg-base-100 text-base-content mt-20">
              {/* Footer 내용 */}
            </footer>
          </I18nProviderWrapper>
        </div>
      </body>
    </html>
  );
}
