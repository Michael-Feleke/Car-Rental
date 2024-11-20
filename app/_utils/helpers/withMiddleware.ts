import { auth } from "@/app/_lib/auth";
import { errorMessages } from "../messages/errorMessages";
import { Session } from "next-auth";
import { Schema } from "joi";

export function withMiddleware(
  handler: (session: Session, formData?: FormData) => Promise<void>,
  schema?: Schema
) {
  return async (formData: FormData) => {
    const session = await auth();
    if (!session) {
      throw new Error(errorMessages.authorizationError);
    }

    if (schema) {
      const { error } = schema.validate(Object.fromEntries(formData.entries()));
      if (error) {
        throw new Error(error.details[0].message);
      }
    }

    return handler(session, formData);
  };
}
