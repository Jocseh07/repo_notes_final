import type { SearchUsersType, SearchProps } from "~/types";
import { fetcher } from "./fetcher";

const searchUsers = async (getParams: SearchProps) => {
  const { q, sort, order, per_page, page } = getParams;
  const params = {
    sort: sort ? sort : "stars",
    order: order ? order : "desc",
    per_page: per_page ? per_page : 10,
    page: page ? page : 1,
  };

  const link = `https://api.github.com/search/users?q=${q}&sort=${params.sort}&order=${params.order}&per_page=${params.per_page}&page=${params.page}`;
  const revalidate = 0;
  const data = await fetcher<SearchUsersType>(link, revalidate);
  return data;
};

export default searchUsers;
