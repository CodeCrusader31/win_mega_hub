'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

interface DecodedToken {
  username: string;
  role: string;
  exp: number;
}

export default function UserDashboard() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleLogout = async () => {
    await fetch('/api/logout');
    router.push('/login');
  };

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];

      

    if (token) {
      const decoded = JSON.parse(atob(token.split('.')[1]));
  console.log(decoded);
      try {
        const decoded: DecodedToken = jwtDecode(token);
        
        setUsername(decoded.username);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gray-100 rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🎉 Welcome, {username || 'User'}!
        </h1>
        <p className="text-gray-600 text-base mb-6">
          You’ve successfully logged in. This is your personalized user dashboard.
        </p>
        <p className="text-sm text-gray-500">
          (This page is protected — only logged-in users can see it.)
        </p>

        <button
          onClick={handleLogout}
          className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-full transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
