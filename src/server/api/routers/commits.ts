// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { GetBranchesSchema } from "~/types";
import getCommits from "~/utils/getCommits";

export const commitsRouter = createTRPCRouter({
  getCommits: publicProcedure
    .input(GetBranchesSchema)
    .query(async ({ input }) => {
      const commits = await getCommits(input);
      return commits;
    }),
});
