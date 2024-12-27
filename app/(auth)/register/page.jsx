"use client";

import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const handleRegister = async (provider) => {
    await signIn(provider, { callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <button
        onClick={() => handleRegister("google")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
      >
        Register with Google
      </button>
      
    </div>
  );
}
