import SignIn from "@/components/auth/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-white text-black">
      Welcome to SignIn Demo App
      <SignIn />
    </div>
  );
}
