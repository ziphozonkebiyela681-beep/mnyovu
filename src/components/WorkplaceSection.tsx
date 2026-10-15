import React from 'react';
import { useAppImages } from '../context/ImageContext';
import { BUSINESS_INFO } from '../data/servicesData';
import { MapPin, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

interface WorkplaceSectionProps {
  onOpenBooking: () => void;
}

export const WorkplaceSection: React.FC<WorkplaceSectionProps> = ({ onOpenBooking }) => {
  const { workplaceUrl } = useAppImages();

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Column - Mnyovu at the workplace */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-slate-800 group">
                <img
                  src={workplaceUrl}
                  alt="Mnyovu at the workplace in 34 Macintyre Street, Jeppestown"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Status sticker */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-emerald-400 font-extrabold uppercase tracking-wider block text-[10px]">
                      ● Workshop Active Now
                    </span>
                    <span className="font-bold text-white text-sm">
                      34 Macintyre St, Jeppestown
                    </span>
                  </div>
                  <span className="text-[11px] font-black text-rose-300 bg-[#A81C2F]/80 px-2 py-1 rounded">
                    WALK-INS OK
                  </span>
                </div>
              </div>

              {/* Floated Slogan Tag */}
              <div className="absolute -top-3 -right-3 bg-[#A81C2F] text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg border border-red-500 transform rotate-2">
                MANJE CLEAN !!
              </div>
            </div>
          </div>

          {/* Story & Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/15 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet The Man Behind The Magic</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              INSIDE THE WORKSHOP AT <br />
              <span className="text-[#A81C2F]">34 MACINTYRE STREET</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              When you walk into <strong>Mnyovu's Sneaker Wash</strong> in Jeppestown, you're greeted with genuine Johannesburg hospitality, the fresh scent of bergamot diffuser oils, and tall shelves packed with spotless kicks awaiting pickup.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every single pair is hand-logged into Mnyovu's ledger, material-diagnosed, and treated with artisan care. From delicate vintage suede and Jordan ice-soles to daily work shoes, Mnyovu personally oversees each clean.
            </p>

            {/* Workplace Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Commercial Washer &amp; Dryer</span>
                </div>
                <p className="text-xs text-slate-400">
                  Big industrial sneaker washing machines with soft rotary brushes and dedicated drying cabinets for fast, thorough sanitization.
                </p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Personalized Service</span>
                </div>
                <p className="text-xs text-slate-400">
                  Speak directly with Mnyovu at the counter about any stubborn stain, delicate Carvella resprays, or Timberland boot care.
                </p>
              </div>
            </div>

            {/* Call to action bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book via WhatsApp ({BUSINESS_INFO.phone})</span>
              </button>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-700 flex items-center gap-2 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#A81C2F]" />
                <span>Visit Mnyovu in Jeppestown</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Sawubona Mnyovu! I saw your sneaker wash workshop in Jeppestown and I'd like to bring in my sneakers."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Mnyovu Directly</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
