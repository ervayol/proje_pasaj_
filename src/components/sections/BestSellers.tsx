/*"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

/**
 * Ürün listesi: BestSellers + BestOffers (isteğine göre kategorilere dağıtıldı).
 * (id'ler string; FavoritesContext ile uyumlu.)
 *-/
const products: Product[] = [
  // BestSellers (senden gelenler)
  {
    id: "1",
    name: "iPhone 14",
    category: "Cep Telefonu-Aksesuar",
    price: "52.979 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/1698403918712/1698403923878/1698403923878_600x450.png?1757850864000",
  },
  {
    id: "2",
    name: "Samsung Galaxy S23 Ultra",
    category: "Cep Telefonu-Aksesuar",
    price: "64.999 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00FIN9/4-1674912039376/4-1674912039376_600x450.png?1757850864000",
  },
  {
    id: "3",
    name: "iPad Pro",
    category: "Bilgisayar-Tablet",
    price: "46.948 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00CLCP/3-1667297803421/3-1667297803421_600x450.png?1757850864000",
  },
  {
    id: "4",
    name: "MacBook Air",
    category: "Bilgisayar-Tablet",
    price: "64.999 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00PTYO/20249272219-00PTYO-1/20249272219-00PTYO-1_600x450.png?1757850864000",
  },
  /*{
    id: "5",
    name: "Saç Kurutma Makinesi",
    category: "Sağlık-Kişisel Bakım",
    price: "1.500 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00R844/2025141443-00R844-1/2025141443-00R844-1_600x450.png?1757850864000",
  },*-/
  {
    id: "6",
    name: "Tıraş Makinesi",
    category: "Sağlık-Kişisel Bakım",
    price: "998 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00HIGU/00HIGU-1/00HIGU-1_600x450.png?1757850864000",
  },
  {
    id: "7",
    name: "Şarjlı Diş Fırçası",
    category: "Sağlık-Kişisel Bakım",
    price: "12.699 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/DE/1-1669637368706/1-1669637368706_600x450.png?1757850864000",
  },
  {
    id: "8",
    name: "Ateş Ölçer",
    category: "Sağlık-Kişisel Bakım",
    price: "259 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00CCZM/1-1665985984708/1-1665985984708_600x450.png?1757850864000",
  },

  // BestOffers (senin söylediklerine göre kategorilere dağıtıldı)
  {
    id: "offers-1",
    name: "AirPods",
    category: "Cep Telefonu-Aksesuar",
    price: "12.199 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/aksesuar/Apple/airpods-pro/cg/1/1_600x450.png?1757850864000",
  },
  {
    id: "offers-2",
    name: "Laptop",
    category: "Bilgisayar-Tablet",
    price: "46.400 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00TIU6/20256181710-00TIU6-1/20256181710-00TIU6-1_600x450.png?1757850864000",
  },
  {
    id: "offers-3",
    name: "Saç Kurutma Makinesi (Offer)",
    category: "Elektrikli Ev Aletleri",
    price: "1.500 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00R844/2025141443-00R844-1/2025141443-00R844-1_600x450.png?1757850864000",
  },
  {
    id: "offers-4",
    name: "Dikey Süpürge",
    category: "Ev-Yaşam",
    price: "19.999 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00QJEG/202411131621-00QJEG-1/202411131621-00QJEG-1_600x450.png?1757850864000",
  },
];

const categories = [
  { name: "Tümü" }, // burada ikon yok
  {
    name: "Cep Telefonu-Aksesuar",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/ceptelefonuaksesuar.png?1758112274000",
  },
  {
    name: "Bilgisayar-Tablet",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/bilgisayartablet.png?1758112274000",
  },
  {
    name: "Elektrikli Ev Aletleri",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/elektriklievaletleri.png?1758112274000",
  },
  {
    name: "Sağlık-Kişisel Bakım",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/saglikkisiselbakim.png?1758112274000",
  },
  {
    name: "Hobi-Oyun",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/hobioyun.png?1758112274000",
  },
  {
    name: "TV-Ses Sistemleri",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/tvsessistemleri.png?1758112274000",
  },
  {
    name: "Ev-Yaşam",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/evyasam.png?1758112274000",
  },
];

export default function BestSellers() {
  const [activeCategory, setActiveCategory] = useState<string>("Tümü");
  const { toggleFavorite, isFavorite } = useFavorites();

  const filteredProducts =
    activeCategory === "Tümü"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 mt-12">
      <h2 className="text-2xl font-bold mb-6">En Çok Satanlar</h2>

      {/* Kategori satırı *-/}
      <div className="flex gap-4 mb-6 overflow-x-auto">
        {categories.map((cat) => {
          const active = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-3 whitespace-nowrap px-3 py-2 transition rounded-md ${
                active
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {/* Tümü'de ikon gösterme *-/}
              {cat.name !== "Tümü" && cat.icon && (
                // küçük ikon, yuvarlak çerçeve YOK (istediğin gibi)
                // next/image yerine <img> kullanıyorum; istersen Image ile değiştirebilirsin
                <img src={cat.icon} alt={cat.name} className="w-6 h-6 object-contain" />
              )}
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Ürünler grid *-/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="relative bg-white border rounded-lg p-3 shadow-sm hover:shadow-md hover:border-orange-500 transition"
          >
            {/* Favori butonu (kalp) *-/}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(p);
              }}
              aria-pressed={isFavorite(p.id)}
              className="absolute top-3 right-3 z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`w-6 h-6 ${isFavorite(p.id) ? "text-orange-500" : "text-gray-300"}`}
                fill={isFavorite(p.id) ? "currentColor" : "none"}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.2}
                  d="M12 20s-6.6-4.4-9.1-7.1A5.9 5.9 0 011 8.6 5.6 5.6 0 016 3.9c1.7 0 3.3.8 4 2.1.7-1.3 2.3-2.1 4-2.1a5.6 5.6 0 015 4.7c0 1.8-.8 3.4-1.9 4.7C18.6 15.6 12 20 12 20z"
                />
              </svg>
            </button>

            {/* Link çevresi: görsel + metin *-/}
            <Link href={`/product/${p.id}`} className="block">
              <div className="h-40 flex items-center justify-center mb-3 bg-gray-50 rounded-md overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={260}
                  height={200}
                  className="object-contain"
                />
              </div>

              <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">{p.name}</h3>
              <p className="text-blue-600 font-semibold">{p.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
*/


// src/components/sections/BestSellers.tsx--- ÜRÜN BLOĞU YENİ + FİLTRELEME VAR 
"use client";

import React, { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = [
  { name: "Tümü" },
  {
    name: "Cep Telefonu - Aksesuar",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/ceptelefonuaksesuar.png?1758112274000",
  },
  {
    name: "Bilgisayar - Tablet",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/bilgisayartablet.png?1758112274000",
  },
  {
    name: "Elektrikli Ev Aletleri",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/elektriklievaletleri.png?1758112274000",
  },
  {
    name: "Sağlık - Kişisel Bakım",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/saglikkisiselbakim.png?1758112274000",
  },
  {
    name: "Hobi - Oyun",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/hobioyun.png?1758112274000",
  },
  {
    name: "TV - Ses Sistemleri",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/tvsessistemleri.png?1758112274000",
  },
  {
    name: "Ev - Yaşam",
    icon: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/evyasam.png?1758112274000",
  },
];

function normalizeCategory(s?: string) {
  if (!s) return "";
  return s.toString().toLowerCase().replace(/[\s-]+/g, "");
}

export default function BestSellers() {
  const [activeCategory, setActiveCategory] = useState<string>("Tümü");

  const filteredProducts =
    activeCategory === "Tümü"
      ? products
      : products.filter(
          (p) => normalizeCategory(p.category) === normalizeCategory(activeCategory)
        );

  return (
    <section className="max-w-7xl mx-auto px-4 mt-12">
      <h2 className="text-2xl font-bold mb-6">En Çok Satanlar</h2>

      {/* Kategori satırı (sabit, scroll yok) */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {categories.map((cat) => {
          const active = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-3 whitespace-nowrap px-3 py-2 transition rounded-md ${
                active
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {cat.name !== "Tümü" && cat.icon && (
                <img src={cat.icon} alt={cat.name} className="w-6 h-6 object-contain" />
              )}
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Ürünler grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          // ProductCard sabit genişlikte bir kart olduğu için grid hücresine sığdırmak adına wrapper kullandım.
          <div key={p.id} className="w-full flex justify-center">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}



