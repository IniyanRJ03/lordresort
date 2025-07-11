"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERIENCES = [
  {
    title: "Kayaking",
    desc: "Explore the lagoon at your own pace",
    image: "/home/1.jpg",
    category: "Water Activities",
  },
  {
    title: "Paddling Boats",
    desc: "Relaxing paddle adventure on calm lagoon waters.",
    image: "/home/2.jpg",
    category: "Water Activities",
  },
  {
    title: "Nature Trail",
    desc: "Guided wilderness walks",
    image: "/home/3.jpg",
    category: "Nature",
  },
  {
    title: "Boat Tours",
    desc: "Guided lagoon exploration",
    image: "/home/4.jpg",
    category: "Water Activities",
  },
  {
    title: "Bird Watching",
    desc: "Spot exotic species",
    image: "/home/2.jpg",
    category: "Nature",
  },
  {
    title: "Nature Trail",
    desc: "Guided wilderness walks",
    image: "/home/3.jpg",
    category: "Nature",
  },
];

const FILTERS = [
  { label: "All Experiences", value: "all" },
  { label: "Water Activities", value: "Water Activities" },
  { label: "Nature", value: "Nature" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? EXPERIENCES : EXPERIENCES.filter(e => e.category === filter);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-10 text-center">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Experience Gallery</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">Capture the Moment</h2>
        <h3 className="text-2xl font-light text-blue-700 mb-4">Share the Experience</h3>
      </div>
      {/* Filters */}
      <div className="flex justify-center gap-3 mb-10">
        {FILTERS.map(f => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all focus:outline-none ${filter === f.value ? "bg-blue-600 text-white border-blue-600 shadow" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`}
          >
            {f.label}
          </button>
        ))}
      </div>
      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {filtered.map((exp, i) => (
            <motion.div
              key={exp.title + i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
            >
              <div className="relative w-full h-48">
                <Image src={exp.image} alt={exp.title} fill className="object-cover w-full h-full" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-semibold text-lg text-gray-900 mb-1">{exp.title}</div>
                <div className="text-gray-600 text-sm mb-3">{exp.desc}</div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${exp.category === "Water Activities" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                  {exp.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
} 