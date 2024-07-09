import type { GetOneUserProps } from "~/types";
import { api } from "~/trpc/server";
import UserPage from "~/components/users/user-page";
import LimitError from "~/components/common/LimitError";

export default async function GetUsers({ params }: GetOneUserProps) {
  const username = params.users[0] ?? "";
  const user = await api.users.getUser({ username });
  // Error component
  if (!user) return <LimitError />;

  return (
    <div>
      <UserPage user={user} />
    </div>
  );
}
