import type { GetRepoReadmeType } from "~/types";
import { fetcher } from "./fetcher";

const getRepoReadme = async (getParams: { repo: string }) => {
  const link = `https://api.github.com/repos/${getParams.repo}/readme`;
  const data = await fetcher<GetRepoReadmeType>(link);
  return data;
};

export default getRepoReadme;
