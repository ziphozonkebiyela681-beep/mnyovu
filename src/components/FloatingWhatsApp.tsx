import React from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi Mnyovu's Sneaker Wash! I have a question about sneaker cleaning / drop-off at 34 Macintyre Street, Jeppestown."
  )}`;

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
      <div className="hidden sm:block bg-white text-slate-800 text-xs font-bold py-1.5 px-3 rounded-full shadow-lg border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with Mnyovu's
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mnyovu's Sneaker Wash on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ring-4 ring-white/60"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
};
