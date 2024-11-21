"use server";

import { revalidatePath } from "next/cache";
import { updateProfileSchema } from "../_schema/validationSchema";
import { updateUser } from "../_services/user";
import { ROUTE_CONSTANTS } from "../_utils/constants";
import { errorMessages } from "../_utils/messages/errorMessages";
import { signIn, signOut } from "./auth";
import { deleteReservation, getReservations } from "../_services/reservation";
import { getSession } from "../_utils/helpers/getSession";
import { validateFormData } from "../_utils/helpers/validateFormData";
import { ObjectId } from "mongodb";

export async function signInAction() {
  await signIn("google", { redirectTo: ROUTE_CONSTANTS.account.base });
}

export async function signOutAction() {
  await signOut({ redirectTo: ROUTE_CONSTANTS.home });
}

export async function updateProfile(formData: FormData) {
  const session = await getSession();

  await validateFormData(formData, updateProfileSchema);

  const userId = session.user?.userId;
  if (!userId) throw new Error(errorMessages.authorizationError);

  const countryValue = formData?.get("country");
  let country = "";
  let countryFlag = "";

  if (typeof countryValue === "string") {
    [country, countryFlag] = countryValue.split("%");
  }

  const drivingLicense = formData?.get("drivingLicense") as string;

  await updateUser(userId, {
    country,
    countryFlag,
    drivingLicense,
  });

  revalidatePath(
    `${ROUTE_CONSTANTS.account.base}/${ROUTE_CONSTANTS.account.profile}`
  );
}

export async function handleDeleteReservation(reservationId: string) {
  const session = await getSession();
  const userId = session.user?.userId || "";

  if (!ObjectId.isValid(reservationId)) {
    throw new Error(errorMessages.invalidObjectId);
  }

  const userReservations = await getReservations(userId);

  const userReservationIds = userReservations.map((reservation) =>
    reservation._id.toString()
  );

  if (!userReservationIds.includes(reservationId))
    throw new Error(errorMessages.unauthorizedDelete);

  await deleteReservation(reservationId);
  revalidatePath(`${ROUTE_CONSTANTS.account.reservations}`);
}
