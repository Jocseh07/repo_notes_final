// import { z } from "zod";

import { eq } from "drizzle-orm";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { accounts } from "~/server/db/schema";

export const accountsRouter = createTRPCRouter({
  getToken: protectedProcedure.query(async ({ ctx }) => {
    const token = await ctx.db
      .selectDistinct({ access_token: accounts.access_token })
      .from(accounts)
      .where(eq(accounts.userId, ctx.session.user.id));
    return token[0]?.access_token;
  }),
  getAccountId: protectedProcedure.query(async ({ ctx }) => {
    const token = await ctx.db
      .selectDistinct({ accountId: accounts.providerAccountId })
      .from(accounts)
      .where(eq(accounts.userId, ctx.session.user.id));
    return token[0]?.accountId;
  }),
});
