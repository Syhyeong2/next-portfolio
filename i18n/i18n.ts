// i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

// i18next 초기화
void i18n
  .use(HttpBackend) // HTTP를 통해 번역 리소스(JSON) 로드
  .use(initReactI18next) // react-i18next 바인딩
  .init({
    // 기본 언어, 폴백 언어 설정
    lng: "jp",
    fallbackLng: "jp",
    ns: ["common"],
    defaultNS: "common",
    // 개발 환경에서만 디버그 활성화
    // debug: process.env.NODE_ENV === "development",

    backend: {
      // 번역 리소스 로딩 경로(public/locales)
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    interpolation: {
      // React에서 안전하게 HTML을 다룰 경우 false 권장
      escapeValue: false,
    },

    react: {
      useSuspense: false, // SSR 시 suspense 비활성화
    },
  });

export default i18n;
