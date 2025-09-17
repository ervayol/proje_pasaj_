/*import { useRouter } from "next/router";
import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
import { addToRecentlyViewed } from "@/components/sections/SonIncelenenler";

const productData: Record<
  string,
  { name: string; price: string; description: string; image: string }
> = {
  "sac-kurutma-makinesi": {
    name: "Saç Kurutma Makinesi",
    price: "999 TL",
    description: "Yüksek güçlü, 3 farklı ısı ayarı ile saç kurutma makinesi.",
    image: "https://picsum.photos/id/200/500/400",
  },
  laptop: {
    name: "Laptop",
    price: "14.999 TL",
    description: "16GB RAM, 512GB SSD, 15.6 inç ekran boyutuna sahip laptop.",
    image: "https://picsum.photos/id/201/500/400",
  },
  airpods: {
    name: "AirPods",
    price: "4.499 TL",
    description: "Aktif gürültü engelleme ve uzun pil ömrü ile AirPods.",
    image: "https://picsum.photos/id/202/500/400",
  },
  supurge: {
    name: "Dikey Süpürge",
    price: "3.299 TL",
    description: "Kablosuz kullanım, güçlü emiş gücü ile dikey süpürge.",
    image: "https://picsum.photos/id/203/500/400",
  },
};
export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || Array.isArray(id)) return null;

  const product = productData[id];

  // ✅ Ürün bulunduğunda "Son İncelenenler" listesine ekle
  useEffect(() => {
    if (product) {
      addToRecentlyViewed({
        id,
        name: product.name,
        image: product.image,
      });
    }
  }, [id, product]);

  if (!product) {
    return (
      <RootLayout>
        <main className="max-w-7xl mx-auto p-4">
          <h1 className="text-xl font-bold">Ürün bulunamadı</h1>
        </main>
      </RootLayout>
    );
  }
  return (
    <RootLayout>
      <Head>
        <title>{product.name} | Pasaj</title>
        <meta name="description" content={product.description} />
      </Head>

      <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-blue-600 text-xl font-semibold mt-2">
            {product.price}
          </p>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <button className="mt-6 px-6 py-3 bg-yellow-400 rounded-md font-medium hover:bg-yellow-500">
            Sepete Ekle
          </button>
        </div>
      </main>
    </RootLayout>
  );
}
*/

import { useRouter } from "next/router";
import RootLayout from "@/components/layout/RootLayout";
import { products } from "@/data/products";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <RootLayout>
        <main className="p-6">
          <p>Ürün bulunamadı.</p>
        </main>
      </RootLayout>
    );
  }
   return (
    <RootLayout>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-lg font-semibold">Kategori: {product.category}</p>
        <p className="text-xl font-bold mt-2">{product.price} TL</p>
      </main>
    </RootLayout>
  );
}