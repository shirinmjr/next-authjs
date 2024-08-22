import AuthSocialButtons from "../common/AuthSocialButtons";
import googleLogo from "../../assets/google-logo.png";
import githubLogo from "../../assets/github-logo.png";
import microsoftLogo from "../../assets/microsoft-logo.png";
import SignInForm from "./login/SignInForm";

export default function SignIn() {
  return (
    <div className="flex rounded-2xl border-2 border-black p-20 my-20">
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
        <div className="px-2">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
