import type { getUserReposType } from "~/types";
import { fetcher } from "./fetcher";

const getUserRepos = async ({ url }: { url: string }) => {
  const link = url
  const data = await fetcher<getUserReposType>(link);
  return data;

};

export default getUserRepos;
