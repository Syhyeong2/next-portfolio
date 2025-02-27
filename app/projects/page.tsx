// app/blog/page.tsx
import { getSortedPostsData, PostMetaData } from "@/lib/posts";
import Projects from "../resume/Projects";

export const revalidate = 60; // 60초마다 재생성 (옵션)

export default function BlogPage() {
  // 서버 컴포넌트이므로 데이터 호출은 직접 실행
  const posts: Array<PostMetaData & { slug: string }> = getSortedPostsData();

  console.log(posts);
  return (
    <section>
      <div className="flex flex-col items-center justify-center mt-10">
        {/* <h1>블로그</h1>
      <ul>
        {posts.map(({ slug, title, date, tags }) => (
          <li key={slug}>
            <Link href={`/articles/${slug}`}>{title}</Link>
            <br />
            <small>{date}</small>
            <br />
            <small>{tags?.join(", ")}</small>
          </li>
        ))}
      </ul> */}
        <div
          className="text-4xl font-bold italic mb-"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          My Projects
        </div>
        <Projects />
      </div>
    </section>
  );
}
