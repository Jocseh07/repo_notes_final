import type { GetUserType } from "~/types";
import { fetcher } from "./fetcher";

const getUser = async (getParams: { username: string }) => {
  const link = `https://api.github.com/users/${getParams.username}`;
  const data = await fetcher<GetUserType>(link);
  return data;
};

export default getUser;
