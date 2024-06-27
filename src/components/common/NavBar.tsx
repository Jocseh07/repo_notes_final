import NavIcon from "./NavIcon";
import SearchBar from "./SearchBar";
import { ModeToggle } from "./ModeToggle";
import UserMenu from "./UserMenu";
import APIUsage from "./Banner";

export async function NavBar() {
  // const showAPIUsage = !!(remaining < limit / 2);
  const showAPIUsage = true;

  return (
    <div>
      <header className="flex h-14 items-center justify-between gap-2 border-b bg-background px-4 lg:px-6">
        <NavIcon />
        <SearchBar />
        <div className="flex gap-2">
          <ModeToggle />
          <UserMenu />
        </div>
      </header>
      {showAPIUsage && <APIUsage />}
    </div>
  );
}
export default NavBar;
