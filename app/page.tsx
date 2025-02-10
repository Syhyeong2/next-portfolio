"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";

// 홈 페이지
export default function Home() {
  const { t } = useTranslation();
  const [isMoreAbout, setIsMoreAbout] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 700, // 애니메이션 지속 시간
      offset: 0, // 애니메이션 시작 위치
      once: true, // 애니메이션 한 번만 실행
    });
  }, []);

  return (
    <div className="mt-8 flex flex-col  justify-center gap-4 bg-base-400">
      <div className="text-3xl font-bold" data-aos="fade-up">
        {t("aboutMe.title")}
      </div>
      <div className=" " data-aos="fade-up" data-aos-delay="50">
        {t("aboutMe.title-content")}
      </div>
      <div className=" -mt-2" data-aos="fade-up" data-aos-delay="50">
        {t("aboutMe.title-content-2")}
      </div>
      {!isMoreAbout && (
        <div
          className="mt-6 self-center text-center font-semibold cursor-pointer underline-offset-[6px] underline decoration-base-300 hover:bg-base-300 px-2 py-1 rounded-lg"
          onClick={() => setIsMoreAbout(!isMoreAbout)}
        >
          &darr; {t("aboutMe.more-about-me-btn")}
        </div>
      )}

      {isMoreAbout && (
        <>
          {" "}
          <div
            className="text-3xl font-bold italic mt-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("aboutMe.my-story-title")}
          </div>
          <div className="" data-aos="fade-up" data-aos-delay="150">
            {t("aboutMe.my-story-content")}
          </div>
          <div
            className="text-3xl font-bold italic mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("aboutMe.mission-title")}
          </div>
          <div className="" data-aos="fade-up" data-aos-delay="250">
            {t("aboutMe.mission-content")}
          </div>
          <div
            className="text-3xl font-bold italic mt-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("aboutMe.skills-title")}
          </div>
          <div className="" data-aos="fade-up" data-aos-delay="150">
            {t("aboutMe.skills-content")}
          </div>
          <div
            className="mt-8 self-center text-center font-semibold cursor-pointer underline-offset-[6px] underline decoration-base-300 hover:bg-base-300 px-2 py-1 rounded-lg"
            onClick={() => setIsMoreAbout(!isMoreAbout)}
          >
            &uarr; close
          </div>
        </>
      )}
    </div>
  );
}
