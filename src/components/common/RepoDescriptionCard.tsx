import { Separator } from "~/components/ui/separator";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { EyeIcon, ForkliftIcon, StarIcon } from "lucide-react";
import type { GetRepoType } from "~/types";

export function RepoDescriptionCard({ data }: { data: GetRepoType }) {
  return (
    <div>
      <div className="container flex-1 px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <div>
            <div className="space-y-4">
              <div className="grid gap-1">
                <div className="text-sm text-muted-foreground">Description</div>
                <p>{data.description}</p>
              </div>
              <div className="grid gap-1">
                <div className="text-sm text-muted-foreground">Language</div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#2b7489]" />
                  <div>{data.language}</div>
                </div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm text-muted-foreground">Metrics</div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4" />
                    <div>{data.stargazers_count}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <ForkliftIcon className="h-4 w-4" />
                    <div>{data.forks}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <EyeIcon className="h-4 w-4" />
                    <div>{data.watchers}</div>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-6" />
          </div>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="space-y-1">
                  <div className="text-lg font-bold">Repository Info</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Last updated
                    </div>
                    <div className="text-sm">{data.updated_at}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Created on
                    </div>
                    <div className="text-sm">{data.created_at}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Repository size
                    </div>
                    <div className="text-sm">{data.size}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Open issues
                    </div>
                    <div className="text-sm">{data.open_issues_count}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RepoDescriptionCard;
