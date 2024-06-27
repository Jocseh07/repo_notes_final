// import type { GetSearchProps } from "~/types";
// import { api } from "~/trpc/server";
// {  params,  searchParams,}: GetSearchProps
export default async function GetRepositories() {
  // const getParams = {
  //   q: params.repos.join("+"),
  //   sort: searchParams.sort ?? "stars",
  //   order: searchParams.order ?? "desc",
  //   per_page: searchParams.per_page ?? 10,
  //   page: searchParams.page ?? 1,
  // };
  // console.log(getParams);

  // const repositoryData = await api.repos.searchRepos(getParams);
  // if (!repositoryData) {
  // return;
  // }
  // const testing = repositoryData.items;
  // const repos = repositoryData;

  return <div className="m-1 flex border-b py-3">nothing</div>;
}
