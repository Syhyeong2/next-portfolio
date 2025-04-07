// app/layout.tsx
import "aos/dist/aos.css";
import "./globals.css";
import ClientLayout from "./ClientLayout";

// metadata는 서버 컴포넌트에서 export 합니다.
export const metadata = {
  title: "Sihyeong's Blog",
  description: "Sihyeong Lee - Portfolio Page",
  icons: {
    icon: [{ url: "/images/favicon.ico", type: "image/x-icon" }],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  // params는 Promise이므로 await로 해제합니다.
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className="w-100% flex justify-center">
        <div className="md:w-[691px] w-[90%]">
          {/* 인터랙티브한 부분은 클라이언트 컴포넌트에서 처리 */}
          <ClientLayout locale={locale}>{children}</ClientLayout>
        </div>
      </body>
    </html>
  );
}
