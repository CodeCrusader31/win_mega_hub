'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Logo placeholder */}
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              W
            </div>
            <span className="text-xl font-semibold text-gray-800">WinMegaHub</span>
          </div>

          <button
            onClick={() => router.push('/login')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-full transition cursor-pointer"

          >
            Login
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-white to-indigo-100 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className="text-indigo-600">WinMegaHub</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            A minimal, secure, and role-based authentication system using Next.js, TypeScript, and JWT.
          </p>
          <button
            onClick={() => router.push('/login')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-full transition cursor-pointer"
          >
            Login to Dashboard
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} WinMegaHub. All rights reserved.
      </footer>
    </div>
  );
}
