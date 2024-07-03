import type { SearchReposType, SearchProps } from "~/types";
import { fetcher } from "./fetcher";

const searchRepositories = async (getParams: SearchProps) => {
  const { q, sort, order, per_page, page } = getParams;
  const params = {
    sort: sort ? sort : "stars",
    order: order ? order : "desc",
    per_page: per_page ? per_page : 10,
    page: page ? page : 1,
  };

  const link = `https://api.github.com/search/repositories?q=${q}&sort=${params.sort}&order=${params.order}&per_page=${params.per_page}&page=${params.page}`;
  const data = await fetcher<SearchReposType>(link, 60 * 60);
  return data;
};

export default searchRepositories;
