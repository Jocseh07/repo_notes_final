import { UserIconMenu } from "./UserIconMenu";
import { api } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";

export async function UserMenu() {
  const session = await getServerAuthSession();
  let userId = "";
  if (session) {
    const Id = await api.accounts.getAccountId();
    if (!Id) return
    Id ? (userId = Id) : (userId = "");
  }

  return (
    <div>
      <div className="flex items-center">
        {session && <UserIconMenu userId={userId} />}
      </div>
    </div>
  );
}
export default UserMenu;
