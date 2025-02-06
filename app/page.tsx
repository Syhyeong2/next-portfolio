"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";

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
    <div className="mt-8 flex flex-col items-center justify-center gap-4 bg-base-400 ">
      <div className="text-4xl font-bold" data-aos="fade-up">
        {t("aboutMe.title")}
      </div>
      <div className="md:w-1/2 w-[90%] " data-aos="fade-up" data-aos-delay="50">
        {t("aboutMe.title-content")}
      </div>
      {!isMoreAbout && (
        <div
          className="btn btn-outline no-animation mt-10"
          onClick={() => setIsMoreAbout(!isMoreAbout)}
        >
          &darr; Want to know more about me?
        </div>
      )}

      {isMoreAbout && (
        <>
          {" "}
          <div
            className="text-xl font-bold italic"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("aboutMe.mission-title")}
          </div>
          <div
            className="md:w-1/2 w-[90%]"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {t("aboutMe.mission-content")}
          </div>
          <div
            className="text-xl font-bold italic"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("aboutMe.skills-title")}
          </div>
          <div
            className="md:w-1/2 w-[90%]"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {t("aboutMe.skills-content")}
          </div>
          <div className="text-xl font-bold italic">My Story</div>
          <div
            className="md:w-1/2 w-[90%] aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            ex)I&apos;m a passionate web developer dedicated to building
            responsive and user-friendly websites. With a strong foundation in
            both front-end and back-end technologies, I thrive on solving
            complex problems and continuously enhancing my skills. My goal is to
            deliver high-quality digital solutions that drive success for my
            clients and users alike.
          </div>
          <div className="text-xl font-bold italic">My Hobbies</div>
          <div className="md:w-1/2 w-[90%]">
            ex)I love to play the guitar and piano. I also like to play the
            drums and the bass guitar. I also like to play the drums and the
            bass guitar.
          </div>
          <div
            className="btn btn-outline no-animation"
            onClick={() => setIsMoreAbout(!isMoreAbout)}
          >
            &uarr; close
          </div>
        </>
      )}
    </div>
  );
}
