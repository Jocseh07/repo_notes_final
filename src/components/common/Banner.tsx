import { api } from "~/trpc/server";
import SignIn from "./SignIn";
import { getServerAuthSession } from "~/server/auth";
import { cn } from "~/lib/utils";
import LimitError from "./LimitError";
import RatesSection from "./RatesSection";

export default async function APIUsage() {
  // Get session
  const session = await getServerAuthSession();
  // Get rates
  const rates = await api.rates.getRates();
  if (!rates) return <LimitError />;
  return (
    <div
      className={cn(
        "flex items-center bg-secondary px-4 py-3 text-primary md:px-6",
        session ? "justify-center" : "justify-between",
      )}
    >
      <RatesSection />
      {!session && <SignIn />}
    </div>
  );
}
