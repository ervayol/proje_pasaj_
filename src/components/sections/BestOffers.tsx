/*
import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import { products } from "@/data/products";

export default function BestOffers() {
  const { toggleFavorite, isFavorite } = useFavorites();
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-semibold mb-6">En İyi Teklifler</h2>

      {/* Scrollable ürün listesi *-/}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {products.map((p) => (
          <div
            key={p.id}
            className="min-w-[220px] max-w-[220px] bg-white border rounded-lg shadow hover:shadow-lg transition relative"
          >
            {/* Favori kalbi *-/}
            <button
              onClick={() => toggleFavorite(p)}
              className="absolute top-2 right-2 text-gray-400 hover:text-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isFavorite(p.id) ? "orange" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                />
              </svg>
            </button>
             {/* Ürün resmi *-/}
            <Link href={`/product/${p.id}`}>
              <div className="relative w-full h-40">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </Link>

            {/* Ürün bilgileri *-/}
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                {p.name}
              </h3>
              <p className="text-blue-600 font-semibold mt-1">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
  */
 import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import { products } from "@/data/products";

export default function BestOffers() {
  const { toggleFavorite, isFavorite } = useFavorites();
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-semibold mb-6">En İyi Teklifler</h2>

      {/* Scrollable ürün listesi */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {products.map((p) => (
          <div
            key={p.id}
            className="min-w-[220px] max-w-[220px] bg-white border rounded-lg shadow hover:shadow-lg transition relative"
          >
            {/* Favori kalbi */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Link tetiklenmesin
                e.preventDefault();
                toggleFavorite(p);
              }}
              className="absolute top-2 right-2 z-20 text-gray-400 hover:text-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isFavorite(p.id) ? "orange" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                />
              </svg>
            </button>

            {/* Ürün resmi */}
            <Link href={`/product/${p.id}`}>
              <div className="relative w-full h-40">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </Link>

            {/* Ürün bilgileri */}
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                {p.name}
              </h3>
              <p className="text-blue-600 font-semibold mt-1">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
