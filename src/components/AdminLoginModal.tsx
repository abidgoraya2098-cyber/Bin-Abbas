import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Lock, X, LogOut, CheckCircle, AlertCircle } from "lucide-react";
import { useAdmin } from "../context/AdminContext";
import { useLanguage } from "../context/LanguageContext";
import { BUSINESS_NAME } from "../data";

export default function AdminLoginModal() {
  const { isAdmin, login, logout, isLoginModalOpen, setIsLoginModalOpen } = useAdmin();
  const { isUrdu } = useLanguage();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(pin);
    if (ok) {
      setPin("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <AnimatePresence>
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" dir={isUrdu ? "rtl" : "ltr"}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLoginModalOpen(false)}
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
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-teal-50 text-teal-800 hover:bg-teal-100 cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2.5 rounded-2xl bg-teal-100 text-teal-900">
                <ShieldCheck size={22} className="text-teal-700" />
              </div>
              <div>
                <h3 className="text-base font-black text-teal-950">
                  {isUrdu ? "ایڈمن و اونر لاگ ان پورٹل" : "Admin & Owner Portal"}
                </h3>
                <p className="text-[11px] text-slate-500 font-bold">{BUSINESS_NAME}</p>
              </div>
            </div>

            {isAdmin ? (
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-teal-50 border border-teal-300 flex items-center gap-2 text-teal-950">
                  <CheckCircle size={18} className="text-teal-700 shrink-0" />
                  <p className="text-xs font-black">
                    {isUrdu ? "آپ کامیابی سے ایڈمن لاگ ان ہیں۔" : "You are logged in as Admin."}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setIsLoginModalOpen(false);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow cursor-pointer"
                >
                  <LogOut size={16} />
                  <span>{isUrdu ? "ایڈمن موڈ سے لاگ آؤٹ کریں" : "Logout Admin"}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-3.5">
                <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                  {isUrdu ? "کسٹمر کیئر درخواستیں دیکھنے کے لیے اپنا خفیہ پن درج کریں:" : "Enter your Owner PIN to access customer requests:"}
                </p>

                <div className="relative">
                  <input
                    type="password"
                    maxLength={11}
                    autoFocus
                    placeholder="PIN..."
                    value={pin}
                    onChange={(e) => {
                      setPin(e.target.value);
                      setError(false);
                    }}
                    className={`w-full bg-teal-50/60 border-2 rounded-xl px-3.5 py-2.5 text-sm font-black text-slate-900 tracking-widest text-center focus:outline-none ${
                      error ? "border-red-500 bg-red-50" : "border-teal-300 focus:border-teal-600"
                    }`}
                  />
                  <Lock size={16} className="absolute top-1/2 -translate-y-1/2 left-3 text-slate-400" />
                </div>
                {error && (
                  <div className="flex items-center gap-1 text-red-600 text-[11px] font-bold">
                    <AlertCircle size={13} />
                    <span>{isUrdu ? "غلط پن کوڈ! دوبارہ کوشش کریں۔" : "Invalid PIN!"}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-teal-700 to-teal-600 text-white font-black text-xs shadow-md border border-teal-500 flex items-center justify-center gap-2 hover:brightness-105 cursor-pointer"
                >
                  <ShieldCheck size={16} />
                  <span>{isUrdu ? "لاگ ان کریں" : "Login"}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
