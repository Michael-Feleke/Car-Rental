"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../_utils/routes";
import { routeConstants } from "../_utils/constants";

function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="z-10">
      <ul className="flex space-x-8 p-">
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              className={`text-xl ${
                pathname === routeConstants.home &&
                route.path === routeConstants.home
                  ? "text-red-500"
                  : pathname.startsWith(route.path) &&
                    route.path !== routeConstants.home
                  ? "text-red-500"
                  : "text-gray-300"
              } hover:text-red-500 transition duration-200 ease-in-out`}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
