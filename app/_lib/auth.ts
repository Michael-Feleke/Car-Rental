import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET } from "../_config/environments";
import NextAuth, { Session } from "next-auth";
import Google from "next-auth/providers/google";

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
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
