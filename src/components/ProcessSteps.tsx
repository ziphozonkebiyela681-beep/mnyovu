import React from 'react';
import { PackageCheck, Sparkles, Wind, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

interface ProcessStepsProps {
  onOpenBooking: () => void;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Drop Off or Request Pickup',
      desc: 'Bring your pairs to 34 Macintyre St in Jeppestown (no appointment needed for drop-offs) or book our JHB collection service online.',
      icon: PackageCheck,
      tag: 'Step 1: Check-in',
    },
    {
      num: '02',
      title: 'Commercial Sneaker Washer Machine',
      desc: 'Shoes undergo deep foam cleansing inside our specialized commercial sneaker washer equipped with soft rotary brushes and active bubble foam extraction.',
      icon: Sparkles,
      tag: 'Step 2: Machine Wash & Detailing',
    },
    {
      num: '03',
      title: 'Specialized Sneaker Dryer Cabinet',
      desc: 'Sneakers are placed in our commercial climate drying cabinet. Gentle ambient airflow eliminates moisture thoroughly without damaging adhesives or leather shape.',
      icon: Wind,
      tag: 'Step 3: Pro Dryer Cabinet',
    },
    {
      num: '04',
      title: 'Manje Clean Quality Check & Delivery',
      desc: 'Final inspection, fresh lace re-threading, deodorizing mist, and sealed packaging. Pick up at our workshop or receive them at your doorstep.',
      icon: CheckCircle,
      tag: 'Step 4: Box Fresh',
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#A81C2F]">
            Simple 4-Step Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1B3E] tracking-tight">
            HOW WE GET YOUR SNEAKERS <br />
            <span className="text-[#A81C2F]">MANJE CLEAN !!</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A meticulous restoration workflow that restores dirty street grails to fresh condition in 2–3 days.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-[#A81C2F]/30 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0D1B3E] group-hover:bg-[#0D1B3E] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-[#A81C2F] uppercase tracking-wider block mb-1">
                    {step.tag}
                  </span>

                  <h3 className="text-lg font-black text-[#0D1B3E] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#0D1B3E] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-black text-white">
              Ready to transform your favourite pair?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Walk right into 34 Macintyre Street today, or calculate your price online.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl flex items-center gap-2 shadow-md shrink-0 transition-transform active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Book on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
