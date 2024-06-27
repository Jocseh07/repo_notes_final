import type { GetRepoType } from "~/types";
import { fetcher } from "./fetcher";

const getRepo = async (getParams: { repo: string }) => {
  const link = `https://api.github.com/repos/${getParams.repo}`;
  const data = await fetcher<GetRepoType>(link);
  return data;
};

export default getRepo;
