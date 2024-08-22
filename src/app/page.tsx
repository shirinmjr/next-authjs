import SignIn from "@/components/auth/page";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import Header from "@/components/common/header/Header";
import AboutApp from "@/components/about/AboutApp";

export default async function Home() {
  const user = await auth();
  console.log(user);
  if (user) redirect("/dashboard/landing-page");
  if (!user) {
    return (
      <div className="bg-white text-gray-900">
        <Header />
        <SignIn />
        <AboutApp />
      </div>
    );
  }
  {
    /* return <Loading />; */
  }
}
