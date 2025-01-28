"use client";

import { useState, useEffect } from "react";
import Aos from "aos";

export default function Home() {
  //aos animation
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [isMoreAbout, setIsMoreAbout] = useState(false);

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 bg-base-400 ">
      <div className="text-4xl font-bold">Hello!</div>
      <div className="md:w-1/2 w-[90%]">
        Welcome to my portfolio! I&apos;m Syhyeong, a passionate web developer
        dedicated to building responsive and user-friendly websites. With a
        strong foundation in both front-end and back-end technologies, I thrive
        on solving complex problems and continuously enhancing my skills. My
        goal is to deliver high-quality digital solutions that drive success for
        my clients and users alike.
      </div>
      <div className="text-xl font-bold italic">My Mission</div>
      <div className="md:w-1/2 w-[90%]">
        As a passionate web developer, my mission is to create innovative and
        user-centric websites that enhance digital experiences. I strive to
        blend cutting-edge technologies with creative design to deliver
        solutions that not only meet but exceed client expectations. Committed
        to continuous learning and excellence, I aim to contribute meaningfully
        to every project I undertake.
      </div>
      <div className="text-xl font-bold italic">My Vision</div>
      <div className="md:w-1/2 w-[90%]">
        My vision is to become a leading web developer recognized for
        transforming ideas into seamless and impactful digital solutions. I
        aspire to drive the evolution of web technologies, fostering a more
        connected and accessible online world. By prioritizing quality,
        collaboration, and sustainability, I seek to inspire and empower
        businesses and individuals through exceptional web development.
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
