// app/page.tsx
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto mt-12">
      <h1 className="text-4xl font-bold">Job Interview Trainer Agent</h1>

      <p className="mt-4 text-lg">
        This app lets you practice real interview questions with an AI Agent that tracks your progress over time.
      </p>

      <ul className="list-disc list-inside mt-4 text-base">
        <li>Upload job descriptions</li>
        <li>Answer realistic questions generated from them</li>
        <li>Track your improvement across sessions</li>
        <li>Get AI-powered feedback and advice</li>
      </ul>

      <div className="mt-6">
        <SignedOut>
          <p className="mb-2">To begin, create an account or sign in:</p>
          <div className="flex gap-4">
            <SignUpButton />
            <SignInButton />
          </div>
        </SignedOut>

        <SignedIn>
          <p className="text-green-500 mt-4">
            You're already signed in — head to your <a href="/agent" className="underline">Agent Dashboard</a>!
          </p>
        </SignedIn>
      </div>
    </div>
  );
}
