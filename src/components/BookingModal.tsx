import React, { useState, useEffect } from 'react';
import { SERVICES_LIST, SERVICE_ADDONS, BUSINESS_INFO } from '../data/servicesData';
import { ServiceItem } from '../types';
import { X, Sparkles, Check, Calendar, Clock, MapPin, MessageCircle, AlertCircle, ShoppingBag } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService?.id || SERVICES_LIST[0].id
  );
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [pairsCount, setPairsCount] = useState<number>(1);
  const [serviceMethod, setServiceMethod] = useState<'dropoff' | 'pickup'>('dropoff');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const currentService =
    SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = SERVICE_ADDONS.find((a) => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  const basePrice = currentService.price * pairsCount;
  const addonsPrice = addonsTotal * pairsCount;
  const pickupFee = serviceMethod === 'pickup' ? 60 : 0;
  const grandTotal = basePrice + addonsPrice + pickupFee;

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedAddonNames = selectedAddons
      .map((id) => SERVICE_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const messageLines = [
      `*NEW BOOKING ENQUIRY - Mnyovu's Sneaker Wash*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `*Name:* ${customerName || 'Customer'}`,
      `*Phone:* ${customerPhone || 'Not provided'}`,
      `*Method:* ${serviceMethod === 'dropoff' ? 'Direct Drop-off at 34 Macintyre St' : 'Collection in JHB Area'}`,
      customerAddress && serviceMethod === 'pickup' ? `*Address:* ${customerAddress}` : null,
      `*Preferred Date:* ${preferredDate || 'Earliest available'}`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `*Service:* ${currentService.name} (R${currentService.price})`,
      `*Pairs:* ${pairsCount} pair(s)`,
      selectedAddonNames ? `*Add-ons:* ${selectedAddonNames}` : null,
      notes ? `*Shoe notes:* ${notes}` : null,
      `━━━━━━━━━━━━━━━━━━━━`,
      `*ESTIMATED TOTAL:* R${grandTotal}`,
      `*Turnaround:* 2 - 3 Days (as orders are many)`,
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
      fullMessage
    )}`;

    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#0D1B3E] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
                Fast &amp; Transparent Booking
              </span>
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white">
              BOOK SNEAKER CARE
            </h3>
            <p className="text-xs text-slate-300">
              Calculate exact pricing &amp; confirm instantly via WhatsApp with Mnyovu.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Turnaround Notice Banner */}
        <div className="bg-[#A81C2F] text-white px-6 py-2 text-xs font-black uppercase tracking-wider flex items-center gap-2">
          <span>⚠️ {BUSINESS_INFO.turnaroundNote}</span>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppBooking} className="p-6 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* 1. Select Treatment */}
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
              1. Choose Core Treatment
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICES_LIST.map((srv) => {
                const isSelected = srv.id === selectedServiceId;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-[#0D1B3E] bg-[#0D1B3E]/5 ring-1 ring-[#0D1B3E]'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <p className="font-extrabold text-xs text-[#0D1B3E]">
                        {srv.name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {srv.duration}
                      </p>
                    </div>
                    <span className="text-sm font-black text-[#A81C2F]">
                      R{srv.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Number of Pairs */}
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
              2. Number of Pairs
            </label>
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setPairsCount(num)}
                  className={`w-11 h-11 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    pairsCount === num
                      ? 'bg-[#0D1B3E] text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {num} {num === 1 ? 'Pair' : 'Pairs'}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Add-on Protection */}
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
              3. Optional Add-ons &amp; Upgrades
            </label>
            <div className="space-y-2">
              {SERVICE_ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <label
                    key={addon.id}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      isChecked
                        ? 'border-emerald-500 bg-emerald-50/50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleAddon(addon.id)}
                        className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                      />
                      <div>
                        <p className="font-bold text-xs text-slate-800">
                          {addon.name}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {addon.desc}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-slate-900 shrink-0">
                      +R{addon.price}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* 4. Drop-off or Collection */}
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
              4. Service Method
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setServiceMethod('dropoff')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  serviceMethod === 'dropoff'
                    ? 'border-[#0D1B3E] bg-[#0D1B3E]/5 ring-1 ring-[#0D1B3E]'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                  <MapPin className="w-4 h-4 text-[#A81C2F]" />
                  <span>Walk-in Drop-off</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  34 Macintyre St, Jeppestown (Free)
                </p>
              </button>

              <button
                type="button"
                onClick={() => setServiceMethod('pickup')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  serviceMethod === 'pickup'
                    ? 'border-[#0D1B3E] bg-[#0D1B3E]/5 ring-1 ring-[#0D1B3E]'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                  <ShoppingBag className="w-4 h-4 text-emerald-600" />
                  <span>JHB Pickup (+R60)</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  We collect and return to your door
                </p>
              </button>
            </div>
          </div>

          {/* 5. Contact Details */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
              5. Your Details
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0D1B3E]"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number (WhatsApp)"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0D1B3E]"
              />
            </div>

            {serviceMethod === 'pickup' && (
              <input
                type="text"
                required
                placeholder="Pickup Address (Johannesburg area)"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0D1B3E]"
              />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0D1B3E]"
              />
              <input
                type="text"
                placeholder="Sneaker Brand / Model (e.g. Jordan 4, Samba, Carvella)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0D1B3E]"
              />
            </div>
          </div>

          {/* Price Breakdown Footer */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Estimated Price
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-[#0D1B3E]">
                  R{grandTotal}
                </span>
                <span className="text-xs text-slate-500">
                  for {pairsCount} {pairsCount === 1 ? 'pair' : 'pairs'}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Confirm on WhatsApp</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
