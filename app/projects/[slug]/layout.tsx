import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sihyeong's Blog - Projects",
  description: "Sihyeong Lee's Projects",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Link
        href="/projects"
        className="flex items-center gap-2 cursor-pointer hover:underline"
      >
        <svg
          data-slot="icon"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="size-8"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
          />
        </svg>
        <div className="text- font-semibold">Back</div>
      </Link>
      {children}
    </div>
  );
}
