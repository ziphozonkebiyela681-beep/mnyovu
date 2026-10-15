/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ImageProvider } from './context/ImageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandHeritage } from './components/BrandHeritage';
import { WorkplaceSection } from './components/WorkplaceSection';
import { ServicesPricing } from './components/ServicesPricing';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProcessSteps } from './components/ProcessSteps';
import { LocationMap } from './components/LocationMap';
import { ReviewsFAQ } from './components/ReviewsFAQ';
import { Footer } from './components/Footer';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BUSINESS_INFO } from './data/servicesData';
import { ServiceItem } from './types';

function MainApp() {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

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

        {/* Brand Story & Official Emblem */}
        <BrandHeritage
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Services & Official Price List */}
        <ServicesPricing
          onSelectService={(service) => handleOpenBooking(service)}
        />

        {/* Meet Mnyovu at the Workplace (34 Macintyre St) */}
        <WorkplaceSection
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
