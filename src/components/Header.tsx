import React, { useState } from "react";
import { motion } from "motion/react";
import { Globe, Bell, Share2, Check, Download, ShieldCheck, PhoneCall, HeartPulse } from "lucide-react";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { useAdmin } from "../context/AdminContext";
import { useNotifications } from "../context/NotificationContext";
import { getTranslation } from "../i18n";
import BinAbbasHomeCareLogo from "./BinAbbasHomeCareLogo";

export default function Header() {
  const { language, isUrdu, toggleLanguage } = useLanguage();
  const { isAdmin, setIsLoginModalOpen } = useAdmin();
  const { unreadInquiriesCount, setIsNotificationModalOpen } = useNotifications();
  const t = getTranslation(language);

  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = isUrdu
      ? `السلام علیکم!\n\nبن عباس ہوم کیئر سروسز (BIN ABBAS HOME CARE)\nگھر پر 24 گھنٹے کوالیفائیڈ نرسنگ، مریضوں کی دیکھ بھال، بزرگ افراد کی نگہداشت اور میڈیکل آلات کے لیے رابطہ کریں:\nفون: ${CONTACT_PHONE_DISPLAY}\nلنک: ${window.location.href}`
      : `Hello!\n\nBIN ABBAS HOME CARE\n24/7 Qualified Nursing & Patient Care at Home:\nCall: ${CONTACT_PHONE_DISPLAY}\nLink: ${window.location.href}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Bin Abbas Home Care",
          text,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full relative select-none">
      {/* Top Banner with Clean Action Buttons */}
      <div className="bg-gradient-to-b from-teal-50 via-white to-teal-50/60 rounded-3xl p-3.5 sm:p-4 border-2 border-teal-200 shadow-lg flex flex-col items-center">
        
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between mb-3 gap-2">
          {/* Left: Language & Notification */}
          <div className="flex items-center gap-1.5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-teal-50 text-teal-950 font-black text-xs border border-teal-300 shadow-xs cursor-pointer"
              title={isUrdu ? "Switch to English" : "اردو میں دیکھیں"}
            >
              <Globe size={13} className="text-teal-700 shrink-0" />
              <span>{t.langToggle}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setIsNotificationModalOpen(true)}
              className="p-2 rounded-full bg-white hover:bg-teal-50 text-teal-900 border border-teal-300 shadow-xs cursor-pointer relative"
              title="Notifications"
            >
              <Bell size={15} />
              {unreadInquiriesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce shadow">
                  {unreadInquiriesCount}
                </span>
              )}
            </motion.button>
          </div>

          {/* Right: Share & Admin Key */}
          <div className="flex items-center gap-1.5">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleShare}
              className="p-2 rounded-full bg-white hover:bg-teal-50 text-teal-900 border border-teal-300 shadow-xs cursor-pointer"
              title={t.shareApp}
            >
              {copied ? (
                <span className="flex items-center gap-1 text-[10px] font-bold text-teal-700 px-0.5">
                  <Check size={14} />
                  <span>{t.copied}</span>
                </span>
              ) : (
                <Share2 size={15} />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setIsLoginModalOpen(true)}
              className={`p-2 rounded-full border shadow-xs cursor-pointer transition-colors ${
                isAdmin
                  ? "bg-amber-400 text-slate-950 border-amber-500 ring-2 ring-amber-300"
                  : "bg-white hover:bg-teal-50 text-teal-800 border-teal-300"
              }`}
              title={isAdmin ? (isUrdu ? "👑 ایڈمن موڈ آن ہے" : "👑 Admin Active") : (isUrdu ? "ایڈمن لاگ ان" : "Admin Login")}
            >
              <ShieldCheck size={15} className={isAdmin ? "text-slate-950" : "text-teal-700"} />
            </motion.button>
          </div>
        </div>

        {/* Logo Component */}
        <BinAbbasHomeCareLogo className="my-1" />

        {/* 24/7 Emergency Medical Helpline Card */}
        <a
          href={`tel:+${CONTACT_PHONE}`}
          className="w-full max-w-sm mt-3 py-2.5 px-3.5 rounded-2xl bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 text-white flex items-center justify-between gap-2 shadow-md border border-teal-400 hover:brightness-105 active:scale-98 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <PhoneCall size={16} className="text-white animate-pulse" />
            </div>
            <div className={isUrdu ? "text-right" : "text-left"}>
              <span className="text-[10px] font-bold text-teal-100 block leading-tight">
                {t.emergencyBadge}
              </span>
              <span className="text-sm font-black tracking-wider leading-tight">
                {CONTACT_PHONE_DISPLAY}
              </span>
            </div>
          </div>
          <span className="text-[10px] bg-white text-teal-900 font-black px-2.5 py-1 rounded-full shadow-xs">
            {isUrdu ? "فوری کال کریں ⚡" : "Call 24/7 ⚡"}
          </span>
        </a>

      </div>
    </div>
  );
}
