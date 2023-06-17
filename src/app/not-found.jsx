import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl font-extrabold">404</h1>
      <p className="text-xl font-semibold">Page Not Found</p>
      <Link
        href="/"
        className="my-5 bg-zinc-800 text-white px-6 py-2 rounded duration-200 hover:bg-zinc-900"
      >
        Back To Home
      </Link>
    </div>
  );
};
export default NotFound;
