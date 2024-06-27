"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { createNote } from "~/utils/createNote";

const TitleSchema = z
  .string()
  .min(3, "Minimum 3 chars")
  .max(20, "< 20 characters");
const ContentSchema = z.string().min(3, "Minimum 3 chars");

function AddNote({ repoId }: { repoId: string }) {
  const [titleError, setTitleError] = useState<string | null>(null);
  const [contentError, setContentError] = useState<string | null>(null);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitleError(null);
    setContentError(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const titlePass = TitleSchema.safeParse({ title });
    const contentPass = ContentSchema.safeParse({ content });
    if (!titlePass.success) {
      setTitleError(titlePass.error.errors.map((e) => e.message).join(", "));
      return;
    }
    if (!contentPass.success) {
      setContentError(
        contentPass.error.errors.map((e) => e.message).join(", "),
      );
      return;
    }
    const createData = {
      title,
      content,
      repoId,
    };
    void createNote(createData);
  };

  return (
    <form onSubmit={handleAdd}>
      <div className="bg-background flex flex-col gap-4 rounded-lg border p-4 sm:p-6">
        <h2 className="text-xl font-semibold">Add/Edit Note</h2>
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            name="title"
            placeholder="Enter note title"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            placeholder="Enter note content"
            className="min-h-[150px]"
            name="content"
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" disabled={!!titleError ?? !!contentError}>
            Save Note
          </Button>
        </div>
        {titleError && <p className="text-red-500">{titleError}</p>}
        {contentError && <p className="text-red-500">{contentError}</p>}
      </div>
    </form>
  );
}
export default AddNote;
