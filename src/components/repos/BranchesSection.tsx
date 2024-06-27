import { GitBranchIcon } from "lucide-react";
import Link from "next/link";
import { api } from "~/trpc/server";
import type { GetRepoType } from "~/types";

async function BranchesSection({ data }: { data: GetRepoType }) {
  const branches = await api.branches.getBranches({ url: data.branches_url });
  if (!branches) return;
  const lastThreeBranches = branches.slice(-3).reverse();
  return (
    <div>
      <section>
        <Link href={`${data.html_url}/branches`}>
          <h2 className="mb-4 text-2xl font-bold">Branches</h2>
        </Link>
        <div className="grid gap-4">
          {lastThreeBranches.map((branch) => (
            <div
              key={branch.commit.sha}
              className="flex items-center gap-4 rounded-md bg-muted p-4"
            >
              <div className="rounded-md bg-muted-foreground/10 p-2">
                <GitBranchIcon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <Link
                  href={`${data.html_url}/tree/${branch.name}`}
                  className="font-medium"
                >
                  {branch.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default BranchesSection;
