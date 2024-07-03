"use server";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import type { OneUsersType } from "~/types";
import { TwitterIcon, X } from "lucide-react";
import { api } from "~/trpc/server";
import LimitError from "./LimitError";

export default async function SearchUsersCard({
  user,
}: {
  user: OneUsersType;
}) {
  const userData = await api.users.getUser({ username: user.login });
  if (!userData) {
    return <LimitError />;
  }

  return (
    <div>
      <Card className="mx-auto max-w-md overflow-hidden rounded-2xl shadow-lg">
        <CardHeader className="bg-secondary text-primary-foreground flex items-center gap-4 p-6">
          <Link href={`/users/${userData.login}`} className="">
            <Avatar className="ring-background h-16  w-16  cursor-pointer ring-2">
              <AvatarImage src={user.avatar_url ?? "/placeholder-user.jpg"} />
              <AvatarFallback>RN</AvatarFallback>
            </Avatar>
          </Link>
          <Link href={`/users/${userData.login}`} className="">
            <div className="flex items-center justify-center">
              <div className="text-primary text-lg font-semibold">
                {userData.login}
              </div>
            </div>
          </Link>
        </CardHeader>
        <CardContent className="flex min-h-[200px] flex-col gap-4  pt-4">
          <div className="flex items-center justify-around gap-4 text-center">
            <div>
              <div className="text-3xl font-semibold">{userData.followers}</div>
              <div className="text-muted-foreground text-sm">Followers</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">{userData.following}</div>
              <div className="text-muted-foreground text-sm">Following</div>
            </div>
            <Link href={`/users/${userData.login}`} className="">
              <div className="text-3xl font-semibold">
                {userData.public_repos}
              </div>
              <div className="text-muted-foreground text-sm">Repos</div>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2 text-center">
              <TwitterIcon className="text-muted-foreground h-5 w-5" />
              <Link
                href={`https://x.com/${userData.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:underline"
              >
                {userData.twitter_username ?? "No Twitter"}
              </Link>
            </div>
            <div className=" text-muted-foreground flex items-center justify-center text-center">
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
