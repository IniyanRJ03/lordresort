"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Panoramic Views",
    desc: "Floor-to-ceiling windows offering breathtaking lagoon and garden views from every room.",
    image: "/home/2.jpg",
  },
  {
    title: "Private Balconies",
    desc: "Spacious private balconies or terraces perfect for outdoor relaxation and dining.",
    image: "/home/4.jpg",
  },
  {
    title: "Premium Bedding",
    desc: "Luxurious king-sized beds with premium linens and pillow menu for perfect comfort.",
    image: "/home/1.jpg",
  },
];

const THOUGHTFUL_LIST = [
  "Custom-designed furniture",
  "Premium entertainment systems",
  "Luxury bathroom fixtures",
  "Ambient lighting control",
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 py-10 xs:py-14 sm:py-20">
      <div className="mb-8 xs:mb-10 text-center">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Special Features</span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">Exceptional Details</h2>
        <h3 className="text-lg xs:text-xl sm:text-2xl font-light text-blue-700 mb-3 xs:mb-4">Beyond the Ordinary</h3>
      </div>
      {/* Top features row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8 mb-10 xs:mb-16">
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-stretch"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
          >
            <div className="relative w-full h-32 xs:h-40 sm:h-48">
              <Image src={f.image} alt={f.title} fill className="object-cover w-full h-full" />
            </div>
            <div className="p-4 xs:p-5 flex-1 flex flex-col">
              <div className="font-semibold text-base xs:text-lg text-gray-900 mb-1">{f.title}</div>
              <div className="text-gray-600 text-xs xs:text-sm">{f.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Thoughtfully Designed section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-10 items-center">
        <div>
          <div className="font-semibold text-lg xs:text-xl text-gray-900 mb-1">Thoughtfully Designed</div>
          <div className="text-blue-700 font-light text-base xs:text-lg mb-1 xs:mb-2">For Your Comfort</div>
          <div className="text-gray-700 mb-3 xs:mb-4 text-sm xs:text-base">Every room is meticulously designed to provide the perfect balance of luxury, comfort, and functionality. From the carefully selected furnishings to the state-of-the-art amenities, we've considered every detail to enhance your stay.</div>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 text-xs xs:text-sm">
            {THOUGHTFUL_LIST.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <motion.div
          className="rounded-xl overflow-hidden shadow-lg w-full aspect-[16/9] relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Image src="/home/3.jpg" alt="Pigeon Island and resort aerial view" fill className="object-cover w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
} 