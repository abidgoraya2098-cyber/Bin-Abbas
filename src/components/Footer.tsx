import React from "react";
import { ShieldCheck, Heart } from "lucide-react";
import { DEVELOPER_NAME, DEVELOPER_ENGLISH_NAME, BUSINESS_NAME, ENGLISH_NAME, CONTACT_PHONE_DISPLAY } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { useAdmin } from "../context/AdminContext";

export default function Footer() {
  const { isUrdu } = useLanguage();
  const { isAdmin, setIsLoginModalOpen } = useAdmin();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-6 pt-4 pb-2 text-center border-t border-teal-200 select-none">
      <div className="inline-flex items-center gap-1.5 text-[11px] font-black text-teal-950 bg-teal-100/90 px-3.5 py-1 rounded-full border border-teal-300 shadow-xs mb-1.5">
        <ShieldCheck size={14} className="text-teal-700" />
        <span>
          {isUrdu ? `تیار کردہ و جملہ حقوق محفوظ: ${DEVELOPER_NAME}` : `Developed by: ${DEVELOPER_ENGLISH_NAME}`}
        </span>
      </div>

      <p className="text-[10.5px] text-slate-700 font-bold">
        © {year} {isUrdu ? BUSINESS_NAME : ENGLISH_NAME} - 24/7 Helpline: {CONTACT_PHONE_DISPLAY}
      </p>

      <div className="mt-2">
        <button
          type="button"
          onClick={() => setIsLoginModalOpen(true)}
          className="text-[10px] text-slate-500 hover:text-teal-800 font-bold transition-colors cursor-pointer inline-flex items-center gap-1"
        >
          <span>{isAdmin ? (isUrdu ? "👑 ایڈمن موڈ فعال ہے" : "👑 Admin Active") : (isUrdu ? "ایڈمن لاگ ان" : "Admin Login")}</span>
        </button>
      </div>
    </footer>
  );
}
