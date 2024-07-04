"use client";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOutIcon, NotebookTabs, UserIcon } from "lucide-react";
import Link from "next/link";

export function UserIconMenu({ userId }: { userId: string }) {
  const { data } = useSession();
  const router = useRouter();
  if (!data) {
    return;
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={
                  data?.user.image ? data.user.image : "/placeholder-user.jpg"
                }
              />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={8}>
          <DropdownMenuItem onClick={() => router.push(`/users/${userId}`)}>
            <UserIcon className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <NotebookTabs className="mr-2 h-4 w-4" />
            <Link href="/notes">My Notes</Link>
          </DropdownMenuItem> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="space-x-2" onClick={() => signOut()}>
            <LogOutIcon className="msr-2 h-4 w-4" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
export default UserIconMenu;
