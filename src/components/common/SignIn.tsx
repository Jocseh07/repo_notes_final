"use client";
import { Github } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

function SignIn() {
  // Sign in Button
  const { data } = useSession();
  if (data) {
    return null;
  }
  return (
    <>
      <button
        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover:ring-1 hover:ring-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        onClick={() => signIn("github")}
      >
        <Github className="mr-2 h-6 w-6" />
        Sign in
      </button>
    </>
  );
}
export default SignIn;
