/*import { useFavorites } from "@/context/FavoritesContext";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Favorilerim</h2>
        <p className="text-gray-600">Henüz favori ürününüz yok.</p>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Favorilerim</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {favorites.map((p) => (
          <div
            key={p.id}
            className="relative group border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <button
              onClick={() => toggleFavorite(p)}
              className="absolute top-2 right-2 z-10"
            >
              <Heart
                className={`h-6 w-6 ${
                  isFavorite(p.id) ? "fill-orange-500 text-orange-500" : "text-gray-400"
                }`}
              />
            </button>
             <Link href={`/product/${p.id}`} className="block">
              <div className="relative w-full h-56 bg-gray-50">
                <Image src={p.image} alt={p.name} fill className="object-contain" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{p.name}</h3>
                <p className="text-blue-600 font-semibold mt-2">{p.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
  */


/*
 "use client";

import RootLayout from "@/components/layout/RootLayout";
import { useFavorites } from "@/context/FavoritesContext";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <RootLayout>
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Favorilerim</h2>

        {favorites.length === 0 ? (
          <p className="text-gray-600">Henüz favori ürününüz yok.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {favorites.map((p) => (
              <div
                key={p.id}
                className="relative group border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
              >
                <button
                  onClick={() => toggleFavorite(p)}
                  className="absolute top-2 right-2 z-10"
                >
                  <Heart
                    className={`h-6 w-6 ${
                      isFavorite(p.id)
                        ? "fill-orange-500 text-orange-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
                <Link href={`/product/${p.id}`} className="block">
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
                    <p className="text-blue-600 font-semibold mt-2">
                      {p.price}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </RootLayout>
  );
}

*/


// ********ürün gösterimi değiştirilmiş Hali en son satır hata veriyor *******
// src/pages/favorities.tsx
/*
"use client";

import RootLayout from "@/components/layout/RootLayout";
import { useFavorites } from "@/context/FavoritesContext";
import ProductCard from "@/components/ProductCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <RootLayout>
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Favorilerim</h2>

        {favorites.length === 0 ? (
          <p className="text-gray-600">Henüz favori ürününüz yok.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {favorites.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
    </RootLayout>
  );
}
*/
/**Bunda hiç hata veren yok ürün bloğu yeni hali  */
"use client";

import RootLayout from "@/components/layout/RootLayout";
import { useFavorites } from "@/context/FavoritesContext";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/products";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  // favorites kaynağı her zaman Product[] tipinde olmayabilir (context tipi eksikse),
  // bu cast ile TypeScript uyarısını kaldırıyoruz — runtime davranışı değişmiyor.
  const favList = (favorites ?? []) as Product[];

  return (
    <RootLayout>
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Favorilerim</h2>

        {favList.length === 0 ? (
          <p className="text-gray-600">Henüz favori ürününüz yok.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {favList.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
    </RootLayout>
  );
}
