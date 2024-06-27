import { GitCommitVerticalIcon } from "lucide-react";
import Link from "next/link";
import { api } from "~/trpc/server";
import type { GetRepoType } from "~/types";

async function CommitsSection({ data }: { data: GetRepoType }) {
  const commits = await api.commits.getCommits({ url: data.commits_url });
  if (!commits) return;
  const lastThreeCommits = commits.slice(0, 3);
  return (
    <div>
      <section>
        <Link href={`${data.html_url}/branches`}>
          <h2 className="mb-4 text-2xl font-bold">Commits</h2>
        </Link>
        <div className="grid gap-4">
          {lastThreeCommits.map((commit) => (
            <div
              key={commit.sha}
              className="bg-muted flex items-center gap-4 rounded-md p-4"
            >
              <div className="bg-muted-foreground/10 rounded-md p-2">
                <GitCommitVerticalIcon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <Link
                  href={`${commit.html_url}`}
                  className="overflow-hidden  text-ellipsis font-medium"
                >
                  {commit.commit.message.slice(0, 200)}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default CommitsSection;
