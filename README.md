# My Portfolio

개인 포트폴리오 웹사이트입니다. Next.js 15와 TypeScript를 기반으로 제작되었습니다.

## ✨ 주요 기능

- 🌐 **다국어 지원** - i18next를 사용한 한국어/영어/일본어 지원
- 🌙 **다크모드** - DaisyUI 테마 시스템
- 📁 **프로젝트 갤러리** - Markdown 기반 프로젝트 소개
- 📄 **이력서** - 경력 및 기술 스택 소개
- ✨ **애니메이션** - AOS를 활용한 스크롤 애니메이션
- 📱 **반응형 디자인** - 모바일/태블릿/데스크톱 대응

## 🛠 기술 스택

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **i18n:** react-i18next, next-i18next
- **Markdown:** react-markdown, next-mdx-remote
- **Animation:** AOS (Animate On Scroll)

## 🚀 Getting Started

개발 서버 실행:

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 📁 프로젝트 구조

```
├── app/              # Next.js App Router 페이지
├── components/       # 재사용 가능한 컴포넌트
├── posts/            # 프로젝트 마크다운 파일
├── public/           # 정적 파일 (이미지, 번역 파일)
└── i18n/             # 다국어 설정
```

## 🌐 Deploy

이 프로젝트는 [Vercel](https://vercel.com)에서 배포할 수 있습니다.
