import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import client from "./lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";

const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    Google,
    github,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          // const { email, password } = await signInSchema.parseAsync(
          //   credentials
          // );
          // const pwHash = bcrypt.hashSync(password, saltRounds);

          // logic to verify if the user exists
          // user = await getUserFromDb(email, pwHash);

          if (!user) {
            throw new Error("User not found.");
          }

          // return JSON object with the user data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
  ],
});
// bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
//   // Store hash in your password DB.
// });
