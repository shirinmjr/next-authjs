import AuthSocialButtons from "../common/AuthSocialButtons";
import { signIn } from "../../app/auth";
export default function SignIn() {
  return (
    <form
    // action={async () => {
    //   "use server";
    //   await signIn("google");
    // }}
    >
      <div className="flex justify-center border-2 border-black gap-2 p-20 m-auto">
        <div className="my-5">
          <AuthSocialButtons loginTo="google" title="Google" />
        </div>
        <div className="my-5">
          <AuthSocialButtons loginTo="github" title="GitHub" />
        </div>
        <div className="my-5">
          <AuthSocialButtons loginTo="microsoft" title="Microsoft" />
        </div>
      </div>
    </form>
  );
}
