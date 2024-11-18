"use server";

import { revalidatePath } from "next/cache";
import { updateProfileSchema } from "../_schema/validationSchema";
import { updateUser } from "../_services/user";
import { ROUTE_CONSTANTS } from "../_utils/constants";
import { withMiddleware } from "../_utils/helpers/withMiddleware";
import { errorMessages } from "../_utils/messages/errorMessages";
import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google", { redirectTo: ROUTE_CONSTANTS.account.base });
}

export async function signOutAction() {
  await signOut({ redirectTo: ROUTE_CONSTANTS.home });
}

export const updateProfile = withMiddleware(async (session, formData) => {
  const userId = session.user?.userId;
  if (!userId) throw new Error(errorMessages.authorizationError);

  const countryValue = formData.get("country");
  let country = "";
  let countryFlag = "";

  if (typeof countryValue === "string") {
    [country, countryFlag] = countryValue.split("%");
  }

  const drivingLicense = formData.get("drivingLicense") as string;

  await updateUser(userId, {
    country,
    countryFlag,
    drivingLicense,
  });

  revalidatePath(
    `${ROUTE_CONSTANTS.account.base}/${ROUTE_CONSTANTS.account.profile}`
  );
}, updateProfileSchema);
