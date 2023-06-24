"use client";

import useSWR from "swr";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = () => {
  const [posts, setPosts] = useState({
    title: "",
    desc: "",
    image: "",
    content: "",
  });

  const router = useRouter();
  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { ...posts, username: session?.data?.user?.name };

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
      });

      mutate();

      setPosts({ title: "", desc: "", image: "", content: "" });
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <section className="py-28">
        <div className="flex">
          <div className="w-full md:w-1/2">
            {isLoading
              ? "Loading"
              : data?.map((post) => {
                  return (
                    <Link href={`/blog/${post._id}`}>
                      <div className="flex items-center gap-5 my-5">
                        <div className="imageContainer">
                          <Image
                            src={post.image}
                            alt="post"
                            width={200}
                            height={100}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h2 className="text-xl font-bold">
                            {post.title.substring(0, 40)}
                          </h2>
                          <p className="max-w-xs">
                            {post.desc.substring(0, 80)}
                          </p>
                          <div className="">
                            <button className="bg-red-500 text-white px-4 py-1 text-xl rounded">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full md:w-1/2"
          >
            <h1 className="text-3xl font-bold px-2">Create New Blog Post</h1>
            <input
              type="text"
              placeholder="Title"
              className="py-4 px-5 m-2 bg-transparent border-2 border-[#ddd] outline-none rounded placeholder:text-[#ddd]"
              value={posts.title}
              onChange={(e) => {
                setPosts({ ...posts, title: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Desc"
              className="py-4 px-5 m-2 bg-transparent border-2 border-[#ddd] outline-none rounded placeholder:text-[#ddd]"
              value={posts.desc}
              onChange={(e) => {
                setPosts({ ...posts, desc: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Image"
              className="py-4 px-5 m-2 bg-transparent border-2 border-[#ddd] outline-none rounded placeholder:text-[#ddd]"
              value={posts.image}
              onChange={(e) => {
                setPosts({ ...posts, image: e.target.value });
              }}
            />
            <textarea
              placeholder="Content"
              cols="30"
              rows="10"
              className="py-4 px-5 m-2 bg-transparent border-2 border-[#ddd] outline-none rounded placeholder:text-[#ddd]"
              value={posts.content}
              onChange={(e) => {
                setPosts({ ...posts, content: e.target.value });
              }}
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 text-white rounded py-4 mx-2"
            >
              Create
            </button>
          </form>
        </div>
      </section>
    );
  }
};
export default DashboardPage;
