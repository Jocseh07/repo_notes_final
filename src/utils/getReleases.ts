import type { GetReleasesType } from "~/types";
import { fetcher } from "./fetcher";

const getReleases = async ({ url }: { url: string }) => {
  const link = url.replace("{/id}", "");
  const data = await fetcher<GetReleasesType>(link);
  return data;
};

export default getReleases;
