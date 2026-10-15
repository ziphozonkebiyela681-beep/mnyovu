import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { MapPin, Navigation, Clock, Phone, ExternalLink, Car, Check, Copy } from 'lucide-react';

export const LocationMap: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent('34 Macintyre Street Jeppestown Johannesburg')}`;

  return (
    <section id="location" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 border border-rose-200 text-[#A81C2F] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us on Google Maps</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1B3E] tracking-tight">
            OUR JEPPESTOWN <br />
            <span className="text-[#A81C2F]">WORKSHOP &amp; DROP-OFF</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Conveniently located at <strong>34 Macintyre Street, Jeppestown</strong>, just a few minutes from the Maboneng Arts Precinct and Ellis Park. Drop off your pairs or arrange collection.
          </p>
        </div>

        {/* Main Grid: Map & Info Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Embed Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-100 flex-1">
              {/* Google Maps Embed iframe */}
              <iframe
                title="Google Maps Location - 34 Macintyre Street, Jeppestown, Johannesburg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=34+Macintyre+Street,+Jeppestown,+Johannesburg,+2094,+South+Africa&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
              ></iframe>

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200 shadow-lg max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-xs font-black text-[#0D1B3E]">MNYOVU'S SNEAKER WASH</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  34 Macintyre St, Jeppestown, JHB
                </p>
                <p className="text-[11px] text-emerald-700 font-bold mt-0.5">
                  ✓ Open for drop-offs &amp; pickups
                </p>
              </div>

              {/* Map Controls Floating at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 justify-between items-center pointer-events-auto">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0D1B3E] hover:bg-[#162758] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-md flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-300" />
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3 h-3 text-slate-300" />
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold px-3 py-2 rounded-lg shadow-md border border-slate-200 flex items-center gap-1.5 transition-colors"
                >
                  <Car className="w-3.5 h-3.5 text-sky-500" />
                  <span>Waze Navigation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location Info & Proximity Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Physical Address
                  </span>
                  <h3 className="text-lg font-black text-[#0D1B3E] mt-0.5">
                    34 Macintyre Street
                  </h3>
                  <p className="text-sm font-semibold text-slate-700">
                    Jeppestown, Johannesburg, 2094
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Gauteng, South Africa
                  </p>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition-colors shadow-2xs"
                  title="Copy full address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Operating Hours */}
              <div className="border-t border-slate-200/80 pt-4 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#A81C2F] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Operating &amp; Drop-off Hours
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-slate-100">
                    <span className="font-bold text-slate-700 block">Mon – Fri</span>
                    <span className="text-slate-600 font-medium">{BUSINESS_INFO.hours.weekdays}</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-100">
                    <span className="font-bold text-slate-700 block">Saturday</span>
                    <span className="text-slate-600 font-medium">{BUSINESS_INFO.hours.saturday}</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 italic">
                  * Sunday: Closed for routine drying / drop-off by WhatsApp appointment.
                </p>
              </div>

              {/* Contact Call */}
              <div className="border-t border-slate-200/80 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <div>
                    <span className="text-[11px] text-slate-500 block">Questions? Call Workshop</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-sm font-black text-[#0D1B3E] hover:text-[#A81C2F]"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 bg-emerald-100/70 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors"
                >
                  WhatsApp Direct
                </a>
              </div>
            </div>

            {/* Proximity / Easy Routes */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0D1B3E]">
                Quick Travel Times Around Johannesburg:
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 font-medium">
                <li className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span>🎨 From Maboneng Precinct (Fox St)</span>
                  <span className="font-bold text-slate-800">~ 3 mins</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span>🏉 From Ellis Park / Doornfontein</span>
                  <span className="font-bold text-slate-800">~ 4 mins</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span>🏢 From Johannesburg CBD</span>
                  <span className="font-bold text-slate-800">~ 6 mins</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span>🛍️ From Eastgate &amp; Kensington</span>
                  <span className="font-bold text-slate-800">~ 8 mins</span>
                </li>
              </ul>
              <p className="text-[11px] text-slate-500 pt-1">
                🅿️ Ample street-level parking right in front of 34 Macintyre Street for quick curbside drop-offs and pickups.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
