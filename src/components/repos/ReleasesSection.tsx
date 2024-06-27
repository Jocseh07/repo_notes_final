import { Rocket } from "lucide-react";
import Link from "next/link";
import { api } from "~/trpc/server";
import type { GetRepoType } from "~/types";

async function ReleasesSection({ data }: { data: GetRepoType }) {
  const releases = await api.releases.getReleases({ url: data.releases_url });
  if (!releases) return;
  const lastThreeReleases = releases.slice(0, 3);
  return (
    <div>
      <section>
        <Link href={`${data.html_url}/releases/`}>
          <h2 className="mb-4 text-2xl font-bold">Releases</h2>
        </Link>
        <div className="grid gap-4">
          {lastThreeReleases.map((release) => (
            <div
              key={release.id}
              className="flex items-center gap-4 rounded-md bg-muted p-4"
            >
              <div className="rounded-md bg-muted-foreground/10 p-2">
                <Rocket className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <Link
                  href={`${data.html_url}/releases/tag/${release.name}`}
                  className="font-medium"
                >
                  {release.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default ReleasesSection;
