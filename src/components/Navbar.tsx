import React, { useState } from 'react';
import { LogoBadge } from './LogoBadge';
import { BUSINESS_INFO } from '../data/servicesData';
import { MapPin, Phone, MessageCircle, Menu, X, Clock, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenTracking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenTracking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappHref = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi Mnyovu's Sneaker Wash! I'd like to book a shoe cleaning service / enquire about drop-off at 34 Macintyre Street."
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Banner - Location & hours announcement */}
      <div className="bg-[#0D1B3E] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-sky-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>34 Macintyre St, Jeppestown, Johannesburg</span>
            </span>
            <span className="hidden md:inline text-slate-400">·</span>
            <span className="hidden md:flex items-center gap-1 text-slate-200">
              <Clock className="w-3 h-3 text-emerald-400" />
              <span>Open Mon–Sat from 08:30</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-amber-300 font-bold tracking-wider text-[11px] uppercase">
              Manje Clean !!
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <LogoBadge size="sm" showSubtitle={false} className="shrink-0" />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#0D1B3E] leading-none group-hover:text-[#A81C2F] transition-colors">
                MNYOVU'S
              </span>
              <span className="text-xs font-black tracking-widest text-[#A81C2F] uppercase mt-0.5">
                SNEAKER WASH
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider">
                &amp; SHOE CARE · JEPPESTOWN
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-semibold text-slate-700 hover:text-[#0D1B3E] transition-colors"
            >
              Services &amp; Pricing
            </a>
            <a
              href="#process"
              className="text-sm font-semibold text-slate-700 hover:text-[#0D1B3E] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#transformation"
              className="text-sm font-semibold text-slate-700 hover:text-[#0D1B3E] transition-colors"
            >
              Before &amp; After
            </a>
            <a
              href="#location"
              className="text-sm font-semibold text-slate-700 hover:text-[#0D1B3E] transition-colors"
            >
              Location &amp; Map
            </a>
            <button
              onClick={onOpenTracking}
              className="text-sm font-semibold text-slate-700 hover:text-[#A81C2F] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Track Kicks</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#0D1B3E]" />
              <span>Call Us</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book on WhatsApp</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-md flex items-center gap-1 cursor-pointer"
            >
              <MessageCircle className="w-3 h-3 fill-white" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Services &amp; Pricing
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              How It Works
            </a>
            <a
              href="#transformation"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Before &amp; After Comparison
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Location &amp; Directions
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracking();
              }}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between text-left cursor-pointer"
            >
              <span>Track Kicks Order</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </button>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-emerald-600 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book on WhatsApp ({BUSINESS_INFO.phone})</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full py-2.5 bg-slate-100 text-[#0D1B3E] font-bold text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
