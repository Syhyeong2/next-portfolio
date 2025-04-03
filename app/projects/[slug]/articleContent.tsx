import MarkdownRenderer from "@/components/MarkdownRender";
import { getPostData } from "@/lib/posts";

export default async function ArticleContent({ slug }: { slug: string }) {
  console.log(slug);
  const postData = await getPostData(slug);

  return (
    <div className="my-10">
      {/* 동영상이 있는 경우 렌더링 */}
      {postData.videoUrl && (
        <div className="mb-8">
          {postData.videoUrl.includes("youtube.com") ||
          postData.videoUrl.includes("youtu.be") ? (
            // YouTube 비디오 임베드
            <div className="aspect-video">
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
              className="w-full rounded-lg"
              poster="/images/video-poster.jpg" // 필요시 썸네일 이미지 추가
            />
          )}
        </div>
      )}
      <MarkdownRenderer content={postData.contentHtml} />
    </div>
  );
}
