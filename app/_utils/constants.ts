export const ROUTE_CONSTANTS = {
  home: "/",
  cars: "/cars",
  about: "/about",
  account: {
    base: "/account",
    profile: "/account/profile",
    reservations: "/account/reservations",
  },
  login: "/login",
};

export const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
} as const;

export const ABOUT_PAGE_REVALIDATE_TIME = 86400;

export const COUNTRIES_API_URL = "https://restcountries.com/v3.1/all";
