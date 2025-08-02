'use client';

import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">👋 Welcome, Admin!</h1>
        <p className="text-gray-600 text-lg mb-6">
          This is your secure admin dashboard ,managed here all  internal tools, users, content, and system settings here.
        </p>

       

        <div className="mt-8 text-right">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
