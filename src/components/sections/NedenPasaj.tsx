/*
import React from "react";

export default function NedenPasaj() {
  return (
    <section className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Neden Pasaj?</h3>
          <p className="text-base">
            Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve Turkcell Pasaj ayrıcalığıyla keşfedin.
          </p>
        </div>
         <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Hızlı ve Kolay Teslimat</h3>
          <p className="text-base">
            Siparişiniz isterseniz gün içinde gelsin, isterseniz bir tıkla gelin ve mağazadan teslim alın.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Esnek Ödeme & Kolay İade</h3>
          <p className="text-base">
            Alışverişlerinizi ister kredi kartınıza taksitlendirin ister Turkcell faturanıza ek, 36 aya varan vade imkanından faydalanın. Ücretsiz iptal ve iade kolaylığıyla.
          </p>
        </div>
      </div>
    </section>
  );
}
*/

// yenisi
import React from "react";
import { Truck, CreditCard, Undo2 } from "lucide-react";

export default function NedenPasaj() {
  return (
    <section className="bg-gray-100 text-gray-800 pt-12 pb-0">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Neden Pasaj?</h2>
        <p className="text-base mb-12">
          Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı
          saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve
          Turkcell Pasaj ayrıcalığıyla keşfedin.
        </p>

        {/* Özellikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 padding-bottom: 20px;">
          {/* 1. kutu */}
          <div className="flex flex-col items-center text-center padding-bottom: 20px;">
            <div className="bg-[#253342] text-white p-4 rounded-full mb-4">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Hızlı ve Kolay Teslimat
            </h3>
            <p className="text-sm text-gray-700 padding-bottom:20px;">
              Siparişiniz isterseniz gün içinde gelsin, isterseniz bir tıkla
              gelin ve mağazadan teslim alın.
            </p>
          </div>

          {/* 2. kutu */}
          <div className="flex flex-col items-center text-center padding-bottom: 20px; ">
            <div className="bg-[#253342] text-white p-4 rounded-full mb-4">
              <CreditCard className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Esnek Ödeme Seçenekleri
            </h3>
            <p className="text-sm text-gray-700 padding-bottom: 20px;">
              Alışverişlerinizi ister kredi kartınıza taksitlendirin ister
              Turkcell faturanıza ek, 36 aya varan vade imkanından faydalanın.
            </p>
          </div>

          {/* 3. kutu */}
          <div className="flex flex-col items-center text-center padding-bottom:20px;">
            <div className="bg-[#253342] text-white p-4 rounded-full mb-4">
              <Undo2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Ücretsiz İptal ve İade
            </h3>
            <p className="text-sm text-gray-700 padding-bottom:20px;">
              Ürünlerinizi kolayca ve hiçbir ücret ödemeden iptal ve iade
              edebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
