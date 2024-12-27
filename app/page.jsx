'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const role=localStorage.getItem('role');
      role === 'admin' ? router.push('/admindashboard') : router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();

      if (data.success) {
        // Save user data and token
        localStorage.setItem('token', data.token);
        localStorage.setItem('user_id', data.user.user_id);
        localStorage.setItem('role', data.user.role);

        // Set logged-in state
        setIsLoggedIn(true);

        if(data.user.role==="admin"){
          router.push('/admindashboard');
        }else{
          router.push('/dashboard');
        }
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setError('An error occurred. Please try again.');
    }
  };

  // If the user is logged in, display a "Redirecting..." message or redirect them
  if (isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
        <p className="text-xl">Redirecting to your dashboard...</p>
      </div>
    );
  }

  // Render login form if not logged in
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black"
    style={{
      backgroundImage: "url('/images/book1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <header className="mb-8"></header>

      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">LOGIN</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}