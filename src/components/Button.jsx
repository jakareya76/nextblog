import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="px-8 py-4 bg-green-700 text-white text-xl rounded duration-200 hover:bg-green-800">
        {text}
      </button>
    </Link>
  );
};
export default Button;
