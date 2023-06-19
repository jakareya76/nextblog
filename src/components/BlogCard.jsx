import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <Link href="/blog/test">
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="relative w-full lg:w-1/4">
          <Image
            src="https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blogImg"
            width={500}
            height={500}
            className="object-cover w-full"
          />
        </div>
        <div className="w-full lg:w-3/4">
          <h2 className="text-3xl font-extrabold max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            suscipit?
          </h2>
          <p className="py-8 max-w-5xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolor
            mollitia at possimus beatae tempore id sapiente ipsa maiores quam
            nam ipsam vero architecto atque rem facere odio dolores, expedita
            sit, neque molestias quas autem nesciunt. Neque temporibus quam a id
            vel commodi, dolores culpa esse non quis, ea repellat!
          </p>
        </div>
      </div>
    </Link>
  );
};
export default BlogCard;
