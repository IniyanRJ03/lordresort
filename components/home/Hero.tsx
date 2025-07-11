"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/home/1.jpg",
  "/home/2.jpg",
  "/home/3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] min-h-[400px] sm:h-[90vh] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background images slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        {images.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt="LORD Resort Hero"
            fill
            className={`object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
            priority={idx === 0}
          />
        ))}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      </div>
      {/* Centered content with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-3 sm:px-4"
      >
        <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg mb-3 sm:mb-4">
          A tranquil sanctuary<br className="hidden xs:inline" />by the lagoon.
        </h1>
        <p className="text-white text-base xs:text-lg sm:text-xl font-medium mb-6 sm:mb-8 drop-shadow max-w-xs xs:max-w-md sm:max-w-xl mx-auto">
          Experience perfect serenity at <span className="font-bold">LORD Resort</span>
        </p>
        <div className="flex flex-col gap-3 w-full max-w-xs xs:max-w-md sm:max-w-none sm:flex-row sm:gap-4">
          <a
            href="#"
            className="bg-white text-gray-900 rounded-full px-6 py-2.5 sm:px-8 sm:py-3 font-medium text-base shadow hover:bg-gray-100 transition text-center"
          >
            Book Your Stay
          </a>
          <a
            href="#"
            className="border border-white text-white rounded-full px-6 py-2.5 sm:px-8 sm:py-3 font-medium text-base shadow hover:bg-white/10 transition text-center"
          >
            Explore Experiences
          </a>
        </div>
      </motion.div>
    </section>
  );
} 