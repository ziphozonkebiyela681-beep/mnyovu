import React from 'react';
import { LogoBadge } from './LogoBadge';
import { BUSINESS_INFO } from '../data/servicesData';
import { MapPin, Sparkles, ShieldCheck, ArrowRight, Clock, Navigation, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import machinesImage from '../assets/sneaker_machines.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenTracking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenTracking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Background subtle water ripple / bubbles decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Brand Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0D1B3E]/5 border border-[#0D1B3E]/15 text-xs font-bold text-[#0D1B3E]">
              <MapPin className="w-4 h-4 text-[#A81C2F]" />
              <span>34 Macintyre Street, Jeppestown, Johannesburg</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#A81C2F]">EST. 2026</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0D1B3E] tracking-tight leading-[1.08]">
                WE'VE GOT YOU <br />
                <span className="text-[#A81C2F] underline decoration-4 underline-offset-4 decoration-[#0D1B3E]/20">
                  COVERED, MANJE CLEAN !!
                </span>
              </h1>
              <p className="text-base sm:text-lg font-bold text-slate-700 tracking-wide">
                Quality Clean. Fresh Look. Professional Care For Your Sneakers.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Johannesburg's dedicated sneaker laundry and restoration workshop in Jeppestown.
              Equipped with <strong>commercial sneaker washer machines</strong> featuring soft rotary brushes and active foam lathering, paired with specialized <strong>sneaker dryer cabinets</strong> for thorough sanitization and pristine results.
            </p>

            {/* Key Benefits List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Commercial Sneaker Washer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated Dryer Cabinet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>2 - 3 Days Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Walk-Ins Welcome</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Arbiter &amp; Carvella Respray</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Timberland Wash (R150)</span>
              </div>
            </div>

            {/* CTA Button Group - Bookings via WhatsApp */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base shadow-md transition-all group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Book on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1B3E] hover:bg-[#162758] active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm shadow-2xs transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#A81C2F]" />
                <span>Directions</span>
              </a>

              <button
                onClick={onOpenTracking}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#0D1B3E] underline underline-offset-4 py-2 cursor-pointer ml-1"
              >
                <span>Track active order</span>
              </button>
            </div>

            <div className="text-xs text-slate-500 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>All bookings are confirmed directly via WhatsApp · Walk-ins welcome in Jeppestown</span>
            </div>

            {/* Trust badge footer */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Guaranteed Safe on All Materials</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Mon–Sat Walk-ins Welcome</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-amber-500 font-bold">★★★★★</span>
                <span className="text-slate-700 font-semibold">5.0 Star Rating in Jeppestown</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Res Workshop Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#A81C2F] to-[#0D1B3E] rounded-3xl opacity-20 blur-md"></div>
              
              {/* Photo Card with clean industrial aesthetic */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
                <img
                  src={machinesImage}
                  alt="Mnyovu's Commercial Sneaker Washer and Dryer Machine Workshop"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Floating Emblem Overlay */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full p-1.5 shadow-lg border border-slate-200">
                  <LogoBadge size="sm" showSubtitle={false} />
                </div>

                {/* Bottom Photo Overlay Note */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                        Commercial Equipment
                      </p>
                      <p className="text-sm font-black text-white">
                        Sneaker Washer &amp; Drying Cabinet
                      </p>
                    </div>
                    <span className="bg-[#A81C2F] text-white text-[11px] font-black px-2.5 py-1 rounded">
                      MANJE CLEAN
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-lg border border-slate-200 p-4 max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 shrink-0 font-black text-lg">
                    🧼
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Quality Clean · Fresh Look
                    </p>
                    <p className="text-[11px] text-slate-500">
                      From R80 · 2–3 Days Turnaround
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
