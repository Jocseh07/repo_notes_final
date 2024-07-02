import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";

import { Inter as FontSans } from "next/font/google";

import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/components/common/theme-provider";
import SeshProvider from "~/components/common/session-provider";
import { getServerAuthSession } from "~/server/auth";
import NavBar from "~/components/common/NavBar";
import Footer from "~/components/app/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
export const metadata = {
  title: "Repo Notes",
  description: "Create notes for your repositories",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* {children} */}
            <SeshProvider session={session}>
              <NavBar />
              {children}
              <Footer />
            </SeshProvider>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

// className={`${GeistSans.variable}`}
