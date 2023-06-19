import BlogCard from "@/components/BlogCard";

const BlogPage = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center justify-center gap-16">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};
export default BlogPage;
