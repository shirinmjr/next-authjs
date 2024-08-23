import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
//import client from "./lib/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { ZodError } from "zod";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import credentials from "next-auth/providers/credentials";
const saltRounds = 10;

const prisma = new PrismaClient();
export type credentials = {
  username: string;
  password: any;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google, //googleProvider: clientId and clientSecret
    github,
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        throw new Error("Username or Password Incorrect!");
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});
