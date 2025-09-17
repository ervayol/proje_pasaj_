// src/components/sections/PromoBanner.tsx
"use client";

import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <Link
        href="https://www.turkcell.com.tr/pasaj/hesabim/bana-ozel-teklifler"
        className="block w-full h-[150px] rounded-lg overflow-hidden shadow-md"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/HomePageOffers/_2025513_11.2web-1180x150.jpg?1757850864000')",
          }}
        />
      </Link>
    </section>
  );
}
