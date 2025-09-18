import Image from "next/image";
import Link from "next/link";

export default function Kampanyalar() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-semibold mb-6">Kampanyalar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sol taraf: iki yatay görsel */}
        <div className="flex flex-col gap-4 md:col-span-2">
          <Link
            href="https://www.turkcell.com.tr/pasaj/kampanyalar/cihazlar/1000-tlye-varan-taksitlerle-alabilecegin-urunler-burada"
            className="block w-full relative h-40 md:h-56 rounded-lg overflow-hidden"
          >
            <Image
              src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kampanya/yatay/ff36taksit-kampanyalar-yatay-web.jpg?1758112274000"
              alt="1000 TL'ye varan taksit kampanyası"
              fill
              className="object-cover"
            />
          </Link>
           <Link
            href="https://www.turkcell.com.tr/pasaj/kampanyalar/cihazlar/xiaomi-gunleri"
            className="block w-full relative h-40 md:h-56 rounded-lg overflow-hidden"
          >
            <Image
              src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kampanya/yatay/xiaomigunleri-kampanyalar-yatay-web.jpg?1758112274000"
              alt="Xiaomi Günleri kampanyası"
              fill
              className="object-cover"
            />
          </Link>
        </div>
         {/* Sağ taraf: dikey görsel */}
        <Link
          href="https://www.turkcell.com.tr/pasaj/kampanyalar/fibabanka"
          className="block w-full relative h-80 md:h-full rounded-lg overflow-hidden"
        >
          <Image
            src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kampanya/dikey/fibabanka0925-kampanyalar-dikey-web.jpg?1758112274000"
            alt="Fibabanka Kampanyası"
            fill
            className="object-cover"
          />
        </Link>
      </div>
    </section>
  );
}
