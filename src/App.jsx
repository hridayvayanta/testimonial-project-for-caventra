import React, { useState, useEffect } from 'react';
import { initSmoothScroll } from './utils/smoothScroll';
import { siteContent } from './config/siteContent';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import ImageLightbox from './components/ImageLightbox';

// Sections
import Hero from './sections/Hero';
import BrandStory from './sections/BrandStory';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Artistry from './sections/Artistry';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import Booking from './sections/Booking';
import Footer from './sections/Footer';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll with official GSAP ScrollTrigger ticker integration
    const scrollHandler = initSmoothScroll();

    return () => {
      if (scrollHandler && scrollHandler.destroy) {
        scrollHandler.destroy();
      }
    };
  }, []);

  const handleSelectGalleryItem = (item) => {
    setSelectedGalleryItem(item);
  };

  const handleSelectGalleryIndex = (index) => {
    if (siteContent.gallery.items[index]) {
      setSelectedGalleryItem(siteContent.gallery.items[index]);
    }
  };

  return (
    <div className="luxury-app-wrapper" style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--color-porcelain)' }}>
      {/* SECTION 01: Cinematic Intro Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Persistent Luxury Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* SECTION 02: Hero Experience with Real Three.js 3D Sculpture */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* SECTION 03: Brand Story */}
        <BrandStory />

        {/* SECTION 04: Curated Services */}
        <Services onOpenBooking={() => setIsBookingOpen(true)} />

        {/* SECTION 05: Signature Nail Gallery */}
        <Gallery onSelectImage={handleSelectGalleryItem} />

        {/* SECTION 06: The Artistry / Process */}
        <Artistry />

        {/* SECTION 07: Meet Sailee */}
        <About onOpenBooking={() => setIsBookingOpen(true)} />

        {/* SECTION 08: Client Experiences */}
        <Testimonials />

        {/* SECTION 09: Cinematic Booking Finale */}
        <Booking onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Booking Modal / WhatsApp Flow */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Gallery Image Lightbox */}
      <ImageLightbox
        item={selectedGalleryItem}
        items={siteContent.gallery.items}
        onClose={() => setSelectedGalleryItem(null)}
        onSelectIndex={handleSelectGalleryIndex}
      />
    </div>
  );
}
