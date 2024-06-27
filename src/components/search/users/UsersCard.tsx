"use server";
import type { SearchUsersType } from "~/types";
import SearchUsersCard from "../../common/SearchUsersCard";

export async function UsersCard({ data }: { data: SearchUsersType }) {
  return (
    <div>
      <section className="grid grid-cols-1 gap-4 px-4 py-12 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
        {data.items.map((user) => (
          <SearchUsersCard key={user.id} user={user} />
        ))}
      </section>
    </div>
  );
}
