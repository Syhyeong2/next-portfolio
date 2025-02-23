import ArticleContent from "./articleContent";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  // params 객체에서 slug를 추출합니다.
  const { slug } = await params;

  return (
    <div>
      <ArticleContent slug={slug} />
      {/* 추가적인 동적 데이터 로직을 여기에 구현할 수 있습니다. */}
    </div>
  );
}
