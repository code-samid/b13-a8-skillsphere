"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="font-bold">SkillSphere</h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/my-profile">Profile</Link>
      </div>

      <div className="flex gap-2">
        <Link href="/login">
          <Button>Login</Button>
        </Link>

        <Link href="/register">
          <Button>Register</Button>
        </Link>
      </div>
    </nav>
  );
}