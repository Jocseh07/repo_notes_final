import {
  CalendarCheckIcon,
  CalendarIcon,
  CodeIcon,
  DoorOpenIcon,
  GitForkIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import type { SearchOneReposType } from "~/types";
import { readableDate } from "~/utils/readableDate";

export default function RepositoryCard({ repo }: { repo: SearchOneReposType }) {
  const readableCreatedAt = readableDate(repo.created_at);
  const readableUpdatedAt = readableDate(repo.updated_at);

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Link
              href={`/repos/${repo.full_name}`}
              className="text-lg font-semibold hover:underline"
              prefetch={false}
            >
              {repo.full_name}
            </Link>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <StarIcon className="h-4 w-4" />
              <span>{repo.stargazers_count}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-2 text-sm">
          <div className="flex items-center gap-2">
            <CodeIcon className="h-4 w-4" />
            <span>{repo.language}</span>
          </div>
          <div className="flex items-center gap-2">
            <DoorOpenIcon className="h-4 w-4" />
            <span>{repo.open_issues}</span>
          </div>
          <div className="flex items-center gap-2">
            <GitForkIcon className="h-4 w-4" />
            <span>{repo.forks}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>Created on {readableCreatedAt}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarCheckIcon className="h-4 w-4" />
            <span>Last updated {readableUpdatedAt}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
