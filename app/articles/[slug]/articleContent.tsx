import MarkdownRenderer from "@/components/MarkdownRender";
import { getPostData } from "@/lib/posts";

export default async function ArticleContent({ slug }: { slug: string }) {
  const postData = await getPostData(slug);

  return <MarkdownRenderer content={postData.contentHtml} />;
}
