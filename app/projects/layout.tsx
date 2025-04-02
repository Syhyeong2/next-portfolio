import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sihyeong's Blog - Projects",
  description: "Sihyeong Lee's Projects",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
