import { FilePenIcon, Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { api } from "~/trpc/server";

async function NotesCard() {
  const notes = await api.notes.getNotes({});
  if (!notes) return null;
  return (
    <>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Meeting Notes</CardTitle>
          <CardDescription>2023-06-27</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec
            ultricies nunc nisl nec nunc.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            <FilePenIcon className="h-4 w-4" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button variant="outline" size="sm" color="destructive">
            <Trash2Icon className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </CardFooter>
      </Card>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Project Roadmap</CardTitle>
          <CardDescription>2023-06-25</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies
            nunc, nec ultricies nunc nisl nec nunc.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            <FilePenIcon className="h-4 w-4" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button variant="outline" size="sm" color="destructive">
            <Trash2Icon className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </CardFooter>
      </Card>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Daily Standup</CardTitle>
          <CardDescription>2023-06-23</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            <FilePenIcon className="h-4 w-4" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button variant="outline" size="sm" color="destructive">
            <Trash2Icon className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </CardFooter>
      </Card>
    </>
    // <div>
    //   {notes.map((note) => (
    //     <Card key={note.id} className="shadow-lg">
    //       <CardHeader>
    //         <CardTitle>{note.title}</CardTitle>
    //         <CardDescription>{note.createdAt}</CardDescription>
    //       </CardHeader>
    //       <CardContent>
    //         <p>{note.content}</p>
    //       </CardContent>
    //       <CardFooter className="flex justify-end gap-2">
    //         <Button variant="outline" size="sm">
    //           <FilePenIcon className="h-4 w-4" />
    //           <span className="sr-only">Edit</span>
    //         </Button>
    //         <Button variant="outline" size="sm" color="destructive">
    //           <Trash2Icon className="h-4 w-4" />
    //           <span className="sr-only">Delete</span>
    //         </Button>
    //       </CardFooter>
    //     </Card>
    //   ))}
    // </div>
  );
}
export default NotesCard;
