import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import CareBookingForm from "./components/CareBookingForm";
import ServicesCatalog from "./components/ServicesCatalog";
import RateCalculator from "./components/RateCalculator";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQSection from "./components/FAQSection";
import SocialLinks from "./components/SocialLinks";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import FloatingActionBar from "./components/FloatingActionBar";
import AdminLoginModal from "./components/AdminLoginModal";
import AdminInboxModal from "./components/AdminInboxModal";
import NotificationModal from "./components/NotificationModal";
import { Stethoscope, HeartPulse, Calculator, HelpCircle } from "lucide-react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { AdminProvider } from "./context/AdminContext";
import { NotificationProvider } from "./context/NotificationContext";
import { getTranslation } from "./i18n";

type ActiveTab = "services" | "booking" | "calculator" | "about";

function MainAppContent() {
  const { language, isUrdu, dir } = useLanguage();
  const t = getTranslation(language);

  const [activeTab, setActiveTab] = useState<ActiveTab>("booking");
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleSelectServiceFromCatalog = (serviceId: string) => {
    setPreselectedService(serviceId);
    setActiveTab("booking");
    const topElement = document.getElementById("main-card");
    if (topElement) topElement.scrollIntoView({ behavior: "smooth" });
  };

  const navTabs = [
    { id: "booking", label: isUrdu ? "سروس بکنگ" : "Book Staff", icon: HeartPulse },
    { id: "services", label: isUrdu ? "طبی خدمات" : "Services", icon: Stethoscope },
    { id: "calculator", label: isUrdu ? "فیس تخمینہ" : "Rate Calc", icon: Calculator },
    { id: "about", label: isUrdu ? "معلومات و FAQ" : "About & FAQ", icon: HelpCircle }
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-teal-900/10 via-slate-50 to-teal-900/10 flex flex-col items-center justify-start py-3 px-3 sm:py-6 sm:px-4 text-slate-900 relative pb-32 ${
        isUrdu ? "font-sans" : "font-sans"
      }`}
      dir={dir}
    >
      {/* Main Luxury Health App Container */}
      <div className="relative z-10 w-full max-w-[460px] bg-white/95 rounded-3xl p-3.5 sm:p-5 shadow-2xl border-2 border-teal-200" id="main-card">
        
        {/* Header */}
        <Header />

        {/* 4 Main Navigation Tab Buttons */}
        <div className="mt-3.5">
          <div className="grid grid-cols-4 gap-1.5 p-1.5 bg-teal-50/80 rounded-2xl border border-teal-200">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as ActiveTab)}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[10.5px] sm:text-xs font-bold transition-all cursor-pointer text-center ${
                    isActive
                      ? "bg-gradient-to-r from-teal-800 to-teal-600 text-white font-black shadow-md border border-teal-400 scale-[1.02]"
                      : "text-teal-950 hover:bg-teal-100/60"
                  }`}
                >
                  <Icon size={16} className={`mb-1 ${isActive ? "text-teal-200" : "text-teal-700"}`} />
                  <span className="leading-tight truncate w-full">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Tab Body */}
        <div className="mt-2.5">
          <AnimatePresence mode="wait">
            {/* TAB 1: Booking Form */}
            {activeTab === "booking" && (
              <motion.div
                key={`tab-booking-${language}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <CareBookingForm defaultServiceId={preselectedService} />
                <WhyChooseUs />
              </motion.div>
            )}

            {/* TAB 2: Services Catalog */}
            {activeTab === "services" && (
              <motion.div
                key={`tab-services-${language}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <ServicesCatalog onSelectService={handleSelectServiceFromCatalog} />
              </motion.div>
            )}

            {/* TAB 3: Rate Calculator */}
            {activeTab === "calculator" && (
              <motion.div
                key={`tab-calculator-${language}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <RateCalculator />
              </motion.div>
            )}

            {/* TAB 4: About & FAQs */}
            {activeTab === "about" && (
              <motion.div
                key={`tab-about-${language}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <WhyChooseUs />
                <FAQSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Social Links */}
        <SocialLinks />

        {/* Feedback Module */}
        <Feedback />

        {/* Footer */}
        <Footer />
      </div>

      {/* Modals */}
      <AdminLoginModal />
      <NotificationModal />
      <AdminInboxModal />

      {/* Floating 3-Action Bar */}
      <FloatingActionBar
        onBookClick={() => {
          setActiveTab("booking");
          const top = document.getElementById("main-card");
          if (top) top.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AdminProvider>
        <NotificationProvider>
          <MainAppContent />
        </NotificationProvider>
      </AdminProvider>
    </LanguageProvider>
  );
}
