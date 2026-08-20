import { HomeCareService, CarePackage, FAQItem } from "./types";

export const BUSINESS_NAME = "بن عباس ہوم کیئر";
export const ENGLISH_NAME = "BIN ABBAS HOME CARE";
export const TAGLINE_URDU = "گھر پر 24 گھنٹے کوالیفائیڈ نرسنگ و مریضوں کی دیکھ بھال";
export const TAGLINE_ENGLISH = "24/7 Professional Patient Care & Nursing at Home";
export const CONTACT_PHONE = "923204800071";
export const CONTACT_PHONE_DISPLAY = "0320-4800071";
export const DEVELOPER_NAME = "عابد عباس علی گورائیہ";
export const DEVELOPER_ENGLISH_NAME = "Abid Abbas Ali Goraya";
export const SERVICE_LOCATIONS = ["گوجرانوالہ", "لاہور", "سیالکوٹ", "گجرات", "کامونکی", "راولپنڈی / اسلام آباد"];

export const HOME_CARE_SERVICES: readonly HomeCareService[] = [
  {
    id: "nursing",
    titleUrdu: "کوالیفائیڈ نرسنگ کیئر",
    titleEnglish: "Qualified Nursing Care",
    descriptionUrdu: "تجربہ کار اور رجسٹرڈ میل و فی میل نرسز کے ذریعے گھر پر مریضوں کی مکمل طبی دیکھ بھال۔",
    descriptionEnglish: "Registered & certified male and female nurses for complete in-home clinical medical care.",
    iconName: "Stethoscope",
    featuresUrdu: ["وائٹلز اور بلڈ پریشر مانیٹرنگ", "ڈرپ، انجیکشن اور کینولا لگانا", "کیٹھیٹر اور رائلز ٹیوب کیئر", "زخموں کی صفائی اور سرجیکل ڈریسنگ"],
    featuresEnglish: ["Vitals & blood pressure monitoring", "IV drip, injections & cannula care", "Catheter & Ryle's tube care", "Wound dressing & suture care"],
    startingRateUrdu: "2,500 روپے سے شروع",
    startingRateEnglish: "From Rs. 2,500",
    badgeUrdu: "سب سے مقبول ⭐",
    badgeEnglish: "Most Popular ⭐"
  },
  {
    id: "elderly",
    titleUrdu: "بزرگ افراد کی نگہداشت (Elderly Care)",
    titleEnglish: "Elderly & Senior Citizen Care",
    descriptionUrdu: "گھر کے بزرگوں کے لیے شفیق، صابر اور تربیت یافتہ اٹینڈنٹس جو 12 یا 24 گھنٹے ساتھ رہتے ہیں۔",
    descriptionEnglish: "Compassionate, patient, and trained caregivers for seniors assisting in daily living and mobility.",
    iconName: "HeartHandshake",
    featuresUrdu: ["کھانا کھلانا اور ادویات کی پابندی", "نہلانا، کپڑے تبدیل کرنا اور پرسنل ہائجین", "واک کروانا اور سہارا دینا", "شفیق اور عزت دار رویہ"],
    featuresEnglish: ["Meal assistance & medicine schedule", "Bathing, grooming & personal hygiene", "Mobility support & companionship", "Respectful & caring attitude"],
    startingRateUrdu: "1,800 روپے یومیہ سے شروع",
    startingRateEnglish: "From Rs. 1,800/day",
    badgeUrdu: "24/7 دستیاب",
    badgeEnglish: "24/7 Available"
  },
  {
    id: "post_op",
    titleUrdu: "آپریشن و سرجری کے بعد بحالی",
    titleEnglish: "Post-Surgical Recovery Care",
    descriptionUrdu: "بڑے آپریشن، فریکچر یا ہسپتال سے ڈسچارج کے بعد گھر پر خصوصی پروٹوکول کے ساتھ بحالی۔",
    descriptionEnglish: "Specialized post-op care following major surgeries, trauma recovery, and hospital discharge.",
    iconName: "Activity",
    featuresUrdu: ["انفیکشن سے مکمل بچاؤ", "پین مینجمنٹ اور ڈریسنگ", "مریض کی نقل و حرکت میں مدد", "ڈاکٹر کی ہدایات پر عملدرآمد"],
    featuresEnglish: ["Infection prevention protocol", "Pain management & dressing", "Assisted mobility & physiotherapy", "Doctor recommendation compliance"],
    startingRateUrdu: "مناسب ترین پیکجز",
    startingRateEnglish: "Affordable Packages",
    badgeUrdu: "خصوصی نگہداشت",
    badgeEnglish: "Special Care"
  },
  {
    id: "physio",
    titleUrdu: "گھر پر فزیوتھراپی سیشنز",
    titleEnglish: "In-Home Physiotherapy",
    descriptionUrdu: "فالج (Stroke)، مہروں کے درد، گھٹنوں کے درد اور جوڑوں کی بحالی کے لیے کوالیفائیڈ فزیوتھراپسٹ۔",
    descriptionEnglish: "Certified physiotherapists visiting your home for stroke rehab, joint pains, and posture recovery.",
    iconName: "UserCheck",
    featuresUrdu: ["فالج اور پولیو بحالی", "کمر، گردن اور مہروں کے درد کا علاج", "ہڈی ٹوٹنے کے بعد ورزش", "جدید الیکٹرو تھراپی آلات"],
    featuresEnglish: ["Stroke & paralysis rehab", "Spine, neck & lower back therapy", "Post-fracture movement exercise", "Modern electrotherapy equipment"],
    startingRateUrdu: "1,500 روپے فی سیشن",
    startingRateEnglish: "From Rs. 1,500/session",
    badgeUrdu: "ماہر ڈاکٹرز",
    badgeEnglish: "Expert Doctors"
  },
  {
    id: "equipment",
    titleUrdu: "میڈیکل آلات و آکسیجن کنسنٹریٹر",
    titleEnglish: "Medical Equipment on Rent/Sale",
    descriptionUrdu: "ہسپتال بیڈ، آکسیجن سلنڈر، پلس آکسیمیٹر، وہیل چیئر اور بی پی مانیٹر گھر پر ڈیلیوری کے ساتھ۔",
    descriptionEnglish: "ICU hospital beds, oxygen concentrators, wheelchairs, suction machines delivered to your doorstep.",
    iconName: "ShieldPlus",
    featuresUrdu: ["5L و 10L آکسیجن کنسنٹریٹر", "الیکٹرک و مینوئل ہسپتال بیڈ", "ایئر میٹریس (بیڈ سور سے بچاؤ)", "وہیل چیئرز اور واکرز"],
    featuresEnglish: ["5L & 10L Oxygen concentrators", "Electric & manual ICU beds", "Anti-bedsore air mattresses", "Wheelchairs, commodes & walkers"],
    startingRateUrdu: "کرایہ و فروخت دستیاب",
    startingRateEnglish: "Rent & Sale Options",
    badgeUrdu: "فوری ڈیلیوری ⚡",
    badgeEnglish: "Fast Delivery ⚡"
  },
  {
    id: "mother_baby",
    titleUrdu: "نوزائیدہ بچہ اور مدر کیئر",
    titleEnglish: "Newborn Baby & Mother Care",
    descriptionUrdu: "پیدائش کے بعد ماں اور نومولود کی حفاظت، مالش، صفائی اور پرسکون ماحول کے لیے تربیت یافتہ آیا۔",
    descriptionEnglish: "Experienced female baby attendants & nannies for newborn massage, feeding support, and mother hygiene.",
    iconName: "Sparkles",
    featuresUrdu: ["بچے کی مالش اور نہلانا", "ماں کی خوراک اور ادویات کا خیال", "رات اور دن کی شفٹ دستیاب", "مکمل تجربہ کار سٹاف"],
    featuresEnglish: ["Newborn massage & bathing", "Mother dietary and recovery care", "Day & night shifts available", "Police verified female nannies"],
    startingRateUrdu: "ماہانہ و ہفتہ وار پیکج",
    startingRateEnglish: "Weekly/Monthly Plans",
    badgeUrdu: "محفوظ ترین",
    badgeEnglish: "Verified Female Staff"
  }
];

export const CARE_PACKAGES: readonly CarePackage[] = [
  {
    id: "daily_12h",
    titleUrdu: "12 گھنٹے ڈے یا نائٹ شفٹ",
    titleEnglish: "12-Hour Day / Night Shift",
    durationUrdu: "12 گھنٹے یومیہ",
    durationEnglish: "12 Hours / Day",
    rateUrdu: "2,000 ~ 3,000 روپے / دن",
    rateEnglish: "Rs. 2,000 ~ 3,000 / day",
    featuresUrdu: ["میل یا فی میل سٹاف کا انتخاب", "ادویات، کھانا اور ہائجین", "وائٹلز کی ریکارڈنگ", "ہفتہ وار ریپلیسمنٹ بیک اپ"],
    featuresEnglish: ["Male or female staff choice", "Medication, meals & hygiene", "Vitals recording chart", "Weekly replacement backup"],
    isPopular: false
  },
  {
    id: "full_24h",
    titleUrdu: "24 گھنٹے لائیو اِن کیئر (VIP)",
    titleEnglish: "24/7 Live-in VIP Care",
    durationUrdu: "24 گھنٹے ہمہ وقت",
    durationEnglish: "24 Hours Full-Time",
    rateUrdu: "بہترین ماہانہ رعایتی پیکج",
    rateEnglish: "Best Monthly Discount Package",
    featuresUrdu: ["مریض کے ساتھ 24 گھنٹے موجودگی", "ایمرجنسی میں فوری فرسٹ ایڈ", "بغیر ناغہ متبادل سٹاف کی گارنٹی", "سپر وائزر کی ہفتہ وار چیکنگ"],
    featuresEnglish: ["24/7 dedicated presence with patient", "Immediate emergency first-aid", "Zero-absence backup staff guarantee", "Weekly supervisor visits"],
    isPopular: true
  },
  {
    id: "monthly_custom",
    titleUrdu: "ماہانہ مستقل ہوم کیئر معاہدہ",
    titleEnglish: "Monthly Contract Care",
    durationUrdu: "30 دن کا مکمل پلان",
    durationEnglish: "Full 30-Day Plan",
    rateUrdu: "45,000 روپے سے شروع",
    rateEnglish: "From Rs. 45,000/month",
    featuresUrdu: ["خاص فیملی ڈسکاؤنٹ", "سٹاف کا پولیس و نادرا تصدیق شدہ ریکارڈ", "کسی بھی وقت سٹاف تبدیل کرنے کی سہولت", "24/7 کسٹمر سپورٹ"],
    featuresEnglish: ["Special family discount", "NADRA & Police verified staff", "Free staff replacement anytime", "24/7 dedicated customer helpline"],
    isPopular: false
  }
];

export const FAQS_HOME_CARE: readonly FAQItem[] = [
  {
    id: "faq-1",
    questionUrdu: "کیا بن عباس ہوم کیئر کا سٹاف تصدیق شدہ اور تربیت یافتہ ہے؟",
    questionEnglish: "Is Bin Abbas Home Care staff verified and trained?",
    answerUrdu: "جی ہاں! ہمارا تمام نرسنگ اور کیئر گیور سٹاف میڈیکل سرٹیفائیڈ، نادرا شناختی کارڈ، بائیو میٹرک اور پولیس ویریفائیڈ ہوتا ہے تاکہ آپ کے گھر اور مریض کی حفاظت 100% یقینی ہو۔",
    answerEnglish: "Yes! All our nursing and caregiving staff are medically certified, NADRA biometric verified, and police-cleared to ensure 100% safety for your loved ones."
  },
  {
    id: "faq-2",
    questionUrdu: "کیا فی میل مریض کے لیے فی میل نرس یا آیا دستیاب ہے؟",
    questionEnglish: "Are female nurses and attendants available for female patients?",
    answerUrdu: "جی بالکل! ہمارے پاس کوالیفائیڈ فی میل نرسز، آیا اور بزرگ خواتین کے لیے شفیق فی میل اٹینڈنٹس ہر وقت دستیاب ہیں۔",
    answerEnglish: "Absolutely! We have qualified female nurses, nannies, and gentle female caregivers available 24/7."
  },
  {
    id: "faq-3",
    questionUrdu: "اگر کسی نرس یا اٹینڈنٹ سے مطمئن نہ ہوں تو کیا سٹاف تبدیل ہو سکتا ہے؟",
    questionEnglish: "Can we change the staff if we are not satisfied?",
    answerUrdu: "جی ہاں! اگر آپ کسی بھی وجہ سے سٹاف کے کام سے مطمئن نہ ہوں تو بن عباس ہوم کیئر بغیر کسی اضافی فیس کے فوری متبادل سٹاف فراہم کرتا ہے۔",
    answerEnglish: "Yes! If you are unsatisfied for any reason, we provide a replacement caregiver promptly without any extra charges."
  },
  {
    id: "faq-4",
    questionUrdu: "ہوم کیئر سروس بک کرنے کا کیا طریقہ ہے؟",
    questionEnglish: "How can I book a home care service?",
    answerUrdu: "آپ ہماری ایپ پر سروس بکنگ فارم میں مریض کے کوائف، مطلوبہ شفٹ اور پتہ درج کر کے 1 کلک پر واٹس ایپ یا 03204800071 پر کال کر کے فوری سٹاف حاصل کر سکتے ہیں۔",
    answerEnglish: "You can simply fill out the booking form in this app or place a direct call/WhatsApp to 0320-4800071 for immediate service."
  }
];
