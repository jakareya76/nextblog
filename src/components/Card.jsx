import Image from "next/image";
import Link from "next/link";

const Card = ({ background, text }) => {
  return (
    <Link href={`/portfolio/${text}`}>
      <div className="w-[280px] h-[460px] border-4 rounded relative">
        <Image
          src={background}
          alt="img"
          className="w-[280px] h-[452px] bg-no-repeat object-cover"
        />
        <h3 className="text-4xl absolute bottom-2 left-2 text-gray-100 uppercase font-extrabold">
          {text}
        </h3>
      </div>
    </Link>
  );
};
export default Card;
