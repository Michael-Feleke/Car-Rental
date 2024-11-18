import { errorMessages } from "@/app/_utils/messages/errorMessages";
import logger from "@/app/_config/logger";
import { Country } from "./types";
import axios from "axios";
import { COUNTRIES_API_URL } from "@/app/_utils/constants";

export async function getCountries() {
  try {
    const response = await axios.get(COUNTRIES_API_URL);
    const data: Country[] = response.data;

    return data
      .map((country) => ({
        name: country.name.common,
        flag: country.flags.png,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(errorMessages.countryFetchFailed(error.message));
      throw new Error(errorMessages.countryFetchFailed(error.message));
    } else
      logger.error(
        errorMessages.countryFetchFailed(errorMessages.unknownError)
      );
    return [];
  }
}
