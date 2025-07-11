"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full flex justify-center items-center py-12 sm:py-20 bg-white"
    >
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-6 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
      {/* Left: Images */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/home/1.jpg"
            alt="Room view"
            width={600}
            height={400}
            className="object-cover w-full h-[180px] xs:h-[220px] sm:h-[320px]"
            priority
          />
        </div>
        <div className="flex gap-2 sm:gap-4">
          <div className="flex-1 rounded-2xl overflow-hidden shadow">
            <Image
              src="/home/2.jpg"
              alt="Lagoon view"
              width={280}
              height={160}
              className="object-cover w-full h-[70px] xs:h-[90px] sm:h-[120px]"
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow">
            <Image
              src="/home/3.jpg"
              alt="Resort night view"
              width={280}
              height={160}
              className="object-cover w-full h-[70px] xs:h-[90px] sm:h-[120px]"
            />
          </div>
        </div>
      </div>
      {/* Right: Text */}
      <div>
        <span className="uppercase text-xs tracking-widest text-gray-500 font-semibold mb-2 block">About</span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Serenity by design.<br />Connection by nature.
        </h2>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">A Peaceful Sanctuary by the Lagoon</h3>
        <p className="text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg">
          LORD Resort is designed as a peaceful sanctuary where guests can reconnect with nature while enjoying premium amenities and exceptional service.<br /><br />
          Our idyllic setting alongside a pristine lagoon offers breathtaking water views and a tranquil environment perfect for unwinding.
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4 sm:mb-6 space-y-1 text-sm sm:text-base">
          <li>Direct Lagoon Access</li>
          <li>Luxury Accommodations</li>
          <li>Wellness Facilities</li>
          <li>Gourmet Dining</li>
          <li>Lagoon Activities</li>
        </ul>
        <a
          href="#"
          className="inline-block bg-gray-900 text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium shadow hover:bg-gray-800 transition text-base sm:text-lg"
        >
          Learn More
        </a>
      </div>
      </div>
    </motion.section>
  );
} 