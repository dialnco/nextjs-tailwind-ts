import { PrismaClient } from '@prisma/client';
import prisma from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export type Context = {
  prisma: PrismaClient;
  session: any; // TODO: set session types
};

export async function createContext({ req, res }): Promise<Context> {
  const session = await getSession({ req }); // TODO: credentials not working on graphql studio (/api/graphql)
  return {
    prisma,
    session: session
  };
}
