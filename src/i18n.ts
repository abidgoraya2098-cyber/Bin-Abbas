import { Language } from "./types";

export const translations = {
  ur: {
    appTitle: "بن عباس ہوم کیئر سروسز",
    tagline: "گھر پر 24 گھنٹے کوالیفائیڈ نرسنگ و مریضوں کی دیکھ بھال",
    contactDisplay: "0320-4800071",
    emergencyBadge: "🚨 24/7 ایمرجنسی ہیلپ لائن",
    langToggle: "English",
    installApp: "ایپ انسٹال کریں",
    shareApp: "شیئر کریں",
    copied: "لنک کاپی ہو گیا!",

    // Tabs
    tabServices: "طبی خدمات",
    tabBooking: "سروس بکنگ فارم",
    tabPackages: "رعایتی پیکجز",
    tabAbout: "ہمارے بارے میں",

    // Booking Form
    bookingTitle: "گھر پر نرسنگ / اٹینڈنٹ حاصل کریں",
    bookingSubtitle: "کوائف درج کریں اور 1 کلک پر فوری سٹاف کنفرم کریں",
    serviceSelectLabel: "1. مطلوبہ سروس منتخب کریں:",
    staffPrefLabel: "2. سٹاف کی ترجیح:",
    maleStaff: "میل سٹاف (Male)",
    femaleStaff: "فی میل سٹاف (Female)",
    anyStaff: "کوئی بھی مناسب سٹاف",
    shiftLabel: "3. شفٹ کا دورانیہ:",
    shift12Day: "12 گھنٹے (دن کی شفٹ)",
    shift12Night: "12 گھنٹے (رات کی شفٹ)",
    shift24: "24 گھنٹے (مکمل دن و رات)",
    shiftHourly: "چند گھنٹوں کا سیشن / وزٹ",
    durationLabel: "4. مطلوبہ دورانیہ:",
    daily: "روزانہ کی بنیاد پر",
    weekly: "ایک ہفتہ",
    monthly: "ماہانہ بنیاد پر",
    patientAgeLabel: "مریض کی عمر و جنس (اختیاری):",
    patientAgePlaceholder: "مثلاً: 65 سال، مرد",
    conditionLabel: "مریض کی حالت یا بیماری کی تفصیل (اختیاری):",
    conditionPlaceholder: "مثلاً: سرجری کے بعد کی دیکھ بھال، شوگر مانیٹرنگ اور واک میں مدد...",
    cityLabel: "شہر منتخب کریں:",
    addressLabel: "علاقہ یا مکمل پتہ:",
    addressPlaceholder: "مثلاً: ماڈل ٹاؤن، گوجرانوالہ",
    clientNameLabel: "آپ کا نام (اختیاری):",
    clientPhoneLabel: "رابطہ نمبر:",
    submitBookingBtn: "واٹس ایپ پر فوری سٹاف حاصل کریں",
    callUrgentBtn: "براہِ راست فون کال ملائیں (0320-4800071)",

    // Floating Bar
    floatCall: "کال کریں",
    floatCallSub: "24/7 دستیاب",
    floatWhatsApp: "واٹس ایپ",
    floatWhatsAppSub: "فوری چیٹ",
    floatBook: "بکنگ فارم",
    floatBookSub: "آن لائن آرڈر",

    // Feedback
    feedbackTitle: "آپ کی رائے ہمارے لیے باعثِ فخر ہے",
    feedbackTrigger: "ریویو اور فیڈ بیک دیں",

    // Footer
    footerCredit: "تیار کردہ و جملہ حقوق محفوظ: عابد عباس علی گورائیہ",
    footerCopy: "© 2026 بن عباس ہوم کیئر - BIN ABBAS HOME CARE"
  },
  en: {
    appTitle: "BIN ABBAS HOME CARE",
    tagline: "24/7 Qualified Nursing & Patient Care at Home",
    contactDisplay: "0320-4800071",
    emergencyBadge: "🚨 24/7 Emergency Helpline",
    langToggle: "اردو",
    installApp: "Install App",
    shareApp: "Share",
    copied: "Copied!",

    // Tabs
    tabServices: "Our Services",
    tabBooking: "Book Caregiver",
    tabPackages: "Packages",
    tabAbout: "About Us",

    // Booking Form
    bookingTitle: "Book In-Home Nurse / Attendant",
    bookingSubtitle: "Fill details to get verified medical staff at your doorstep",
    serviceSelectLabel: "1. Select Required Service:",
    staffPrefLabel: "2. Staff Gender Preference:",
    maleStaff: "Male Staff",
    femaleStaff: "Female Staff",
    anyStaff: "Any Suitable Staff",
    shiftLabel: "3. Shift Duration:",
    shift12Day: "12 Hours (Day Shift)",
    shift12Night: "12 Hours (Night Shift)",
    shift24: "24 Hours (Full Time)",
    shiftHourly: "Per Visit / Hourly Session",
    durationLabel: "4. Required Period:",
    daily: "Daily Basis",
    weekly: "Weekly Plan",
    monthly: "Monthly Plan",
    patientAgeLabel: "Patient Age & Gender (Optional):",
    patientAgePlaceholder: "e.g. 68 Years, Male",
    conditionLabel: "Patient Medical Condition / Needs (Optional):",
    conditionPlaceholder: "e.g. Post-surgery recovery, insulin check, mobility assistance...",
    cityLabel: "Select City:",
    addressLabel: "Area / Full Address:",
    addressPlaceholder: "e.g. Model Town, Gujranwala",
    clientNameLabel: "Your Name (Optional):",
    clientPhoneLabel: "Contact Phone:",
    submitBookingBtn: "Confirm Caregiver via WhatsApp",
    callUrgentBtn: "Call Now Direct (0320-4800071)",

    // Floating Bar
    floatCall: "Call Now",
    floatCallSub: "24/7 Helpline",
    floatWhatsApp: "WhatsApp",
    floatWhatsAppSub: "Instant Reply",
    floatBook: "Book Staff",
    floatBookSub: "Online Form",

    // Feedback
    feedbackTitle: "Your Feedback Means The World To Us",
    feedbackTrigger: "Leave a Review",

    // Footer
    footerCredit: "Developed & Secured by: Abid Abbas Ali Goraya",
    footerCopy: "© 2026 BIN ABBAS HOME CARE. All Rights Reserved."
  }
};

export function getTranslation(lang: Language) {
  return translations[lang] || translations.ur;
}
