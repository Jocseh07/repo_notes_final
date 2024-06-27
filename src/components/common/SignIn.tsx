"use client";
import { signIn, useSession } from "next-auth/react";

function SignIn() {
  const { data } = useSession();
  if (data) {
    return null;
  }
  return (
    <>
      <button
        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        onClick={() => signIn("github")}
      >
        Sign in
      </button>
    </>
  );
}
export default SignIn;
