// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface PostMetaData {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
}

export interface PostData extends PostMetaData {
  slug: string;
  contentHtml: string;
}

/**
 * 모든 포스트의 메타데이터를 읽어 날짜 기준 내림차순 정렬한 배열을 반환합니다.
 */
export function getSortedPostsData(): Array<PostMetaData & { slug: string }> {
  // posts 폴더 내의 파일 이름들을 가져옴
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    // matterResult.data는 any 타입이므로 필요에 따라 PostMetaData로 캐스팅합니다.
    const data = matterResult.data as PostMetaData;

    return {
      slug,
      ...data,
    };
  });

  // 날짜 기준으로 정렬 (최신 글이 위로 오도록)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * slug에 해당하는 포스트의 데이터를 읽어 HTML로 변환 후 반환합니다.
 */
export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const data = matterResult.data as PostMetaData;

  return {
    slug,
    contentHtml,
    ...data,
  };
}

/**
 * 모든 포스트의 slug 목록을 동적 라우팅용으로 반환합니다.
 */
export function getAllPostSlugs(): { params: { slug: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
}
