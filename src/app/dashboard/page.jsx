"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const DashboardPage = () => {
  const session = useSession();

  console.log(session);

  return (
    <div>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};
export default DashboardPage;
