"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TABS = [
  {
    label: "Wellness",
    content: {
      title: "Wellness & Relaxation",
      desc: "Immerse yourself in tranquility with our premium wellness facilities designed to rejuvenate your body and mind.",
      features: [
        {
          title: "Outdoor Swimming Pool",
          desc: "Our year-round outdoor Swimming Pool visually merges with the lagoon, creating a seamless aquatic experience.",
        },
        {
          title: "Pool Table",
          desc: "Enjoy a game of pool in our pool table area.",
        },
      ],
      image: "/home/1.jpg",
    },
  },
  {
    label: "Dining",
    content: {
      title: "Gourmet Dining",
      desc: "Savor a variety of culinary delights at our restaurant, offering both local and international cuisine in a serene lagoon-side setting.",
      features: [
        {
          title: "Lagoon View Restaurant",
          desc: "Enjoy delicious meals with breathtaking views of the lagoon.",
        },
        {
          title: "Authentic Sri Lankan Dishes",
          desc: "Experience the flavors of Sri Lanka with our chef's specialties.",
        },
      ],
      image: "/home/2.jpg",
    },
  },
  {
    label: "Activities",
    content: {
      title: "Activities & Experiences",
      desc: "Discover a range of activities designed for relaxation and adventure, from lagoon tours to wellness sessions.",
      features: [
        {
          title: "Lagoon Tours",
          desc: "Guided tours to explore the natural beauty and ecosystem of the lagoon.",
        },
        {
          title: "Yoga & Meditation",
          desc: "Rejuvenate your mind and body with our wellness sessions.",
        },
      ],
      image: "/home/3.jpg",
    },
  },
  {
    label: "Services",
    content: {
      title: "Premium Services",
      desc: "Enjoy thoughtful amenities and attentive service throughout your stay, ensuring a seamless and memorable experience.",
      features: [
        {
          title: "24-Hour Reception",
          desc: "Our team is available around the clock to assist you.",
        },
        {
          title: "Room Service",
          desc: "Dine in the comfort of your room with our prompt service.",
        },
      ],
      image: "/home/1.jpg",
    },
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white max-w-6xl mx-auto px-3 sm:px-4 py-10 sm:py-20"
    >
      <span className="uppercase text-xs tracking-widest text-gray-500 font-semibold mb-2 block">Amenities & Services</span>
      <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">Every detail.<br />Thoughtfully considered.</h2>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-10">
        {TABS.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium border transition-all ${active === i ? "bg-gray-100 text-gray-900 border-gray-300 shadow" : "bg-white text-gray-500 border-transparent hover:bg-gray-50"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">{tab.content.title}</h3>
          <p className="text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg">{tab.content.desc}</p>
          {tab.content.features.map((f) => (
            <div key={f.title} className="mb-2 sm:mb-4">
              <div className="font-medium text-gray-900 text-base sm:text-lg">{f.title}</div>
              <div className="text-gray-600 text-sm sm:text-base">{f.desc}</div>
            </div>
          ))}
          <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-medium mt-2 hover:underline group text-base sm:text-lg">
            Learn more
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        {/* Right: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-xs xs:max-w-sm sm:max-w-md mx-auto md:mx-0">
          <Image
            src={tab.content.image}
            alt={tab.content.title}
            width={500}
            height={340}
            className="object-cover w-full h-[180px] xs:h-[220px] sm:h-[320px]"
          />
        </div>
      </div>
    </motion.section>
  );
} 