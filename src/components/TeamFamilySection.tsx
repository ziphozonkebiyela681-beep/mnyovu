import React, { useState } from 'react';
import workshopTeamImg from '../assets/mnyovu_workshop_team.jpg';
import storefrontTeamImg from '../assets/mnyovu_team.jpg';
import { BUSINESS_INFO } from '../data/servicesData';
import { Heart, Sparkles, ShieldCheck, Users, MessageCircle, MapPin, Award, CheckCircle2, Store, Wrench, Youtube, ExternalLink } from 'lucide-react';

interface TeamFamilySectionProps {
  onOpenBooking: () => void;
}

export const TeamFamilySection: React.FC<TeamFamilySectionProps> = ({ onOpenBooking }) => {
  const [activeView, setActiveView] = useState<'workshop' | 'storefront'>('workshop');

  const currentImage = activeView === 'workshop' ? workshopTeamImg : storefrontTeamImg;
  const currentAlt =
    activeView === 'workshop'
      ? "Mnyovu's Sneaker Wash workers inside the workshop at the counter with sneaker shelves"
      : "Mnyovu's Sneaker Wash staff team wearing branded aprons outside 34 Macintyre Street shop";

  return (
    <section id="team" className="py-20 bg-slate-900 text-white border-b border-slate-800 overflow-hidden relative">
      {/* Decorative ambient glows matching the brand theme */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 border border-white/15 text-sky-300 text-xs font-black uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>THE MNYOVU FAMILY &amp; DEDICATED STAFF</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            INSIDE THE WORKSHOP AT <br />
            <span className="text-[#A81C2F]">34 MACINTYRE STREET</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Meet our dedicated team of sneaker care artisans — working together in a warm family environment right here in Jeppestown.
          </p>

          {/* View Toggle Tabs */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveView('workshop')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeView === 'workshop'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Inside the Workshop (At Work Counter)</span>
            </button>

            <button
              onClick={() => setActiveView('storefront')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeView === 'storefront'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>Storefront Entrance</span>
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Workers in the Workshop Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Subtle decorative offset border */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0D1B3E] to-[#A81C2F] rounded-3xl opacity-30 blur-sm"></div>

              {/* Main Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-slate-800 group">
                <img
                  src={currentImage}
                  alt={currentAlt}
                  className="w-full h-[490px] sm:h-[570px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>

                {/* Floating Storefront Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1.5 rounded-lg border border-white/20 shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>EST. {BUSINESS_INFO.established} · JEPPESTOWN</span>
                </div>

                {/* Floated Slogan Tag */}
                <div className="absolute -top-3 -right-3 bg-[#A81C2F] text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg border border-red-500 transform rotate-2">
                  MANJE CLEAN !!
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-widest text-sky-300">
                      {activeView === 'workshop' ? '34 Macintyre St Workshop Counter' : '34 Macintyre St Storefront'}
                    </span>
                    <span className="bg-[#A81C2F] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                      WALK-INS WELCOME
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {activeView === 'workshop'
                      ? '“Crafted By Hand, Shelved With Pride”'
                      : '“United by Craft, Driven by Community”'}
                  </h3>
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <p className="text-xs text-slate-300 max-w-xs">
                      {activeView === 'workshop'
                        ? 'Our team under the glowing “MANJE CLEAN !!” LED sign at the counter with tall shelves of clean kicks.'
                        : 'Our team outside the shop ready to give your footwear the royal treatment.'}
                    </p>

                    {/* Glowing Touch Directive on Photo Card */}
                    <a
                      href={BUSINESS_INFO.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-extrabold text-[11px] shadow-[0_0_22px_rgba(239,68,68,0.85)] hover:shadow-[0_0_32px_rgba(239,68,68,1)] border border-red-300/80 transition-all duration-300 hover:scale-105 active:scale-95"
                      title="Touch to reveal Mnyovu Ngubane on YouTube"
                    >
                      <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-80"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                      </span>

                      <span className="text-xs">👆</span>
                      <Youtube className="w-3.5 h-3.5 fill-white text-white shrink-0" />
                      <span className="tracking-wide">Touch: @Mnyovu_Ngubane</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Dedicated Employees Passage & Details Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-rose-400 block">
                Quality Clean · Fresh Look · Established {BUSINESS_INFO.established}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                MORE THAN A WORKSHOP — <br />
                WE ARE A FAMILY WHO CARES.
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                When you walk into <strong>Mnyovu's Sneaker Wash</strong> at 34 Macintyre Street in Jeppestown, you aren't handed off to strangers or machines alone. You are welcomed with warm greetings, respectful attention, the fresh scent of diffuser oils, and a dedicated team of workers standing at the counter ready to inspect and care for your sneakers.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every single pair is hand-logged into our customer ledger book, material-diagnosed, and treated with artisan care. From delicate vintage suede and Jordan ice-soles to heavy work boots and Italian Carvella resprays, our family works together to make sure your shoes leave our workshop <em>Manje Clean !!</em>
              </p>
            </div>

            {/* Core Team & Workshop Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-black text-white">
                  <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Warm Family Atmosphere</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real people who listen to your shoe concerns. Whether it's stubborn mud, scuffs, or delicate fabric, we treat them like our own collection.
                </p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-black text-white">
                  <Award className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Trained Sneaker Artisans</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every staff member is certified in material diagnosis, horsehair brushing, sole de-oxidation, and delicate Carvella/Arbiter resprays.
                </p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-black text-white">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Blasted Logo &amp; Brand Uniform</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Wearing matching black aprons featuring our signature Dark Navy Blue, Crimson Red, and White circular logo.
                </p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-black text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Commercial Washers &amp; Slow Dry</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Commercial washing machines combined with a patient 2–3 days slow climate-drying process so adhesives never crack and leather stays supple.
                </p>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-sm rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book on WhatsApp ({BUSINESS_INFO.phone})</span>
              </button>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-700 flex items-center gap-2 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#A81C2F]" />
                <span>Visit Us in Jeppestown</span>
              </a>
            </div>

            {/* Corner Revelation Card: Glow and Direct People to Touch It */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Drop-offs welcome Mon–Sat from 08:30 · 34 Macintyre Street</span>
              </div>

              {/* Glowing Touch Directive Card */}
              <a
                href={BUSINESS_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-slate-900 via-red-950 to-slate-900 border-2 border-red-500 hover:border-red-400 text-white shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:shadow-[0_0_35px_rgba(239,68,68,0.85)] transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
                title="Touch here to reveal The Man Behind The Magic on YouTube"
              >
                {/* Pulsing beacon */}
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>

                <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Youtube className="w-4 h-4 fill-white text-white" />
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-amber-300">
                    <span className="animate-pulse">👉 TOUCH HERE TO REVEAL</span>
                  </div>
                  <div className="text-xs font-black text-white group-hover:text-red-300 transition-colors">
                    The Man Behind The Magic · <span className="underline underline-offset-2">@Mnyovu_Ngubane</span>
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-red-300 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
