/*

import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return; // boş aramayı engelle
    router.push(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Ürün ara..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded-l-md w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
      >
        Ara
      </button>
    </form>
  );
}
  */

// src/components/layout/SearchBar.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-full"
    >
      <FiSearch className="text-gray-500 text-lg mr-2" />
      <input
        type="text"
        placeholder="Ürün, kategori veya marka ara"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent outline-none w-full text-sm"
      />
    </form>
  );
}
