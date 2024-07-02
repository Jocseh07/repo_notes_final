"use server";
import { revalidatePath } from "next/cache";
import { api } from "~/trpc/server";

export const addNoteAction = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const repoId = formData.get("repoId") as string;
  const repoName = formData.get("repoName") as string;
  await api.notes.createNotes({ title, repoId, content, repoName });
  revalidatePath(`/repos/${repoName}`);
};
export const editNoteAction = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const repoId = formData.get("repoId") as string;
  const repoName = formData.get("repoName") as string;
  const id = formData.get("id") as string;
  await api.notes.updateNotes({ title, repoId, content, id });
  revalidatePath(`/repos/${repoName}`);
};

export const deleteNoteAction = async (id: string, repoName: string) => {
  await api.notes.deleteNotes({ id });
  revalidatePath(`/repos/${repoName}`);
};
