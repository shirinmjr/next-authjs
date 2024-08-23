import AuthSocialButtons from "../common/AuthSocialButtons";
import googleLogo from "../../assets/google-logo.png";
import githubLogo from "../../assets/github-logo.png";
import microsoftLogo from "../../assets/microsoft-logo.png";
import SignInForm from "./login/SignInForm";
import SignUpBtn from "../common/SignUpBtn";
import { Box } from "@mui/material";
import Image from "next/image";
import SecurityLoginPage from "@/assets/security-img.webp";
import Link from "next/link";
import AboutApp from "../about/AboutApp";

export default function SignIn() {
  return (
    <div className="flex justify-between h-screen border-black py-20 my-20">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col  ml-0 gap-4 md:border-r-4 px-10">
          <div>
            <img
              className="flex rounded-2xl border-2 w-40"
              src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
            />
          </div>
          <div className="flex my-2">
            <AuthSocialButtons
              loginTo="google"
              title="Google"
              socialLogo={googleLogo.src}
            />
          </div>
          <div className="flex my-2  ">
            <AuthSocialButtons
              loginTo="github"
              title="GitHub"
              socialLogo={githubLogo.src}
            />
          </div>
          <div className="my-2  ">
            <AuthSocialButtons
              loginTo="microsoft"
              title="Microsoft"
              socialLogo={microsoftLogo.src}
            />
          </div>
        </div>
        <div className="flex flex-col px-10 py-20">
          <SignInForm />
          <div className="text-lg">
            Create a new Account
            <Link href={"sign-up"}>
              <SignUpBtn />
            </Link>
          </div>
        </div>
        <div className=" flex px-10 lg:pl-20 lg:w-1/3">
          <AboutApp />
        </div>
      </div>
    </div>
  );
}
