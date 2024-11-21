"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { accountRoutes } from "../_utils/routes";
import Link from "next/link";
import SignOutButton from "./SingOutButton";
import { usePathname } from "next/navigation";
import { ROUTE_CONSTANTS } from "../_utils/constants";

function SideNavigation() {
  const pathName = usePathname();
  return (
    <nav className="border-r border-gray-800">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {accountRoutes.map((route) => (
          <li key={route.label}>
            <Link
              className={`py-3 px-5 hover:bg-gray-800 text-gray-300  transition-colors flex items-center gap-4 font-semibold  ${
                pathName === ROUTE_CONSTANTS.account.base &&
                route.path === ROUTE_CONSTANTS.account.base
                  ? "bg-gray-800"
                  : pathName.startsWith(route.path) &&
                    route.path !== ROUTE_CONSTANTS.account.base
                  ? "bg-gray-800"
                  : ""
              }`}
              href={route.path}
            >
              {route.label === "Home" && (
                <HomeIcon className="h-5 w-5 text-primary-600" />
              )}
              {route.label === "Reservations" && (
                <CalendarDaysIcon className="h-5 w-5 text-primary-600" />
              )}
              {route.label === "Profile" && (
                <UserIcon className="h-5 w-5 text-primary-600" />
              )}
              <span>{route.label}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
