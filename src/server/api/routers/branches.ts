// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { GetBranchesSchema } from "~/types";
import getBranches from "~/utils/getBranches";

export const branchesRouter = createTRPCRouter({
  getBranches: publicProcedure
    .input(GetBranchesSchema)
    .query(async ({ input }) => {
      const branches = await getBranches(input);
      return branches;
    }),
});
