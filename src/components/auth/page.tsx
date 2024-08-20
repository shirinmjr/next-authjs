import AuthSocialButtons from "../common/AuthSocialButtons";
import googleLogo from "../../assets/google-logo.png";
import githubLogo from "../../assets/github-logo.png";
import microsoftLogo from "../../assets/microsoft-logo.png";

export default function SignIn() {
  return (
    <div className="flex justify-center rounded-2xl border-2 border-black gap-2 p-20 m-auto">
      <div className="flex flex-col">
        <img
          className="rounded-2xl border-2"
          src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
        />
        <div className="my-5">
          <AuthSocialButtons
            loginTo="google"
            title="Google"
            socialLogo={googleLogo.src}
          />
        </div>
        <div className="my-5">
          <AuthSocialButtons
            loginTo="github"
            title="GitHub"
            socialLogo={githubLogo.src}
          />
        </div>
        <div className="my-5">
          <AuthSocialButtons
            loginTo="microsoft"
            title="Microsoft"
            socialLogo={microsoftLogo.src}
          />
        </div>
      </div>
    </div>
  );
}
