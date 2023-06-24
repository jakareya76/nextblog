import Image from "next/image";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    return notFound();
  }

  return await res.json();
};

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  const { title, desc, image, content, username } = data;

  console.log(data);

  return (
    <section className="py-16 px-5">
      <div className="flex flex-col-reverse justify-center gap-8 lg:flex-row">
        <div className="flex flex-col w-full lg:w-1/2">
          <h2 className="text-3xl font-extrabold py-4 xl:text-5xl">{title}</h2>
          <p className="py-4 mb-4 text-xs sm:text-sm md:text-md xl:text-lg">
            {desc}
          </p>
          <div className="flex items-center gap-5">
            <Image
              src="/profile-icon.png"
              width={50}
              height={50}
              className="object-cover rounded-full w-[50px] h-[50px]"
            />
            <span className="text-xl font-bold">{username}</span>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2">
          <Image
            src={image}
            alt="blogImg"
            width={800}
            height={800}
            className="object-cover"
          />
        </div>
      </div>
      <p className="pt-16 text-xl">{content}</p>
    </section>
  );
};
export default BlogPost;
