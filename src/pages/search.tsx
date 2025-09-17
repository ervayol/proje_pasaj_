import { useRouter } from "next/router";
import RootLayout from "@/components/layout/RootLayout";
import { products } from "@/data/products";
import Link from "next/link";
import { useMemo } from "react";

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;

  const filteredProducts = useMemo(() => {
    if (!q || typeof q !== "string") return [];
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.category.toLowerCase().includes(q.toLowerCase())
    );
  }, [q]);
   return (
    <RootLayout>
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Arama Sonuçları: "{q}"</h1>

        {filteredProducts.length === 0 ? (
          <p>Ürün bulunamadı.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredProducts.map((p) => (
              <li
                key={p.id}
                className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Link href={`/product/${p.id}`}>
                  <h2 className="font-semibold">{p.name}</h2>
                  <p className="text-sm text-gray-500">{p.category}</p>
                  <p className="text-lg font-bold mt-2">{p.price} TL</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </RootLayout>
  );
}