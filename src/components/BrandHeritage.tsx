import React from 'react';
import { LogoBadge } from './LogoBadge';
import { BUSINESS_INFO } from '../data/servicesData';
import { Sparkles, Shield, HeartHandshake, CheckCircle, MessageCircle } from 'lucide-react';

interface BrandHeritageProps {
  onOpenBooking: () => void;
}

export const BrandHeritage: React.FC<BrandHeritageProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Full Logo Emblem Display */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative p-6 sm:p-8 bg-slate-50 rounded-3xl border-2 border-slate-200/90 shadow-sm max-w-sm w-full group">
              <div className="absolute top-3 left-4 text-[10px] font-black uppercase tracking-widest text-[#A81C2F]">
                Official Brand Emblem
              </div>

              {/* High-res rendered Logo */}
              <div className="pt-4 pb-2 flex justify-center">
                <LogoBadge size="xl" showSubtitle={true} className="drop-shadow-md" />
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-1">
                <p className="font-bold text-[#0D1B3E]">
                  Registered Sneaker Care Trademark
                </p>
                <p className="text-[11px] text-slate-400">
                  34 Macintyre Street, Jeppestown
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Heritage Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#A81C2F]/10 border border-[#A81C2F]/20 text-[#A81C2F] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Johannesburg Streetwear Craftsmanship</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1B3E] tracking-tight">
              WHY SNEAKER HEADS TRUST <br />
              <span className="text-[#A81C2F]">MNYOVU'S SNEAKER WASH</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              In Johannesburg, sneakers are more than shoes — they're your personal statement, your hustle, and your identity on the street. But Joburg dust, sudden Highveld afternoon storms, and city pavement can quickly take a toll on premium suede and leather.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              That's why <strong>Mnyovu's Sneaker Wash</strong> was built at <strong>34 Macintyre Street, Jeppestown</strong>. We treat every pair like our own collection:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-black text-[#0D1B3E]">
                  <Shield className="w-4 h-4 text-[#A81C2F]" />
                  <span>Big Sneaker Washer &amp; Dryer</span>
                </div>
                <p className="text-xs text-slate-600">
                  Equipped with dedicated commercial sneaker washing machines with internal soft brushes and controlled drying cabinets for hygienic, deep sanitization.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-black text-[#0D1B3E]">
                  <HeartHandshake className="w-4 h-4 text-emerald-600" />
                  <span>Safe On Rare Suede</span>
                </div>
                <p className="text-xs text-slate-600">
                  We use waterless foams and crepe nap erasers on delicate materials so your Sambas, Jordans, and Timbs keep their velvety nap.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-black text-[#0D1B3E]">
                  🇿🇦
                </div>
                <div>
                  <p className="text-xs font-black text-[#0D1B3E]">
                    "We've Got You Covered, Manje Clean !!"
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Visit us at 34 Macintyre Street, Jeppestown or book online.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black rounded-lg shrink-0 transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Book on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
