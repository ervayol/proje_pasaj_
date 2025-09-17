"use client";
import React, { useState } from "react";


// Ürün tipi
interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
}
const products: Product[] = [
    {
        id: 1,
        name: "iPhone 14",
        category: "Cep Telefonu",
        price: "52.979 TL",
        image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/1698403918712/1698403923878/1698403923878_600x450.png?1757850864000",
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        category: "Cep Telefonu",
        price: "64.999 TL",
        image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00FIN9/4-1674912039376/4-1674912039376_600x450.png?1757850864000",
    },
    {
        id: 3,
        name: "iPad Pro",
        category: "Tablet-Bilgisayar",
        price: "46.948 TL",
        image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00CLCP/3-1667297803421/3-1667297803421_600x450.png?1757850864000",
    },
    {
        id: 4,
        name: "MacBook Air",
        category: "Tablet-Bilgisayar",
        price: "64.999 TL",
        image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00PTYO/20249272219-00PTYO-1/20249272219-00PTYO-1_600x450.png?1757850864000",
    },
    {
        id: 5,
        name: "Saç Kurutma Makinesi",
        category: "Kişisel Bakım",
        price: "1.500 TL",
        image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00R844/2025141443-00R844-1/2025141443-00R844-1_600x450.png?1757850864000",
    },
    {
        id: 6,
        name: "Tıraş Makinesi",
        category: "Kişisel Bakım",
        price: "998 TL",
        image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00HIGU/00HIGU-1/00HIGU-1_600x450.png?1757850864000",
    },
    {
        id: 7,
        name: "Şarjlı Diş Fırçası",
        category: "Sağlık",
        price: "12.699 TL",
        image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/DE/1-1669637368706/1-1669637368706_600x450.png?1757850864000",
    },
    {
        id: 8,
        name: "Ateş Ölçer",
        category: "Sağlık",
        price: "259 TL",
        image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00CCZM/1-1665985984708/1-1665985984708_600x450.png?1757850864000",
    },
];
const categories = [
    "Tümü",
    "Cep Telefonu",
    "Tablet-Bilgisayar",
    "Kişisel Bakım",
    "Sağlık",
] as const;


type Category = typeof categories[number];


export default function BestSellers() {
    const [activeCategory, setActiveCategory] = useState<Category>("Tümü");


    const filteredProducts =
        activeCategory === "Tümü"
            ? products
            : products.filter((p) => p.category === activeCategory);
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">En Çok Satanlar</h2>


            {/* Kategori Butonları */}
            <div className="flex gap-3 mb-6 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === cat
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            {/* Ürünler Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        <div className="h-32 flex items-center justify-center mb-3 rounded-lg overflow-hidden bg-gray-50">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="object-contain h-full w-full"
                            />
                        </div>
                        <h3 className="font-semibold text-base mb-1">{product.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                        <p className="font-bold text-blue-600">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}