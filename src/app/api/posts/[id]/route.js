import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connect();

    const post = await Post.findById(id);
    return NextResponse.json(post);
  } catch (error) {
    throw new Error("Post Not Found");
  }
}
