"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirect") || "/";

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const loginRes = await fetch("/api/auth/sign-in/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (!loginRes.ok) {
      // 🔥 AUTO SIGNUP
      const signupRes = await fetch("/api/auth/sign-up/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          name: "User",
        }),
        credentials: "include",
      });

      if (!signupRes.ok) {
        throw new Error("Signup failed");
      }
    }

    toast.success("Login successful ✅");

    router.push(redirectTo);
    router.refresh();

  } catch (err) {
    toast.error("Login failed ❌");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md border border-gray-400 rounded-2xl p-6 shadow-md space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h1>

        <input
          className="border w-full p-2 rounded"
          placeholder="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border w-full p-2 rounded"
          placeholder="Password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}