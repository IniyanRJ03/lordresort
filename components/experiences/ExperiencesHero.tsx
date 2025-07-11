"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ACTIVITIES = [
  {
    title: "Kayaking",
    image: "/home/1.jpg",
  },
  {
    title: "Cultural Tours",
    image: "/home/2.jpg",
  },
  {
    title: "Boat Tours",
    image: "/home/3.jpg",
  },
];

export default function ExperiencesHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/home/1.jpg"
        alt="Experience background"
        fill
        className="object-cover object-center w-full h-full z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-24">
        <span className="uppercase text-xs tracking-widest text-blue-200 font-semibold mb-2 block">Water Adventures</span>
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-2 drop-shadow-lg">
          Experience the<br />
          <span className="text-green-200 font-light">Lagoon</span>
        </h1>
        <p className="text-gray-100 text-lg font-medium mb-8 drop-shadow max-w-2xl">
          Dive into a world of exciting water activities and sports in our pristine lagoon. From peaceful kayaking to thrilling jet skiing, create unforgettable memories.
        </p>
        {/* Activities row */}
        <div className="flex gap-4">
          {ACTIVITIES.map((activity, i) => (
            <motion.div
              key={activity.title}
              className="rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm w-48 min-w-[180px] cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
            >
              <div className="relative w-full h-28">
                <Image src={activity.image} alt={activity.title} fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-3 text-white text-sm font-medium bg-black/40 text-center">{activity.title}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-6">
          <span className="uppercase text-xs tracking-widest text-gray-200 mb-1">Explore Activities</span>
          <span className="w-1 h-8 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
} 