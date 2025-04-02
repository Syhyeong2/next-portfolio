import MarkdownRenderer from "@/components/MarkdownRender";
import { getPostData } from "@/lib/posts";

export default async function ArticleContent({ slug }: { slug: string }) {
  console.log(slug);
  const postData = await getPostData(slug);

  return (
    <div className="my-10">
      <MarkdownRenderer content={postData.contentHtml} />
    </div>
  );
}
