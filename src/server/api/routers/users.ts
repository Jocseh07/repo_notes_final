// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { GetSearchSchema, GetUserSchema } from "~/types";
import getUser from "~/utils/getUser";

import searchUsers from "~/utils/searchUsers";

export const userRouter = createTRPCRouter({
  searchUsers: publicProcedure
    .input(GetSearchSchema)
    .query(async ({ input }) => {
      const users = await searchUsers(input);
      return users;
    }),
  getUser: publicProcedure.input(GetUserSchema).query(async ({ input }) => {
    const user = await getUser(input);
    return user;
  }),
});
