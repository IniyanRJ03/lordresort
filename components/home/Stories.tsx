"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Sarah Johnson",
    country: "United Kingdom",
    date: "April 2025",
    rating: 5.0,
    text: "Our stay at LORD Resort exceeded all expectations. The serene lagoon setting created the perfect backdrop for relaxation. The infinity pool merging with the lagoon view was breathtaking! Staff were attentive to every detail, and the food at the restaurant was exceptional. Will definitely be returning!",
  },
  {
    name: "Raj Patel",
    country: "India",
    date: "March 2025",
    rating: 5.0,
    text: "A truly unforgettable experience at this hidden gem in Trincomalee. Our lagoon view room was spacious and beautifully designed. The guided lagoon tour was informative and gave us a deeper appreciation of the natural ecosystem. The traditional Sri Lankan dishes at the restaurant were authentic and delicious.",
  },
  {
    name: "Emily & David Chen",
    country: "Singapore",
    date: "February 2025",
    rating: 5.0,
    text: "We celebrated our anniversary at LORD and couldn't have chosen a better place. The staff arranged a special private dinner by the lagoon that was magical. The spa treatments were rejuvenating, and the infinity pool was perfect for unwinding. A perfect balance of luxury and natural beauty.",
  },
  {
    name: "Carlos Mendez",
    country: "Spain",
    date: "January 2025",
    rating: 4.9,
    text: "LORD Resort is a true paradise. The staff were friendly, the food was delicious, and the views were stunning. Highly recommended for a relaxing getaway!",
  },
  {
    name: "Aisha Al-Farsi",
    country: "Oman",
    date: "December 2024",
    rating: 5.0,
    text: "We loved every moment at LORD Resort. The wellness facilities were top-notch and the lagoon activities were so much fun for the kids!",
  },
  {
    name: "Tom & Lisa Nguyen",
    country: "Australia",
    date: "November 2024",
    rating: 5.0,
    text: "From the moment we arrived, we felt welcomed and pampered. The rooms were spotless and the private dinner by the lagoon was unforgettable.",
  },
];

export default function Stories() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Animate on review change
  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 300);
    return () => clearTimeout(timeout);
  }, [current]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white max-w-6xl mx-auto px-4 py-20">
      <span className="uppercase text-xs tracking-widest text-gray-500 font-semibold mb-2 block">Stories</span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">Guest experiences.<br />In their own words.</h2>
      <p className="text-gray-700 mb-12 max-w-2xl">See what our guests have to say about their stay at LORD Resort. We take pride in creating memorable experiences for everyone who visits.</p>
      {/* Progress bar */}
      <div className="flex justify-center gap-3 mb-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to review ${i + 1}`}
            className={`h-2 w-12 rounded transition-all duration-300 focus:outline-none ${i === current ? "bg-gray-900" : "bg-gray-200"}`}
            type="button"
          />
        ))}
      </div>
      {/* Review slider with fade animation */}
      <div className="flex justify-center">
        <div className={`bg-gray-50 rounded-2xl shadow p-6 flex flex-col h-full max-w-xl w-full transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
          <div className="mb-4">
            <svg className="w-8 h-8 text-[#0072bc] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h.01M15 7h.01M7 11c0 2.21 1.79 4 4 4s4-1.79 4-4V5a2 2 0 00-2-2H9a2 2 0 00-2 2v6z" /></svg>
            <p className="text-gray-800 text-base mb-2">{reviews[current].text}</p>
          </div>
          <div className="mt-auto flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900">{reviews[current].name}</span>
              <span className="text-xs text-gray-500">{reviews[current].country}</span>
              <span className="text-xs text-gray-400">{reviews[current].date}</span>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <span className="text-yellow-400 font-bold">{reviews[current].rating}</span>
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 