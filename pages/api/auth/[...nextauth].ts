import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/prisma';

const options = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
    // EmailProvider({
    //   server: {
    //     host: process.env.SMTP_HOST,
    //     port: Number(process.env.SMTP_PORT),
    //     auth: {
    //       user: process.env.SMTP_USER,
    //       pass: process.env.SMTP_PASSWORD,
    //     },
    //   },
    //   from: process.env.SMTP_FROM,
    // }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // user object is user from db
      session.userId = user.id; // set user id on session object
      // session.dbUser = user
      return session;
    }
  }
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
