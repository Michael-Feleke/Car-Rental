import { Session } from "next-auth";
import { errorMessages } from "../messages/errorMessages";
import { auth } from "@/app/_lib/auth";

export async function getSession(): Promise<Session> {
  const session = await auth();
  if (!session) {
    throw new Error(errorMessages.authorizationError);
  }
  return session;
}
