import { api } from "~/trpc/server";
import NotesPageCards from "./NotesPageCards";

const NotesComponent = async () => {
  const AllNotes = await api.notes.getNotes({});
  if (!AllNotes) {
    return <div>No notes found</div>;
  }
  const notes = AllNotes.reverse();
  return (
    <>
      <div className="grid gap-6">
        {notes.map((note) => (
          <NotesPageCards key={note.id} note={note} />
        ))}
      </div>
    </>
  );
};

export default NotesComponent;
