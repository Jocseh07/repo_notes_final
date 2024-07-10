"use client";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import type { RatesType } from "~/types";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";

export default function RatesSection() {
  // rates state
  const [rates, setRates] = useState<RatesType | undefined>(undefined);
  // Get pathname
  const pathname = usePathname();
  // Get session
  const { data } = useSession();
  // create headers

  let headers = useMemo(() => ({}), []);
  if (data) {
    headers = {
      Authorization: `Bearer ${data.user.accessToken}`,
    };
  }
  // Fetch rates depending on the pathname
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("https://api.github.com/rate_limit", {
          headers,
        });
        const data = (await response.json()) as RatesType;
        setRates(data);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchRates();
  }, [headers, pathname]);
  if (rates === undefined) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-8">
      <div
        className={cn(
          rates.rate.remaining < 5 ? "animate-pulse text-red-600" : "",
        )}
      >
        <p className="text-sm font-medium">API Usage Remaining</p>
        <p className="text-lg font-bold">
          {rates.rate.remaining} / {rates.rate.limit} Requests
        </p>
      </div>
      <div
        className={cn(
          rates.resources.search.remaining < 5
            ? "animate-pulse text-red-600"
            : "",
        )}
      >
        <p className="text-sm font-medium">Search Usage Remaining</p>
        <p className="text-lg font-bold">
          {rates.resources.search.remaining} / {rates.resources.search.limit}{" "}
          Requests
        </p>
      </div>
    </div>
  );
}
