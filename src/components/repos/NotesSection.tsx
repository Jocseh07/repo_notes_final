import NotesCard from "./NotesCard";
import AddNote from "./AddNote";
import {api} from "~/trpc/server";

export default function NotesSection({ repoId }: { repoId: string }) {
    const addNotes = async ({title, content}:{title:string, content:string}) => {
        "use server";
        await api.notes.createNotes({title, repoId, content,});
    }
  return (
    <div className="grid grid-cols-[300px_1fr] gap-4 p-4 sm:p-6">
      <AddNote handleAddNote={addNotes} />
      <div className="bg-background flex flex-col gap-4 rounded-lg border p-4 shadow-lg sm:p-6">
        <h2 className="text-xl font-semibold">Notes</h2>
        <div className="grid max-h-[500px] gap-4 overflow-auto">
          <NotesCard />
          <NotesCard />
          <NotesCard />
        </div>
      </div>
    </div>
  );
}
