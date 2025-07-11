"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[320px] xs:h-[80vh] xs:min-h-[400px] sm:h-[90vh] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/home/4.jpg"
        alt="Contact background"
        fill
        className="object-cover object-center w-full h-full z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 flex flex-col justify-center h-full pt-16 xs:pt-20 sm:pt-24">
        <span className="uppercase text-sm tracking-widest text-blue-200 font-semibold mb-3 block">Get in Touch</span>
        <h1 className="text-white text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-3 drop-shadow-lg">
          Connect With Us<br />
          <span className="text-gray-200 font-light">We're Here to Help</span>
        </h1>
        <p className="text-gray-100 text-lg xs:text-xl font-medium mb-7 xs:mb-9 drop-shadow max-w-xs xs:max-w-md sm:max-w-2xl">
          Whether you have questions about your stay, special requests, or would like to learn more about our resort, our dedicated team is ready to assist you.
        </p>
      </div>
    </section>
  );
} 