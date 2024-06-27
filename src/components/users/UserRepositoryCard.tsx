import { StarIcon } from "lucide-react";
import Link from "next/link";
import type { getOneUserRepoType } from "~/types";
import { Card } from "../ui/card";

export default function UserRepositoryCard({
  data,
}: {
  data: getOneUserRepoType;
}) {
  return (
    <Card className="rounded-lg border-2 border-primary p-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">
          <Link
            href={`/repos/${data.owner.login}/${data.name}`}
            className="hover:underline"
            prefetch={false}
          >
            {data.name}
          </Link>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <StarIcon className="h-4 w-4" />
          <span>{data.stargazers_count}</span>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">
        A modern web application built with the latest technologies.
      </div>
    </Card>
  );
}
