import Image from "next/image";

import ContactImg from "/public/contact.png";

const ContactPage = () => {
  return (
    <section className="py-28">
      <h1 className="text-4xl text-center font-bold md:text-6xl">
        Let's Keep in Touch
      </h1>
      <div className="flex items-center justify-center gap-16 py-16">
        <div className="hidden md:flex md:justify-end md:w-1/2">
          <Image src={ContactImg} className="w-[500px] object-cover" />
        </div>
        <div className="flex items-center justify-center w-full md:justify-start md:w-1/2">
          <form className="flex flex-col w-[80%] gap-5">
            <input
              type="text"
              placeholder="name"
              className="bg-transparent p-4 border outline-none rounded"
            />
            <input
              type="email"
              placeholder="email"
              className="bg-transparent p-4 border outline-none rounded"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="message"
              className="bg-transparent p-4 border outline-none rounded"
            />

            <button
              type="submit"
              className="px-8 py-4 bg-green-700 text-white text-xl rounded duration-200 hover:bg-green-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
