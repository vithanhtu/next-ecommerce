import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connectDB from "@/config/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
import Cookies from "js-cookie";
import { signToken } from "@/utils/auth";

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.ACCESS_TOKEN_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      async authorize(credentials, req) {
        connectDB();
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        // const access_token = localStorage.getItem("accessToken");
        // console.log(access_token);

        if (!user) {
          throw new Error("No user Found with Email Please Sign Up...!");
        }

        const checkPassword = bcrypt.compareSync(password, user.password);
        if (!checkPassword || user.email !== credentials.email) {
          throw new Error("Username or password doen't match");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      let accessToken = signToken(token._doc);
      session.user = { ...token._doc, accessToken };

      return session;
    },
  },
};

export default NextAuth(authOptions);
