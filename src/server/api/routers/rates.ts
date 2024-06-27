// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getRates } from "~/utils/getRates";

export const ratesRouter = createTRPCRouter({
  getRates: publicProcedure.query(async () => {
    const rates = await getRates();
    return rates;
  }),

});
