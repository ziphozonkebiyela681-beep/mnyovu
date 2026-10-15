import React, { useState } from 'react';
import { DEMO_TRACKING_ORDERS, BUSINESS_INFO } from '../data/servicesData';
import { TrackingOrder } from '../types';
import { Search, Package, Clock, CheckCircle2, AlertCircle, ArrowRight, X, Phone, MessageCircle } from 'lucide-react';

interface OrderTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({ isOpen, onClose }) => {
  const [orderQuery, setOrderQuery] = useState('');
  const [activeOrder, setActiveOrder] = useState<TrackingOrder | null>(
    DEMO_TRACKING_ORDERS['MNY-7824']
  );
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = orderQuery.trim().toUpperCase();
    setHasSearched(true);

    if (DEMO_TRACKING_ORDERS[cleanId]) {
      setActiveOrder(DEMO_TRACKING_ORDERS[cleanId]);
      setSearchError(false);
    } else {
      setActiveOrder(null);
      setSearchError(true);
    }
  };

  const handlePresetSelect = (orderId: string) => {
    setOrderQuery(orderId);
    setActiveOrder(DEMO_TRACKING_ORDERS[orderId]);
    setHasSearched(true);
    setSearchError(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#0D1B3E] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
                Real-Time Wash Bay Tracker
              </span>
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white">
              TRACK YOUR KICKS
            </h3>
            <p className="text-xs text-slate-300">
              Enter the receipt code given when dropping off at 34 Macintyre Street.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close tracking modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Search Box */}
          <form onSubmit={handleSearch} className="space-y-3">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={orderQuery}
                  onChange={(e) => setOrderQuery(e.target.value)}
                  placeholder="Enter order ID (e.g. MNY-7824)"
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D1B3E] focus:border-transparent uppercase placeholder:normal-case"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#0D1B3E] hover:bg-[#152a5c] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Track
              </button>
            </div>

            {/* Quick Demo links */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Try test orders:</span>
              <button
                type="button"
                onClick={() => handlePresetSelect('MNY-7824')}
                className="font-bold text-[#A81C2F] hover:underline cursor-pointer"
              >
                #MNY-7824 (In Progress)
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handlePresetSelect('MNY-4591')}
                className="font-bold text-emerald-700 hover:underline cursor-pointer"
              >
                #MNY-4591 (Ready for Pickup)
              </button>
            </div>
          </form>

          {/* Search Error State */}
          {searchError && (
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 space-y-1">
                <p className="font-bold">No active ticket found for "{orderQuery}"</p>
                <p>
                  Please double check the slip Mnyovu gave you at the counter, or message us directly on WhatsApp with your name and drop-off date.
                </p>
              </div>
            </div>
          )}

          {/* Active Order Details */}
          {activeOrder && (
            <div className="space-y-6 border border-slate-200 rounded-2xl p-5 bg-slate-50">
              {/* Order Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-base text-[#0D1B3E]">
                      Order #{activeOrder.orderId}
                    </span>
                    <span className="text-xs bg-slate-200 text-slate-800 font-bold px-2 py-0.5 rounded">
                      {activeOrder.customerName}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-600 mt-0.5">
                    {activeOrder.sneakers} · {activeOrder.serviceName}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Estimated Ready
                  </span>
                  <span className="text-xs font-extrabold text-[#A81C2F]">
                    {activeOrder.estimatedReady}
                  </span>
                </div>
              </div>

              {/* Progress Stepper */}
              <div className="space-y-4 pt-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Treatment Journey
                </h4>

                <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {activeOrder.steps.map((step, idx) => {
                    const isCompleted = step.status === 'completed';
                    const isCurrent = step.status === 'current';

                    return (
                      <div key={idx} className="relative flex items-start gap-3">
                        {/* Dot indicator */}
                        <div
                          className={`absolute -left-6 top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            isCompleted
                              ? 'bg-emerald-600 text-white ring-4 ring-emerald-100'
                              : isCurrent
                              ? 'bg-[#0D1B3E] text-white ring-4 ring-sky-100 animate-pulse'
                              : 'bg-white border-2 border-slate-300 text-slate-400'
                          }`}
                        >
                          {isCompleted ? '✓' : idx + 1}
                        </div>

                        {/* Text */}
                        <div className="flex-1 space-y-0.5">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`text-xs font-black ${
                                isCurrent
                                  ? 'text-[#0D1B3E]'
                                  : isCompleted
                                  ? 'text-slate-900'
                                  : 'text-slate-400'
                              }`}
                            >
                              {step.title}
                            </span>
                            {step.timestamp && (
                              <span className="text-[10px] font-bold text-slate-400 shrink-0">
                                {step.timestamp}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Ready Status Banner if finished */}
              {activeOrder.currentStepIndex >= 5 && (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300 text-emerald-900 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-xs font-black">
                      Kicks are clean, fresh and boxed! Come to 34 Macintyre St.
                    </span>
                  </div>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-emerald-800 underline underline-offset-2 shrink-0"
                  >
                    Get Directions
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Assistance contact */}
          <div className="bg-slate-100 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-600">
              Need urgent updates on your order?
            </span>
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Mnyovu! I'm checking up on my wash order #${orderQuery || 'MNY-7824'}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Mnyovu</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 font-bold rounded-lg flex items-center gap-1.5 hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Shop</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
