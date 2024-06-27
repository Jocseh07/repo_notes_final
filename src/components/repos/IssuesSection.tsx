import { DoorOpenIcon } from "lucide-react";
import Link from "next/link";
import { api } from "~/trpc/server";
import type { GetRepoType } from "~/types";

export default async function IssuesSection({ data }: { data: GetRepoType }) {
  const issues = await api.issues.getIssues({ url: data.issues_url });
  if (!issues) return;
  const lastThreeIssues = issues.slice(-3).reverse();
  return (
    <div>
      <section>
        <Link href={`${data.html_url}/branches`}>
          <h2 className="mb-4 text-2xl font-bold">Issues</h2>
        </Link>
        <div className="grid gap-4">
          {lastThreeIssues.map((issue) => (
            <div
              key={issue.url}
              className="flex items-center gap-4 rounded-md bg-muted p-4"
            >
              <div className="rounded-md bg-muted-foreground/10 p-2">
                <DoorOpenIcon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <Link
                  href={`${data.html_url}/tree/${issue.html_url}`}
                  className="font-medium"
                >
                  {issue.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
