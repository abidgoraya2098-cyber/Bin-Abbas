import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Inbox, X, Phone, MessageCircle, Trash2, CheckCircle2, User } from "lucide-react";
import { useNotifications } from "../context/NotificationContext";
import { useLanguage } from "../context/LanguageContext";
import { BUSINESS_NAME } from "../data";

export default function AdminInboxModal() {
  const { inquiries, isAdminInboxOpen, setIsAdminInboxOpen, updateInquiryStatus, deleteInquiry } = useNotifications();
  const { isUrdu } = useLanguage();

  const handleWhatsApp = (phone?: string, name?: string) => {
    if (!phone) return;
    const clean = phone.replace(/[^0-9]/g, "");
    const formatted = clean.startsWith("0") ? `92${clean.substring(1)}` : clean;
    const text = `السلام علیکم محترم ${name || ""} صاحب، میں بن عباس ہوم کیئر سروسز سے بات کر رہا ہوں۔ آپ نے ہوم نرسنگ سروس کے لیے رابطہ کیا تھا۔`;
    window.open(`https://wa.me/${formatted}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isAdminInboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto" dir={isUrdu ? "rtl" : "ltr"}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAdminInboxOpen(false)}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-[480px] bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border-2 border-teal-400 z-10 text-slate-900 my-auto max-h-[88vh] flex flex-col"
          >
            <button
              type="button"
              onClick={() => setIsAdminInboxOpen(false)}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-teal-50 text-teal-800 hover:bg-teal-100 cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="p-2.5 rounded-2xl bg-teal-100 text-teal-800">
                <Inbox size={22} />
              </div>
              <div>
                <h3 className="text-base font-black text-teal-950">
                  {isUrdu ? "کسٹمر ہوم کیئر ان باکس" : "Customer Care Requests"}
                </h3>
                <p className="text-[10px] text-slate-500 font-bold">{BUSINESS_NAME}</p>
              </div>
            </div>

            <div className="overflow-y-auto space-y-3 my-3 flex-1 max-h-[55vh] pr-1">
              {inquiries.length > 0 ? (
                inquiries.map((inq) => (
                  <div key={inq.id} className="p-3.5 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-2">
                    <div className="flex items-start justify-between gap-2 border-b border-teal-100 pb-1.5">
                      <span className="text-xs font-black text-teal-900">{inq.serviceName}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-slate-500">{inq.dateFormatted}</span>
                        <button
                          type="button"
                          onClick={() => deleteInquiry(inq.id)}
                          className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div><span className="text-slate-500 font-bold">شہر / پتہ: </span><span className="font-black">{inq.city} {inq.areaAddress ? `(${inq.areaAddress})` : ""}</span></div>
                      <div><span className="text-slate-500 font-bold">شفٹ: </span><span className="font-black">{inq.shiftType}</span></div>
                      <div><span className="text-slate-500 font-bold">سٹاف: </span><span className="font-black">{inq.staffPreference}</span></div>
                      <div><span className="text-slate-500 font-bold">مدت: </span><span className="font-black">{inq.duration}</span></div>
                    </div>

                    {inq.patientCondition && (
                      <p className="text-[10.5px] bg-white p-2 rounded-lg border border-teal-100 text-slate-700">
                        🩺 {inq.patientCondition}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-1 border-t border-teal-100">
                      <div className="flex items-center gap-1.5 text-xs font-black text-teal-950">
                        <User size={13} />
                        <span>{inq.clientName || "نامعلوم کلائنٹ"} ({inq.clientPhone || "نمبر نہیں ہے"})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {inq.clientPhone && (
                          <button
                            type="button"
                            onClick={() => handleWhatsApp(inq.clientPhone, inq.clientName)}
                            className="p-1.5 rounded-lg bg-[#25D366] text-white cursor-pointer"
                            title="WhatsApp"
                          >
                            <MessageCircle size={13} className="fill-white" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-slate-400">
                  <Inbox size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-xs font-bold">{isUrdu ? "فی الحال کوئی بکنگ درخواست موجود نہیں ہے۔" : "No requests found."}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
