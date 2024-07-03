import type { SearchReposType } from "~/types";
import { fetcher } from "./fetcher";

const getPopularRepos = async ({ language }: { language: string }) => {
  const params = {
    sort: "stars",
    order: "desc",
    per_page: 5,
    page: 1,
  };

  const link = `https://api.github.com/search/repositories?q=stars:>1000+language=${language}&sort=${params.sort}&order=${params.order}&per_page=${params.per_page}&page=${params.page}`;
  const data = await fetcher<SearchReposType>(link, 0);
  return data;
};

export default getPopularRepos;
