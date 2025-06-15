import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="bg-black/70 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-white text-center bg-black/60 p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-4">Job Interview Trainer Agent</h1>

          <p className="text-lg mb-4">
            Practice interview questions with an AI Agent that remembers your progress.
          </p>

          <ul className="list-disc list-inside text-left text-base mx-auto max-w-md mb-6">
            <li>Upload job descriptions</li>
            <li>Answer realistic interview questions</li>
            <li>Track your improvement over time</li>
            <li>Get personalized AI feedback</li>
          </ul>

          <div className="mt-6">
            <SignedOut>
              <p className="mb-4 text-sm text-gray-300">To begin, create an account or sign in:</p>
              <div className="flex justify-center gap-4">
                <SignUpButton>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition">
                    Sign up
                  </button>
                </SignUpButton>
                <SignInButton>
                  <button className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-full font-medium transition">
                    Sign in
                  </button>
                </SignInButton>
              </div>
            </SignedOut>

            <SignedIn>
              <p className="text-green-400 mt-4">
                You're already signed in — go to your{" "}
                <a href="/agent" className="underline text-white font-semibold">Agent Dashboard</a>.
              </p>

              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4 text-white">Upgrade Your Access</h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a
                    href="https://buy.stripe.com/cNibJ1eENfNKgP02sZ04800"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
                    target="_blank"
                  >
                    Starter – $4.99
                  </a>
                  <a
                    href="https://buy.stripe.com/9B6fZh2W59pm1U63x304801"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
                    target="_blank"
                  >
                    Pro – $24.99
                  </a>
                  <a
                    href="https://buy.stripe.com/bJe6oHdAJcBy6amaZv04802"
                    className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
                    target="_blank"
                  >
                    Premium – $149.99/mo
                  </a>
                </div>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
}
