"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const RegisterPage = () => {
  const [err, setErr] = useState(false);

  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      }
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            className="py-4 px-5 m-2 bg-transparent border-2 border-[#ddd] outline-none rounded placeholder:text-[#ddd]"
            required
          />
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
            Register
          </button>
        </form>
        {err && <p className="text-red-600 mb-5">Something went wrong</p>}
        <p className="cursor-pointer">Login With An Existing Account</p>
      </div>
    </section>
  );
};
export default RegisterPage;
