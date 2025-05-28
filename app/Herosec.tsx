"use client";

import { useEffect, useRef } from "react";

/**
 * Hero Section Component with responsive background videos
 * Features:
 * - Large video for desktop/laptop screens (versiune-mare-video.mp4)
 * - Small video for mobile screens (versiune-mica-mobila.mp4)
 * - Infinite loop autoplay
 * - Responsive text overlay with Romanian patriotic message
 * - Optimized for performance with proper video loading
 */
export default function HeroSection() {
  const largeVideoRef = useRef<HTMLVideoElement>(null);
  const smallVideoRef = useRef<HTMLVideoElement>(null);

  // Ensure videos play automatically and handle any autoplay restrictions
  useEffect(() => {
    const playVideos = () => {
      const largeVideo = largeVideoRef.current;
      const smallVideo = smallVideoRef.current;

      if (largeVideo) {
        largeVideo.play().catch((error) => {
          console.log("Large video autoplay failed:", error);
        });
      }

      if (smallVideo) {
        smallVideo.play().catch((error) => {
          console.log("Small video autoplay failed:", error);
        });
      }
    };

    // Try to play immediately
    playVideos();

    // Also try to play on user interaction
    const handleUserInteraction = () => {
      playVideos();
    };

    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("touchstart", handleUserInteraction, {
      once: true,
    });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden">
      {/* Background Video for Large Screens (Desktop/Laptop) */}
      <video
        ref={largeVideoRef}
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/versiune-mare-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Video for Small Screens (Mobile/Tablet) */}
      <video
        ref={smallVideoRef}
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/versiune-mica-mobila.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hero Text Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-700 mb-6 leading-tight">
            <span className="block mb-2 text-shadow-lg">
              Fi mândru că ești român
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-300">
              Să păstrăm ce am câștigat.
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-600">
              Unirea. Respectul.
            </span>
          </h1>

          {/* Optional subtitle for additional context */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mt-8 leading-relaxed max-w-2xl mx-auto">
            Împreună pentru românii de pretutindeni
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
