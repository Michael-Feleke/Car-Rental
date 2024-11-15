"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../_utils/routes";
import { ROUTE_CONSTANTS } from "../_utils/constants";

function NavigationLists() {
  const pathname = usePathname();

  return (
    <>
      {routes.map((route) => (
        <li key={route.path}>
          <Link
            href={route.path}
            className={`text-xl ${
              pathname === ROUTE_CONSTANTS.home &&
              route.path === ROUTE_CONSTANTS.home
                ? "text-red-500"
                : pathname.startsWith(route.path) &&
                  route.path !== ROUTE_CONSTANTS.home
                ? "text-red-500"
                : "text-gray-300"
            } hover:text-red-500 transition duration-200 ease-in-out`}
          >
            {route.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavigationLists;
