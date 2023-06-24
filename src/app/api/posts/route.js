import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export async function GET(request) {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find(username && { username });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
