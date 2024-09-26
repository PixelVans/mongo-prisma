import { PrismaClient } from "@prisma/client/extension";

// Use a global variable to avoid creating multiple instances of PrismaClient in development.
const globalForPrisma = global as unknown as  { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'] // Enable query logging
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
