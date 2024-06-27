import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
// import type { GetRepoType } from "~/types";

// { data }: { data: GetRepoType }
function NotesCard() {
  return (
    <div>
      <div className="space-y-4">
        <div className="text-lg font-bold">Notes</div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Textarea placeholder="Add a new note..." className="resize-none" />
            <Button>Save Note</Button>
          </div>
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Colm Tuite</div>
                  <div className="text-xs text-muted-foreground">
                    2 days ago
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Great work on this project! I love the design and
                  functionality.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">John Doe</div>
                  <div className="text-xs text-muted-foreground">
                    1 week ago
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Awesome work! I can`&#39;`t wait to use this in my next
                  project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotesCard;
