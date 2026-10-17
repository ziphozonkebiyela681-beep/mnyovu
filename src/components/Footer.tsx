import React from 'react';
import { LogoBadge } from './LogoBadge';
import { BUSINESS_INFO } from '../data/servicesData';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, Heart, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1B3E] text-white pt-16 pb-12 border-t-4 border-[#A81C2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/80">
          
          {/* Brand Info & Emblem */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <LogoBadge size="sm" showSubtitle={false} className="shrink-0" />
              <div>
                <span className="font-black text-xl text-white tracking-tight block">
                  MNYOVU'S SNEAKER WASH
                </span>
                <span className="text-xs font-bold text-rose-400 tracking-wider block">
                  &amp; SHOE CARE · EST. 2020
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              Johannesburg's premier sneaker wash workshop. Specializing in high-end sneaker restoration, Arbiter &amp; Carvella resprays, Timberland conditioning, and daily deep foam laundry.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 font-bold">
                🇿🇦 34 Macintyre St, Jeppestown
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 font-bold">
                ⚡ Turnaround: 2 - 3 Days
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Treatments &amp; Pricing
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-white transition-colors">
                  Before &amp; After Kicks
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Workshop Location
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Sawubona Mnyovu! I dropped off my sneakers at 34 Macintyre Street and would like an update on my order."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-emerald-400 font-bold transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Track Order on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Directions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Jeppestown Workshop
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              34 Macintyre Street, Jeppestown, Johannesburg, 2094
            </p>
            <div className="pt-1">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
            <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-700/50">
              <p>Walk-ins welcome: Mon–Sat from 08:30</p>
              <p>No booking required for drop-offs</p>
            </div>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Direct Contact
            </h4>
            <div className="flex flex-col space-y-2.5">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp ({BUSINESS_INFO.phone})</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1.5 mt-1"
              >
                <span>🎵 TikTok: @{BUSINESS_INFO.tiktok}</span>
              </a>

              <a
                href={BUSINESS_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1.5 mt-0.5"
                title="Watch Mnyovu Ngubane on YouTube"
              >
                <Youtube className="w-3.5 h-3.5 fill-rose-400" />
                <span>YouTube: {BUSINESS_INFO.youtube}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            <span>Crafted for Johannesburg's Kicks Culture</span>
            <Heart className="w-3.5 h-3.5 text-[#A81C2F] fill-[#A81C2F]" />
            <span>Manje Clean !!</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
