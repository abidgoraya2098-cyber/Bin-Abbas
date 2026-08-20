import React from "react";

export default function BinAbbasHomeCareLogo({ className = "w-full max-w-[280px]" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div className="relative flex items-center justify-center mb-1">
        {/* Ambient Glow */}
        <div className="absolute w-16 h-16 bg-teal-400/20 rounded-full blur-xl"></div>
        {/* Luxury Medical Badge */}
        <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-800 via-teal-600 to-teal-500 flex items-center justify-center shadow-lg border-2 border-teal-300">
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            <path d="M12 7v6" />
            <path d="M9 10h6" />
          </svg>
        </div>
      </div>
      <h1 className="text-xl sm:text-2xl font-black text-teal-950 tracking-tight leading-tight">
        بن عباس ہوم کیئر
      </h1>
      <span className="text-[11px] sm:text-xs font-black tracking-widest text-teal-700 uppercase mt-0.5">
        BIN ABBAS HOME CARE
      </span>
      <p className="text-[10px] sm:text-[10.5px] font-bold text-slate-600 mt-0.5">
        گھر پر 24 گھنٹے کوالیفائیڈ نرسنگ و مریضوں کی دیکھ بھال
      </p>
    </div>
  );
}
