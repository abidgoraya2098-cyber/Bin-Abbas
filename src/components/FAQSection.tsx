import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS_HOME_CARE } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function FAQSection() {
  const { isUrdu } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(FAQS_HOME_CARE[0].id);

  return (
    <div className={`w-full my-3 bg-white rounded-2xl p-4 border border-teal-200 shadow-sm ${isUrdu ? "text-right" : "text-left"}`}>
      <div className="flex items-center gap-2 pb-2.5 border-b border-teal-100 mb-3">
        <div className="p-2 rounded-xl bg-teal-100 text-teal-800">
          <HelpCircle size={18} />
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-black text-teal-950">
            {isUrdu ? "اکثر پوچھے جانے والے سوالات" : "Frequently Asked Questions"}
          </h3>
          <p className="text-[10.5px] text-slate-500 font-semibold">
            {isUrdu ? "ہوم کیئر سروسز سے متعلق رہنمائی" : "Helpful info about home nursing"}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {FAQS_HOME_CARE.map((faq) => {
          const isOpen = openId === faq.id;
          const q = isUrdu ? faq.questionUrdu : faq.questionEnglish;
          const a = isUrdu ? faq.answerUrdu : faq.answerEnglish;

          return (
            <div key={faq.id} className="border border-teal-100 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full p-3 bg-teal-50/50 hover:bg-teal-50 flex items-center justify-between text-xs font-black text-teal-950 cursor-pointer transition-colors text-left"
              >
                <span>{q}</span>
                <ChevronDown size={15} className={`text-teal-700 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="p-3 bg-white text-[11px] text-slate-700 font-medium leading-relaxed border-t border-teal-100">
                  {a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
