import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET } from "../_config/environments";
import NextAuth, { Session } from "next-auth";
import Google from "next-auth/providers/google";
import { ROUTE_CONSTANTS } from "../_utils/constants";

const authConfig = {
  providers: [
    Google({
      clientId: AUTH_GOOGLE_ID,
      clientSecret: AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }: { auth: Session | null }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: ROUTE_CONSTANTS.login,
    // signOut: "/auth/signout",
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: null,
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
