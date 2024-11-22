import { LogLevels } from "./enums";

export const ROUTE_CONSTANTS = {
  home: "/",
  cars: "/cars",
  about: "/about",
  account: {
    base: "/account",
    profile: "/account/profile",
    reservations: {
      base: "/account/reservations",
      edit: "/account/reservations/edit",
      delete: "/account/reservations/delete",
    },
  },
  thankyou: "/cars/thankyou",
  login: "/login",
};

export const LOG_LEVELS = {
  [LogLevels.Debug]: 0,
  [LogLevels.Info]: 1,
  [LogLevels.Warn]: 2,
  [LogLevels.Error]: 3,
} as const;

export const COLORS = {
  [LogLevels.Info]: "\x1b[32m", // Green
  [LogLevels.Warn]: "\x1b[33m", // Yellow
  [LogLevels.Error]: "\x1b[31m", // Red
  [LogLevels.Debug]: "\x1b[34m", // Blue
  reset: "\x1b[0m", // Reset to default
};

export const ABOUT_PAGE_REVALIDATE_TIME = 86400;

export const COUNTRIES_API_URL = "https://restcountries.com/v3.1/all";
