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
    <div className="mt-8 flex flex-col items-center justify-center gap-10">
      <div className="text-4xl font-bold italic" data-aos="fade-up">
        My Skill
      </div>
      <div
        className="flex flex-wrap gap-2 w-96 items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <div className="badge badge-outline cursor-default">
          HTML, CSS, JavaScript
        </div>
        <div className="badge badge-outline cursor-default">TypeScript</div>
        <div className="badge badge-outline cursor-default">React</div>
        <div className="badge badge-outline cursor-default">Next.js</div>
        <div className="badge badge-outline cursor-default">Spring Boot</div>
        <div className="badge badge-outline cursor-default">Git</div>
      </div>
      <div
        className="text-4xl font-bold italic"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        My Timeline
      </div>
      <ul
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        data-aos="fade-up"
        data-aos-delay="150"
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
          <div className="timeline-start mb-10 md:text-end">
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
          <div className="timeline-start mb-10 md:text-end">
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
          <div className="timeline-start md:mb-10 md:text-end">
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
    </div>
  );
}
