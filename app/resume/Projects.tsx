"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration
      offset: 100,
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[90%] md:w-1/2">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex items-center  gap-4 hover:bg-base-300 cursor-pointer p-4 rounded-3xl w-full"
      >
        <div className="size-28 bg-amber-200 rounded-3xl"></div>
        <div className="text-xl font-bold">2024. 09 ~ 2025. 05</div>
        <div className="flex flex-col gap-2">
          <div>Project 1</div>
          <div>my project</div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex items-center  gap-4 hover:bg-base-300 cursor-pointer p-4 rounded-3xl w-full"
      >
        <div className="size-28 bg-amber-200 rounded-3xl"></div>
        <div className="">2024</div>
        <div className="flex flex-col gap-2">
          <div>Project 2</div>
          <div>my project</div>
        </div>
      </div>
    </div>
  );
}
