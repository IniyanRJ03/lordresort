"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ROOMS = [
  {
    name: "Double Room with Lake View",
    size: "14 m²",
    image: "/home/1.jpg",
    description:
      "Spacious double room with air conditioning, tea and coffee maker, private bathroom with shower and bidet. Offers a large double bed and panoramic river views.",
    amenities: [
      "1 large double bed",
      "River view",
      "Private bathroom",
      "Room size: 14 m²",
      "Air conditioning",
      "Free toiletries",
    ],
  },
  {
    name: "Deluxe Double Room",
    size: "16 m²",
    image: "/home/2.jpg",
    description:
      "Deluxe double room with modern amenities, air conditioning, and a comfortable double bed. Enjoy a relaxing stay with a garden view.",
    amenities: [
      "1 large double bed",
      "Garden view",
      "Private bathroom",
      "Room size: 16 m²",
      "Air conditioning",
      "Free toiletries",
    ],
  },
  {
    name: "Triple Room with Garden View",
    size: "16 m²",
    image: "/home/3.jpg",
    description:
      "Triple room with a garden view, air conditioning, and a private bathroom. Perfect for families or groups.",
    amenities: [
      "3 single beds or 1 double + 1 single",
      "Garden view",
      "Private bathroom",
      "Room size: 16 m²",
      "Air conditioning",
      "Free toiletries",
    ],
  },
  {
    name: "Quadruple Room",
    size: "21 m²",
    image: "/home/1.jpg",
    description:
      "Spacious quadruple room with air conditioning, private bathroom, and ample space for families or groups.",
    amenities: [
      "2 double beds",
      "Garden or river view",
      "Private bathroom",
      "Room size: 21 m²",
      "Air conditioning",
      "Free toiletries",
    ],
  },
];

export default function Accommodations() {
  const [active, setActive] = useState(0);
  const room = ROOMS[active];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white max-w-6xl mx-auto px-3 sm:px-4 py-10 sm:py-20"
    >
      <span className="uppercase text-xs tracking-widest text-gray-500 font-semibold mb-2 block">Accommodations</span>
      <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">A place to unwind.<br />A space to reconnect.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
        {/* Left: Room Image */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-xs xs:max-w-sm sm:max-w-md">
            <Image
              src={room.image}
              alt={room.name}
              width={500}
              height={400}
              className="object-cover w-full h-[180px] xs:h-[220px] sm:h-[340px]"
              priority
            />
          </div>
        </div>
        {/* Right: Room Details */}
        <div>
          {/* Room Tabs */}
          <div className="flex flex-col gap-1 sm:gap-2 mb-4 sm:mb-6">
            {ROOMS.map((r, i) => (
              <button
                key={r.name}
                onClick={() => setActive(i)}
                className={`text-left px-0 py-1 font-medium text-base sm:text-lg border-0 bg-transparent transition-colors ${active === i ? "text-gray-900" : "text-gray-400 hover:text-gray-700"}`}
                style={{ textDecoration: active === i ? "underline" : "none" }}
              >
                {r.name}
              </button>
            ))}
          </div>
          <p className="text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg">{room.description}</p>
          <div className="mb-4 sm:mb-6">
            <span className="uppercase text-xs text-gray-500 font-semibold mb-1 block">Amenities</span>
            <ul className="grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-1 text-sm sm:text-base text-gray-700">
              {room.amenities.map((a, i) => (
                <li key={i}>• {a}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href="#"
              className="bg-gray-900 text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium shadow hover:bg-gray-800 transition text-center text-base sm:text-lg"
            >
              Book {room.name}
            </a>
            <a
              href="#"
              className="border border-gray-300 text-gray-900 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium shadow hover:bg-gray-100 transition text-center text-base sm:text-lg"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-12 text-center">
        <a href="#" className="text-gray-900 font-medium hover:underline inline-flex items-center gap-1 text-base sm:text-lg">
          View all accommodation options
          <span className="inline-block">→</span>
        </a>
      </div>
    </motion.section>
  );
} 