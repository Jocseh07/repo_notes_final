import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { branchesRouter } from "./routers/branches";
import { repositoryRouter } from "./routers/repos";
import { userRouter } from "./routers/users";
import { releasesRouter } from "./routers/releases";
import { ratesRouter } from "./routers/rates";
import { accountsRouter } from "./routers/accounts";
import { notesRouter } from "./routers/notes";
import { commitsRouter } from "./routers/commits";
import { issuesRouter } from "./routers/issues";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  repos: repositoryRouter,
  users: userRouter,
  branches: branchesRouter,
  releases: releasesRouter,
  rates: ratesRouter,
  accounts: accountsRouter,
  notes: notesRouter,
  commits: commitsRouter,
  issues: issuesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
