"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaUsers, FaPhone } from "react-icons/fa";

const STEPS = [
  {
    icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
    title: "Choose Date",
    desc: "Select your preferred dining date",
  },
  {
    icon: <FaClock className="text-blue-600 text-2xl" />,
    title: "Select Time",
    desc: "Pick your preferred dining time",
  },
  {
    icon: <FaUsers className="text-blue-600 text-2xl" />,
    title: "Party Size",
    desc: "Specify number of guests",
  },
  {
    icon: <FaPhone className="text-blue-600 text-2xl" />,
    title: "Confirmation",
    desc: "Receive booking confirmation",
  },
];

export default function Reservation() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-10 text-center">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Make a Reservation</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">Reserve Your Table</h2>
        <h3 className="text-2xl font-light text-blue-700 mb-4">Simple & Quick</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">Secure your dining experience at JK Ablagoon Resort with our easy online reservation system.</p>
      </div>
      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        {STEPS.map((step, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
          >
            <div className="mb-3">{step.icon}</div>
            <div className="absolute top-4 right-4 text-3xl font-bold text-gray-200 select-none pointer-events-none">{i + 1}</div>
            <div className="font-semibold text-gray-900 mb-1 mt-2">{step.title}</div>
            <div className="text-gray-600 text-sm">{step.desc}</div>
          </motion.div>
        ))}
      </div>
      {/* Call to action banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
        <Image src="/home/2.jpg" alt="Dining reservation" fill className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Ready to Experience<br />Culinary Excellence?</h3>
            <p className="text-gray-100 text-base mb-4 max-w-xl">Book your table now and enjoy an unforgettable dining experience. Special requests or larger groups? Our team is here to assist you.</p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Reserve Now</a>
              <a href="#" className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-100 transition">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-4">
        For special events or group bookings, please call us at <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
      </div>
    </section>
  );
} 