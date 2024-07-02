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
import { addNoteAction } from "~/utils/addEditActions";

function AddNoteDialog({
  repoId,
  repoName,
}: {
  repoId?: string;
  repoName?: string;
}) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("repoId", repoId ?? "");
    formData.append("repoName", repoName ?? "");
    await addNoteAction(formData);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">New Note</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add new note</DialogTitle>
              <DialogDescription>
                Add to your notes here. Click save when you&#39;re done.
              </DialogDescription>
              {/* <DialogDescription>
                Make changes to your notes here. Click save when you&#39;re
                done.
              </DialogDescription> */}
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Title
                </Label>
                <Input name="title" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Content
                </Label>
                <Input id="username" name="content" className="col-span-3" />
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

export default AddNoteDialog;
