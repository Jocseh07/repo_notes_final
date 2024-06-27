// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { GetReleasesSchema } from "~/types";
import getReleases from "~/utils/getReleases";

export const releasesRouter = createTRPCRouter({
  getReleases: publicProcedure
    .input(GetReleasesSchema)
    .query(async ({ input }) => {
      const releases = await getReleases(input);
      return releases;
    }),

});
