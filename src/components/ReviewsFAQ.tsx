import React, { useState } from 'react';
import { CUSTOMER_REVIEWS, FAQS } from '../data/servicesData';
import { ChevronDown, Star, MessageSquareQuote, HelpCircle, CheckCircle2 } from 'lucide-react';

export const ReviewsFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Testimonials Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <MessageSquareQuote className="w-3.5 h-3.5 text-amber-600" />
              <span>Joburg Street Cred &amp; Community Love</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1B3E] tracking-tight">
              WHAT SNEAKERHEADS SAY ABOUT <br />
              <span className="text-[#A81C2F]">MNYOVU'S SNEAKER WASH</span>
            </h2>

            <p className="text-base text-slate-600">
              Trusted by daily commuters, sneaker collectors, and nightlife lovers across Johannesburg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMER_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#0D1B3E]">
                      {rev.author}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {rev.date}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>📍 {rev.area}</span>
                    <span className="text-sky-700 font-bold truncate max-w-[120px]">
                      {rev.sneakersCleaned}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto pt-6">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-900 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
              <span>Got Questions?</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#0D1B3E] tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-[#0D1B3E] hover:text-[#A81C2F] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#A81C2F]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
