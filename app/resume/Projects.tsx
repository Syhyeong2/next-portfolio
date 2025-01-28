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
    <div className="flex flex-col items-center justify-center gap-4 w-[90%] md:w-1/3">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex items-center gap-4 hover:bg-base-300 cursor-pointer p-4 rounded-3xl w-full"
      >
        <div className="md:size-28 size-16  bg-amber-200 md:rounded-3xl rounded-xl"></div>
        <div className="flex flex-col md:gap-2 gap-1 md:ml-10 ml-5">
          <div>Project 1</div>
          <div>my project</div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex items-center gap-4 hover:bg-base-300 cursor-pointer p-4 rounded-3xl w-full"
      >
        <div className="md:size-28 size-16  bg-amber-200 md:rounded-3xl rounded-xl"></div>
        <div className="flex flex-col md:gap-2 gap-1 md:ml-10 ml-5">
          <div>Project 1</div>
          <div>my project</div>
        </div>
      </div>
    </div>
  );
}
