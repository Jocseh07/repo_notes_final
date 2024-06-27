import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Github } from "lucide-react";
import type { GetRepoType } from "~/types";

function RepoHeader({ data }: { data: GetRepoType }) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="flex items-center justify-between bg-primary px-4 py-4 text-primary-foreground md:px-6">
        <div className="flex items-center gap-2">
          <Github className="h-6 w-6" />
          <div className="text-xl font-bold">{data.name}</div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Avatar>
            <AvatarImage
              src={data.owner.avatar_url ?? "/placeholder-user.jpg"}
            />
            <AvatarFallback>RN</AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">{data.owner.login}</div>
        </div>
      </header>
    </div>
  );
}
export default RepoHeader;
