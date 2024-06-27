import NavIcon from "./NavIcon";
import SearchBar from "./SearchBar";
import { ModeToggle } from "./ModeToggle";
import UserMenu from "./UserMenu";
import APIUsage from "./Banner";
import { Separator } from "../ui/separator";

export async function NavBar() {
  // const showAPIUsage = !!(remaining < limit / 2);
  const showAPIUsage = true;

  return (
    <div className="flex flex-col gap-4">
      <header className="bg-background flex h-14 items-center justify-between gap-2 px-4 py-4 lg:px-6">
        <NavIcon />
        <SearchBar />
        <div className="flex gap-2">
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
