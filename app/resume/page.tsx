"use client";

import "aos/dist/aos.css";
import Projects from "./Projects";

export default function Resume() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-10">
      <div className="text-4xl font-bold italic">My Skill</div>
      <div className="flex flex-wrap gap-2 w-96 items-center justify-center">
        <div className="badge badge-outline border-amber-950 text-border-amber-950">
          HTML, CSS, JavaScript
        </div>
        <div className="badge badge-outline">TypeScript</div>
        <div className="badge badge-outline">React</div>
        <div className="badge badge-outline">Next.js</div>
        <div className="badge badge-outline">Spring Boot</div>
        <div className="badge badge-outline">Git</div>
      </div>
      <div className="text-4xl font-bold italic">My Timeline</div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
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
              Chung-ang University (Korea, Seoul)
            </div>
            <div>
              <div>- Social Sciences</div>
              <div>- Media Communication</div>
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
              Fulfillment of military duty
            </div>
            <div>
              <div>- Military Service</div>
              <div>- The 21st Aviation Group</div>
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
            <div className="text-lg font-black">Project Manager Bootcamp</div>
            <div>- asd</div>
            <div>- asd</div>
            <div>- asd</div>
            <div>- asd</div>
            <div>- asd</div>
            <div>- asd</div>
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
            <time className="font-mono italic">2024.09 ~ 2025. 05</time>
            <div className="text-lg font-black">SC IT Academy</div>
            <div>- asd</div>
            <div>- asd</div>
            <div>- asd</div>
          </div>
        </li>
      </ul>
      <div className="text-4xl font-bold italic">My Projects</div>
      <Projects />
      <div className="text-4xl font-bold italic">Certifications</div>
      <div>Certifications</div>
    </div>
  );
}
