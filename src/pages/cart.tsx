// src/pages/cart.tsx
"use client";

import RootLayout from "@/components/layout/RootLayout";
import React, { useEffect, useState } from "react";
import {
  CartItem,
  getCart,
  updateQuantity,
  removeFromCart,
  parsePrice,
  formatPrice,
  getCartCount,
} from "@/lib/cart";
import Link from "next/link";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  useEffect(() => {
    setItems(getCart());

    const onCartUpdated = (ev: Event) => {
      setItems(getCart());
    };

    const onStorage = (e: StorageEvent) => {
      if (e.key === "pasaj_cart" || e.key === null) {
        setItems(getCart());
      }
    };

    window.addEventListener("cartUpdated", onCartUpdated as EventListener);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("cartUpdated", onCartUpdated as EventListener);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const increase = (id: string) => {
    const it = items.find((i) => i.id === id);
    if (!it) return;
    updateQuantity(id, it.quantity + 1);
    setItems(getCart());
  };

  const decrease = (id: string) => {
    const it = items.find((i) => i.id === id);
    if (!it) return;
    const next = it.quantity - 1;
    updateQuantity(id, next);
    setItems(getCart());
  };

  const confirmRemove = (id: string) => {
    setConfirmId(id);
  };

  const doRemove = () => {
    if (!confirmId) return;
    removeFromCart(confirmId);
    setConfirmId(null);
    setItems(getCart());
  };

  const cartTotal = items.reduce(
    (s, it) => s + parsePrice(it.price) * it.quantity,
    0
  );

  return (
    <RootLayout>
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Sepetim</h1>

        {items.length === 0 ? (
          <div
            className="relative text-center py-8 rounded-md border flex flex-col items-center justify-center text-white overflow-visible max-w-1xl mx-auto"
            style={{
              background:
                "#009ed8 radial-gradient(circle at 50% -20px, #00b3e3 22%, rgba(0, 179, 227, .65) 22%, rgba(0, 179, 227, .65) 35%, rgba(0, 179, 227, .3) 35%, rgba(0, 179, 227, .3) 48%, rgba(0, 0, 0, 0) 48%)",
            }}
          >
            {/* Emocan görseli yarısı blok içinde */}
            <img
              src="//d.turkcell.com.tr/Downloads/bireysel/html/emocanlar/web/assets//images/organik-emocan.png"
              alt="Emocan"
              className="w-25 h-30 absolute -top-16"
            />

            <div className="mt-16">
              <p className="text-xl font-bold mb-2">
                Sepetinizde ürün bulunmamaktadır.
              </p>
              <p className="text-sm mb-6">
                Turkcell&apos;in avantajlı dünyasından faydalanmak için hemen
                alışverişe başlayabilirsiniz.
              </p>
              <Link
                href="/"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow"
              >
                Alışverişe Başla
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((it) => (
              <div
                key={it.id}
                className="relative flex items-center gap-4 p-4 bg-white border rounded-md"
              >
                <button
                  onClick={() => confirmRemove(it.id)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
                  aria-label="Ürünü sil"
                >
                  ✕
                </button>

                <div className="w-28 h-28 bg-gray-50 rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={it.image}
                    alt={it.name}
                    className="object-contain max-h-full"
                  />
                </div>

                <div className="flex-1">
                  <div className="font-semibold text-gray-800">{it.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{it.price}</div>

                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={() => decrease(it.id)}
                      className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100"
                    >
                      -
                    </button>
                    <div className="w-10 text-center">{it.quantity}</div>
                    <button
                      onClick={() => increase(it.id)}
                      className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right w-40">
                  <div className="text-sm text-gray-500">Toplam</div>
                  <div className="text-lg font-bold">
                    {formatPrice(parsePrice(it.price) * it.quantity)}
                  </div>
                </div>
              </div>
            ))}

            {/* Alt toplam bar */}
            <div className="flex items-center justify-between p-4 bg-white border rounded-md mt-4">
              <div>
                <div className="text-sm text-gray-500">Toplam ürün</div>
                <div className="text-xl font-semibold">{getCartCount()} adet</div>
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-500">Ara Toplam</div>
                <div className="text-2xl font-bold">{formatPrice(cartTotal)}</div>
                <button className="mt-3 bg-yellow-400 text-white px-5 py-2 rounded-md">
                  Ödeme / Devam Et
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sil onayı modalı */}
        {confirmId && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md w-full max-w-md text-center shadow-lg">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net/pasaj_static_lib/assetsv2/common/images/icons/remove.svg?1758112274000"
                alt="Remove Icon"
                className="mx-auto mb-4 w-12 h-12"
              />
              <p className="text-gray-700 text-lg mb-6">
                Ürünü silmek istediğinizden emin misiniz?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={doRemove}
                  className="bg-yellow-400 text-white px-6 py-2 rounded-md font-semibold"
                >
                  Evet
                </button>
                <button
                  onClick={() => setConfirmId(null)}
                  className="border border-gray-400 text-black px-6 py-2 rounded-md font-semibold"
                >
                  Hayır
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </RootLayout>
  );
}
