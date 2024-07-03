import NotesCard from "./NotesCard";
import { getServerAuthSession } from "~/server/auth";
import AddNoteDialog from "./AddNoteDialog";

export default async function NotesSection({
  repoId,
  repoName,
}: {
  repoId: string;
  repoName: string;
}) {
  const session = await getServerAuthSession();

  return (
    <div className="grid gap-4 p-4 sm:p-6">
      {/* <AddNoteTest /> */}
      <div className="flex grow flex-col gap-4 rounded-lg border bg-background p-4 shadow-lg sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Notes</h2>
          <div>
            <AddNoteDialog repoId={repoId} repoName={repoName} />
          </div>
        </div>
        {!session && (
          <div className="flex items-center justify-center">
            <p className="text-2xl text-gray-500">
              Sign in to add notes for this repository
            </p>
          </div>
        )}
        {session && (
          <div className="grid max-h-[500px] gap-2 overflow-auto">
            <NotesCard repoId={repoId} repoName={repoName} />
          </div>
        )}
      </div>
    </div>
  );
}
