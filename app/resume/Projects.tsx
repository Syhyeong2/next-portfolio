"use client";

import { useEffect } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import Image from "next/image";

// interface Project {
//   id: number;
//   title: string;
//   date: string;
//   content: string;
//   image: string;
// }

export default function Projects() {
  // const [selectedPr oject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 700, // 애니메이션 지속 시간
      offset: 100,
      once: true, // 애니메이션을 한 번만 실행
    });
  }, []);

  const { t } = useTranslation("common");

  // 프로젝트 데이터를 배열로 관리 (필요에 따라 데이터를 확장할 수 있습니다)
  const projects = [
    {
      id: 1,
      title: t("resume.projects1-title"),
      date: "2024.11 ~ 2025.01",
      content: t("resume.projects1-content"),
      subContent: t("resume.projects1-sub-content-1"),
      subContent2: t("resume.projects1-sub-content-2"),
      subContent3: t("resume.projects1-sub-content-3"),
      subContent4: t("resume.projects1-sub-content-4"),
      subContent5: t("resume.projects1-sub-content-5"),
      image: "/images/mygg.png",
      link: "https://github.com/Syhyeong2/SB_MyGG_README_jp",
      stack: ["React", "TypeScript", "Styled-Components", "MongoDB"],
    },
    {
      id: 2,
      title: t("resume.projects2-title"),
      date: "2025.01 ~ 2025.03",
      content: t("resume.projects2-content"),
      subContent: t("resume.projects2-sub-content-1"),
      subContent2: t("resume.projects2-sub-content-2"),
      subContent3: t("resume.projects2-sub-content-3"),
      subContent4: t("resume.projects2-sub-content-4"),
      subContent5: t("resume.projects2-sub-content-5"),
      image: "/images/image copy 2.png",
      link: "https://github.com/SCIT46-1/taiso-web",
      stack: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "MySQL"],
    },
    {
      id: 3,
      title: t("resume.projects3-title"),
      date: "2025.01~",
      content: t("resume.projects3-content"),
      subContent: t("resume.projects3-sub-content-1"),
      subContent2: t("resume.projects3-sub-content-2"),
      subContent3: t("resume.projects3-sub-content-3"),
      subContent4: t("resume.projects3-sub-content-4"),
      subContent5: t("resume.projects3-sub-content-5"),
      image: "/images/myportfolio.png",
      link: "https://github.com/Syhyeong2/next-portfolio",
      stack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      id: 4,
      title: t("resume.projects4-title"),
      date: "2025.01~",
      content: t("resume.projects4-content"),
      subContent: t("resume.projects4-sub-content-1"),
      subContent2: t("resume.projects4-sub-content-2"),
      subContent3: t("resume.projects4-sub-content-3"),
      subContent4: t("resume.projects4-sub-content-4"),
      subContent5: t("resume.projects4-sub-content-5"),
      image: "/images/myportfolio.png",
      link: "https://github.com/Syhyeong2/next-portfolio",
      stack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "MongoDB"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6  w-full">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => window.open(project.link, "_blank")}
          data-aos="fade-up"
          data-aos-delay="150"
          className="flex flex-col md:flex-row items-start md:items-center gap-2 cursor-pointer p-2 rounded-lg py-3 w-full hover:bg-base-200 group relative transition-all duration-300"
        >
          <div className="flex flex-col gap-1 mb-2 md:mb-auto w-full md:w-3/12">
            <div className="font-extrabold text-xl flex items-center">
              {project.title}
              <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 -ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            <div className="text-xs font-light">{project.date}</div>
          </div>
          <div className="flex flex-col gap-1 md:ml-10 w-full md:w-11/12">
            {/* 간략한 내용 미리보기 (원하는 길이로 조절 가능) */}
            <div className="mb-2 text font-bold">{project.content}</div>
            <div className="text-sm">{project.subContent}</div>
            <div className="text-sm">{project.subContent2}</div>
            <div className="text-sm">{project.subContent3}</div>
            <div className="text-sm">{project.subContent4}</div>
            <div className="text-sm">{project.subContent5}</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((stack, index) => (
                <div key={index} className="badge badge-outline">
                  {stack}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
