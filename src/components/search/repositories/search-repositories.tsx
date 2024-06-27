
// "use client";

// import { useState, useMemo } from "react";
// import Link from "next/link";
// import { Input } from "~/components/ui/input";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "~/components/ui/select";
// import { Card } from "~/components/ui/card";
// import { Pagination } from "~/components/ui/pagination";

// export function SearchRepositories() {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("sort");
//   const [sort, setSort] = useState("");
//   const [page, setPage] = useState(1);
//   const repositories = useMemo(() => {
//     let filteredRepos = [
//       {
//         id: "repo1",
//         name: "shadcn/ui",
//         description:
//           "Beautifully designed components that you can copy and paste into your apps.",
//         forks: 100,
//         stars: 10000,
//         issues: 50,
//         watchers: 500,
//         language: "TypeScript",
//       },
//       {
//         id: "repo2",
//         name: "vercel/next.js",
//         description: "The React Framework for Production",
//         forks: 1000,
//         stars: 80000,
//         issues: 200,
//         watchers: 2000,
//         language: "JavaScript",
//       },
//       {
//         id: "repo3",
//         name: "tailwindlabs/tailwindcss",
//         description:
//           "A utility-first CSS framework for rapidly building custom user interfaces.",
//         forks: 500,
//         stars: 60000,
//         issues: 100,
//         watchers: 1000,
//         language: "CSS",
//       },
//       {
//         id: "repo4",
//         name: "facebook/react",
//         description:
//           "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
//         forks: 1500,
//         stars: 200000,
//         issues: 300,
//         watchers: 5000,
//         language: "JavaScript",
//       },
//       {
//         id: "repo5",
//         name: "prisma/prisma",
//         description:
//           "Prisma is a next-generation ORM that makes database access easy.",
//         forks: 200,
//         stars: 20000,
//         issues: 75,
//         watchers: 800,
//         language: "TypeScript",
//       },
//       {
//         id: "repo6",
//         name: "vitejs/vite",
//         description: "Next generation frontend tooling. It's fast!",
//         forks: 300,
//         stars: 40000,
//         issues: 80,
//         watchers: 1200,
//         language: "JavaScript",
//       },
//     ];
//     if (search) {
//       filteredRepos = filteredRepos.filter((repo) =>
//         repo.name.toLowerCase().includes(search.toLowerCase()),
//       );
//     }
//     if (filter) {
//       filteredRepos = filteredRepos.filter((repo) => repo.language === filter);
//     }
//     if (sort) {
//       filteredRepos = filteredRepos.sort((a, b) => {
//         if (sort === "stars") return b.stars - a.stars;
//         if (sort === "forks") return b.forks - a.forks;
//         if (sort === "issues") return b.issues - a.issues;
//         if (sort === "watchers") return b.watchers - a.watchers;
//         return 0;
//       });
//     }
//     const startIndex = (page - 1) * 12;
//     const endIndex = startIndex + 12;
//     return filteredRepos.slice(startIndex, endIndex);
//   }, [search, filter, sort, page]);
//   const totalPages = Math.ceil(repositories.length / 12);
//   return (
//     <div>
//       <header className="sticky top-0 z-10 border-b bg-background shadow-sm">
//         <div className="container flex h-16 items-center justify-between px-4 md:px-6">
//           <div className="flex items-center gap-4">
//             <Link href="#" className="text-lg font-bold" prefetch={false}>
//               Repo Search
//             </Link>
//             <div className="relative">
//               <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search repositories..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="h-9 rounded-md border-muted pl-10 pr-4 focus:border-primary focus:ring-primary"
//               />
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <Select value={filter} onValueChange={setFilter} className="w-36">
//               <SelectTrigger className="h-9">
//                 <SelectValue placeholder="Filter by language" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="All">All</SelectItem>
//                 <SelectItem value="TypeScript">TypeScript</SelectItem>
//                 <SelectItem value="JavaScript">JavaScript</SelectItem>
//                 <SelectItem value="CSS">CSS</SelectItem>
//               </SelectContent>
//             </Select>
//             <Select value={sort} onValueChange={setSort} className="w-36">
//               <SelectTrigger className="h-9">
//                 <SelectValue placeholder="Sort by" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Default">Default</SelectItem>
//                 <SelectItem value="stars">Stars</SelectItem>
//                 <SelectItem value="forks">Forks</SelectItem>
//                 <SelectItem value="issues">Issues</SelectItem>
//                 <SelectItem value="watchers">Watchers</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </header>
//       <main className="container px-4 py-8 md:px-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {repositories.map((repo) => (
//             <Card key={repo.id} className="group relative overflow-hidden">
//               <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
//                 <span className="sr-only">View repository</span>
//               </Link>
//               <div className="bg-background p-4">
//                 <h3 className="text-lg font-semibold">{repo.name}</h3>
//                 <p className="line-clamp-2 text-sm text-muted-foreground">
//                   {repo.description}
//                 </p>
//                 <div className="mt-4 flex items-center gap-4">
//                   <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                     <ForkliftIcon className="h-4 w-4" />
//                     <span>{repo.forks}</span>
//                   </div>
//                   <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                     <StarIcon className="h-4 w-4" />
//                     <span>{repo.stars}</span>
//                   </div>
//                   <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                     <DoorOpenIcon className="h-4 w-4" />
//                     <span>{repo.issues}</span>
//                   </div>
//                   <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                     <EyeIcon className="h-4 w-4" />
//                     <span>{repo.watchers}</span>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center gap-2">
//                   <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
//                     {repo.language}
//                   </span>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </main>
//       <footer className="container px-4 py-8 md:px-6">
//         <Pagination
//           currentPage={page}
//           totalPages={totalPages}
//           onPageChange={setPage}
//         />
//       </footer>
//     </div>
//   );
// }

// function DoorOpenIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M13 4h3a2 2 0 0 1 2 2v14" />
//       <path d="M2 20h3" />
//       <path d="M13 20h9" />
//       <path d="M10 12v.01" />
//       <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
//     </svg>
//   );
// }

// function EyeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   );
// }

// function ForkliftIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 12H5a2 2 0 0 0-2 2v5" />
//       <circle cx="13" cy="19" r="2" />
//       <circle cx="5" cy="19" r="2" />
//       <path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
//     </svg>
//   );
// }

// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }

// function StarIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   );
// }
