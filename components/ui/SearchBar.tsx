"use client";

import { useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (q: string) => void;
}) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg">
      <input
        type="text"
        placeholder="Search places..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
      />
      <button
        onClick={() => onSearch(query)}
        className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-semibold text-white hover:scale-105 transition transform"
      >
        Search
      </button>
    </div>
  );
}
