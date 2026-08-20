import React from "react";
import { Facebook, Instagram, Youtube, Phone, MessageCircle } from "lucide-react";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function SocialLinks() {
  const { isUrdu } = useLanguage();

  return (
    <div className="my-4 pt-3.5 border-t border-teal-200 text-center select-none">
      <h3 className="text-xs font-black text-teal-950 uppercase tracking-wider mb-2.5">
        {isUrdu ? "فوری رابطہ و سوشل لنکس" : "Quick Contact & Socials"}
      </h3>
      <div className="flex items-center justify-center gap-3">
        <a
          href={`https://wa.me/${CONTACT_PHONE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow hover:scale-110 transition-transform"
          title="WhatsApp"
        >
          <MessageCircle size={20} className="fill-white" />
        </a>
        <a
          href={`tel:+${CONTACT_PHONE}`}
          className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center shadow hover:scale-110 transition-transform"
          title="Phone Call"
        >
          <Phone size={18} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow hover:scale-110 transition-transform"
          title="Facebook"
        >
          <Facebook size={18} className="fill-white" />
        </a>
      </div>
    </div>
  );
}
