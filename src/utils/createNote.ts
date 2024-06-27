"use server";

import { api } from "~/trpc/server";

export async function createNote(note: {
  title: string;
  content: string;
  repoId: string;
}) {
  console.log(note);
  await api.notes.createNote(note);
}
