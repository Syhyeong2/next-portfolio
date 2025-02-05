"use client";

import { useTranslation } from "react-i18next";

export default function TranslationHeader() {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-4xl font-bold ">{t("header.name")}</div>
      <div className="italic font-light">{t("header.intro")}</div>
    </>
  );
}
