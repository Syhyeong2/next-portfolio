// app/layout.tsx
import "aos/dist/aos.css";
import "./globals.css";
import Navbar from "./navbar";
import I18nProviderWrapper from "./I18nProviderWrapper";

// 여기서는 params를 무조건 Promise<{ locale: string }>로 지정합니다.
type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  // params가 Promise이므로 await 처리합니다.
  const { locale } = await params;

  return (
    <html lang={locale} data-theme="light">
      <body>
        <I18nProviderWrapper locale={locale}>
          <div className="mt-10 flex flex-col items-center justify-center gap-10 bg-base-400 ">
            <div className="text-4xl font-bold mt-2">My Name</div>
            <div className="italic font-light -mt-8">My Intro</div>
          </div>
          <Navbar />
          {children}
          <footer className="footer p-10 bg-base-100 text-base-content mt-20">
            {/* Footer 내용 */}
          </footer>
        </I18nProviderWrapper>
      </body>
    </html>
  );
}
