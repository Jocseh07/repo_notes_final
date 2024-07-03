function HeroSection() {
  return (
    <section className="">
      <div className="container flex max-w-[800px] flex-col items-center justify-center">
        <section className="">
          <div className="mx-auto space-y-10 text-center">
            <h1 className=" pt-10 text-4xl font-bold  tracking-tighter sm:text-5xl md:text-6xl">
              Track, Search, and Note GitHub Repositories
            </h1>
          </div>
          <p className="mx-auto pt-10 text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Your essential tool for tracking GitHub repositories. Seamlessly
            search, take detailed notes, and view repository details at a
            glance—all in one place.
          </p>
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
      </div>
    </section>
  );
}
export default HeroSection;
