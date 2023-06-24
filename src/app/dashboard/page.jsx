"use client";

import useSWR from "swr";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = () => {
  const router = useRouter();
  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session?.data?.user?.name,
        }),
      });

      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <section className="py-28 px-2">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            {isLoading
              ? "Loading..."
              : data?.map((post) => {
                  return (
                    <div
                      key={post._id}
                      className="flex flex-col items-center gap-5 my-8 sm:flex-row"
                    >
                      <Link href={`/blog/${post._id}`}>
                        <div className="flex">
                          <Image
                            src={post.image}
                            alt="post"
                            width={200}
                            height={200}
                            className="w-full h-full"
                          />
                        </div>
                      </Link>
                      <div className="flex flex-col gap-2">
                        <Link href={`/blog/${post._id}`} className="space-y-2">
                          <h2 className="text-xl font-bold text-center sm:text-left">
                            {post.title.substring(0, 28)}
                          </h2>
                          <p className="max-w-xs text-center sm:text-left">
                            {post.desc.substring(0, 80)}
                          </p>
                        </Link>
                        <div className="flex items-center justify-center gap-5 sm:justify-start">
                          <button
                            className="bg-red-500 text-white px-4 py-1 text-xl rounded"
                            onClick={() => handleDelete(post._id)}
                          >
                            Delete
                          </button>
                          <button className="bg-blue-500 text-white px-4 py-1 text-xl rounded">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full lg:w-1/3 xl:w-1/2"
          >
            <h1 className="text-3xl font-bold px-2">Create New Blog Post</h1>
            <input
              type="text"
              placeholder="Title"
              className="py-4 px-5 m-2 bg-transparent border-2 border-[#ddd] outline-none rounded placeholder:text-[#ddd]"
            />
            <input
              type="text"
              placeholder="Desc"
              className="py-4 px-5 m-2 bg-transparent border-2 border-[#ddd] outline-none rounded placeholder:text-[#ddd]"
            />
            <input
              type="text"
              placeholder="Image"
              className="py-4 px-5 m-2 bg-transparent border-2 border-[#ddd] outline-none rounded placeholder:text-[#ddd]"
            />
            <textarea
              placeholder="Content"
              cols="30"
              rows="10"
              className="py-4 px-5 m-2 bg-transparent border-2 border-[#ddd] outline-none rounded placeholder:text-[#ddd]"
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
