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

export async function POST(request) {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return NextResponse("Post Has Been Created", { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed To Create New Post" });
  }
}
