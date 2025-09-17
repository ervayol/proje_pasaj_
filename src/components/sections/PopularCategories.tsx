
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Apple Telefonlar",
    link: "https://www.turkcell.com.tr/pasaj/cep-telefonu/ios-telefonlar",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/ceptelefonu.png?1757850864000",
  },
  {
    name: "Hediye Çeklerim",
    link: "#",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/hediye1.png?1757850864000",
  },
  {
    name: "Faturana Peşin Yansıt",
    link: "#",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/1.jpg?1757850864000",
  },
  {
    name: "Çok Satanlar",
    link: "#",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/cokssatan.png?1757850864000",
  },
  {
    name: "Kurumsal Çözümler",
    link: "#",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/kurumsal.png?1757850864000",
  },
  {
    name: "Fırsatlar Kapısı",
    link: "#",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/firsitlar.png?1757850864000",
  },
   {
    name: "Akıllı Ev Sistemleri",
    link: "#",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/akilliev.png?1757850864000",
  },
  {
    name: "Kahve Makineleri",
    link: "#",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/kahv1makinasi.png?1757850864000",
  },
];
export default function PopularCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-6 text-center">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.link}
            className="flex flex-col items-center group"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-gray-200 group-hover:shadow-lg transition">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="mt-2 text-xs sm:text-sm text-gray-700 group-hover:text-blue-600">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}