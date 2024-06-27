import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { GetRepoSchema, GetSearchSchema } from "~/types";
import getPopularRepos from "~/utils/getPopularRepos";
import getRepo from "~/utils/getRepo";
import getUserRepos from "~/utils/getUserRepos";
import searchRepositories from "~/utils/searchRepositories";

export const repositoryRouter = createTRPCRouter({
  searchRepos: publicProcedure
    .input(GetSearchSchema)
    .query(async ({ input }) => {
      const repos = await searchRepositories(input);
      return repos;
    }),
  getPopularRepos: publicProcedure
    .input(z.object({ language: z.string() }))
    .query(async ({ input }) => {
      const repos = await getPopularRepos(input);
      return repos;
    }),
  getUserRepos: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(async ({ input }) => {
      const repos = await getUserRepos(input);
      return repos;
    }),
  getRepo: publicProcedure.input(GetRepoSchema).query(async ({ input }) => {
    const repo = await getRepo(input);
    return repo;
  }),
});
