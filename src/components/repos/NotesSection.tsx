import AddNote from "./AddNote";
import { api } from "~/trpc/server";
import { revalidatePath } from "next/cache";
import NotesCard from "./NotesCard";

export default function NotesSection({
  repoId,
  repoName,
}: {
  repoId: string;
  repoName: string;
}) {
  const addNotes = async (title: string, content: string) => {
    "use server";
    await api.notes.createNotes({ title, repoId, content });
    revalidatePath(`/repos/${repoName}`);
  };
  return (
    <div className="grid grid-cols-[300px_1fr] gap-4 p-4 sm:p-6">
      <AddNote handleAddNote={addNotes} />
      <div className="flex flex-col gap-4 rounded-lg border bg-background p-4 shadow-lg sm:p-6">
        <h2 className="text-xl font-semibold">Notes</h2>
        <div className="grid max-h-[500px] gap-2 overflow-auto">
          <NotesCard repoId={repoId} repoName={repoName} />
        </div>
      </div>
    </div>
  );
}
