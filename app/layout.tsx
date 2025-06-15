// app/layout.tsx
import type { Metadata } from "next";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job Interview Trainer Agent",
  description: "AI-powered practice sessions that track your progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-950 text-white min-h-screen">
          <header className="p-4 bg-black flex gap-4 items-center">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main className="p-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
