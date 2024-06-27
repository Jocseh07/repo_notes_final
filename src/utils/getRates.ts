import type { RatesType } from "~/types";
import { fetcher } from "./fetcher";

export const getRates = async () => {
  const url = "https://api.github.com/rate_limit";
  const revalidate = 0;
  const rates = await fetcher<RatesType>(url, revalidate);
  return rates;
};
