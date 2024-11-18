import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "../_config/environments";
import NextAuth, { Session, User } from "next-auth";
import Google from "next-auth/providers/google";
import { ROUTE_CONSTANTS } from "../_utils/constants";
import { createUser, getUser } from "../_services/user";
import { UserInterface } from "../_models/user/types";
import { errorMessages } from "../_utils/messages/errorMessages";
import logger from "../_config/logger";

const authConfig = {
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }: { auth: Session | null }) {
      return !!auth?.user;
    },
    async signIn({ user }: { user: User }) {
      try {
        const email = user?.email ?? "";
        const name = user?.name ?? "";

        if (!email || !name) {
          throw new Error(errorMessages.notValidUser);
        }

        const fetchedUser = await getUser(email);
        if (!fetchedUser)
          await createUser({ email, name } as Omit<UserInterface, "_id">);
        return true;
      } catch (error) {
        if (error instanceof Error)
          logger.error(errorMessages.signInError(error.message));
        return false;
      }
    },
    async session({ session }: { session: Session }) {
      try {
        const email = session.user?.email ?? "";
        if (email) {
          const fetchedUser = await getUser(email);
          if (fetchedUser) {
            session.user.userId = fetchedUser._id;
          }
        }
        return session;
      } catch (error) {
        if (error instanceof Error)
          logger.error(errorMessages.sessionError(error.message));
        return session;
      }
    },
  },
  pages: {
    signIn: ROUTE_CONSTANTS.login,
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
