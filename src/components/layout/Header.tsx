/*
export default function Header() {
    return ( <div>Erva </div>);
}
    */

/*
"use client";


import React, { useState } from "react";
import SearchBar from "./SearchBar";
import LoginModal from "./LoginModal";
import Link from "next/link";


export default function Header() {
    const [loginOpen, setLoginOpen] = useState(false);


    const topLinks = [
        "Favorilerim",
        "Kampanyalar",
        "Yardım",
        "Neden Pasaj",
        "Pasaj Blog",
        "Sipariş Sorgulama",
        "Markalar",
    ];

    const categories = [
        "Cep Telefonu - Aksesuar",
        "Bilgisayar - Tablet",
        "Elektrikli Ev Aletleri",
        "Sağlık - Kişisel Bakım",
        "Hobi - Oyun",
        "TV - Ses Sistemleri",
        "Ev - Yaşam",
    ];
    return (
        <header className="w-full sticky top-0 z-40 bg-white">
            {/* Top mini bar *---}
            <div className="bg-gray-50 border-b">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm py-2">
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.turkcell.com.tr/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/AMBLEM_SIYAH.jpg"
                                alt="Turkcell Logo"
                                className="h-6"
                            />
                            <span className="text-xs text-gray-700">turkcell.com.tr</span>
                        </a>


                        <nav className="hidden sm:flex gap-3 text-gray-600">
                            {topLinks.map((t) => (
                                <a key={t} className="hover:text-blue-600" href="#">
                                    {t}
                                </a>
                            ))}
                        </nav>
                    </div>


                    <div className="text-gray-600 hidden sm:block">Türkiye'nin dijital pazarı</div>
                </div>
            </div>
            {/* Main header *----}
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Pasaj_logo.png"
                            alt="Pasaj"
                            className="h-8"
                            onError={(e: any) => {
                                // fallback to text if image fails
                                e.currentTarget.style.display = "none";
                            }}
                        />
                        <span className="font-semibold text-xl">Pasaj</span>
                    </Link>
                </div>


                <div className="flex-1 mx-6">
                    <SearchBar />
                </div>


                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setLoginOpen(true)}
                        className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                        Giriş Yap
                    </button>
                    <Link href="/favorites" className="hidden sm:inline-flex items-center gap-2 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        Favoriler
                    </Link>


                    <Link href="/cart" className="inline-flex items-center gap-2 bg-yellow-400 px-3 py-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                        </svg>
                        Sepet
                    </Link>
                </div>
            </div>
            {/* Category navigation *---}
            <nav className="bg-white border-t">
                <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
                    <ul className="flex gap-6 py-3 whitespace-nowrap">
                        {categories.map((cat) => (
                            <li key={cat}>
                                <a href="#" className="text-gray-700 hover:text-blue-600">
                                    {cat}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>


            <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
        </header>
    );
}

*/
"use client";

import React, { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";

export default function Header() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [cartCount, setCartCount] = useState(0);
    const [hoveredCat, setHoveredCat] = useState<string | null>(null);

    const topLinks = [
        "Kampanyalar",
        "Yardım",
        "Neden Pasaj",
        "Pasaj Blog",
        "Sipariş Sorgulama",
        "Markalar",
    ];

    const categories = [
        "Cep Telefonu - Aksesuar",
        "Bilgisayar - Tablet",
        "Elektrikli Ev Aletleri",
        "Sağlık - Kişisel Bakım",
        "Hobi - Oyun",
        "TV - Ses Sistemleri",
        "Ev - Yaşam",
    ];
    // Dummy autocomplete data
    const suggestions = [
        "iPhone 17",
        "Samsung Galaxy",
        "AirPods",
        "PlayStation 5",
        "Elektrikli Süpürge",
        "Laptop",
    ];
    const filtered =
        query.length > 2
            ? suggestions.filter((s) =>
                s.toLowerCase().includes(query.toLowerCase())
            )
            : [];

    // Dummy kategoriye göre ürün önerileri
    const categorySuggestions: Record<string, string[]> = {
        "Cep Telefonu - Aksesuar": ["iPhone 17", "Galaxy S24", "Kılıf", "Powerbank"],
        "Bilgisayar - Tablet": ["MacBook Pro", "iPad Air", "Mouse", "Klavye"],
        "Elektrikli Ev Aletleri": ["Dyson Süpürge", "Airfryer", "Kahve Makinesi"],
        "Sağlık - Kişisel Bakım": ["Saç Kurutma", "Tıraş Makinesi", "Diş Fırçası"],
        "Hobi - Oyun": ["PS5", "XBox Controller", "Lego Seti"],
        "TV - Ses Sistemleri": ["OLED TV", "Soundbar", "Hoparlör"],
        "Ev - Yaşam": ["Masa Lambası", "Yorgan", "Ofis Sandalyesi"],
    };

    // Sepet sayısını backend'den çekelim
    useEffect(() => {
        async function fetchCartCount() {
            try {
                const res = await fetch("/pasaj/basket-items-count");
                if (res.ok) {
                    const data = await res.json();
                    setCartCount(data.count ?? 0);
                }
            } catch (err) {
                console.error("Sepet sayısı alınamadı", err);
            }
        }
        fetchCartCount();
    }, []);

    return (
        <header className="w-full sticky top-0 z-40 bg-white">
            {/* Top mini bar */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 flex items-center text-xs py-2 text-gray-600">
                    <a
                        href="https://www.turkcell.com.tr/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2"
                    >
                        <img
                            src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/AMBLEM_SIYAH.jpg"
                            alt="Turkcell Logo"
                            className="h-4"
                        />
                        <span>turkcell.com.tr</span>
                    </a>

                    <nav className="hidden sm:flex gap-3 ml-6">
                        {topLinks.map((t) => (
                            <a key={t} className="hover:text-blue-600" href="#">
                                {t}
                            </a>
                        ))}
                    </nav>

                    <div className="ml-auto hidden sm:block">
                        Türkiye'nin dijital pazarı
                    </div>
                </div>
            </div>
            {/* Main header */}
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-6">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <img
                            src="https://ffo3gv1cf3ir.merlincdn.net/pasaj_static_lib/passage-assets/common/images/content/pasaj-logo-new.png"
                            alt="Pasaj"
                            className="h-16"
                        />
                    </Link>
                </div>

                {/* Search bar */}
                <div className="flex-1 mx-10 relative">
                    <div className="flex items-center bg-gray-100 rounded-md px-5 py-4 text-lg">
                        <Search className="h-7 w-7 text-gray-500 mr-3" />
                        <input
                            type="text"
                            placeholder="Ürün, kategori veya marka ara"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="bg-transparent outline-none flex-1 text-lg placeholder-gray-500"
                        />
                    </div>
                    {/* Autocomplete dropdown */}
                    {filtered.length > 0 && (
                        <ul className="absolute left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50 text-sm">
                            {filtered.map((s, i) => (
                                <li
                                    key={i}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => setQuery(s)}
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {/* Right actions */}
                <div className="flex items-center gap-6">
                    {/* Giriş Yap */}
                    <button
                        onClick={() => setLoginOpen(true)}
                        className="flex items-center gap-2 text-gray-700 border border-gray-400 px-5 py-3 rounded-md hover:border-blue-600 hover:text-blue-600 text-lg"
                    >
                        <User className="h-6 w-6" />
                        <span>Giriş Yap</span>
                    </button>

                    {/* Sepet */}
                    <Link
                        href="/cart"
                        className="relative inline-flex items-center gap-2 bg-yellow-400 px-6 py-3 rounded-md text-gray-800 font-semibold text-lg"
                    >
                        <ShoppingCart className="h-6 w-6" />
                        <span>Sepet</span>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
            {/* Category navigation */}
            <nav className="bg-white relative">
                <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
                    <ul className="flex gap-6 py-4 whitespace-nowrap text-base">
                        {categories.map((cat) => (
                            <li
                                key={cat}
                                onMouseEnter={() => setHoveredCat(cat)}
                                onMouseLeave={() => setHoveredCat(null)}
                                className="relative"
                            >
                                <a href="#" className="text-gray-700 hover:text-blue-600">
                                    {cat}
                                </a>

                                {/* Category suggestions dropdown */}
                                {hoveredCat === cat && categorySuggestions[cat] && (
                                    <ul className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg z-50 text-sm w-56">
                                        {categorySuggestions[cat].map((item, i) => (
                                            <li
                                                key={i}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
        </header>
    );
}