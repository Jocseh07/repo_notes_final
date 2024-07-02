import Link from "next/link";
import { readableDate } from "~/utils/readableDate";
import EditButtons from "../repos/EditButtons";

interface NotesPageCardsProps {
  note: {
    id: string;
    title: string;
    createdById: string;
    createdAt: Date;
    updatedAt: Date | null;
    content: string;
    repoId: string | null;
    repoName: string | null;
  };
}

const NotesPageCards = ({ note }: NotesPageCardsProps) => {
  return (
    <div>
      <div className="rounded-lg border-l-4 border-primary bg-card px-4 py-2 shadow-sm shadow-primary transition-transform hover:-translate-y-1">
        <div className="flex  justify-between text-base ">
          <h2 className="text-2xl font-bold">{note.title}</h2>
          {note.repoName && (
            <Link
              href={`/repos/${note.repoName}`}
              className="text-muted-foreground underline hover:text-primary"
              prefetch={false}
            >
              {note.repoName}
            </Link>
          )}
          {!note.repoName && (
            <span className="text-muted-foreground">No repo</span>
          )}
        </div>
        <p className="mt-2 text-lg">{note.content}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-muted-foreground">
            Created {readableDate(note.createdAt.toString())}
          </span>
          <div>
            <EditButtons
              repoId={note.repoId ?? ""}
              repoName={note.repoName ?? ""}
              id={note.id}
              title={note.title}
              content={note.content}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesPageCards;
