import React, { useState } from 'react';
import { useAppImages } from '../context/ImageContext';
import { SERVICES_LIST, SERVICE_ADDONS, BUSINESS_INFO } from '../data/servicesData';
import { ServiceItem } from '../types';
import { Check, Clock, Sparkles, Phone, MessageCircle, ShieldCheck, ArrowRight, CreditCard, UserCheck, Flame, Image as ImageIcon } from 'lucide-react';

interface ServicesPricingProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onSelectService }) => {
  const { priceListUrl } = useAppImages();
  const [viewMode, setViewMode] = useState<'cards' | 'poster'>('cards');

  return (
    <section id="services" className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background glow effects matching poster palette */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header - Styled like the official poster */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#A81C2F]/20 border border-[#A81C2F]/40 text-rose-300 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>QUALITY CLEAN · FRESH LOOK</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            OFFICIAL <span className="text-[#A81C2F]">PRICE LIST</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Professional care for your sneakers, work boots, and luxury Italian footwear in Jeppestown.
          </p>

          {/* Turnaround notice badge banner directly from poster */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#A81C2F] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg animate-pulse">
              <Clock className="w-4 h-4 text-white shrink-0" />
              <span>{BUSINESS_INFO.turnaroundNote}</span>
            </div>
          </div>

          {/* Toggle between Card grid view and Original Poster view */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex rounded-xl bg-slate-800 p-1 border border-slate-700">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-[#0D1B3E] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Service Cards View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('poster')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'poster'
                    ? 'bg-[#A81C2F] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Original Poster View</span>
              </button>
            </div>
          </div>
        </div>

        {/* When Poster View is active */}
        {viewMode === 'poster' ? (
          <div className="flex flex-col items-center justify-center mb-14 space-y-4">
            <div className="relative max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#A81C2F] bg-slate-950">
              <img
                src={priceListUrl}
                alt="Official Mnyovu's Sneaker Wash Price List Poster"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 font-medium text-center">
              Official printed price list hanging at 34 Macintyre Street, Jeppestown workshop.
            </p>
          </div>
        ) : (
          /* 5 Core Services from Official Poster */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border relative ${
                  service.popular
                    ? 'bg-slate-800/90 border-[#A81C2F] shadow-xl ring-1 ring-[#A81C2F]'
                    : 'bg-slate-800/50 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800/80'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-[#A81C2F] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    <span>Popular Treatment</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Header & Price tag */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-sky-400" />
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-3xl font-black text-white tracking-tight block">
                        R{service.price}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Per Pair
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 pt-2 border-t border-slate-700/60">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      What's included:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-700/60">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-3 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Book on WhatsApp (R{service.price})</span>
                  </button>
                </div>
              </div>
            ))}

            {/* Add-ons mini card */}
            <div className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-slate-800/40 border border-slate-700/60">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-400 block">
                    Optional Upgrades
                  </span>
                  <h3 className="text-xl font-black text-white tracking-tight mt-0.5">
                    Add-on Protection
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Keep your freshly cleaned kicks protected longer.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {SERVICE_ADDONS.map((addon) => (
                    <div
                      key={addon.id}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/50 flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <span className="font-bold text-xs text-white block">
                          {addon.name}
                        </span>
                        <span className="text-[11px] text-slate-400 block">
                          {addon.desc}
                        </span>
                      </div>
                      <span className="text-sm font-black text-emerald-400 ml-3 shrink-0">
                        +R{addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-700/60">
                <span className="text-[11px] text-slate-400 block text-center">
                  Select add-ons during online booking or drop-off
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Poster Bottom Bar - Direct Contacts */}
        <div className="bg-[#0D1B3E] rounded-2xl p-6 border-2 border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs">
            {/* Phone & WhatsApp */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-4 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp / Call: {BUSINESS_INFO.phone}</span>
            </a>

            {/* TikTok */}
            <a
              href={BUSINESS_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-slate-200 font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              <span>🎵</span>
              <span>TikTok: @{BUSINESS_INFO.tiktok}</span>
            </a>
          </div>

          {/* Poster Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold text-slate-300">
            {BUSINESS_INFO.badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-600 text-slate-200"
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
