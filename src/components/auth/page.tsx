import AuthSocialButtons from "../common/AuthSocialButtons";
import googleLogo from "../../assets/google-logo.png";
import githubLogo from "../../assets/github-logo.png";
import microsoftLogo from "../../assets/microsoft-logo.png";
import SignInForm from "./login/SignInForm";
import SignUpBtn from "../common/SignUpBtn";
import { Box } from "@mui/material";
import Image from "next/image";
import SecurityLoginPage from "@/assets/security-img.webp";

export default function SignIn() {
  return (
    <div className="flex justify-between border-2 border-black p-20 mt-20">
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Image
          src={SecurityLoginPage}
          className="open-locker-logo"
          alt="open locker logo"
          width={550}
          height={450}
          priority
        />
      </Box>
      <div className="flex flex-col md:flex-row justify-center  ">
        <div className="flex flex-col  ml-0 gap-4 md:border-r-4 px-6">
          <div>
            <img
              className="flex rounded-2xl border-2 w-40"
              src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
            />
          </div>
          <div className="flex my-2  ">
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
        <div>
          <SignInForm />
          <SignUpBtn />
        </div>
      </div>
    </div>
  );
}
