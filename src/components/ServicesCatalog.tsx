import React from "react";
import { motion } from "motion/react";
import { Stethoscope, HeartHandshake, Activity, UserCheck, ShieldPlus, Sparkles, Check, ArrowRight, MessageCircle } from "lucide-react";
import { HOME_CARE_SERVICES, CONTACT_PHONE, BUSINESS_NAME } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { HomeCareService } from "../types";

export default function ServicesCatalog({ onSelectService }: { onSelectService: (serviceId: string) => void }) {
  const { isUrdu } = useLanguage();

  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Stethoscope":
        return <Stethoscope size={22} className="text-teal-700" />;
      case "HeartHandshake":
        return <HeartHandshake size={22} className="text-teal-700" />;
      case "Activity":
        return <Activity size={22} className="text-teal-700" />;
      case "UserCheck":
        return <UserCheck size={22} className="text-teal-700" />;
      case "ShieldPlus":
        return <ShieldPlus size={22} className="text-teal-700" />;
      case "Sparkles":
        return <Sparkles size={22} className="text-teal-700" />;
      default:
        return <Stethoscope size={22} className="text-teal-700" />;
    }
  };

  const handleInquireWhatsApp = (service: HomeCareService) => {
    const title = isUrdu ? service.titleUrdu : service.titleEnglish;
    const text = isUrdu
      ? `السلام علیکم! بن عباس ہوم کیئر، مجھے *${title}* سروس کے بارے میں معلومات اور سٹاف درکار ہے۔ براہِ کرم تفصیلات بتائیں۔`
      : `Hello Bin Abbas Home Care, I need information regarding *${title}* service.`;
    const url = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-3.5 my-3">
      <div className="text-center">
        <h3 className="text-sm sm:text-base font-black text-teal-950">
          {isUrdu ? "گھر پر دستیاب تمام طبی و نرسنگ خدمات" : "Our In-Home Medical & Care Services"}
        </h3>
        <p className="text-[11px] text-slate-600 font-semibold mt-0.5">
          {isUrdu ? "ماہر اور رجسٹرڈ سٹاف کی زیرِ نگرانی معیاری علاج" : "Expert and certified staff at your doorstep"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {HOME_CARE_SERVICES.map((service) => {
          const title = isUrdu ? service.titleUrdu : service.titleEnglish;
          const desc = isUrdu ? service.descriptionUrdu : service.descriptionEnglish;
          const features = isUrdu ? service.featuresUrdu : service.featuresEnglish;
          const badge = isUrdu ? service.badgeUrdu : service.badgeEnglish;
          const rate = isUrdu ? service.startingRateUrdu : service.startingRateEnglish;

          return (
            <motion.div
              key={service.id}
              whileHover={{ y: -2 }}
              className="p-4 rounded-2xl bg-white border-2 border-teal-200/80 shadow-sm hover:border-teal-400 transition-all flex flex-col justify-between gap-3"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-2 pb-2.5 border-b border-teal-100">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div className={isUrdu ? "text-right" : "text-left"}>
                      <h4 className="text-sm sm:text-base font-black text-teal-950 leading-tight">
                        {title}
                      </h4>
                      <span className="text-[10.5px] font-black text-teal-700 block mt-0.5">
                        {rate}
                      </span>
                    </div>
                  </div>
                  {badge && (
                    <span className="text-[9.5px] font-black bg-teal-100 text-teal-900 px-2 py-0.5 rounded-full shrink-0 border border-teal-300">
                      {badge}
                    </span>
                  )}
                </div>

                <p className={`text-xs text-slate-600 font-medium mt-2.5 leading-relaxed ${isUrdu ? "text-right" : "text-left"}`}>
                  {desc}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-1.5 mt-3">
                  {features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[10.5px] font-bold text-slate-700">
                      <Check size={12} className="text-teal-600 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-teal-100">
                <button
                  type="button"
                  onClick={() => onSelectService(service.id)}
                  className="py-2 px-3 rounded-xl bg-teal-50 hover:bg-teal-100/80 text-teal-950 font-black text-xs border border-teal-300 flex items-center justify-center gap-1 cursor-pointer transition-colors"
                >
                  <span>{isUrdu ? "آن لائن بک کریں" : "Book Online"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleInquireWhatsApp(service)}
                  className="py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                >
                  <MessageCircle size={13} className="fill-white" />
                  <span>{isUrdu ? "واٹس ایپ چیٹ" : "WhatsApp"}</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
