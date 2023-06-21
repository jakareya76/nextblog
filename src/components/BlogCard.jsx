import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ _id, title, desc, image, content, username }) => {
  return (
    <Link href={`/blog/${_id}`}>
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="relative w-full lg:w-1/4">
          <Image
            src={image}
            alt="blogImg"
            width={500}
            height={500}
            className="object-cover w-full"
          />
        </div>
        <div className="w-full lg:w-3/4">
          <h2 className="text-3xl font-extrabold max-w-2xl">{title}</h2>
          <p className="py-8 max-w-2xl">{desc}</p>
        </div>
      </div>
    </Link>
  );
};
export default BlogCard;
