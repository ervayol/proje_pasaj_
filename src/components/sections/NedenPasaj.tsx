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
