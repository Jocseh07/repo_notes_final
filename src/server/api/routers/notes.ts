import { z } from "zod";

import { and, eq } from "drizzle-orm";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { notes } from "~/server/db/schema";
import { CreateNotesSchema, GetNotesSchema, UpdateNotesSchema } from "~/types";

export const notesRouter = createTRPCRouter({
  getNotes: protectedProcedure
    .input(GetNotesSchema)
    .query(async ({ ctx, input }) => {
      const conditions = [eq(notes.createdById, ctx.session.user.id)];

      if (input.repoId) {
        conditions.push(eq(notes.repoId, input.repoId));
      }

      if (input.title) {
        conditions.push(eq(notes.title, input.title));
      }

      const all = await ctx.db.query.notes.findMany({
        where: and(...conditions),
      });
      return all;
    }),
  createNotes: protectedProcedure
    .input(CreateNotesSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(notes).values({
        content: input.content,
        repoId: input.repoId,
        title: input.title,
        repoName: input.repoName,
        createdById: ctx.session.user.id,
      });
    }),
  updateNotes: protectedProcedure
    .input(UpdateNotesSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(notes)
        .set({ title: input.title, content: input.content })
        .where(
          and(
            eq(notes.createdById, ctx.session.user.id),
            eq(notes.repoId, input.repoId),
            eq(notes.id, input.id),
          ),
        );
    }),
  deleteNotes: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(notes).where(eq(notes.id, input.id));
    }),
});
