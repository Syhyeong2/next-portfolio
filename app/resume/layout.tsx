import { Metadata } from "next";

//메타데이터
export const metadata: Metadata = {
  title: "Sihyeong's Blog - Resume",
  description: "Sihyeong Lee's Resume",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
