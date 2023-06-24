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

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await connect();

    const post = await Post.findByIdAndDelete(id);
    return NextResponse("Post Has Been Deleted", { status: 204 });
  } catch (error) {
    throw new Error("Post Not Found");
  }
}
