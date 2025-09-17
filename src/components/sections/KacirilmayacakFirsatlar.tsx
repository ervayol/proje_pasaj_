/*import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
const fırsatGorselleri: { src: string; alt: string }[] = [
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/fibabanka0925-KF.jpg",
        alt: "Fibabanka Kobi Eylül 2025",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/maximum30k-KF.jpg",
        alt: "İş Bankası Maximum 30 K Eylül 2025",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/r1_bbva25k-KF.jpg",
        alt: "Garanti Bankası 25 K TNA - Ağustos 2025",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/qnb85k-KF.jpg",
        alt: "QNB 85 K Temmuz 2025",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/iscep-KF.jpg",
        alt: "İş Bankası 55 K Şubat",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/ceb2602-KF.jpg",
        alt: "Casper 2025",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/tvpluscocuk-KF.jpg",
        alt: "TV+ Pasaj Lansmanı",
    },
];
export default function KacirilmayacakFirsatlar() {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 py-8 relative">
            <h2 className="text-2xl font-bold mb-6">Kaçırılmayacak Fırsatlar</h2>


            {/* Custom navigation buttons with lucide-react icons *}
            <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100">
                <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100">
                <ArrowRight className="w-6 h-6" />
            </button>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
                className="!pb-10"
            >
                {fırsatGorselleri.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-auto rounded-xl shadow-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
    */

"use client"; // 🔥 Bu satır hatayı çözüyor

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const fırsatGorselleri: { src: string; alt: string }[] = [
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/fibabanka0925-KF.jpg",
        alt: "Fibabanka Kobi Eylül 2025",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/maximum30k-KF.jpg",
        alt: "İş Bankası Maximum 30 K Eylül 2025",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/r1_bbva25k-KF.jpg",
        alt: "Garanti Bankası 25 K TNA - Ağustos 2025",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/qnb85k-KF.jpg",
        alt: "QNB 85 K Temmuz 2025",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/iscep-KF.jpg",
        alt: "İş Bankası 55 K Şubat",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/ceb2602-KF.jpg",
        alt: "Casper 2025",
    },
    {
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/tvpluscocuk-KF.jpg",
        alt: "TV+ Pasaj Lansmanı",
    },
];
export default function KacirilmayacakFirsatlar() {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 py-8 relative">
            <h2 className="text-2xl font-bold mb-6">Kaçırılmayacak Fırsatlar</h2>

            {/* Custom navigation buttons with lucide-react icons */}
            <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100">
                <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100">
                <ArrowRight className="w-6 h-6" />
            </button>

            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
                className="!pb-10"
            >
                {fırsatGorselleri.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-auto rounded-xl shadow-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}