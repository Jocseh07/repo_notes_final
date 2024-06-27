import type { GetCommitsType } from "~/types";
import { fetcher } from "./fetcher";

const getCommits = async ({ url }: { url: string }) => {
  const link = url.replace("{/sha}", "");
  const data = await fetcher<GetCommitsType>(link);
  return data;
};

export default getCommits;
