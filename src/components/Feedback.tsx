import React, { useState } from "react";
import { Star, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { CONTACT_PHONE, BUSINESS_NAME } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Feedback() {
  const { isUrdu } = useLanguage();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stars = "⭐".repeat(rating);
    let msg = `السلام علیکم! بن عباس ہوم کیئر سروسز (${BUSINESS_NAME})،\n\nمیرا فیڈ بیک:\nنام: ${name.trim() || "کسٹمر"}\nریٹنگ: ${stars}\nتبصرہ: ${comment.trim() || "بہترین نرسنگ سروس!"}`;
    window.open(`https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className={`w-full my-3 bg-white rounded-2xl p-4 border border-teal-200 shadow-sm ${isUrdu ? "text-right" : "text-left"}`}>
      <div className="flex items-center gap-2 pb-2.5 border-b border-teal-100 mb-3">
        <div className="p-2 rounded-xl bg-teal-100 text-teal-800">
          <MessageSquare size={18} />
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-black text-teal-950">
            {isUrdu ? "اپنی قیمتی رائے و ریویو دیں" : "Share Your Feedback"}
          </h3>
          <p className="text-[10.5px] text-slate-500 font-semibold">
            {isUrdu ? "بن عباس ہوم کیئر سروسز کا تجربہ کیسا رہا؟" : "How was your experience?"}
          </p>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Star Selector */}
          <div className="flex items-center justify-center gap-2 py-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setRating(s)}
                className="p-1 cursor-pointer transition-transform hover:scale-125 focus:outline-none"
              >
                <Star
                  size={26}
                  className={s <= rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}
                />
              </button>
            ))}
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={isUrdu ? "آپ کا نام (اختیاری)" : "Your Name"}
            className="w-full bg-teal-50/50 border border-teal-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-teal-600"
          />

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={2}
            placeholder={isUrdu ? "اپنی رائے یہاں لکھیں..." : "Write your feedback..."}
            className="w-full bg-teal-50/50 border border-teal-200 rounded-xl p-2 text-xs text-slate-900 focus:outline-none focus:border-teal-600"
          />

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-teal-700 hover:bg-teal-800 text-white font-black text-xs rounded-xl shadow flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
          >
            <Send size={14} />
            <span>{isUrdu ? "رائے واٹس ایپ پر بھیجیں" : "Submit Feedback"}</span>
          </button>
        </form>
      ) : (
        <div className="py-4 text-center text-teal-800 space-y-1">
          <CheckCircle2 size={32} className="mx-auto text-teal-600 mb-1" />
          <h4 className="font-black text-xs">{isUrdu ? "آپ کی قیمتی رائے کا بہت شکریہ!" : "Thank You For Your Review!"}</h4>
        </div>
      )}
    </div>
  );
}
