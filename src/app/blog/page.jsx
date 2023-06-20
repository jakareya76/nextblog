import BlogCard from "@/components/BlogCard";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Post Not Found");
  }

  return await res.json();
};

const BlogPage = async () => {
  const data = await getData();

  return (
    <section className="py-16">
      <div className="flex flex-col items-center justify-center gap-16">
        {data.map((item) => {
          return <BlogCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default BlogPage;
