import React from "react";
import { Phone, MessageCircle, HeartPulse } from "lucide-react";
import { CONTACT_PHONE } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../i18n";

export default function FloatingActionBar({ onBookClick }: { onBookClick: () => void }) {
  const { language, isUrdu } = useLanguage();
  const t = getTranslation(language);

  const directCallUrl = `tel:+${CONTACT_PHONE}`;
  const whatsappUrl = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(
    isUrdu 
      ? "السلام علیکم! بن عباس ہوم کیئر، مجھے گھر پر مریض کی دیکھ بھال / نرسنگ سروس درکار ہے۔ براہِ کرم فوری رابطہ کریں۔"
      : "Hello Bin Abbas Home Care, I need nursing/patient care services at home."
  )}`;

  return (
    <div className="fixed bottom-3 inset-x-3 sm:bottom-4 sm:max-w-[420px] sm:mx-auto z-40">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-2 border-2 border-teal-300 shadow-[0_12px_36px_rgba(13,148,136,0.22)] flex items-center justify-around gap-2 select-none">
        {/* 1. Call */}
        <a
          href={directCallUrl}
          className="flex-1 py-1.5 px-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-950 flex flex-col items-center justify-center border border-teal-200 shadow-xs active:scale-95 transition-all"
        >
          <div className="flex items-center gap-1">
            <Phone size={13} className="text-teal-800" />
            <span className="text-xs font-black">{t.floatCall}</span>
          </div>
          <span className="text-[9px] text-teal-700 font-bold">{t.floatCallSub}</span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-1.5 px-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white flex flex-col items-center justify-center shadow-md border border-emerald-400 active:scale-95 transition-all"
        >
          <div className="flex items-center gap-1">
            <MessageCircle size={13} className="fill-white" />
            <span className="text-xs font-black">{t.floatWhatsApp}</span>
          </div>
          <span className="text-[9px] text-emerald-100 font-bold">{t.floatWhatsAppSub}</span>
        </a>

        {/* 3. Book Now */}
        <button
          type="button"
          onClick={onBookClick}
          className="flex-1 py-1.5 px-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white flex flex-col items-center justify-center shadow-md border border-teal-500 active:scale-95 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <HeartPulse size={13} className="text-teal-200" />
            <span className="text-xs font-black">{t.floatBook}</span>
          </div>
          <span className="text-[9px] text-teal-200 font-bold">{t.floatBookSub}</span>
        </button>
      </div>
    </div>
  );
}
