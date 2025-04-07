"use client";

import MarkdownRenderer from "@/components/MarkdownRender";
import ProjectsSkeleton from "@/components/ProjectSkeleton";
import { useEffect, useState } from "react";

interface PostData {
  title: string;
  contentHtml: string;
  slug: string;
  videoUrl: string;
}

export default function ArticleContent({ slug }: { slug: string }) {
  const [postData, setPostData] = useState<PostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    async function fetchPostData() {
      try {
        // 서버에서 데이터를 가져오는 API 엔드포인트
        const response = await fetch(`/api/post/${slug}`);
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error("마크다운 로딩 중 오류:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPostData();
  }, [slug]);

  useEffect(() => {
    // Check theme on mount and listen for changes
    const updateThemeState = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDarkMode(theme === "dark");
    };

    // Initial check
    updateThemeState();

    // Setup observer to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          updateThemeState();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  if (isLoading) {
    // 콘텐츠 로딩 중 표시할 로딩 상태
    // loading.tsx가 페이지 수준에서 로딩을 처리하므로 여기서는 간단히 표시
    return <ProjectsSkeleton />;
  }

  if (!postData) {
    return (
      <div className="text-center py-10 text-error">Can not find content</div>
    );
  }

  return (
    <div className="my-10">
      {/* 동영상이 있는 경우 렌더링 */}
      {postData.videoUrl && (
        <div className="mb-8">
          {postData.videoUrl.includes("youtube.com") ||
          postData.videoUrl.includes("youtu.be") ? (
            // YouTube 비디오 임베드
            <div
              className={`
              aspect-video rounded-lg overflow-hidden
              ${
                isDarkMode
                  ? "border border-base-content/20"
                  : "border border-base-300"
              }
            `}
            >
              <iframe
                src={postData.videoUrl.replace("watch?v=", "embed/")}
                className="w-full h-full rounded-lg"
                allowFullScreen
                title={postData.title}
              />
            </div>
          ) : (
            // 일반 비디오 플레이어
            <video
              src={postData.videoUrl}
              controls
              className={`
                w-full rounded-lg
                ${
                  isDarkMode
                    ? "border border-base-content/20"
                    : "border border-base-300"
                }
              `}
              poster="/images/video-poster.jpg" // 필요시 썸네일 이미지 추가
            />
          )}
        </div>
      )}
      <div className="bg-base-100 text-base-content rounded-lg p-4 shadow-sm">
        <MarkdownRenderer content={postData.contentHtml} />
      </div>
    </div>
  );
}
