"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-gray-900/70 border-b border-gray-800">
      
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Skill<span className="text-green-400">Sphere</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition">
            Courses
          </Link>
          <Link href="/my-profile" className="hover:text-white transition">
            Profile
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="light" className=" hover:text-white transition">
              Login
            </Button>
          </Link>

          <Link href="/register">
            <Button className="bg-green-400 text-black hover:bg-green-700">
              Register
            </Button>
          </Link>
        </div>

      </div>
    </nav>
  );
}