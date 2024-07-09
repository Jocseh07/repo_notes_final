"use server";
import type { GetUsersProps } from "~/types";
import { api } from "~/trpc/server";
import NavBar from "~/components/common/NavBar";
import { UsersCard } from "~/components/search/users/UsersCard";
import PaginationParent from "~/components/common/PaginationParent";
import LimitError from "~/components/common/LimitError";

export default async function GetUsers({
  params,
  searchParams,
}: GetUsersProps) {
  // Get the params
  const getParams = {
    q: params.users.join(""),
    sort: searchParams.sort ?? "stars",
    order: searchParams.order ?? "desc",
    per_page: searchParams.per_page ? +searchParams.per_page : 6,
    page: searchParams.page ? +searchParams.page : 1,
  };
  // Get users from params and show error component if error
  const users = await api.users.searchUsers(getParams);
  if (!users) {
    return <LimitError />;
  }
  // Pagination
  const totalPages = Math.ceil(users.total_count / getParams.per_page);
  const currentPage = getParams.page;
  let redirectURL = `/search/users/${params.users.join("")}?`;
  if (searchParams.sort) redirectURL += `sort=${searchParams.sort}&`;
  if (searchParams.order) redirectURL += `order=${searchParams.order}&`;
  if (searchParams.per_page)
    redirectURL += `per_page=${searchParams.per_page}&`;

  return (
    <div>
      <div>
        <main className="flex-1">
          <UsersCard data={users} />
          <PaginationParent
            totalPages={totalPages}
            currentPage={currentPage}
            redirectURL={redirectURL}
          />
        </main>
      </div>
    </div>
  );
}
