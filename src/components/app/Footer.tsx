import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-4 bg-muted py-6 text-center text-sm text-muted-foreground">
      <div className="container flex flex-col">
        <p>
          Built by Joseph Muturi. {""}
          <Link
            href="https://github.com/Jocseh07/repo_notes_final"
            className="font-medium underline hover:text-primary"
            prefetch={false}
          >
            View on GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
