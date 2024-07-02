import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { getServerAuthSession } from "~/server/auth";
import NotesComponent from "./NotesComponent";
import AddNoteDialog from "../repos/AddNoteDialog";

export default async function NotesPage() {
  const session = await getServerAuthSession();
  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between bg-secondary px-6 py-4 text-primary shadow-md">
        <h1 className="text-3xl font-bold">My Notes</h1>
        <Button variant="secondary" size="sm" className="rounded-full">
          <AddNoteDialog />
        </Button>
      </header>
      <main className="flex-1 overflow-auto p-8">
        {!session && <div>Sign in to add Notes</div>}
        {session && <NotesComponent />}
      </main>
    </div>
  );
}
