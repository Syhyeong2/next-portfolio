import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sihyeong's Blog - Articles",
  description: "Sihyeong Lee's Articles",
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
