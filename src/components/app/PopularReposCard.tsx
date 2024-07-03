import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { api } from "~/trpc/server";
import LimitError from "../common/LimitError";

export async function PopularReposCard({ language }: { language: string }) {
  const popular = await api.repos.getPopularRepos({ language });
  if (!popular) {
    return <LimitError />;
  }

  return (
    <Card className="min-h-[250px] max-w-[500px]">
      <CardHeader>
        <CardTitle>{language}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {popular.items.map((repo) => {
            return (
              <li key={repo.id}>
                <Link href={`/repos/${repo.full_name}`}>{repo.full_name}</Link>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
export default PopularReposCard;
