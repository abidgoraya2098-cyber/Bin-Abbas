import React from "react";
import { ShieldCheck, UserCheck, Clock, RefreshCw, HeartHandshake, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseUs() {
  const { isUrdu } = useLanguage();

  const reasons = [
    {
      icon: ShieldCheck,
      titleUrdu: "100% پولیس و نادرا تصدیق",
      titleEn: "NADRA & Police Verified",
      descUrdu: "تمام سٹاف کا کرمنل ریکارڈ چیک اور بائیو میٹرک تصدیق شدہ ہے۔",
      descEn: "Background verified staff for total family peace of mind."
    },
    {
      icon: Award,
      titleUrdu: "طبی طور پر تربیت یافتہ نرسز",
      titleEn: "Certified Medical Nurses",
      descUrdu: "تجربہ کار اور مستند ڈپلومہ ہولڈر میل اور فی میل نرسز۔",
      descEn: "Qualified clinical nurses with hospital ICU experience."
    },
    {
      icon: RefreshCw,
      titleUrdu: "فوری متبادل سٹاف کی گارنٹی",
      titleEn: "Instant Free Replacement",
      descUrdu: "عدم اطمینان کی صورت میں بغیر کسی اضافی فیس کے سٹاف تبدیلی۔",
      descEn: "Quick replacement guaranteed if not completely satisfied."
    },
    {
      icon: Clock,
      titleUrdu: "24/7 ایمرجنسی و سپروائزر سپورٹ",
      titleEn: "24/7 Supervisor Support",
      descUrdu: "ہمہ وقت دستیاب ہیلپ لائن اور باقاعدہ دفتری نگرانی۔",
      descEn: "Round the clock helpline and active supervisor monitoring."
    }
  ];

  return (
    <div className={`w-full my-3 bg-teal-50/70 rounded-2xl p-4 border border-teal-200 ${isUrdu ? "text-right" : "text-left"}`}>
      <div className="text-center mb-3">
        <h3 className="text-sm sm:text-base font-black text-teal-950">
          {isUrdu ? "بن عباس ہوم کیئر کا انتخاب کیوں کریں؟" : "Why Choose Bin Abbas Home Care?"}
        </h3>
        <p className="text-[11px] text-slate-600 font-semibold">
          {isUrdu ? "آپ کے پیاروں کی صحت اور حفاظت ہماری اولین ترجیح ہے" : "Safe, compassionate and professional healthcare"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <div key={i} className="p-3 rounded-xl bg-white border border-teal-200/80 shadow-xs flex items-start gap-2.5">
              <div className="p-2 rounded-lg bg-teal-100 text-teal-800 shrink-0">
                <Icon size={16} />
              </div>
              <div>
                <h4 className="text-xs font-black text-teal-950">
                  {isUrdu ? r.titleUrdu : r.titleEn}
                </h4>
                <p className="text-[10.5px] text-slate-600 font-medium mt-0.5 leading-relaxed">
                  {isUrdu ? r.descUrdu : r.descEn}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
