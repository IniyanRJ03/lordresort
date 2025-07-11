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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-colors duration-500"
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
        {/* Desktop Navigation */}
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
        {/* Book Now Button (Desktop) */}
        <a
          href="https://www.booking.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-8 py-3 rounded-full font-semibold shadow transition-colors duration-500 text-base border hidden md:inline-block bg-[#0072bc] text-white border-[#0072bc] hover:bg-[#005fa3]"
        >
          Book Now
        </a>
        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden ml-auto z-50 p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            // Close icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-gray-900">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-gray-900">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed left-0 w-full h-[calc(100vh-80px)] bg-white top-[80px] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-semibold text-gray-900 hover:text-[#0072bc] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.booking.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-8 py-3 rounded-full font-semibold shadow transition-colors duration-500 text-lg border bg-[#0072bc] text-white border-[#0072bc] hover:bg-[#005fa3]"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
} 