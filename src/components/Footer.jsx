import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto flex items-center justify-between py-2">
      <span className="text-[#8b8989]">
        ©2023 NextBlog. All rights reserved.
      </span>
      <div className="flex">
        <Image
          src="/1.png"
          width={20}
          height={20}
          className="object-contain mx-2"
          alt="Icon"
        />
        <Image
          src="/2.png"
          width={20}
          height={20}
          className="object-contain mx-2"
          alt="Icon"
        />
        <Image
          src="/3.png"
          width={20}
          height={20}
          className="object-contain mx-2"
          alt="Icon"
        />
        <Image
          src="/4.png"
          width={20}
          height={20}
          className="object-contain mx-2"
          alt="Icon"
        />
      </div>
    </footer>
  );
};
export default Footer;
