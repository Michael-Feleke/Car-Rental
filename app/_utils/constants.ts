export const ROUTE_CONSTANTS = {
  home: "/",
  cars: "/cars",
  about: "/about",
  booking: "/booking",
  account: {
    base: "/account",
    profile: "/account/profile",
    reservations: "/account/reservations",
  },
};

// revalidate time in seconds
export const CAR_LISTS_REVALIDATE_TIME = 3600;
export const ABOUT_PAGE_REVALIDATE_TIME = 86400;

// api URL
export const COUNTRIES_API_URL = "https://restcountries.com/v3.1/all";
