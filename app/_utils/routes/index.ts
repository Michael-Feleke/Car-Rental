import { ROUTE_CONSTANTS } from "../constants";
import { RouteLabels } from "../enums";
import { IRoute } from "./types";

export const routes: IRoute[] = [
  { path: ROUTE_CONSTANTS.home, label: RouteLabels.Home },
  { path: ROUTE_CONSTANTS.cars, label: RouteLabels.Cars },
  { path: ROUTE_CONSTANTS.about, label: RouteLabels.About },
  { path: ROUTE_CONSTANTS.account.base, label: RouteLabels.Account },
];

export const accountRoutes: IRoute[] = [
  {
    path: ROUTE_CONSTANTS.account.base,
    label: RouteLabels.Home,
  },
  {
    path: ROUTE_CONSTANTS.account.profile,
    label: RouteLabels.Profile,
  },
  {
    path: ROUTE_CONSTANTS.account.reservations,
    label: RouteLabels.Reservations,
  },
];
