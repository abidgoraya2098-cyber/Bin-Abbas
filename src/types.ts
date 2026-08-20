export type Language = "ur" | "en";

export interface HomeCareService {
  id: string;
  titleUrdu: string;
  titleEnglish: string;
  descriptionUrdu: string;
  descriptionEnglish: string;
  iconName: string;
  featuresUrdu: string[];
  featuresEnglish: string[];
  startingRateUrdu: string;
  startingRateEnglish: string;
  badgeUrdu?: string;
  badgeEnglish?: string;
}

export interface CarePackage {
  id: string;
  titleUrdu: string;
  titleEnglish: string;
  durationUrdu: string;
  durationEnglish: string;
  rateUrdu: string;
  rateEnglish: string;
  featuresUrdu: string[];
  featuresEnglish: string[];
  isPopular?: boolean;
}

export interface CareInquiryRecord {
  id: string;
  timestamp: number;
  dateFormatted: string;
  serviceId: string;
  serviceName: string;
  staffPreference: "male" | "female" | "any";
  shiftType: "12hours_day" | "12hours_night" | "24hours" | "hourly";
  duration: "daily" | "weekly" | "monthly" | "custom";
  patientAge?: string;
  patientCondition?: string;
  city: string;
  areaAddress?: string;
  clientName?: string;
  clientPhone?: string;
  notes?: string;
  status: "new" | "contacted" | "completed";
}

export interface FAQItem {
  id: string;
  questionUrdu: string;
  questionEnglish: string;
  answerUrdu: string;
  answerEnglish: string;
}
