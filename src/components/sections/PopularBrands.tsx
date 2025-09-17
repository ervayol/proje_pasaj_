import React, { useRef } from "react";


interface Brand {
    id: number;
    name: string;
    logo: string;
}


const brands: Brand[] = [
    { id: 1, name: "Apple", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/apple-logo.png?1757850864000" },
    { id: 2, name: "Samsung", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/samsung-logo.png?1757850864000" },
    { id: 3, name: "Xiaomi", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/mi-logo.png?1757850864000" },
    { id: 4, name: "Huawei", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/huawei-logo-2.png?1757850864000" },
    { id: 5, name: "Philips", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/philips-logo.png?1757850864000" },
    { id: 6, name: "Sony", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/sony-logo.png?1757850864000" },
    { id: 7, name: "Lenovo", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/lenovo-logo.png?1757850864000" },
    { id: 8, name: "Dyson", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/dyson-logo.png?1757850864000" },
    { id: 9, name: "JBL", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/jbl-logo.png?1757850864000" },
    { id: 10, name: "Braun", logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/promo/braun-logo.png?1757850864000" },
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
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Popüler Markalar</h2>
                <button className="text-blue-600 font-medium hover:underline">
                    Tüm Markalar
                </button>
            </div>


            <div className="relative">
                {/* Sol ok */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
                >
                    ◀
                </button>
                {/* Slider */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-10"
                >
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="min-w-[100px] h-[100px] flex items-center justify-center border rounded-full p-4 bg-white shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="object-contain h-full"
                            />
                        </div>
                    ))}
                </div>
                {/* Sağ ok */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
                >
                    ▶
                </button>
            </div>
        </div>
    );
}