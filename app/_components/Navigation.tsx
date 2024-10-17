"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../_utils/routes";

function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex space-x-8 p-4 bg-background">
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              className={`text-xl ${
                pathname === route.path ? "text-red-500" : "text-gray-300"
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
