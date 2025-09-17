import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "sac-kurutma-makinesi",
    name: "Saç Kurutma Makinesi",
    price: "1.500 TL",
    image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00R844/2025141443-00R844-1/2025141443-00R844-1_600x450.png?1757850864000",
  },
  {
    id: "laptop",
    name: "Laptop",
    price: "46.400 TL",
    image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00TIU6/20256181710-00TIU6-1/20256181710-00TIU6-1_600x450.png?1757850864000",
  },
  {
    id: "airpods",
    name: "AirPods",
    price: "12.199 TL",
    image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/aksesuar/Apple/airpods-pro/cg/1/1_600x450.png?1757850864000",
  },
  {
    id: "supurge",
    name: "Dikey Süpürge",
    price: "19.999 TL",
    image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00QJEG/202411131621-00QJEG-1/202411131621-00QJEG-1_600x450.png?1757850864000",
  },
];
export default function BestOffers() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-semibold mb-6">En İyi Teklifler</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.id}`}
            className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <div className="relative w-full h-40">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
                {p.name}
              </h3>
              <p className="text-blue-600 font-semibold">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}