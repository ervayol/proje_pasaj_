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
      <Header /> {/* Header her zaman üstte */}
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
