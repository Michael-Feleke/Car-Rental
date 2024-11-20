import { ROUTE_CONSTANTS } from "@/app/_utils/constants";
import Link from "next/link";

function NotFound() {
  return (
    <p className="text-lg">
      You have no reservations yet. Check out our{" "}
      <Link className="underline text-red-500" href={ROUTE_CONSTANTS.cars}>
        available cars &rarr;
      </Link>
    </p>
  );
}

export default NotFound;
