import Link from "next/link";
import NavigationLists from "./NavigationLists";
import Image from "next/image";
import { ROUTE_CONSTANTS } from "../_utils/constants";
import { auth } from "../_lib/auth";

async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10">
      <ul className="flex space-x-8 p-2 items-center">
        <NavigationLists />
        <li>
          {session?.user?.image && (
            <Link href={ROUTE_CONSTANTS.account.base}>
              <Image
                width={40}
                height={40}
                src={session?.user?.image}
                className="rounded-full"
                alt={session?.user?.name || "image of the google user"}
                referrerPolicy="no-referrer"
              />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
