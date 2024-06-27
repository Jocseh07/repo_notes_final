import { DoorOpenIcon, GitBranchIcon, Github, StarIcon } from "lucide-react";
import Link from "next/link";
import { api } from "~/trpc/server";
import type { GetRepoType } from "~/types";

async function RepositoryPageHeader({ data }: { data: GetRepoType }) {
  const branches = await api.branches.getBranches({ url: data.branches_url });
  if (!branches) return;
  let branchCount = 0;
  if (branches) {
    branchCount = branches.length;
  }
  return (
    <div>
      <header className="bg-secondary text-primary px-4 py-8 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-4 md:grid-cols-[1fr_300px]">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">{data.full_name}</h1>
              <p className="text-muted-foreground">{data.description}</p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <Link href={data.html_url}>
                <Github className="ml-2 inline-block h-6 w-6" />
              </Link>
              <div className="bg-primary-foreground/20 flex items-center gap-1 rounded-md px-3 py-1 text-sm">
                <StarIcon className="h-4 w-4" />
                <span>{data.stargazers_count}</span>
              </div>
              <div className="bg-primary-foreground/20 flex items-center gap-1 rounded-md px-3 py-1 text-sm">
                <GitBranchIcon className="h-4 w-4" />
                <span>{branchCount}</span>
              </div>
              <div className="bg-primary-foreground/20 flex items-center gap-1 rounded-md px-3 py-1 text-sm">
                <DoorOpenIcon className="h-4 w-4" />
                <span>{data.open_issues}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default RepositoryPageHeader;
