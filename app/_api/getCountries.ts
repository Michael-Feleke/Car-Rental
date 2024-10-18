// _lib/data-service.js

import { Country } from "./types";

export async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data: Country[] = await response.json();

    return data
      .map((country) => ({
        name: country.name.common,
        flag: country.flags.png,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    return [];
  }
}
