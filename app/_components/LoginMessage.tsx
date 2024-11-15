import Link from "next/link";
import { ROUTE_CONSTANTS } from "../_utils/constants";

function LoginMessage() {
  return (
    <div className="grid bg-gray-800 p-10">
      <p className="text-center text-xl py-12 self-center">
        Please{" "}
        <Link href={ROUTE_CONSTANTS.login} className="underline text-red-500">
          Login
        </Link>{" "}
        to reserve this
        <br /> car right now!
      </p>
    </div>
  );
}

export default LoginMessage;
