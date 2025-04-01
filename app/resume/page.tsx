"use client";

import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Aos from "aos";

export default function Resume() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({
      duration: 700,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <div className="mt-8 flex flex-col justify-center">
      <div className="text-4xl font-bold italic" data-aos="fade-up">
        Skills
      </div>
      <div className="divider" data-aos="fade-up"></div>
      <div
        className="flex flex-wrap gap-2 items-center w-full justify-center mb-20"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between ">
            <div className="w-1/2 font-semibold">HTML, CSS</div>
            <progress className="progress" value={80} max="100"></progress>
          </div>
          <div className="flex items-center justify-between ">
            <div className="w-1/2 font-semibold">JavaScript</div>
            <progress className="progress" value={80} max="100"></progress>
          </div>
          <div className="flex items-center justify-between ">
            <div className="w-1/2 font-semibold">React</div>
            <progress className="progress" value={85} max="100"></progress>
          </div>
          <div className="flex items-center justify-between ">
            <div className="w-1/2 font-semibold">TypeScript</div>
            <progress className="progress" value={50} max="100"></progress>
          </div>
          <div className="flex items-center justify-between ">
            <div className="w-1/2 font-semibold ">Next.js</div>
            <progress className="progress" value={40} max="100"></progress>
          </div>
          <div className="flex items-center justify-between ">
            <div className="w-1/2 font-semibold">Spring Boot</div>
            <progress className="progress" value={55} max="100"></progress>
          </div>
          <div className="flex items-center justify-between ">
            <div className="w-1/2 font-semibold">Git & GitHub</div>
            <progress className="progress" value={50} max="100"></progress>
          </div>
        </div>
        <div
          className="grid grid-cols-2 gap-3 w-full mt-6 font-semibold text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center gap-3">
            <div className="size-2 bg-base-content rounded-full"></div> Deep
            Dive
          </div>
          <div className="flex items-center gap-3">
            <div className="size-2 bg-base-content rounded-full"></div> Problem
            Solving
          </div>
          <div className="flex items-center gap-3">
            <div className="size-2 bg-base-content rounded-full"></div> Team
            Player
          </div>
          <div className="flex items-center gap-3">
            <div className="size-2 bg-base-content rounded-full"></div> Design
            Thinking
          </div>
        </div>

        {/* <div className="badge badge-outline cursor-default">
          HTML, CSS, JavaScript
        </div>
        <div className="badge badge-outline cursor-default">TypeScript</div>
        <div className="badge badge-outline cursor-default">React</div>
        <div className="badge badge-outline cursor-default">Next.js</div>
        <div className="badge badge-outline cursor-default">Spring Boot</div>
        <div className="badge badge-outline cursor-default">Git</div> */}
      </div>
      <div
        className="text-4xl font-bold italic"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Experience
      </div>
      <div className="divider" data-aos="fade-up"></div>
      <ul
        className="timeline timeline-snap-icon timeline-compact timeline-vertical mb-20"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic">2018 ~ </time>
            <div className="text-lg font-black">
              {t("resume.time-line-content-university")}
            </div>
            <div>
              <div>- {t("resume.time-line-content-university-1")}</div>
              <div>- {t("resume.time-line-content-university-2")}</div>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2019 ~ 2021</time>
            <div className="text-lg font-black">
              {t("resume.time-line-content-military")}
            </div>
            <div>
              <div>- {t("resume.time-line-content-military-1")}</div>
              <div>- {t("resume.time-line-content-military-2")}</div>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic">2023.02 ~ 2023.05</time>
            <div className="text-lg font-black">
              {t("resume.time-line-content-bootcamp")}
            </div>
            <div>- {t("resume.time-line-content-bootcamp-1")}</div>
            <div>- {t("resume.time-line-content-bootcamp-2")}</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic">2024.06 ~ 2024.09</time>
            <div className="text-lg font-black">
              {t("resume.time-line-content-study")}
            </div>
            <div>- {t("resume.time-line-content-study-1")}</div>
            <div>- {t("resume.time-line-content-study-2")}</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:text-start">
            <time className="font-mono italic">2024.09 ~ 2025. 05</time>
            <div className="text-lg font-black">
              {t("resume.time-line-content-academy")}
            </div>
            <div>- {t("resume.time-line-content-academy-1")}</div>
            <div>- {t("resume.time-line-content-academy-2")}</div>
          </div>
        </li>
      </ul>
      {/* <div
        className="text-4xl font-bold italic"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        My Projects
      </div>
      <Projects />
      <div className="text-4xl font-bold italic">Certifications</div>
      <div>Certifications</div> */}
      <div className="text-4xl font-bold italic" data-aos="fade-up">
        Languages
      </div>
      <div className="divider" data-aos="fade-up" data-aos-delay="50"></div>
      <div
        className="flex flex-col gap-2 mb-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-col gap-2 ml-2">
          <div className="flex items-center gap-2">
            <div className="font-semibold text-xl">
              {t("resume.languages-korean")}
            </div>
            <div>-</div>
            <div>Native</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-semibold text-xl">
              {t("resume.languages-japanese")}
            </div>
            <div>-</div>
            <div>Business Level</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-semibold text-xl">
              {t("resume.languages-english")}
            </div>
            <div>-</div>
            <div>Conversational Level</div>
          </div>
        </div>
      </div>
      <div className="text-4xl font-bold italic" data-aos="fade-up">
        Certifications
      </div>
      <div className="divider" data-aos="fade-up" data-aos-delay="50"></div>
      <div
        className="flex flex-col gap-2 font-base-content"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex items-center gap-2">
          <div className="font-semibold text-lg">JLPT</div>
          <div>-</div>
          <div>N2 150/180</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="font-semibold text-lg">TOEIC</div>
          <div>-</div>
          <div>780</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="font-semibold text-lg">JPT</div>
          <div>-</div>
          <div>670</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="font-semibold text-lg">情報処理技師</div>
        </div>
      </div>
    </div>
  );
}
