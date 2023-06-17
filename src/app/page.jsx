import Image from "next/image";
import Link from "next/link";

import Hero from "public/hero.png";

export default function HomePage() {
  return (
    <section className="py-28 h-screen flex items-center justify-center">
      <div className="flex flex-col-reverse items-center justify-center md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="text-[82px] max-w-xl font-extrabold leading-[105px] text-transparent bg-gradient-to-t bg-clip-text from-green-100 to-green-950">
            Better design <br /> for you digital Products
          </h2>
          <p className="max-w-xl text-[24px] py-6 mb-8">
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>

          <Link
            href="/portfolio"
            className="px-8 py-4 bg-green-700 text-white text-xl rounded duration-200 hover:bg-green-800"
          >
            See Our Work
          </Link>
        </div>
        <div className="w-full flex items-center justify-end md:w-1/2">
          <Image src={Hero} alt="hero img" className="w-[80%]" />
        </div>
      </div>
    </section>
  );
}
