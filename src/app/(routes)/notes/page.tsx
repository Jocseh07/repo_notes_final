import NavBar from "~/components/common/NavBar";
import NotesPage from "~/components/notes/NotesPage";
import { Separator } from "~/components/ui/separator";

const AllNotesPage = () => {
  return (
    <div className="grid gap-4">
      <NavBar />
      <Separator />
      <NotesPage />
    </div>
  );
};

export default AllNotesPage;
