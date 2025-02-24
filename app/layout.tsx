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
  params: { locale: string };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  // 서버 컴포넌트에서는 params를 Promise가 아닌 일반 객체로 받을 수 있습니다.
  const { locale } = params;

  return (
    <html lang={locale} data-theme="light">
      <body className="w-100% flex justify-center">
        <div className="md:w-[691px] w-[90%]">
          {/* 인터랙티브한 부분은 클라이언트 컴포넌트에서 처리 */}
          <ClientLayout locale={locale}>{children}</ClientLayout>
        </div>
      </body>
    </html>
  );
}
