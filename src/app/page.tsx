import { auth, currentUser } from '@clerk/nextjs/server'
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Employee Voting App</h1>
      {userId ? (
        <Button asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      ) : (
        <div className="space-x-4">
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      )}
    </main>
  );
}
