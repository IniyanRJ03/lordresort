"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const VENUES = [
  {
    title: "Main Restaurant",
    image: "/home/1.jpg",
  },
  {
    title: "Lagoon Bar",
    image: "/home/2.jpg",
  },
  {
    title: "Lagoonside Grill",
    image: "/home/3.jpg",
  },
  {
    title: "Private Dining",
    image: "/home/4.jpg",
  },
];

export default function DiningHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/home/1.jpg"
        alt="Dining background"
        fill
        className="object-cover object-center w-full h-full z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-24">
        <span className="uppercase text-xs tracking-widest text-blue-200 font-semibold mb-2 block">Culinary Excellence</span>
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-2 drop-shadow-lg">
          A Journey of<br />
          <span className="text-green-200 font-light">Flavors & Delights</span>
        </h1>
        <p className="text-gray-100 text-lg font-medium mb-8 drop-shadow max-w-2xl">
          Discover exceptional dining experiences where local ingredients meet international culinary expertise in stunning settings.
        </p>
        {/* Venues row */}
        <div className="flex gap-4">
          {VENUES.map((venue, i) => (
            <motion.div
              key={venue.title}
              className="rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm w-48 min-w-[180px] cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
            >
              <div className="relative w-full h-36">
                <Image src={venue.image} alt={venue.title} fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 text-white text-base font-medium bg-black/40 text-center min-h-[56px] flex items-center justify-center">{venue.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 