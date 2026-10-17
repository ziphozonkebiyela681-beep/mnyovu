/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ImageProvider } from './context/ImageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TeamFamilySection } from './components/TeamFamilySection';
import { ServicesPricing } from './components/ServicesPricing';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProcessSteps } from './components/ProcessSteps';
import { LocationMap } from './components/LocationMap';
import { ReviewsFAQ } from './components/ReviewsFAQ';
import { Footer } from './components/Footer';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PermanentPhotoSaverModal } from './components/PermanentPhotoSaverModal';
import { BUSINESS_INFO } from './data/servicesData';
import { ServiceItem } from './types';
import { HardDrive, UploadCloud } from 'lucide-react';

function MainApp() {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isSaverOpen, setIsSaverOpen] = useState(false);

  // All bookings are routed strictly via WhatsApp
  const handleOpenBooking = (service?: ServiceItem) => {
    const text = service
      ? `Sawubona Mnyovu! I would like to book the ${service.name} (R${service.price}) at 34 Macintyre Street, Jeppestown.`
      : `Sawubona Mnyovu! I would like to book a sneaker wash / shoe care service at 34 Macintyre Street, Jeppestown.`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleOpenTracking = () => {
    setIsTrackingOpen(true);
  };

  const handleCloseTracking = () => {
    setIsTrackingOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-[#0D1B3E] selection:text-white relative">
      {/* Permanent In-Studio Codebase Photo Saver Bar */}
      <div className="bg-slate-950 text-white border-b border-emerald-900/60 px-4 py-2 text-xs flex items-center justify-between shadow-md">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-white">Save Real Photos Directly Into Codebase Disk:</span>
            <span className="text-slate-300 hidden md:inline">Permanently replaces AI placeholders in code files.</span>
          </div>

          <button
            onClick={() => setIsSaverOpen(true)}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-wider text-[11px] rounded-lg shadow-sm flex items-center gap-2 transition-all cursor-pointer active:scale-95"
          >
            <HardDrive className="w-3.5 h-3.5 text-emerald-100" />
            <span>Upload Real Photos to Codebase</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenTracking={handleOpenTracking}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenTracking={handleOpenTracking}
        />

        {/* Services & Official Price List */}
        <ServicesPricing
          onSelectService={(service) => handleOpenBooking(service)}
        />

        {/* Meet the Dedicated Staff & Family Environment (Replaces Workplace) */}
        <TeamFamilySection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Interactive Before & After Transformation */}
        <BeforeAfterSlider />

        {/* How It Works (Drop-off, Wash Bay, Slow Dry, Manje Clean) */}
        <ProcessSteps
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Physical Location: 34 Macintyre St, Jeppestown, Google Maps */}
        <LocationMap />

        {/* Real Customer Reviews & FAQ */}
        <ReviewsFAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Real-time Wash Bay Order Tracker */}
      <OrderTrackerModal
        isOpen={isTrackingOpen}
        onClose={handleCloseTracking}
      />

      {/* Permanent In-Studio Codebase Photo Saver Modal */}
      <PermanentPhotoSaverModal
        isOpen={isSaverOpen}
        onClose={() => setIsSaverOpen(false)}
      />

      {/* Always-on Floating WhatsApp button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <ImageProvider>
      <MainApp />
    </ImageProvider>
  );
}
