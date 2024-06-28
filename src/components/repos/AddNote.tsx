"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { z } from "zod";

const noteSchema = z.object({title: z.string().min(1, "Minimum 3 characters"), content: z.string().min(1, "Minimum 3 characters")})

export default function AddNote({handleAddNote} : {handleAddNote: (title:string, content:string) => void}) {

    const handleAdd = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
       handleAddNote(formData);
    }
    return (
        <form onSubmit={handleAdd}>
          <div className="flex flex-col gap-4 rounded-lg border bg-background p-4 sm:p-6">
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
              <Button type="submit" >
                Save Note
              </Button>
            </div>
          </div>
        </form>
    );
  }
