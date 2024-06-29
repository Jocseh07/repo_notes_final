"use client";
import { FilePenIcon, Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";

export default function EditButtons({
  onDelete,
  id,
}: {
  onDelete: (id: string) => Promise<void>;
  id: string;
}) {
  return (
    <div className="flex justify-end gap-2">
      <Button variant="outline" size="sm">
        <FilePenIcon className="h-4 w-4" />
        <span className="sr-only">Edit</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onDelete(id)}
        color="destructive"
      >
        <Trash2Icon className="h-4 w-4" />
        <span className="sr-only">Delete</span>
      </Button>
    </div>
  );
}
