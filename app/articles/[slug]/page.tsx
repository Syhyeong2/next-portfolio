// app/posts/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

interface PostData {
  title: string;
  date: string;
  contentHtml: string;
}

// 모든 Markdown 파일의 slug 목록을 생성하여 정적 페이지를 미리 빌드합니다.
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);

  if (!fs.existsSync(fullPath)) {
    // 해당 파일이 없으면 Next.js의 404 페이지를 표시합니다.
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // gray-matter를 사용해 Front Matter와 Markdown 콘텐츠를 분리합니다.
  const matterResult = matter(fileContents);

  // remark를 사용해 Markdown 콘텐츠를 HTML로 변환합니다.
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const postData: PostData = {
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };

  return (
    <article>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      {/* HTML 변환 결과를 렌더링합니다. */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
