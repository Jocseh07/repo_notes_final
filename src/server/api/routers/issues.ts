// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { GetBranchesSchema } from "~/types";
import getIssues from "~/utils/getIssues";

export const issuesRouter = createTRPCRouter({
  getIssues: publicProcedure
    .input(GetBranchesSchema)
    .query(async ({ input }) => {
      const issues = await getIssues(input);
      return issues;
    }),
});
