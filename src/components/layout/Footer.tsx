/*export default function Footer() {
    return ( <div>Footer kısmı</div>
        );
}*/
/*
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      {/* Üst kısım - Hızlı Linkler *--}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-8 text-sm text-gray-700">
        <div>
          <h3 className="font-semibold mb-2">Kurumsal</h3>
          <ul className="space-y-1">
            <li><Link href="#">Hakkımızda</Link></li>
            <li><Link href="#">Kampanyalar</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Yardım</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Kategoriler</h3>
          <ul className="space-y-1">
            <li><Link href="#">Cep Telefonu</Link></li>
            <li><Link href="#">Bilgisayar & Tablet</Link></li>
            <li><Link href="#">Aksesuar</Link></li>
            <li><Link href="#">Elektrikli Ev Aletleri</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Müşteri Hizmetleri</h3>
          <ul className="space-y-1">
            <li><Link href="#">Sipariş Takibi</Link></li>
            <li><Link href="#">İade & Değişim</Link></li>
            <li><Link href="#">Sıkça Sorulan Sorular</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Bizi Takip Edin</h3>
          <div className="flex gap-3 text-lg text-blue-600">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Youtube"><FaYoutube /></a>
          </div>
        </div>
      </div>
       {/* Alt kısım - Yasal bilgiler *--}
      <div className="bg-gray-200 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} Turkcell Pasaj (Clone). Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
  */
 import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#253342] text-white mt-10">
      {/* Üst kısım */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-10 text-sm">
        <div>
          <h3 className="font-semibold mb-3">Kurumsal</h3>
          <ul className="space-y-2">
            <li><Link href="#">Hakkımızda</Link></li>
            <li><Link href="#">Kampanyalar</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Yardım</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Markalar</h3>
          <ul className="space-y-2">
            <li><Link href="#">Apple</Link></li>
            <li><Link href="#">Samsung</Link></li>
            <li><Link href="#">Xiaomi</Link></li>
            <li><Link href="#">Tüm Markalar</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Müşteri Hizmetleri</h3>
          <ul className="space-y-2">
            <li><Link href="#">Sipariş Takibi</Link></li>
            <li><Link href="#">İade & Değişim</Link></li>
            <li><Link href="#">Sıkça Sorulan Sorular</Link></li>
          </ul>
        </div>
      </div>
        {/* Alt kısım */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 text-xs">
          {/* Dil seçici */}
          <div className="flex items-center gap-2">
            <span>Dil:</span>
            <select className="bg-[#253342] border border-white/30 rounded px-2 py-1">
              <option>Türkçe</option>
              <option>English</option>
            </select>
          </div>

          {/* Sosyal medya */}
          <div className="flex gap-4 text-lg mt-4 md:mt-0">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Youtube"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}