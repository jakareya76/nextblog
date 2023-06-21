import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export async function GET(request) {
  try {
    await connect();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
