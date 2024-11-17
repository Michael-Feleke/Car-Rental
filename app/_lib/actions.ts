"use server";

import { ROUTE_CONSTANTS } from "../_utils/constants";
import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "http://localhost:3000/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: ROUTE_CONSTANTS.home });
}
