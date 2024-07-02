"use client";
import { TrashIcon } from "lucide-react";
import { Button } from "../ui/button";
import EditNoteDialog from "./EditNoteDialog";
import { deleteNoteAction } from "~/utils/addEditActions";

export default function EditButtons({
  repoId,
  repoName,
  id,
  title,
  content,
}: {
  repoId: string;
  repoName: string;
  id: string;
  title: string;
  content: string;
}) {
  return (
    <div className="flex justify-end gap-2">
      <Button variant="outline" size="sm">
        <EditNoteDialog
          id={id}
          title={title}
          content={content}
          repoName={repoName}
          repoId={repoId}
        />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="rounded-full text-red-500"
        onClick={() => deleteNoteAction(id, repoName)}
        color="destructive"
      >
        <TrashIcon className="h-5 w-5" />
        <span className="sr-only">Delete</span>
      </Button>
    </div>
  );
}
