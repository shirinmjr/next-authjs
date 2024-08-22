"use client";
import { signOut } from "next-auth/react";

const SignOutBtn = () => {
  return (
    <div className="block border-2 border-black p-2 rounded-xl items-center text-center">
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
    </div>
  );
};

export default SignOutBtn;
