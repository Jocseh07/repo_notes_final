import FeaturesSection from "~/components/app/Features";
import HeroSection from "~/components/app/HeroSection";
import PopularReposCard from "~/components/app/PopularReposCard";

export default async function HomePage() {
  return (
    <div>
      <main className="">
        <HeroSection />
        <FeaturesSection />
        <section className="grid grid-cols-1 gap-4  px-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
          <PopularReposCard language="JavaScript" />
          <PopularReposCard language="TypeScript" />
          <PopularReposCard language="Python" />
          <PopularReposCard language="Rust" />
          <PopularReposCard language="Go" />
          <PopularReposCard language="Java" />
        </section>
      </main>
    </div>
  );
}
