import { getPostData } from "@/lib/posts";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return NextResponse.json(postData);
  } catch (error) {
    console.error("Can't load content", error);
    return NextResponse.json({ error: "Can't load content" }, { status: 500 });
  }
}
