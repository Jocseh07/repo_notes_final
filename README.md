# RepoNotes

## Table of Contents

- [Introduction](#introduction)
- [Inspiration](#inspiration)
- [Technology and Architecture](#technology-and-architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Related Projects](#related-projects)
- [Licensing](#licensing)
- [Timeline Description](#timeline-description)
- [Challenges Overcome](#challenges-overcome)
- [Learnings](#learnings)

## Introduction

RepoNotes is a web application designed to help developers track, search, and note GitHub repositories efficiently. With features like user authentication via GitHub, data caching, and robust UI components, RepoNotes enhances productivity and streamlines repository management.

**Deployed Site:** [RepoNotes Live](https://repo-notes-final.vercel.app/)  
**Project Blog Article:** [Final Project Blog](https://your-blog-article-link.com)  
**Author LinkedIn:** [Author Name](https://www.linkedin.com/in/your-linkedin-profile)

## Inspiration

As a developer, I often found myself sifting through various repositories, learning from them, and seeking alternatives or instructions on how to use something. Moreover, I frequently needed to make notes for future use and store them in a secure, convenient place. This project was born out of the necessity to streamline these tasks and improve my workflow.

Building RepoNotes was not just about solving a problem; it was a journey to hone my skills by tackling challenges head-on and creating an application from the ground up. The iterative development process taught me a lot about managing evolving requirements and maintaining focus amidst changing scopes.

## Technology and Architecture

RepoNotes is built using a robust stack of modern technologies, ensuring a smooth, efficient, and scalable application.

- **Next.js**: A React framework for server-side rendering and static site generation. It was used along with its App router for routing and server-side rendering to improve performance. Next.js caching was also implemented to ensure global caching of data fetched from the GitHub API, mitigating rate limits.
- **Tailwind CSS & shadcn/ui**: Tailwind CSS provides utility-first CSS for rapid UI development, while shadcn/ui offers accessible and customizable UI components built with Tailwind CSS, enhancing the overall aesthetics and usability of the application.
- **TypeScript & tRPC**: TypeScript ensures type safety and better developer experience, while tRPC allows type-safe API communication, making data fetching and management efficient.
- **NextAuth.js**: Simplifies authentication with GitHub, managing user sessions, handling OAuth flows securely, and ensuring authorized access to GitHub data within the application.
- **PostgreSQL with Supabase & Drizzle ORM**: PostgreSQL is used for storing user data, notes, and application settings. Supabase provides a managed database solution, while Drizzle ORM facilitates CRUD operations, ensuring reliable data management.
- **Vercel**: The application is deployed on Vercel, ensuring scalability, reliability, and high availability.

## Installation

To run RepoNotes locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/Jocseh07/repo_notes_final
   cd repo_notes_final
   ```

2. Install the required dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a .env.local file in the root directory and add your environment variables. Refer to .env.example for required variables.

4. Install the required dependencies:

   ```sh
   npm run dev
   ```

5. Open http://localhost:3000 to view the application in your browser.

## Usage

- **Search Repositories**: Use the search bar to find repositories by keywords.
- **Search Users**: Look up GitHub users and view their profile information, including their repositories and contributions.
- **Take Notes**: Add and manage notes for repositories directly within the application.
- **View Repository Details**: Click on a repository to view detailed information, including stars, forks, issues, and contributors.
- **Authentication**: Sign in with your GitHub account to access additional features, such as creating notes and increasing API rate limits.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```sh
   git checkout -b feature/your-feature
   ```

3. Make your changes and commit them:

   ```sh
   git commit -m 'Add your feature'
   ```

4. Push to the branch:

   ```sh
   git push origin feature/your-feature
   ```

5. Open a pull request to the main branch.

## Related Projects

- [GitHub API](https://docs.github.com/en/rest) - The official GitHub REST API documentation.
- [Next.js](https://nextjs.org/) - A React framework for server-side rendering and static site generation.
- [Supabase](https://supabase.io/) - An open-source Firebase alternative with a PostgreSQL database.
- [Drizzle ORM](https://drizzle-orm.vercel.app/) - A lightweight TypeScript ORM for PostgreSQL, designed to work seamlessly with Next.js and Supabase.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [shadcn/ui](https://github.com/shadcn/ui) - A set of accessible and customizable UI components built with Tailwind CSS.
- [NextAuth.js](https://next-auth.js.org/) - An authentication solution for Next.js applications.
- [tRPC](https://trpc.io/) - A framework for building type-safe APIs using TypeScript, designed to work with Next.js.
- [Vercel](https://vercel.com/) - A platform for deploying and hosting Next.js applications.

## Licensing

This project is not licensed.

## Timeline Description

### Week 1

- **Project Initiation**:
  - Defined project objectives and requirements.
  - Selected tech stack: Next.js, NextAuth.js, Tailwind CSS, PostgreSQL (with Supabase), and Drizzle ORM.
  - Set up development environment and initialized the project repository.

### Week 2

- **Development and Integration**:
  - Implemented core functionalities: GitHub API integration for repository search and user authentication.
  - Designed and developed UI using Tailwind CSS and shadcn UI components.
  - Integrated PostgreSQL with Supabase for database storage and began implementing note-taking features.

### Week 3

- **Refinement and Deployment**:
  - Conducted thorough testing of application functionalities and performance optimizations.
  - Addressed user feedback and finalized UI/UX enhancements.
  - Deployed the application on Vercel for production.

## Challenges Overcome

Throughout the development of RepoNotes, several challenges were encountered and successfully overcome:

- **API Rate Limits**: GitHub imposes rate limits on its API, which posed challenges, especially for unauthenticated requests. Implementing caching strategies and authentication mechanisms helped mitigate these issues, ensuring smooth data retrieval and user experience.

- **Dynamic Requirements**: As project requirements evolved, adapting to these changes sometimes required revisions and refactoring of existing code. This iterative process tested flexibility and adaptability, ultimately leading to a more robust application.

- **Integration Complexity**: Integrating multiple technologies such as Next.js, NextAuth.js, Supabase, and Drizzle ORM required careful planning and implementation. Overcoming integration challenges involved thorough testing and collaboration to ensure seamless functionality.

## Learnings

Developing RepoNotes provided valuable insights and learnings:

- **Technical Proficiency**: Enhanced proficiency in technologies such as Next.js, TypeScript, Tailwind CSS, and PostgreSQL with Supabase and Drizzle ORM.
- **Problem-Solving Skills**: Addressed complex technical challenges, including API rate limits and integration complexities, through effective problem-solving strategies and collaboration.
- **User-Centric Design**: Gained insights into UI/UX design principles through iterative refinement based on user feedback, enhancing usability and user satisfaction.
- **Project Management**: Improved project management skills, including timeline management, prioritization of tasks, and agile development practices.
- **Continuous Learning**: Embraced a growth mindset, continually learning from challenges and seeking opportunities for skill enhancement and innovation.
