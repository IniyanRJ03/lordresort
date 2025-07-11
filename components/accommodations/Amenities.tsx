"use client";
import Image from "next/image";
import { FaWifi, FaCoffee, FaTv, FaBath, FaPhone, FaGlassMartiniAlt, FaShower, FaConciergeBell } from "react-icons/fa";
import { motion } from "framer-motion";

const AMENITIES = [
  {
    icon: <FaWifi className="text-blue-500 text-2xl" />, title: "High-Speed WiFi", desc: "Complimentary high-speed internet access throughout your stay"
  },
  {
    icon: <FaCoffee className="text-blue-500 text-2xl" />, title: "Coffee Station", desc: "Premium coffee and tea making facilities in every room"
  },
  {
    icon: <FaTv className="text-blue-500 text-2xl" />, title: "Smart TV", desc: "Large smart TV with international channels and streaming"
  },
  {
    icon: <FaBath className="text-blue-500 text-2xl" />, title: "Luxury Bathroom", desc: "Premium toiletries and plush towels in marble bathrooms"
  },
  {
    icon: <FaPhone className="text-blue-500 text-2xl" />, title: "Intercom Facilities", desc: "Intercom facilities for your convenience"
  },
  {
    icon: <FaGlassMartiniAlt className="text-blue-500 text-2xl" />, title: "Mini Bar", desc: "Well-stocked minibar with premium selections"
  },
  {
    icon: <FaShower className="text-blue-500 text-2xl" />, title: "Luxurious Hot Water Shower", desc: "Luxurious hot water shower for your comfort"
  },
  {
    icon: <FaConciergeBell className="text-blue-500 text-2xl" />, title: "24/7 Service", desc: "Round-the-clock room service and concierge support"
  },
];

const IMAGES = [
  "/home/1.jpg",
  "/home/2.jpg",
  "/home/3.jpg",
  "/home/4.jpg",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15 + 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Amenities() {
  return (
    <section className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 py-10 xs:py-14 sm:py-20">
      <div className="mb-8 xs:mb-10">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Room Amenities</span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">Every Detail</h2>
        <h3 className="text-lg xs:text-xl sm:text-2xl font-light text-blue-700 mb-3 xs:mb-4">Crafted for Comfort</h3>
        <p className="text-gray-700 max-w-xs xs:max-w-md sm:max-w-2xl mb-6 xs:mb-8 text-base sm:text-lg">Each of our accommodations comes fully equipped with premium amenities, ensuring a comfortable and luxurious stay.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-10 items-start">
        {/* Amenities grid */}
        <div className="md:col-span-2 grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-6 mb-6 md:mb-0">
          {AMENITIES.map((a, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 xs:gap-4 bg-white rounded-xl shadow p-4 xs:p-5 group"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div>{a.icon}</div>
              <div>
                <div className="font-semibold text-gray-900 mb-1 text-base xs:text-lg">{a.title}</div>
                <div className="text-gray-600 text-xs xs:text-sm">{a.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Images grid */}
        <div className="grid grid-cols-2 gap-3 xs:gap-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg aspect-square relative group"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={imageVariants}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <Image src={img} alt={`Room amenity ${i+1}`} fill className="object-cover w-full h-full transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 