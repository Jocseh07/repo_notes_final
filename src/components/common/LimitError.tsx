"use client";
import { NetworkIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LimitError = () => {
  const router = useRouter();
  const retry = () => {
    router.refresh();
  };
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <NetworkIcon className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Network Error
        </h1>
        <p className="mt-4 text-muted-foreground">
          Oops, it looks like we&#39;re having trouble connecting to the GitHub
          API. This is likely due to hitting the rate limit. Please try again in
          a few minutes.
        </p>
        <div className="mt-6">
          <Button
            onClick={retry}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Retry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LimitError;
