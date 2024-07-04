import { FileTextIcon, SearchIcon, Users2Icon, UsersIcon } from "lucide-react";
import Image from "next/image";
import AboutSection from "./AboutSection";

export default function FeaturesSection() {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:gap-12 md:px-6">
        <div className="order-2 flex w-full flex-col items-start gap-4 md:order-1 md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            <FileTextIcon className="h-4 w-4" />
            Notes
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Make Notes on Repos
          </h2>
          <p className="max-w-md text-muted-foreground md:text-lg">
            Easily create and manage notes for your favorite repositories,
            keeping your thoughts and insights organized.
          </p>
        </div>
        <div className="order-1 flex w-full flex-col items-start gap-4 md:order-2 md:w-1/2">
          <div className="flex max-h-72 max-w-96 items-center justify-center">
            <Image
              src="/notes.png"
              alt="Make Notes on Repos"
              width={400}
              height={225}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:gap-12 md:px-6">
        <div className="order-2 flex w-full flex-col items-start gap-4 md:order-1 md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            <SearchIcon className="h-4 w-4" />
            Search
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Search Repositories
          </h2>
          <p className="max-w-md text-muted-foreground md:text-lg">
            Quickly find and explore repositories, including their README files,
            to discover new projects and stay up-to-date with the latest
            developments.
          </p>
        </div>
        <div className="order-1 flex w-full flex-col items-start gap-4 object-cover object-top md:order-2 md:w-1/2">
          <div className="flex max-h-72 max-w-96 items-center justify-center">
            <Image
              src="/searchRepos.png"
              alt="Search Repositories"
              width={400}
              height={225}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:gap-12 md:px-6">
        <div className="order-2 flex w-full flex-col items-start gap-4 md:order-1 md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            <Users2Icon className="h-4 w-4" />
            Users
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Users
          </h2>
          <p className="max-w-md text-muted-foreground md:text-lg">
            Discover developers and their repositories, follow their work, and
            stay connected with the vibrant open-source community.
          </p>
        </div>
        <div className="order-1 flex w-full flex-col items-start gap-4 md:order-2 md:w-1/2">
          <div className="relative flex max-h-96 min-h-72 min-w-72 max-w-96 items-center justify-center">
            <Image
              src="/searchUsers.png"
              alt="Explore Users"
              width={400}
              height={225}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <AboutSection />
      <div className="mb-6 mt-6 text-center md:mb-10 lg:mb-12">
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">
          Popular Repositories
        </h2>
        <p className="text-lg text-muted-foreground md:text-xl">
          Discover the most popular repositories across various programming
          languages.
        </p>
      </div>
    </section>
  );
}
