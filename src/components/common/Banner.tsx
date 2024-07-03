import { api } from "~/trpc/server";
import SignIn from "./SignIn";
import { getServerAuthSession } from "~/server/auth";
import { cn } from "~/lib/utils";
import LimitError from "./LimitError";

export default async function APIUsage() {
  const session = await getServerAuthSession();
  const rates = await api.rates.getRates();
  if (!rates) return <LimitError />;
  return (
    <div
      className={cn(
        "flex items-center bg-secondary px-4 py-3 text-primary md:px-6",
        session ? "justify-center" : "justify-between",
      )}
    >
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
      {!session && <SignIn />}
    </div>
  );
}
