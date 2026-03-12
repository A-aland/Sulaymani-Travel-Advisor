"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-700 z-50 h-24">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-full">
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-wide hover:text-purple-400 transition"
        >
          Sulaymani Travel
        </Link>

        <div className="hidden md:flex space-x-6 items-center text-white">
          <Link href="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link href="/places" className="hover:text-purple-400 transition">
            Places
          </Link>
          <Link href="/about" className="hover:text-purple-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-purple-400 transition">
            Contact
          </Link>
          <Link
            href="/auth/login"
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition transform"
          >
            Login
          </Link>
        </div>

        <button
          className="md:hidden text-white text-2xl font-bold"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center bg-black/40 backdrop-blur-md py-6 space-y-4 text-white border-t border-gray-700">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Home
          </Link>
          <Link
            href="/places"
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Places
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Contact
          </Link>
          <Link
            href="/auth/login"
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition transform"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
