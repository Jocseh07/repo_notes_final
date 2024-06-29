"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "~/components/ui/select";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";

import { z } from "zod";
import { cn } from "~/lib/utils";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";

const searchFormSchema = z.object({
  searchQuery: z.string().min(3, "Minimum 3 chars").max(20, "< 20 characters"),
});
type SearchType = "user" | "repo";

export function SearchBar() {
  const [searchType, setSearchType] = useState<SearchType>("repo");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [error]);

  const handleChange = () => {
    setSearchType(searchType === "repo" ? "user" : "repo");
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery") as string;

    const result = searchFormSchema.safeParse({ searchQuery });
    if (!result.success) {
      setError(result.error.errors.map((e) => e.message).join(", "));
      return;
    }

    const type = searchType === "repo" ? "repositories" : "users";
    router.push(`/search/${type}/${searchQuery}`);
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <form
          className="flex max-w-md flex-1 items-center gap-3 rounded-md bg-secondary px-3 py-1 backdrop-blur-sm"
          onSubmit={handleSearch}
        >
          <Select value={searchType} onValueChange={handleChange}>
            <SelectTrigger className="w-18 sm:w-24">
              <SelectValue placeholder="Search" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                role="Select User"
                aria-label="Search User"
                value="user"
              >
                User
              </SelectItem>
              <SelectItem
                role="Select Repo"
                aria-label="Search Repo"
                value="repo"
              >
                Repo
              </SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            name="searchQuery"
            placeholder={error ? error : `Search ${searchType}...`}
            className={cn("flex-1 bg-transparent text-sm focus:outline-none ")}
          />
          <Button
            variant={error ? "destructive" : "ghost"}
            size="icon"
            type="submit"
            role="button"
            aria-label="Search"
          >
            <SearchIcon className="h-5 w-5 text-muted-foreground " />
          </Button>
        </form>
      </div>
    </div>
  );
}
export default SearchBar;
