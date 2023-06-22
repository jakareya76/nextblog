"use client";

import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen">
        <form className="flex flex-col">
          <input
            type="email"
            placeholder="email"
            className="py-4 px-5 m-2 bg-transparent border-2 border-[#ddd] outline-none rounded placeholder:text-[#ddd]"
            required
          />
          <input
            type="password"
            placeholder="password"
            className="py-4 px-5 m-2 bg-transparent border-2 border-[#ddd] outline-none rounded placeholder:text-[#ddd]"
            required
          />
          <button className="bg-green-500 text-white rounded py-4 mx-2 my-4">
            Login
          </button>
        </form>
        <p className="cursor-pointer">Login With Google</p>
      </div>
    </section>
  );
};
export default LoginPage;
