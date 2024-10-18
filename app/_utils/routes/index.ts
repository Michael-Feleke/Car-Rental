import { routeConstants } from "../constants";
import { IRoute } from "./types";

export const routes: IRoute[] = [
  { path: routeConstants.home, label: "Home" },
  { path: routeConstants.cars, label: "Cars" },
  { path: routeConstants.about, label: "About" },
  { path: routeConstants.account.base, label: "Your Account" },
];

export const accountRoutes: IRoute[] = [
  {
    path: routeConstants.account.base,
    label: "Home",
  },
  {
    path: routeConstants.account.profile,
    label: "Profile",
  },
  {
    path: routeConstants.account.reservations,
    label: "Reservations",
  },
];
