"use server";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import type { GetRepoOnwerType } from "~/types";
import { TwitterIcon, X } from "lucide-react";
import { api } from "~/trpc/server";

export default async function UserSection({
  user,
}: {
  user: GetRepoOnwerType;
}) {
  const userData = await api.users.getUser({ username: user.login });
  if (!userData) {
    return;
  }

  return (
    <div>
      <Card className="mx-auto overflow-hidden rounded-2xl shadow-lg">
        <CardHeader className="flex items-center gap-4 bg-primary p-6 text-primary-foreground">
          <Link href={`/users/${userData.login}`} className="">
            <Avatar className="h-16 w-16  cursor-pointer  ring-2 ring-background">
              <AvatarImage src={user.avatar_url ?? "/placeholder-user.jpg"} />
              <AvatarFallback>RN</AvatarFallback>
            </Avatar>
          </Link>
          <Link href={`/users/${userData.login}`} className="">
            <div className="flex items-center justify-center">
              <div className="text-lg font-semibold">{userData.login}</div>
            </div>
          </Link>
        </CardHeader>
        <CardContent className="flex  flex-col gap-4  pt-4">
          <div className="flex items-center justify-around gap-4 text-center">
            <div>
              <div className="text-3xl font-semibold">{userData.followers}</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">{userData.following}</div>
              <div className="text-sm text-muted-foreground">Following</div>
            </div>
            <Link href={`/users/${userData.login}`} className="">
              <div className="text-3xl font-semibold">
                {userData.public_repos}
              </div>
              <div className="text-sm text-muted-foreground">Repos</div>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2 text-center">
              <TwitterIcon className="h-5 w-5 text-muted-foreground" />
              <Link
                href={`https://x.com/${userData.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:underline"
              >
                {userData.twitter_username ?? "No Twitter"}
              </Link>
            </div>
            <div className=" flex items-center justify-center text-center text-muted-foreground">
              {userData.bio ?? (
                <div className="flex">
                  <X />
                  <p>Nothing here</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
