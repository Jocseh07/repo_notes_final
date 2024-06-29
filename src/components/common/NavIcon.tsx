import { MountainIcon } from "lucide-react";
import Link from "next/link";

export const NavIcon = () => {
  return (
    <div className="">
      <Link
        href="/"
        className="flex items-center justify-center gap-2"
        prefetch={false}
        role="Home"
        aria-label="Go Home"
      >
        <MountainIcon className="h-6 w-6" />
        <span className="hidden text-lg font-bold sm:block">RepoNotes</span>
      </Link>
    </div>
  );
};
export default NavIcon;
