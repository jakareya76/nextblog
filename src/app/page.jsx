import Image from "next/image";

import Button from "@/components/Button";

import Hero from "public/hero.png";

export default function HomePage() {
  return (
    <section className="w-full h-full flex items-center justify-center py-28">
      <div className="flex flex-col-reverse items-center justify-center md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="text-center text-5xl py-2 font-extrabold text-transparent bg-gradient-to-t bg-clip-text from-green-100 to-green-950 md:text-[56px] md:leading-[66px] md:text-left xl:text-[82px] xl:max-w-xl xl:leading-[105px]">
            Better design <br /> for you digital Products
          </h2>
          <p className="text-center px-2 text-sm py-4 mb-2 md:text-left md:px-0 md:mb-4 md:text-[18px] md:leading-[25px] xl:max-w-xl xl:text-[24px] xl:leading-[36px]">
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <div className="w-full flex items-center justify-center md:justify-start">
            <Button text="See Our Work" url="/portfolio" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center md:justify-end md:w-1/2">
          <Image src={Hero} alt="hero img" className="w-[80%]" />
        </div>
      </div>
    </section>
  );
}
