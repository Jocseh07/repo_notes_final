import { Github, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            About
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Story Behind This Portfolio
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            This portfolio project was born out of desire to simplify how we
            interact with GitHub repositories. I found mysef frequently
            exploring new repositories and users on GitHub. However, I also
            faced challenges in organizing and documenting our findings
            effectively. This project aims to simplify the discovery of
            repositories and users, while also providing a seamless way to make
            and manage notes directly on repositories, leveraging access to
            README files for better understanding.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <LinkedinIcon className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/Jocseh07"
              className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Project
          </div>
          <h3 className="text-2xl font-bold tracking-tighter">
            Holberton School Portfolio
          </h3>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            This portfolio project was created as part of my studies at
            Holberton School, a renowned software engineering program that
            emphasizes hands-on learning and project-based curriculum.
          </p>
          <Link
            href="https://github.com/Jocseh07/repo_notes_final"
            className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
