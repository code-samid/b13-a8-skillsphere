"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirect") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/sign-in/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) throw new Error("Login failed");

      toast.success("Login successful");
      router.push(redirectTo);
    } catch (err) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="p-6 border rounded w-80">

        <h1 className="text-xl mb-4">Login</h1>

        <input
          className="border w-full p-2 mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border w-full p-2 mb-2"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-500 text-white w-full p-2">
          Login
        </button>
      </form>
    </div>
  );
}