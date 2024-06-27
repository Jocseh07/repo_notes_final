import type { GetSearchProps } from "~/types";
import { api } from "~/trpc/server";
import { RepositoryPage } from "~/components/repos/repository-page";
import NavBar from "~/components/common/NavBar";

export default async function GetRepositories({ params }: GetSearchProps) {
  const repoParams = { repo: params.repos.join("/") };
  const repo = await api.repos.getRepo(repoParams);
  if (!repo) return;
  return (
    <>
      <NavBar />
      <RepositoryPage data={repo} />
    </>
  );
}