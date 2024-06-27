import type { GetIssuesType } from "~/types";
import { fetcher } from "./fetcher";

const getIssues = async ({ url }: { url: string }) => {
  const link = url.replace("{/number}", "");
  const data = await fetcher<GetIssuesType>(link);
  return data;
};

export default getIssues;
