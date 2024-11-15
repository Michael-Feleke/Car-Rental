import Image from "next/image";
import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-4 text-lg border border-primary-300 px-8 py-3 font-medium hover:bg-primary-900 hover:text-primary-100 transition-colors">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
          className="h-6 w-6"
        />
        <span>Sign in with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
