// app/ClientLayout.tsx
"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { TbLanguageHiragana } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/navbar";
import ThemeBtn from "@/components/themeBtn";
import I18nProviderWrapper from "./I18nProviderWrapper";
import Footer from "@/components/Footer";

type ClientLayoutProps = {
  children: React.ReactNode;
  locale: string;
};

export default function ClientLayout({ children, locale }: ClientLayoutProps) {
  const [currentLocale, setCurrentLocale] = useState<string>(locale);
  const { t } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "jp" : "en";
    setCurrentLocale(newLocale);
    // 언어 변경에 따른 컨텍스트 업데이트 또는 페이지 리로딩 로직 추가 가능
  };

  // '/resume/project' 경로인 경우 별도 레이아웃 처리
  if (pathname.startsWith("/projects/")) {
    return (
      <I18nProviderWrapper locale={currentLocale}>
        <div className="flex justify-end gap-1 mt-4 sm:mt-10">
          <TbLanguageHiragana
            className="size-8 hover:bg-base-300 cursor-pointer p-1 rounded-lg"
            onClick={toggleLanguage}
          />
          <ThemeBtn />
        </div>
        {children}
      </I18nProviderWrapper>
    );
  }

  return (
    <I18nProviderWrapper locale={currentLocale}>
      <div className="sm:mt-10 flex flex-col justify-center bg-400 mt-4">
        <div className="flex justify-end gap-1">
          <TbLanguageHiragana
            className="size-8 hover:bg-base-300 cursor-pointer p-1 rounded-lg"
            onClick={toggleLanguage}
          />
          <ThemeBtn />
        </div>
        <div className="text-4xl font-bold mt-8">{t("header.name")}</div>
        <div className="italic font-normal">{t("header.intro")}</div>
      </div>
      <div className="flex gap-1 mt-4 mb-4">
        <FaGithub
          className="size-8 hover:bg-base-300 cursor-pointer p-1 rounded-lg"
          onClick={() => window.open("https://github.com/Syhyeong2")}
        />
        <FaLinkedin
          className="size-8 hover:bg-base-300 cursor-pointer p-1 rounded-lg -ml-[2px]"
          onClick={() =>
            window.open("https://www.linkedin.com/in/sihyeong-lee-0a026b26b")
          }
        />
      </div>
      <Navbar />
      {children}
      <Footer />
    </I18nProviderWrapper>
  );
}
