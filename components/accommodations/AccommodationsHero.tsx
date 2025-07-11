"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const VENUES = [
  { title: "Double Room with Lake View", image: "/home/1.jpg" },
  { title: "Deluxe Double Room", image: "/home/2.jpg" },
  { title: "Triple Room with Garden View", image: "/home/3.jpg" },
  { title: "Quadruple Room", image: "/home/4.jpg" },
];

export default function AccommodationsHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[320px] xs:h-[80vh] xs:min-h-[400px] sm:h-[90vh] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/home/1.jpg"
        alt="Accommodations background"
        fill
        className="object-cover object-center w-full h-full z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 flex flex-col justify-center h-full pt-16 xs:pt-20 sm:pt-24">
        <span className="uppercase text-sm tracking-widest text-gray-200 font-semibold mb-3 block">Our Accommodations</span>
        <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3 drop-shadow-lg">
          Discover Your<br />
          <span className="text-gray-200 font-light">Private Paradise</span>
        </h1>
        <p className="text-gray-100 text-lg xs:text-xl font-medium mb-7 xs:mb-9 drop-shadow max-w-xs xs:max-w-md sm:max-w-2xl">
          Explore our selection of rooms and villas, each designed for comfort and luxury by the lagoon.
        </p>
        {/* Venues row (room types) */}
        <div className="flex gap-5 xs:gap-7 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
          {VENUES.map((venue, i) => (
            <div
              key={venue.title}
              className="rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm w-56 min-w-[220px] xs:w-72 xs:min-w-[260px] flex flex-col cursor-pointer group flex-shrink-0"
            >
              <div className="relative w-full h-32 xs:h-44">
                <Image 
                  src={venue.image} 
                  alt={venue.title} 
                  fill 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="p-4 xs:p-5 text-white text-base xs:text-lg font-medium bg-black/40 text-center flex-1 flex items-center justify-center min-h-[56px] xs:min-h-[64px]">{venue.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 