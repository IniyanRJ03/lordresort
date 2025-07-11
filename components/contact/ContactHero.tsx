"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-24">
        <span className="uppercase text-xs tracking-widest text-blue-200 font-semibold mb-2 block">Get in Touch</span>
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-2 drop-shadow-lg">
          Connect With Us<br />
          <span className="text-gray-200 font-light">We're Here to Help</span>
        </h1>
        <p className="text-gray-100 text-lg font-medium mb-8 drop-shadow max-w-2xl">
          Whether you have questions about your stay, special requests, or would like to learn more about our resort, our dedicated team is ready to assist you.
        </p>
        <div className="flex flex-col items-start mt-4">
          <span className="uppercase text-xs tracking-widest text-gray-200 mb-1">Contact Us</span>
          <span className="w-1 h-8 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
} 