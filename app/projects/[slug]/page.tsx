import ArticleContent from "./articleContent";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  return (
    <div className="container mx-auto px-4">
      <ArticleContent slug={slug} />
    </div>
  );
}
