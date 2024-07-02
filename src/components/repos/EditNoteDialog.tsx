"use client";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { editNoteAction } from "~/utils/addEditActions";
import { FilePenIcon } from "lucide-react";

function EditNoteDialog({
  repoId,
  repoName,
  title,
  content,
  id,
}: {
  repoId: string;
  repoName: string;
  content: string;
  title: string;
  id: string;
}) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("repoId", repoId);
    formData.append("repoName", repoName);
    formData.append("id", id);
    await editNoteAction(formData);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className="rounded-full" asChild>
          <FilePenIcon className="h-4 w-4" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Edit your note</DialogTitle>
              <DialogDescription>
                Make changes to your notes here. Click save when you&#39;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  name="title"
                  defaultValue={title}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Content
                </Label>
                <Input
                  id="username"
                  defaultValue={content}
                  name="content"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogTrigger asChild>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogTrigger>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditNoteDialog;
