
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Brand {
  id: number;
  name: string;
  logo: string;
  link: string;
}

const brands: Brand[] = [
  { id: 1, name: "Apple", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/apple-logo.png?1757850864000", link: "/pasaj/markalar/apple" },
  { id: 2, name: "Samsung", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/samsung-logo.png?1757850864000", link: "/pasaj/markalar/samsung" },
  { id: 3, name: "Xiaomi", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/mi-logo.png?1757850864000", link: "/pasaj/markalar/xiaomi" },
  { id: 4, name: "Huawei", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/huawei-logo-2.png?1757850864000", link: "/pasaj/markalar/huawei" },
  { id: 5, name: "Philips", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/philips-logo.png?1757850864000", link: "/pasaj/markalar/philips" },
  { id: 6, name: "Sony", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/sony-logo.png?1757850864000", link: "/pasaj/markalar/sony" },
  { id: 7, name: "Lenovo", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/lenovo-logo.png?1757850864000", link: "/pasaj/markalar/lenovo" },
  { id: 8, name: "Dyson", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/dyson-logo.png?1757850864000", link: "/pasaj/markalar/dyson" },
  { id: 9, name: "JBL", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/jbl-logo.png?1757850864000", link: "/pasaj/markalar/jbl" },
  { id: 10, name: "Braun", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/braun-logo.png?1757850864000", link: "/pasaj/markalar/braun" },
];

export default function PopularBrands() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Popüler Markalar</h2>
        <button className="text-blue-600 font-medium hover:underline">
          Tüm Markalar
        </button>
      </div>

      <div className="relative">
        {/* Sol ok */}
        <span
          onClick={() => scroll("left")}
          role="button"
          tabIndex={0}
          aria-label="Önceki"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-500 hover:text-gray-700 cursor-pointer select-none"
        >
          <ChevronLeft size={36} strokeWidth={2.5} />
        </span>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-12"
        >
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={brand.link}
              className="min-w-[90px] h-[70px] flex items-center justify-center border rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="object-contain max-h-[50px] max-w-[80px]"
              />
            </a>
          ))}
        </div>

        {/* Sağ ok */}
        <span
          onClick={() => scroll("right")}
          role="button"
          tabIndex={0}
          aria-label="Sonraki"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-500 hover:text-gray-700 cursor-pointer select-none"
        >
          <ChevronRight size={36} strokeWidth={2.5} />
        </span>
      </div>
    </div>
  );
}
