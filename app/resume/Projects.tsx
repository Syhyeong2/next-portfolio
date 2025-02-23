"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      image: "/images/mygg.png",
    },
    {
      id: 2,
      title: t("resume.projects2-title"),
      date: "2025.01~",
      content: t("resume.projects2-content"),
      image: "/images/image copy 2.png",
    },
    {
      id: 3,
      title: t("resume.projects3-title"),
      date: "2025.01~",
      content: t("resume.projects3-content"),
      image: "/images/myportfolio.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:w-[90%] w-full">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => setSelectedProject(project)}
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex items-center gap-2 hover:bg-base-300 cursor-pointer p-4 rounded-3xl w-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            className="md:size-28 size-24 rounded-3xl object-cover shadow-md"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-1 md:ml-10 ml-5">
            <div className="font-extrabold text-xl">{project.title}</div>
            <div className="text-xs font-light">{project.date}</div>
            {/* 간략한 내용 미리보기 (원하는 길이로 조절 가능) */}
            <div className="text-sm mt-2">
              {project.content.substring(0, 50)}...
            </div>
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
        </div>
      ))}

      {/* 모달 창: selectedProject가 있을 경우에만 렌더링 */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white p-6 rounded-lg md:w-[681px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <div className="mt-4"></div>
          </div>
        </div>
      )}
    </div>
  );
}
