import { api } from "~/trpc/server";
import NotesPageCards from "./NotesPageCards";

const NotesComponent = async () => {
  const notes = await api.notes.getNotes({});
  if (!notes) {
    return <div>No notes found</div>;
  }
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
