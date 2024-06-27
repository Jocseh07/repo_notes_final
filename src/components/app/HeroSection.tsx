function HeroSection() {
  return (
    <section className="prose">
      <div className="container flex max-w-[800px] flex-col items-center justify-center">
        <section className="">
          <div className="mx-auto space-y-10 text-center">
            <h1 className=" pt-14 text-4xl font-bold  tracking-tighter sm:text-5xl md:text-6xl">
              Track, Search, and Note GitHub Repositories
            </h1>
          </div>
          <p className="mx-auto pt-10 text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Your essential tool for tracking GitHub repositories. Seamlessly
            search, take detailed notes, and view repository details at a
            glance—all in one place.
          </p>
        </section>
      </div>
    </section>
  );
}
export default HeroSection;
