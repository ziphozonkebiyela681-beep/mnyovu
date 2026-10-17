import React, { useRef, useState } from 'react';
import { useAppImages } from '../context/ImageContext';
import { HardDrive, CheckCircle2, Image as ImageIcon, X, AlertCircle, RefreshCw, Upload, Check } from 'lucide-react';

interface PermanentPhotoSaverModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PhotoSlot {
  id: string;
  filename: string;
  label: string;
  desc: string;
  currentUrl: string;
}

export const PermanentPhotoSaverModal: React.FC<PermanentPhotoSaverModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    logoUrl,
    workplaceUrl,
    priceListUrl,
    beforeBootUrl,
    afterBootUrl,
  } = useAppImages();

  const [savingSlot, setSavingSlot] = useState<string | null>(null);
  const [savedSlots, setSavedSlots] = useState<Record<string, number>>({});
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  if (!isOpen) return null;

  const slots: PhotoSlot[] = [
    {
      id: 'boot_before',
      filename: 'boot_before.jpg',
      label: '1. Before Wash Boot Photo (Caterpillar)',
      desc: 'The dirty, uncleaned work boot for the drag-to-compare slider.',
      currentUrl: beforeBootUrl,
    },
    {
      id: 'boot_after',
      filename: 'boot_after.jpg',
      label: '2. After Wash Boot Photo (Caterpillar)',
      desc: 'The cleaned & conditioned work boot for the drag-to-compare slider.',
      currentUrl: afterBootUrl,
    },
    {
      id: 'logo',
      filename: 'logo.jpg',
      label: '3. Official Circular Logo',
      desc: 'Mnyovu circular emblem badge with sneaker and foam.',
      currentUrl: logoUrl,
    },
    {
      id: 'workplace',
      filename: 'mnyovu_workplace.jpg',
      label: '4. Mnyovu at Workshop Desk',
      desc: 'Photo of Mnyovu at the reception counter in 34 Macintyre Street.',
      currentUrl: workplaceUrl,
    },
    {
      id: 'price_list',
      filename: 'price_list_poster.jpg',
      label: '5. Official Price List Poster',
      desc: 'Photo of the printed price list hanging on the workshop wall.',
      currentUrl: priceListUrl,
    },
    {
      id: 'team',
      filename: 'mnyovu_team.jpg',
      label: '6. Staff Team & Family Environment',
      desc: 'Photo of the 5 staff members in uniform outside 34 Macintyre Street.',
      currentUrl: '/mnyovu_team.jpg',
    },
  ];

  const handleFileSelected = async (filename: string, file: File) => {
    setSavingSlot(filename);
    setErrorMsg(null);

    try {
      // POST raw file directly to the backend disk-saver endpoint
      const res = await fetch(`/api/save-image?filename=${encodeURIComponent(filename)}`, {
        method: 'POST',
        body: file,
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || 'Failed to save');
      }

      // Mark as permanently saved to codebase disk!
      setSavedSlots((prev) => ({ ...prev, [filename]: data.bytes }));

      // Reload window or reload images after short delay so the browser displays the new file directly from disk
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.error('Save to codebase error:', err);
      setErrorMsg(`Failed to write ${filename} to disk. Please try again.`);
    } finally {
      setSavingSlot(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#0D1B3E] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">
                Save Real Photos Directly to Codebase
              </h3>
              <p className="text-xs text-sky-200">
                Writes your files directly onto disk in the project folder — no fake local storage!
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Explain how this works */}
        <div className="p-4 bg-emerald-50 border-b border-emerald-100 flex items-start gap-3 text-xs text-emerald-950">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-bold block text-emerald-900 mb-0.5">
              Direct Filesystem Writer Enabled
            </strong>
            When you select your photo below, it sends the original file directly to the server, overwriting the AI placeholder files permanently in <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">public/</code> and <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">src/assets/</code>.
          </div>
        </div>

        {errorMsg && (
          <div className="m-4 p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Slots List */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {slots.map((slot) => {
            const isSaving = savingSlot === slot.filename;
            const isSaved = Boolean(savedSlots[slot.filename]);

            return (
              <div
                key={slot.id}
                className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row items-center justify-between gap-4 ${
                  isSaved
                    ? 'border-emerald-300 bg-emerald-50/40'
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-slate-300 bg-white shrink-0 flex items-center justify-center relative">
                    <img
                      src={slot.currentUrl}
                      alt={slot.label}
                      className="w-full h-full object-cover"
                    />
                    {isSaved && (
                      <div className="absolute inset-0 bg-emerald-600/60 flex items-center justify-center text-white">
                        <Check className="w-6 h-6 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-black text-sm text-[#0D1B3E]">
                        {slot.label}
                      </h4>
                      {isSaved && (
                        <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                          Saved to Disk!
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {slot.desc}
                    </p>
                    <span className="text-[10px] font-mono text-slate-400 mt-1 block">
                      Target: public/{slot.filename}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 w-full sm:w-auto">
                  <input
                    ref={(el) => {
                      fileInputRefs.current[slot.filename] = el;
                    }}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileSelected(slot.filename, file);
                    }}
                  />

                  <button
                    type="button"
                    disabled={isSaving}
                    onClick={() => fileInputRefs.current[slot.filename]?.click()}
                    className={`w-full sm:w-auto px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                      isSaved
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-[#0D1B3E] hover:bg-[#1a2d5e] text-white'
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>
                      {isSaving
                        ? 'Writing to Disk...'
                        : isSaved
                        ? 'Replace Again'
                        : 'Select My Real Photo'}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Files are saved to disk instantly and included in every build &amp; deployment.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#0D1B3E] text-white text-xs font-bold rounded-xl hover:bg-[#1a2d5e] cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
