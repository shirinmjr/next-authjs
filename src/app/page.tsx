import SignIn from "@/components/auth/page";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await auth();
  console.log(user);
  if (user) redirect("/dashboard/landing-page");
  if (!user) {
    return (
      <div className="flex flex-col items-center h-screen bg-white text-black">
        <SignIn />
      </div>
    );
  }
  {
    /* return <Loading />; */
  }
}
