import type { GetOneUserProps } from "~/types";
import { api } from "~/trpc/server";
import UserPage from "~/components/users/user-page";
import NavBar from "~/components/common/NavBar";

export default async function GetUsers({ params }: GetOneUserProps) {
  const username = params.users[0] ?? "";
  const user = await api.users.getUser({ username });

  if (!user) return;

  return (
    <div>
      <NavBar />
      <UserPage user={user} />
    </div>
  );
}
