import { type GetRepoType } from "~/types";
import BranchesSection from "./BranchesSection";
import IssuesSection from "./IssuesSection";
import CommitsSection from "./CommitsSection";
import RepositoryPageHeader from "./RepositoryPageHeader";
import ReleasesSection from "./ReleasesSection";
import UserSection from "./UserSection";
import { Separator } from "../ui/separator";
import NotesSection from "./NotesSection";

export async function RepositoryPage({ data }: { data: GetRepoType }) {
  return (
    <div>
      <div className="py-4">
        <Separator />
      </div>
      <RepositoryPageHeader data={data} />
      <div className="mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8">
          <NotesSection repoId={data.id} />
          <div>
            <UserSection user={data.owner} />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <BranchesSection data={data} />
            <ReleasesSection data={data} />
          </div>
          <CommitsSection data={data} />
          <IssuesSection data={data} />
        </div>
      </div>
    </div>
  );
}
