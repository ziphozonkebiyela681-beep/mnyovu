import React, { useState } from 'react';
import { useAppImages } from '../context/ImageContext';
import bootBeforeImg from '../assets/boot_before.jpg';
import bootAfterImg from '../assets/boot_after.jpg';
import rackImage from '../assets/images/sneaker_rack_fresh_1791470307107.jpg';
import bubblesImage from '../assets/images/sneaker_wash_bubbles_1791470283338.jpg';
import { Sparkles, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const { beforeBootUrl, afterBootUrl, swapBootImages } = useAppImages();

  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activePreset, setActivePreset] = useState<number>(0);
  const [isSwapped, setIsSwapped] = useState<boolean>(false);

  const presets = [
    {
      title: 'CAT Work Boot Restoration',
      shoe: 'Caterpillar (CAT) Waterproof Leather Boot',
      service: 'Deep Clean & Leather Conditioning Balm',
      description: 'Joburg dust and weathered scuffs cleaned from the leather, conditioned with rich natural oils, and the heavy rubber lug sole and toe bumper restored to deep satin black.',
      beforeText: 'Before Wash',
      afterText: 'After Wash (Manje Clean)',
      isBoot: true,
    },
    {
      title: 'Sole Whitening & Suede Nap',
      shoe: 'Air Jordan 1 & Adidas Samba',
      service: 'Suede Revival & De-Oxidation',
      description: 'Translucent sole unyellowing combined with delicate crepe brush treatment to re-fluff crushed suede nap.',
      beforeText: 'Oxidized Yellow & Matted Suede',
      afterText: 'Velvety Nap & Icy Bright Soles',
      isBoot: false,
    },
  ];

  const current = presets[activePreset];

  // Images for current active preset using the active uploaded photos
  const defaultBefore = current.isBoot ? (beforeBootUrl || bootBeforeImg) : bubblesImage;
  const defaultAfter = current.isBoot ? (afterBootUrl || bootAfterImg) : rackImage;

  const beforeImageSrc = isSwapped ? defaultAfter : defaultBefore;
  const afterImageSrc = isSwapped ? defaultBefore : defaultAfter;
  const beforeLabel = isSwapped ? current.afterText : current.beforeText;
  const afterLabel = isSwapped ? current.beforeText : current.afterText;

  return (
    <section id="transformation" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Manje Clean Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1B3E] tracking-tight">
            SEE THE RESULTS FOR YOURSELF: <br />
            <span className="text-[#A81C2F]">BEFORE VS. AFTER</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Drag the interactive slider below to witness the real difference our deep wash and leather conditioning delivers.
          </p>

          {/* Preset Buttons & Swap Action */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {presets.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActivePreset(idx);
                  setIsSwapped(false);
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  activePreset === idx
                    ? 'bg-[#0D1B3E] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {p.title}
              </button>
            ))}

            {current.isBoot && (
              <button
                onClick={() => {
                  swapBootImages();
                  setIsSwapped(!isSwapped);
                }}
                className="px-3.5 py-2 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-1.5 transition-colors shadow-xs ml-1 cursor-pointer"
                title="Swap Before and After image positions"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>Swap Left / Right</span>
              </button>
            )}
          </div>
        </div>

        {/* Main Interactive Visual Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Interactive Slider on the left */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 select-none h-[400px] sm:h-[500px]">
              
              {/* After image (Right side / base background) */}
              <img
                src={afterImageSrc}
                alt={`After: ${afterLabel}`}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* After Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-emerald-600 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>AFTER: {afterLabel}</span>
                </div>
              </div>

              {/* Before image (Left side / clipped layer) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={beforeImageSrc}
                  alt={`Before: ${beforeLabel}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ width: '100%', minWidth: '100%' }}
                />

                {/* Before Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-[#0D1B3E] text-white font-extrabold text-xs px-3.5 py-1.5 rounded-lg shadow-md">
                    BEFORE: {beforeLabel}
                  </div>
                </div>
              </div>

              {/* Slider Divider Bar */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-2xl cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-2 border-[#0D1B3E] shadow-2xl flex items-center justify-center text-[#0D1B3E] transition-transform hover:scale-110">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>

              {/* HTML Range Input for accessibility and smooth dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag before and after image comparison"
              />

              {/* Bottom bar indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-xs px-4 py-1.5 rounded-full z-20 pointer-events-none flex items-center gap-2 border border-white/20">
                <span>◀ Drag left / right to compare ▶</span>
              </div>
            </div>
          </div>

          {/* Details Card on the right */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#A81C2F]">
                  Real Customer Transformation
                </span>
                <h3 className="text-2xl font-black text-[#0D1B3E] mt-1">
                  {current.shoe}
                </h3>
                <p className="text-xs font-bold text-slate-500 mt-0.5">
                  Treatment: {current.service}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Deep grease &amp; road dust extraction</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Leather rehydrated &amp; rich color restored</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Outsole scrub &amp; anti-fungal treatment</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#services"
                  className="w-full py-3 px-4 bg-[#0D1B3E] hover:bg-[#152a5c] text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>View Boot &amp; Sneaker Wash Pricing</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
