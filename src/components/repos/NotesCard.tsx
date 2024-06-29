import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { api } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import { readableDate } from "~/utils/readableDate";
import EditButtons from "./EditButtons";
import { revalidatePath } from "next/cache";

async function NotesCard({
  repoId,
  repoName,
}: {
  repoId: string;
  repoName: string;
}) {
  const session = await getServerAuthSession();
  if (!session) return;
  const allNotes = await api.notes.getNotes({ repoId });
  if (!allNotes) return null;
  const notes = allNotes.reverse();
  async function handleDelete(id: string) {
    "use server";
    await api.notes.deleteNotes({ id });
    revalidatePath(`/repos/${repoName}`);
  }
  return (
    <div className="grid gap-2">
      {notes.map((note) => (
        <Card key={note.id} className="grid gap-2 shadow-lg">
          <CardHeader className="grid grid-cols-2 gap-2">
            <div className="">
              <CardTitle>{note.title}</CardTitle>
              <CardDescription>
                {readableDate(note.createdAt.toDateString())}
              </CardDescription>
            </div>
            <EditButtons onDelete={handleDelete} id={note.id} />
          </CardHeader>
          <CardContent>
            <p>{note.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default NotesCard;

{
  /*<>*/
}
{
  /*  <Card className="shadow-lg">*/
}
{
  /*    <CardHeader>*/
}
{
  /*      <CardTitle>Meeting Notes</CardTitle>*/
}
{
  /*      <CardDescription>2023-06-27</CardDescription>*/
}
{
  /*    </CardHeader>*/
}
{
  /*    <CardContent>*/
}
{
  /*      <p>*/
}
{
  /*        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam*/
}
{
  /*        auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec*/
}
{
  /*        ultricies nunc nisl nec nunc.*/
}
{
  /*      </p>*/
}
{
  /*    </CardContent>*/
}
{
  /*    <CardFooter className="flex justify-end gap-2">*/
}
{
  /*      <Button variant="outline" size="sm">*/
}
{
  /*        <FilePenIcon className="h-4 w-4" />*/
}
{
  /*        <span className="sr-only">Edit</span>*/
}
{
  /*      </Button>*/
}
{
  /*      <Button variant="outline" size="sm" color="destructive">*/
}
{
  /*        <Trash2Icon className="h-4 w-4" />*/
}
{
  /*        <span className="sr-only">Delete</span>*/
}
{
  /*      </Button>*/
}
{
  /*    </CardFooter>*/
}
{
  /*  </Card>*/
}
{
  /*  <Card className="shadow-lg">*/
}
{
  /*    <CardHeader>*/
}
{
  /*      <CardTitle>Project Roadmap</CardTitle>*/
}
{
  /*      <CardDescription>2023-06-25</CardDescription>*/
}
{
  /*    </CardHeader>*/
}
{
  /*    <CardContent>*/
}
{
  /*      <p>*/
}
{
  /*        Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies*/
}
{
  /*        nunc, nec ultricies nunc nisl nec nunc.*/
}
{
  /*      </p>*/
}
{
  /*    </CardContent>*/
}
{
  /*    <CardFooter className="flex justify-end gap-2">*/
}
{
  /*      <Button variant="outline" size="sm">*/
}
{
  /*        <FilePenIcon className="h-4 w-4" />*/
}
{
  /*        <span className="sr-only">Edit</span>*/
}
{
  /*      </Button>*/
}
{
  /*      <Button variant="outline" size="sm" color="destructive">*/
}
{
  /*        <Trash2Icon className="h-4 w-4" />*/
}
{
  /*        <span className="sr-only">Delete</span>*/
}
{
  /*      </Button>*/
}
{
  /*    </CardFooter>*/
}
{
  /*  </Card>*/
}
{
  /*  <Card className="shadow-lg">*/
}
{
  /*    <CardHeader>*/
}
{
  /*      <CardTitle>Daily Standup</CardTitle>*/
}
{
  /*      <CardDescription>2023-06-23</CardDescription>*/
}
{
  /*    </CardHeader>*/
}
{
  /*    <CardContent>*/
}
{
  /*      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/
}
{
  /*    </CardContent>*/
}
{
  /*    <CardFooter className="flex justify-end gap-2">*/
}
{
  /*      <Button variant="outline" size="sm">*/
}
{
  /*        <FilePenIcon className="h-4 w-4" />*/
}
{
  /*        <span className="sr-only">Edit</span>*/
}
{
  /*      </Button>*/
}
{
  /*      <Button variant="outline" size="sm" color="destructive">*/
}
{
  /*        <Trash2Icon className="h-4 w-4" />*/
}
{
  /*        <span className="sr-only">Delete</span>*/
}
{
  /*      </Button>*/
}
{
  /*    </CardFooter>*/
}
{
  /*  </Card>*/
}
{
  /*</>*/
}
//
