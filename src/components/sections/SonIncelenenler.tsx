/*"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type RecentlyViewedItem = {
  id: string | string[];
  name: string;
  image: string;
};

// ✅ localStorage’a ürün ekleme (son eklenen başa gelir)
export function addToRecentlyViewed(item: RecentlyViewedItem) {
  if (typeof window === "undefined") return;

  const existing = localStorage.getItem("recentlyViewed");
  let items: RecentlyViewedItem[] = existing ? JSON.parse(existing) : [];

  // Aynı ürünü varsa çıkar
  items = items.filter((p) => p.id !== item.id);

  // En başa ekle
  items.unshift(item);

  // Max 10 ürün
  if (items.length > 10) items = items.slice(0, 10);

  localStorage.setItem("recentlyViewed", JSON.stringify(items));
}

export default function SonIncelenenler() {
  const [items, setItems] = useState<RecentlyViewedItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("recentlyViewed");
    if (stored) {
      try {
        const parsed: RecentlyViewedItem[] = JSON.parse(stored);
        setItems(parsed);
      } catch (e) {
        console.error("Son incelenenler okunamadı", e);
      }
    }
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Son İncelenenler</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {items.map((item) => (
          <Link
            key={item.id.toString()}
            href={`/product/${item.id}`}
            className="block border rounded-lg p-3 hover:shadow-lg transition bg-white"
          >
            <div className="relative w-full h-40 mb-3 bg-gray-50 rounded">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-sm font-medium text-gray-800 truncate">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
*/


// src/components/sections/SonIncelenenler.tsx
"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export type RecentlyViewedItem = {
  id: string | string[];
  name: string;
  image: string;
};

export function addToRecentlyViewed(item: RecentlyViewedItem) {
  if (typeof window === "undefined") return;
  const existing = localStorage.getItem("recentlyViewed");
  let items: RecentlyViewedItem[] = existing ? JSON.parse(existing) : [];
  items = items.filter((p) => p.id !== item.id);
  items.unshift(item);
  if (items.length > 10) items = items.slice(0, 10);
  localStorage.setItem("recentlyViewed", JSON.stringify(items));
}

export default function SonIncelenenler() {
  const [items, setItems] = useState<RecentlyViewedItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("recentlyViewed");
    if (stored) {
      try {
        const parsed: RecentlyViewedItem[] = JSON.parse(stored);
        setItems(parsed);
      } catch (e) {
        console.error("Son incelenenler okunamadı", e);
      }
    }
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Son İncelenenler</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {items.map((item) => (
          <ProductCard
            key={item.id.toString()}
            product={{
              id: item.id.toString(),
              name: item.name,
              category: "",
              description: "",
              price: "", // fiyat yok
              image: item.image,
            }}
          />
        ))}
      </div>
    </section>
  );


}



