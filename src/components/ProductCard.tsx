import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div
      className="
        w-[17.5rem] h-[28.375rem] rounded-md shadow 
        bg-white flex flex-col relative 
        p-4 box-border mb-5 flex-shrink-0
        transition-all duration-200
        hover:border hover:border-orange-500
      "
    >
      {/* Favori kalbi */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          toggleFavorite(product);
        }}
        className="absolute top-3 right-3 z-20 text-gray-400 hover:text-orange-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isFavorite(product.id) ? "orange" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7"
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
      <Link href={`/product/${product.id}`} className="flex-1 flex items-center justify-center">
        <div className="relative w-full h-48">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
      </Link>

      {/* Ürün bilgileri */}
      <div className="pt-4">
        <h3 className="text-base font-medium text-gray-800 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-blue-600 font-semibold mt-2 text-lg">{product.price}</p>
      </div>
    </div>
  );
}
