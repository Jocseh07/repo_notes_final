import type { GetBranchesType } from "~/types";
import { fetcher } from "./fetcher";

const getBranches = async ({ url }: { url: string }) => {
  const link = url.replace("{/branch}", "");
  const data = await fetcher<GetBranchesType>(link);
  return data;
};

export default getBranches;
