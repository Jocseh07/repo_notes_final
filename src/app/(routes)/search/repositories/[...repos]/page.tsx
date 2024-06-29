import type { GetSearchProps } from "~/types";
import { api } from "~/trpc/server";
import NavBar from "~/components/common/NavBar";
import RepositoryCard from "~/components/search/repositories/RepositoryCard";
import PaginationParent from "~/components/common/PaginationParent";

export default async function GetRepositories({
  params,
  searchParams,
}: GetSearchProps) {
  const getParams = {
    q: params.repos.join("+"),
    sort: searchParams.sort ?? "stars",
    order: searchParams.order ?? "desc",
    per_page: searchParams.per_page ? +searchParams.per_page : 10,
    page: searchParams.page ? +searchParams.page : 1,
  };

  const repositoryData = await api.repos.searchRepos(getParams);
  if (!repositoryData) {
    return;
  }
  const totalPages = Math.ceil(repositoryData.total_count / getParams.per_page);
  const currentPage = getParams.page;
  let redirectURL = `/search/repositories/${params.repos.join("+")}?`;
  if (searchParams.sort) redirectURL += `sort=${searchParams.sort}&`;
  if (searchParams.order) redirectURL += `order=${searchParams.order}&`;
  if (searchParams.per_page)
    redirectURL += `per_page=${searchParams.per_page}&`;

  return (
    <div className="">
      <NavBar />
      <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repositoryData.items.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
      <PaginationParent
        totalPages={totalPages}
        currentPage={currentPage}
        redirectURL={redirectURL}
      />
    </div>
  );
}
