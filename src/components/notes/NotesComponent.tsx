import { api } from "~/trpc/server";
import NotesPageCards from "./NotesPageCards";
import LimitError from "../common/LimitError";

const NotesComponent = async () => {
  const AllNotes = await api.notes.getNotes({});
  if (!AllNotes) {
    return <LimitError />;
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
