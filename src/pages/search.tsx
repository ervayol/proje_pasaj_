/*import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase() || "";

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Arama Sonuçları</h1>
      {filtered.length === 0 ? (
        <p className="text-gray-600">Sonuç bulunamadı.</p>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <li key={p.id} className="border rounded-lg p-4 bg-white shadow">
              <img src={p.image} alt={p.name} className="h-40 mx-auto object-contain" />
              <h2 className="mt-2 font-medium">{p.name}</h2>
              <p className="text-sm text-gray-500">{p.category}</p>
              <p className="text-blue-600 font-semibold">{p.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
*/

/*
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { products } from "@/data/products"; // senin ürünlerin buradan geliyor
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header"; // Header ekledik

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const [results, setResults] = useState<typeof products>([]);

  useEffect(() => {
    if (typeof q === "string") {
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q.toLowerCase()) ||
          p.category.toLowerCase().includes(q.toLowerCase())
      );
      setResults(filtered);
    }
  }, [q]);

  return (
    <>
      <Header /> {/* Header her zaman üstte *-/}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Arama Sonuçları</h2>
        {results.length === 0 ? (
          <p className="text-gray-600">Aramanızla eşleşen ürün bulunamadı.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {results.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
              >
                <div className="relative w-full h-56 bg-gray-50">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">{p.category}</p>
                  <p className="text-blue-600 font-semibold mt-2">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
*/

/* --------------sıralama filtreleme ve kart tamam---------------
"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { products, Product } from "@/data/products";
import Header from "@/components/layout/Header";
import ProductCard from "@/components/ProductCard";

interface PriceRange {
  label: string;
  min: number;
  max: number;
}

const priceOptions: PriceRange[] = [
  { label: "0 - 500 TL", min: 0, max: 500 },
  { label: "500 - 1.000 TL", min: 500, max: 1000 },
  { label: "1.000 - 10.000 TL", min: 1000, max: 10000 },
  { label: "10.000 - 30.000 TL", min: 10000, max: 30000 },
  { label: "30.000 - 60.000 TL", min: 30000, max: 60000 },
  { label: "60.000 - 100.000 TL", min: 60000, max: 100000 },
];

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;

  const [results, setResults] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [selectedRanges, setSelectedRanges] = useState<string[]>([]);

  // TL string → number dönüştürücü
  const parsePrice = (price: string): number =>
    parseFloat(price.replace(/[^\d]/g, "")) || 0;

  // Arama filtresi
  useEffect(() => {
    if (typeof q === "string") {
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q.toLowerCase()) ||
          p.category.toLowerCase().includes(q.toLowerCase())
      );
      setResults(filtered);
    }
  }, [q]);

  // Fiyat aralığına göre filtreleme
  const filteredByPrice = results.filter((p) => {
    if (selectedRanges.length === 0) return true;
    const priceValue = parsePrice(p.price);
    return priceOptions.some(
      (range) =>
        selectedRanges.includes(range.label) &&
        priceValue >= range.min &&
        priceValue <= range.max
    );
  });

  // Sıralama
  const sortedResults = [...filteredByPrice].sort((a, b) => {
    const priceA = parsePrice(a.price);
    const priceB = parsePrice(b.price);

    if (sortOrder === "asc") return priceA - priceB;
    if (sortOrder === "desc") return priceB - priceA;
    return 0;
  });

  // Checkbox toggle
  const toggleRange = (label: string) => {
    setSelectedRanges((prev) =>
      prev.includes(label) ? prev.filter((r) => r !== label) : [...prev, label]
    );
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8">
        {/* Sol filtre paneli *     -/}
        <aside className="w-64 hidden md:block">
          {/* Sıralama *  -  /}
          <h3 className="text-lg font-semibold mb-4">Sırala</h3>
          <div className="space-y-3 mb-8">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="sort"
                checked={sortOrder === "asc"}
                onChange={() => setSortOrder("asc")}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  sortOrder === "asc"
                    ? "border-orange-500 bg-orange-500"
                    : "border-gray-300 bg-gray-100"
                }`}
              >
                {sortOrder === "asc" && (
                  <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                )}
              </span>
              <span className="text-sm text-gray-700">En düşük fiyat</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="sort"
                checked={sortOrder === "desc"}
                onChange={() => setSortOrder("desc")}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  sortOrder === "desc"
                    ? "border-orange-500 bg-orange-500"
                    : "border-gray-300 bg-gray-100"
                }`}
              >
                {sortOrder === "desc" && (
                  <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                )}
              </span>
              <span className="text-sm text-gray-700">En yüksek fiyat</span>
            </label>
          </div>

          {/* Fiyat Aralığı *          -/}
          <h3 className="text-lg font-semibold mb-4">Fiyat Aralığı</h3>
          <div className="space-y-3">
            {priceOptions.map((range) => (
              <label
                key={range.label}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedRanges.includes(range.label)}
                  onChange={() => toggleRange(range.label)}
                  className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700">{range.label}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Sonuçlar *           -/}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Arama Sonuçları</h2>
          {sortedResults.length === 0 ? (
            <p className="text-gray-600">Aramanızla eşleşen ürün bulunamadı.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {sortedResults.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
*/



//sıralama ve filtrelememenin arka planı renkli -----
"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { products, Product } from "@/data/products";
import Header from "@/components/layout/Header";
import ProductCard from "@/components/ProductCard";

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const [results, setResults] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [selectedRanges, setSelectedRanges] = useState<string[]>([]);

  // Fiyat aralıkları
  const priceOptions = [
    { label: "0 - 500", min: 0, max: 500 },
    { label: "500 - 1.000", min: 500, max: 1000 },
    { label: "1.000 - 10.000", min: 1000, max: 10000 },
    { label: "10.000 - 30.000", min: 10000, max: 30000 },
    { label: "30.000 - 60.000", min: 30000, max: 60000 },
    { label: "60.000 - 100.000", min: 60000, max: 100000 },
  ];

  // Arama filtresi
  useEffect(() => {
    if (typeof q === "string") {
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q.toLowerCase()) ||
          p.category.toLowerCase().includes(q.toLowerCase())
      );
      setResults(filtered);
    }
  }, [q]);

  // Fiyatı TL stringden number'a çevir
  const parsePrice = (price: string) =>
    parseInt(price.replace(/\D/g, ""), 10) || 0;

  // Fiyat aralığı seçme
  const toggleRange = (label: string) => {
    setSelectedRanges((prev) =>
      prev.includes(label) ? prev.filter((r) => r !== label) : [...prev, label]
    );
  };

  // Filtrelenmiş ürünler
  let filteredResults = [...results];

  if (selectedRanges.length > 0) {
    filteredResults = filteredResults.filter((p) => {
      const price = parsePrice(p.price);
      return priceOptions.some(
        (range) =>
          selectedRanges.includes(range.label) &&
          price >= range.min &&
          price <= range.max
      );
    });
  }

  // Sıralama
  if (sortOrder) {
    filteredResults.sort((a, b) => {
      const priceA = parsePrice(a.price);
      const priceB = parsePrice(b.price);
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8">
        {/* Sol filtre paneli */}
        <aside className="w-64 hidden md:block space-y-6">
          {/* Sıralama */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Sırala</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  checked={sortOrder === "asc"}
                  onChange={() => setSortOrder("asc")}
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    sortOrder === "asc"
                      ? "border-orange-500 bg-orange-500"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {sortOrder === "asc" && (
                    <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                  )}
                </span>
                <span className="text-sm text-gray-700">En düşük fiyat</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  checked={sortOrder === "desc"}
                  onChange={() => setSortOrder("desc")}
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    sortOrder === "desc"
                      ? "border-orange-500 bg-orange-500"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {sortOrder === "desc" && (
                    <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                  )}
                </span>
                <span className="text-sm text-gray-700">En yüksek fiyat</span>
              </label>
            </div>
          </div>

          {/* Fiyat Aralığı */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Fiyat Aralığı</h3>
            <div className="space-y-3">
              {priceOptions.map((range) => (
                <label
                  key={range.label}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedRanges.includes(range.label)}
                    onChange={() => toggleRange(range.label)}
                    className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <span className="text-sm text-gray-700">{range.label}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Sonuçlar */}
        <main className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Arama Sonuçları</h2>
          {filteredResults.length === 0 ? (
            <p className="text-gray-600">Aramanızla eşleşen ürün bulunamadı.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredResults.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
