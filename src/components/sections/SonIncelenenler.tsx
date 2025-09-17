"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type RecentlyViewedItem = {
    id: string | string[];
    name: string;
    image: string;
};
// ✅ localStorage’a ürün ekleme
export function addToRecentlyViewed(item: RecentlyViewedItem) {
    if (typeof window === "undefined") return;

    const existing = localStorage.getItem("recentlyViewed");
    let items: RecentlyViewedItem[] = existing ? JSON.parse(existing) : [];

    // Aynı ürün varsa sil
    items = items.filter((p) => p.id !== item.id);

    // Baştan ekle
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
        if (stored) setItems(JSON.parse(stored));
    }, []);

    if (items.length === 0) return null;
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Son İncelenenler</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {items.map((item) => (
                    <Link
                        key={item.id.toString()}
                        href={`/product/${item.id}`}
                        className="block border rounded-lg p-2 hover:shadow-lg transition"
                    >
                        <div className="relative w-full h-40 mb-2">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover rounded"
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