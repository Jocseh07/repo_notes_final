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
    if (!session) return;
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
