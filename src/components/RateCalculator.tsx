import React, { useState } from "react";
import { Calculator, Sparkles, MessageCircle, Check } from "lucide-react";
import { HOME_CARE_SERVICES, CONTACT_PHONE } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function RateCalculator() {
  const { isUrdu } = useLanguage();

  const [service, setService] = useState(HOME_CARE_SERVICES[0].id);
  const [shift, setShift] = useState<"12h" | "24h">("12h");
  const [days, setDays] = useState<number>(30);

  const calculateEstimate = () => {
    let baseDaily = 2200;
    if (service === "nursing") baseDaily = 2800;
    else if (service === "elderly") baseDaily = 2000;
    else if (service === "post_op") baseDaily = 3000;
    else if (service === "physio") baseDaily = 1500;
    else if (service === "equipment") baseDaily = 800;
    else if (service === "mother_baby") baseDaily = 2500;

    if (shift === "24h") baseDaily = Math.round(baseDaily * 1.8);

    const total = baseDaily * days;
    // Monthly discount
    const discount = days >= 30 ? 0.15 : days >= 7 ? 0.05 : 0;
    const finalTotal = Math.round(total * (1 - discount));

    return {
      daily: baseDaily,
      total: finalTotal,
      discountText: discount > 0 ? (isUrdu ? `${Math.round(discount * 100)}% فیملی رعایت شامل ہے` : `${Math.round(discount * 100)}% Discount Applied`) : null
    };
  };

  const est = calculateEstimate();

  const handleInquire = () => {
    const text = isUrdu
      ? `السلام علیکم! بن عباس ہوم کیئر، میں نے ایپ پر کیئر پیکج کا تخمینہ لگایا ہے:\n\n🩺 سروس: ${service}\n⏰ شفٹ: ${shift === "12h" ? "12 گھنٹے" : "24 گھنٹے"}\n📅 مدت: ${days} دن\n💰 تخمینہ شدہ بجٹ: ${est.total.toLocaleString()} روپے\n\nبراہِ کرم حتمی ریٹس اور سٹاف کی تفصیلات بتائیں۔`
      : `Hello Bin Abbas Home Care, I calculated an estimate:\n\nService: ${service}, Shift: ${shift}, Days: ${days}, Est: Rs. ${est.total.toLocaleString()}`;
    const url = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`w-full my-3 bg-gradient-to-br from-teal-950 via-teal-900 to-teal-950 text-white rounded-3xl p-4 sm:p-5 border-2 border-teal-400 shadow-xl ${isUrdu ? "text-right" : "text-left"}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-teal-800">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-2xl bg-teal-400 text-teal-950 shadow-sm">
            <Calculator size={20} />
          </div>
          <div>
            <h3 className="text-base font-black text-teal-200">
              {isUrdu ? "فوری فیس و پیکج کیلکولیٹر" : "Instant Rate Calculator"}
            </h3>
            <p className="text-[10.5px] text-teal-300">
              {isUrdu ? "مطلوبہ شفٹ اور دنوں کے مطابق فوراً خرچ معلوم کریں" : "Estimate your in-home care budget"}
            </p>
          </div>
        </div>
        <span className="text-[9.5px] font-black bg-teal-400 text-teal-950 px-2 py-0.5 rounded-full">
          AI تخمینہ ⚡
        </span>
      </div>

      <div className="space-y-3 mt-3">
        {/* Service Select */}
        <div>
          <label className="block text-xs text-teal-200 font-bold mb-1">
            {isUrdu ? "1. سروس کی قسم:" : "1. Select Service:"}
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-teal-900 border border-teal-700 rounded-xl px-3 py-2 text-xs font-bold text-teal-100 focus:outline-none focus:border-teal-400"
          >
            {HOME_CARE_SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {isUrdu ? s.titleUrdu : s.titleEnglish}
              </option>
            ))}
          </select>
        </div>

        {/* Shift & Duration */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs text-teal-200 font-bold mb-1">
              {isUrdu ? "2. شفٹ کا وقت:" : "2. Shift:"}
            </label>
            <div className="grid grid-cols-2 gap-1">
              <button
                type="button"
                onClick={() => setShift("12h")}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  shift === "12h" ? "bg-teal-400 text-teal-950 font-black" : "bg-teal-900/60 text-teal-200 border border-teal-700"
                }`}
              >
                12h
              </button>
              <button
                type="button"
                onClick={() => setShift("24h")}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  shift === "24h" ? "bg-teal-400 text-teal-950 font-black" : "bg-teal-900/60 text-teal-200 border border-teal-700"
                }`}
              >
                24h
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs text-teal-200 font-bold mb-1">
              {isUrdu ? "3. مطلوبہ مدت:" : "3. Duration:"}
            </label>
            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full bg-teal-900 border border-teal-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-teal-100 focus:outline-none focus:border-teal-400"
            >
              <option value={1}>{isUrdu ? "1 دن (Single Day)" : "1 Day"}</option>
              <option value={7}>{isUrdu ? "7 دن (1 ہفتہ)" : "7 Days (1 Week)"}</option>
              <option value={15}>{isUrdu ? "15 دن" : "15 Days"}</option>
              <option value={30}>{isUrdu ? "30 دن (1 مہینہ)" : "30 Days (1 Month)"}</option>
            </select>
          </div>
        </div>

        {/* Output Box */}
        <div className="p-3.5 rounded-2xl bg-teal-900/80 border-2 border-teal-400/80 mt-3 text-center space-y-1">
          <span className="text-xs text-teal-300 font-bold block">
            {isUrdu ? "تخمینہ شدہ کل رقم:" : "Estimated Total Cost:"}
          </span>
          <div className="text-2xl sm:text-3xl font-black text-teal-300 tracking-wide font-sans">
            Rs. {est.total.toLocaleString()}
          </div>
          {est.discountText && (
            <span className="text-[10px] bg-teal-400/20 text-teal-200 px-2 py-0.5 rounded-md inline-block font-bold border border-teal-400/40">
              ✨ {est.discountText}
            </span>
          )}

          <button
            type="button"
            onClick={handleInquire}
            className="w-full mt-2 py-2 px-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-black text-xs rounded-xl shadow flex items-center justify-center gap-1.5 hover:brightness-110 active:scale-98 cursor-pointer"
          >
            <MessageCircle size={14} className="fill-white" />
            <span>{isUrdu ? "اس تخمینہ پر سٹاف بُک کریں" : "Book with this Estimate"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
