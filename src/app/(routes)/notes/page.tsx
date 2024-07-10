import NotesPage from "~/components/notes/NotesPage";
import { Separator } from "~/components/ui/separator";

const AllNotesPage = () => {
  // Notes component
  return (
    <div className="grid gap-4">
      <Separator />
      <NotesPage />
    </div>
  );
};

export default AllNotesPage;
