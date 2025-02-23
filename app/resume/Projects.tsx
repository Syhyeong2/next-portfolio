"use client";

import { useEffect } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration
      offset: 100,
      once: true, // Whether animation should happen only once
    });
  }, []);
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:w-[90%] w-full ">
      <Link
        href="/resume/project/taiso"
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex items-center gap-2 hover:bg-base-300 cursor-pointer p-4 rounded-3xl w-full collapse"
      >
        <Image
          src="/images/mygg.png"
          alt="mygg"
          className="md:size-28 size-24 rounded-3xl object-cover shadow-md"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-1 md:ml-10 ml-5">
          <div className="font-extrabold text-xl">
            {t("resume.projects1-title")}
          </div>
          <div className="text-xs font-light">2024.11 ~ 2025.01</div>
          <div className="text-sm mt-2">{t("resume.projects1-content")}</div>
        </div>
        <svg
          data-slot="icon"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="size-6 ml-auto md:mr-8"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
          ></path>
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M1 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H1.75A.75.75 0 0 1 1 10Z"
          ></path>
        </svg>
      </Link>
      <Link
        href="/resume/project/taiso"
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex items-center gap-2 hover:bg-base-300 cursor-pointer p-4 rounded-3xl w-full"
      >
        <Image
          src="/images/image copy 2.png"
          alt="taiso"
          className="md:size-28 size-24 rounded-3xl object-cover shadow-md"
          width={100}
          height={100}
        />
        <div className="flex flex-col md:ml-10 ml-5">
          <div className="font-extrabold text-xl">
            {t("resume.projects2-title")}
          </div>
          <div className="text-xs font-light ">2025.01~</div>
          <div className="text-sm mt-2">{t("resume.projects2-content")}</div>
        </div>
        <svg
          data-slot="icon"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="size-6 ml-auto md:mr-8"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
          ></path>
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M1 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H1.75A.75.75 0 0 1 1 10Z"
          ></path>
        </svg>
      </Link>
      <Link
        href="/resume/project/myportfolio"
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex items-center gap-2 hover:bg-base-300 cursor-pointer p-4 rounded-3xl w-full"
      >
        <Image
          src="/images/myportfolio.png"
          alt="myportfolio"
          className="md:size-28 size-24 rounded-3xl object-cover shadow-md"
          width={100}
          height={100}
        />
        <div className="flex flex-col md:ml-10 ml-5">
          <div className="font-extrabold text-xl">
            {t("resume.projects3-title")}
          </div>
          <div className="text-xs font-light ">2025.01~</div>
          <div className="text-sm mt-2">{t("resume.projects3-content")}</div>
        </div>
        <svg
          data-slot="icon"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="size-6 ml-auto md:mr-8"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
          ></path>
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M1 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H1.75A.75.75 0 0 1 1 10Z"
          ></path>
        </svg>
      </Link>
    </div>
  );
}
