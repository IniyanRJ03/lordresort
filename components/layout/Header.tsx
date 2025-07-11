"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Accommodations", href: "/accommodations" },
  { name: "Dining", href: "/dining" },
  { name: "Experiences", href: "/experiences" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-white/0 backdrop-blur-md shadow-none"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and tagline */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="LORD Resort Logo" width={80} height={54} />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-2xl tracking-wide text-gray-900">LORD Resort</span>
            <span className="text-sm text-gray-700">The Place For Relax Stay</span>
          </div>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex gap-10 items-center text-base">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-900 hover:text-[#0072bc] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Book Now Button */}
        <a
          href="#"
          className={`ml-4 px-8 py-3 rounded-full font-semibold shadow transition-colors duration-500 text-base border ${
            scrolled
              ? "bg-[#0072bc] text-white border-[#0072bc]"
              : "bg-white text-gray-900 border-white hover:bg-gray-100"
          }`}
        >
          Book Now
        </a>
      </div>
    </header>
  );
} 