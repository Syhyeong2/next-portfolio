// app/I18nProviderWrapper.tsx
"use client";

import { I18nextProvider, useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18n from "../i18n/i18n";

type I18nProviderWrapperProps = {
  children: React.ReactNode;
  locale: string;
};

export default function I18nProviderWrapper({
  children,
  locale,
}: I18nProviderWrapperProps) {
  const { t } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // i18n이 초기화되어 있으면 상태 업데이트
    if (i18n.isInitialized) {
      setReady(true);
    } else {
      i18n.on("initialized", () => setReady(true));
    }

    // 현재 언어와 라우트의 locale이 다르면 변경
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }

    // cleanup
    return () => {
      i18n.off("initialized", () => setReady(true));
    };
  }, [locale]);

  if (!ready) {
    // 로딩 중에는 간단한 스피너나 빈 엘리먼트를 렌더링
    return <span>Loading...</span>;
  }

  console.log(t("header.home"));

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
