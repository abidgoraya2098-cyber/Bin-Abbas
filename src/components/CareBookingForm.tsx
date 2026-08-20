import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, PhoneCall, HeartPulse, User, MapPin, Clock, Calendar, CheckCircle2, ShieldCheck } from "lucide-react";
import { HOME_CARE_SERVICES, SERVICE_LOCATIONS, CONTACT_PHONE, BUSINESS_NAME, ENGLISH_NAME } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { useNotifications } from "../context/NotificationContext";
import { getTranslation } from "../i18n";

export default function CareBookingForm({ defaultServiceId }: { defaultServiceId?: string }) {
  const { language, isUrdu } = useLanguage();
  const { addInquiry } = useNotifications();
  const t = getTranslation(language);

  const [selectedService, setSelectedService] = useState(defaultServiceId || HOME_CARE_SERVICES[0].id);
  const [staffPreference, setStaffPreference] = useState<"male" | "female" | "any">("female");
  const [shiftType, setShiftType] = useState<"12hours_day" | "12hours_night" | "24hours" | "hourly">("12hours_day");
  const [duration, setDuration] = useState<"daily" | "weekly" | "monthly" | "custom">("daily");
  const [patientAge, setPatientAge] = useState("");
  const [patientCondition, setPatientCondition] = useState("");
  const [city, setCity] = useState(SERVICE_LOCATIONS[0]);
  const [address, setAddress] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const currentServiceObj = HOME_CARE_SERVICES.find((s) => s.id === selectedService) || HOME_CARE_SERVICES[0];
  const serviceName = isUrdu ? currentServiceObj.titleUrdu : currentServiceObj.titleEnglish;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save to local inbox
    addInquiry({
      serviceId: selectedService,
      serviceName,
      staffPreference,
      shiftType,
      duration,
      patientAge: patientAge.trim() || undefined,
      patientCondition: patientCondition.trim() || undefined,
      city,
      areaAddress: address.trim() || undefined,
      clientName: clientName.trim() || undefined,
      clientPhone: clientPhone.trim() || undefined
    });

    const shiftMapUrdu = {
      "12hours_day": "12 گھنٹے (دن کی شفٹ)",
      "12hours_night": "12 گھنٹے (رات کی شفٹ)",
      "24hours": "24 گھنٹے (مکمل دن و رات)",
      "hourly": "چند گھنٹوں کا سیشن"
    };

    const staffMapUrdu = {
      male: "میل سٹاف (Male)",
      female: "فی میل نرس / اٹینڈنٹ (Female)",
      any: "کوئی بھی مناسب سٹاف"
    };

    let message = isUrdu
      ? `السلام علیکم! محترم بن عباس ہوم کیئر سروسز ٹیم (${BUSINESS_NAME})،\n\nمجھے گھر پر مریض کے لیے کیئر سروس درکار ہے:\n\n`
      : `Hello ${ENGLISH_NAME} Team,\n\nI want to book an in-home care service:\n\n`;

    message += isUrdu ? `🩺 *مطلوبہ سروس:* ${serviceName}\n` : `🩺 *Service:* ${serviceName}\n`;
    message += isUrdu ? `👤 *سٹاف ترجیح:* ${staffMapUrdu[staffPreference]}\n` : `👤 *Staff Gender:* ${staffPreference}\n`;
    message += isUrdu ? `⏰ *شفٹ دورانیہ:* ${shiftMapUrdu[shiftType]}\n` : `⏰ *Shift Duration:* ${shiftType}\n`;
    message += isUrdu ? `📅 *پیکج:* ${duration}\n` : `📅 *Plan:* ${duration}\n`;
    message += isUrdu ? `🏙️ *شہر:* ${city}\n` : `🏙️ *City:* ${city}\n`;

    if (address.trim()) message += isUrdu ? `📍 *علاقہ / پتہ:* ${address.trim()}\n` : `📍 *Address:* ${address.trim()}\n`;
    if (patientAge.trim()) message += isUrdu ? `🧓 *مریض کی عمر و جنس:* ${patientAge.trim()}\n` : `🧓 *Patient Age/Gender:* ${patientAge.trim()}\n`;
    if (patientCondition.trim()) message += isUrdu ? `📝 *طبی حالت / ضرورت:* ${patientCondition.trim()}\n` : `📝 *Condition/Needs:* ${patientCondition.trim()}\n`;
    if (clientName.trim()) message += isUrdu ? `👤 *نام:* ${clientName.trim()}\n` : `👤 *Client Name:* ${clientName.trim()}\n`;
    if (clientPhone.trim()) message += isUrdu ? `📞 *فون:* ${clientPhone.trim()}\n` : `📞 *Phone:* ${clientPhone.trim()}\n`;

    message += isUrdu
      ? `\nبراہِ کرم اس سروس کے دستیاب سٹاف، فائنل چارجز اور تصدیق کے لیے رابطہ فرمائیں۔ شکریہ!`
      : `\nPlease confirm staff availability and rates. Thank you!`;

    const whatsappUrl = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`w-full my-3 bg-white rounded-2xl p-4 sm:p-5 border-2 border-teal-200 shadow-md ${isUrdu ? "text-right" : "text-left"}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-teal-100">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-teal-100 text-teal-800 border border-teal-300">
            <HeartPulse size={20} />
          </div>
          <div>
            <h3 className="text-base font-black text-teal-950">{t.bookingTitle}</h3>
            <p className="text-[11px] text-slate-500 font-semibold">{t.bookingSubtitle}</p>
          </div>
        </div>
        <span className="text-[10px] font-black bg-teal-100 text-teal-900 px-2.5 py-1 rounded-full border border-teal-200">
          فوری تصدیق ⚡
        </span>
      </div>

      {/* Safety & Police Verified Guarantee */}
      <div className="mt-3 p-2.5 rounded-xl bg-teal-50 border border-teal-200 flex items-center gap-2 text-[11px] text-teal-950 font-bold">
        <ShieldCheck size={16} className="text-teal-700 shrink-0" />
        <span>100% نادرا بائیو میٹرک و پولیس تصدیق شدہ میل اور فی میل نرسنگ سٹاف۔</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5 mt-3">
        {/* 1. Service Selection */}
        <div>
          <label className="block text-xs font-black text-teal-950 mb-1">{t.serviceSelectLabel}</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {HOME_CARE_SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedService(s.id)}
                className={`py-2 px-3 rounded-xl text-xs font-black text-left flex items-center justify-between transition-all cursor-pointer border ${
                  selectedService === s.id
                    ? "bg-gradient-to-r from-teal-700 to-teal-600 text-white border-teal-700 shadow-sm"
                    : "bg-teal-50/60 text-slate-800 border-teal-200 hover:bg-teal-100/60"
                } ${isUrdu ? "flex-row-reverse" : "flex-row"}`}
              >
                <span>{isUrdu ? s.titleUrdu : s.titleEnglish}</span>
                {selectedService === s.id && <CheckCircle2 size={14} className="text-teal-200" />}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Staff Gender Preference */}
        <div>
          <label className="block text-xs font-black text-teal-950 mb-1">{t.staffPrefLabel}</label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: "female", label: t.femaleStaff },
              { id: "male", label: t.maleStaff },
              { id: "any", label: t.anyStaff }
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setStaffPreference(opt.id as any)}
                className={`py-1.5 px-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer text-center ${
                  staffPreference === opt.id
                    ? "bg-teal-700 text-white font-black border-teal-700 shadow-xs"
                    : "bg-teal-50/70 text-slate-800 border-teal-200 hover:bg-teal-100/60"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Shift Type */}
        <div>
          <label className="block text-xs font-black text-teal-950 mb-1">{t.shiftLabel}</label>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { id: "12hours_day", label: t.shift12Day },
              { id: "12hours_night", label: t.shift12Night },
              { id: "24hours", label: t.shift24 },
              { id: "hourly", label: t.shiftHourly }
            ].map((shift) => (
              <button
                key={shift.id}
                type="button"
                onClick={() => setShiftType(shift.id as any)}
                className={`py-2 px-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer text-center ${
                  shiftType === shift.id
                    ? "bg-teal-700 text-white font-black border-teal-700 shadow-xs"
                    : "bg-teal-50/70 text-slate-800 border-teal-200 hover:bg-teal-100/60"
                }`}
              >
                {shift.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. City & Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label className="block text-xs font-black text-teal-950 mb-1">{t.cityLabel}</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-teal-50/60 border-2 border-teal-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white"
            >
              {SERVICE_LOCATIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-black text-teal-950 mb-1">{t.addressLabel}</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={t.addressPlaceholder}
              className="w-full bg-teal-50/60 border-2 border-teal-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white"
            />
          </div>
        </div>

        {/* 5. Patient Age & Medical Needs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label className="block text-xs font-black text-teal-950 mb-1">{t.patientAgeLabel}</label>
            <input
              type="text"
              value={patientAge}
              onChange={(e) => setPatientAge(e.target.value)}
              placeholder={t.patientAgePlaceholder}
              className="w-full bg-teal-50/60 border-2 border-teal-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-teal-950 mb-1">{t.clientPhoneLabel}</label>
            <input
              type="text"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              placeholder="0300-1234567"
              className="w-full bg-teal-50/60 border-2 border-teal-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white"
            />
          </div>
        </div>

        {/* 6. Medical Condition Details */}
        <div>
          <label className="block text-xs font-black text-teal-950 mb-1">{t.conditionLabel}</label>
          <textarea
            value={patientCondition}
            onChange={(e) => setPatientCondition(e.target.value)}
            rows={2}
            placeholder={t.conditionPlaceholder}
            className="w-full bg-teal-50/60 border-2 border-teal-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white"
          />
        </div>

        {/* Submit on WhatsApp */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:brightness-105 text-white font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
        >
          <Send size={16} />
          <span>{t.submitBookingBtn}</span>
        </button>
      </form>
    </div>
  );
}
