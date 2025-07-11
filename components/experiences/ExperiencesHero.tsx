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
    <section className="relative w-full h-[60vh] min-h-[320px] xs:h-[80vh] xs:min-h-[400px] sm:h-[90vh] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-20 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 flex flex-col justify-center h-full pt-16 xs:pt-20 sm:pt-24">
        <span className="uppercase text-sm tracking-widest text-blue-200 font-semibold mb-3 block">Water Adventures</span>
        <h1 className="text-white text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-3 drop-shadow-lg">
          Experience the<br />
          <span className="text-green-200 font-light">Lagoon</span>
        </h1>
        <p className="text-gray-100 text-lg xs:text-xl font-medium mb-7 xs:mb-9 drop-shadow max-w-xs xs:max-w-md sm:max-w-2xl">
          Dive into a world of exciting water activities and sports in our pristine lagoon. From peaceful kayaking to thrilling jet skiing, create unforgettable memories.
        </p>
        {/* Activities row */}
        <div className="flex gap-5 xs:gap-7 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
          {ACTIVITIES.map((activity, i) => (
            <div
              key={activity.title}
              className="rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm w-56 min-w-[220px] xs:w-72 xs:min-w-[260px] cursor-pointer group flex-shrink-0"
            >
              <div className="relative w-full h-32 xs:h-44">
                <Image src={activity.image} alt={activity.title} fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 xs:p-5 text-white text-base xs:text-lg font-medium bg-black/40 text-center flex-1 flex items-center justify-center min-h-[56px] xs:min-h-[64px]">{activity.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 