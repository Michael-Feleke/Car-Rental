import { ROUTE_CONSTANTS } from "@/app/_utils/constants";
import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        Thank you for your reservation!
      </h1>
      <Link
        href={ROUTE_CONSTANTS.account.reservations.base}
        className="underline text-xl text-red-500 inline-block"
      >
        Manage your reservations &rarr;
      </Link>
    </div>
  );
}
