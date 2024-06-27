import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import type { GetUserType } from "~/types";
import { api } from "~/trpc/server";
import UserRepositoryCard from "./UserRepositoryCard";

export default async function UserPage({ user }: { user: GetUserType }) {
  const repos = await api.repos.getUserRepos({ url: user.repos_url });
  if (!repos) return;
  const sortedData = [...repos].sort(
    (a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0),
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
      <div className="flex items-center gap-6">
        <Avatar className="h-20 w-20 border-2 border-primary md:h-24 md:w-24">
          <AvatarImage src={user.avatar_url ?? "/placeholder-user.jpg"} />
          <AvatarFallback>RN</AvatarFallback>
        </Avatar>
        <div className="grid flex-1 gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold md:text-3xl">{user.name}</h1>
          </div>
          <div className="text-sm text-muted-foreground md:text-base">
            {user.bio ?? "No bio provided."}
          </div>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="grid gap-6">
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold md:text-xl">Top Repositories</h2>
          <div className="grid gap-4">
            {sortedData.map((repo) => (
              <UserRepositoryCard key={repo.id} data={repo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
