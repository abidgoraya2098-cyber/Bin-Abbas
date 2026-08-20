import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bell, X, Inbox, HeartPulse } from "lucide-react";
import { useNotifications } from "../context/NotificationContext";
import { useAdmin } from "../context/AdminContext";
import { useLanguage } from "../context/LanguageContext";

export default function NotificationModal() {
  const { isNotificationModalOpen, setIsNotificationModalOpen, unreadInquiriesCount, setIsAdminInboxOpen } = useNotifications();
  const { isAdmin } = useAdmin();
  const { isUrdu } = useLanguage();

  return (
    <AnimatePresence>
      {isNotificationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" dir={isUrdu ? "rtl" : "ltr"}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsNotificationModalOpen(false)}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-[380px] bg-white rounded-3xl p-5 shadow-2xl border-2 border-teal-400 z-10 text-slate-900"
          >
            <button
              type="button"
              onClick={() => setIsNotificationModalOpen(false)}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-teal-50 text-teal-800 hover:bg-teal-100 cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
              <div className="p-2 rounded-xl bg-teal-100 text-teal-800">
                <Bell size={18} />
              </div>
              <h3 className="text-base font-black text-teal-950">
                {isUrdu ? "نوٹیفکیشن سینٹر" : "Notification Center"}
              </h3>
            </div>

            <div className="py-4 space-y-3">
              <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200 text-xs">
                <div className="flex items-center gap-1.5 font-black text-teal-950 mb-1">
                  <HeartPulse size={15} className="text-teal-700" />
                  <span>24/7 ہوم نرسنگ ہیلپ لائن فعال ہے</span>
                </div>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  کسی بھی ہنگامی طبی صورت میں 03204800071 پر براہِ راست رابطہ کریں۔
                </p>
              </div>

              {isAdmin && (
                <button
                  type="button"
                  onClick={() => {
                    setIsNotificationModalOpen(false);
                    setIsAdminInboxOpen(true);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-teal-700 text-white font-black text-xs flex items-center justify-center gap-2 cursor-pointer shadow hover:bg-teal-800"
                >
                  <Inbox size={15} />
                  <span>کسٹمر کیئر ان باکس کھولیں ({unreadInquiriesCount})</span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
