import Button from "@/components/Button";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="py-16 px-5 md:px-0">
      <div className="relative w-full h-[300px]">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about"
          fill={true}
          className="object-cover grayscale"
        />
        <div className="absolute bg-[#53c28b] text-white p-2 bottom-5 left-6">
          <h1 className="text-2xl font-extrabold">Digital Storytellers</h1>
          <h2 className="text-xl font-extrabold">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-20 py-5 md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-extrabold py-5">Who we are?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae.
            <br />
            <br />
            A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-extrabold py-5">What We Do?</h1>
          <p className="text-justify mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
