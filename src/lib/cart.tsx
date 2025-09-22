// src/lib/cart.ts
// LocalStorage tabanlı sepet yardımcı kütüphanesi.
// Minimal, güvenilir ve event-driven: 'cartUpdated' custom event'i gönderir.

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: string; // "52.000 TL" gibi
  quantity: number;
}

const STORAGE_KEY = "pasaj_cart";

function readStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
  } catch (e) {
    console.error("cart read error", e);
    return [];
  }
}

function writeStorage(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    const count = items.reduce((s, it) => s + (it.quantity || 0), 0);
    window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { count } }));
  } catch (e) {
    console.error("cart write error", e);
  }
}

export function getCart(): CartItem[] {
  return readStorage();
}

export function clearCart() {
  writeStorage([]);
}

export function getCartCount(): number {
  const items = readStorage();
  return items.reduce((s, it) => s + (it.quantity || 0), 0);
}

export function addToCart(item: {
  id: string;
  name: string;
  image: string;
  price: string;
}, qty = 1) {
  const cart = readStorage();
  const existing = cart.find((c) => c.id === item.id);
  if (existing) {
    existing.quantity = (existing.quantity || 0) + qty;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: qty,
    });
  }
  writeStorage(cart);
}

export function updateQuantity(id: string, qty: number) {
  const cart = readStorage();
  const idx = cart.findIndex((c) => c.id === id);
  if (idx === -1) return;
  if (qty <= 0) {
    cart.splice(idx, 1);
  } else {
    cart[idx].quantity = qty;
  }
  writeStorage(cart);
}

export function removeFromCart(id: string) {
  const cart = readStorage().filter((c) => c.id !== id);
  writeStorage(cart);
}

// Fiyat yardımcıları
export function parsePrice(priceString: string): number {
  // "52.000 TL" -> 52000
  const digits = priceString.replace(/[^0-9]/g, "");
  const n = parseInt(digits || "0", 10);
  return isNaN(n) ? 0 : n;
}

export function formatPrice(amount: number): string {
  return amount.toLocaleString("tr-TR") + " TL";
}
