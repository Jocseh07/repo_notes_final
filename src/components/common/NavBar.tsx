import NavIcon from "./NavIcon";
import SearchBar from "./SearchBar";
import { ModeToggle } from "./ModeToggle";
import UserMenu from "./UserMenu";
import APIUsage from "./Banner";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";

export async function NavBar() {
  // const showAPIUsage = !!(remaining < limit / 2);
  const showAPIUsage = true;

  return (
    <div className="flex flex-col gap-4">
      <header className="flex h-14 items-center justify-between gap-2 bg-background px-4 py-4 lg:px-6">
        <NavIcon />
        <SearchBar />
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-lg">
            <Link href="/notes">My Notes</Link>
          </Button>
          <ModeToggle />
          <UserMenu />
        </div>
      </header>
      <Separator />
      {showAPIUsage && <APIUsage />}
    </div>
  );
}
export default NavBar;
