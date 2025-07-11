"use client";
import { useState } from "react";

export default function SendMessage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <section className="max-w-2xl mx-auto px-3 xs:px-4 sm:px-6 py-10 xs:py-14 sm:py-20">
      <div className="mb-8 xs:mb-10 text-center">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Send a Message</span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">Let's Start a</h2>
        <h3 className="text-lg xs:text-xl sm:text-2xl font-light text-gray-700 mb-3 xs:mb-4">Conversation</h3>
        <p className="text-gray-600 max-w-xs xs:max-w-md sm:max-w-xl mx-auto mb-6 xs:mb-8 text-base sm:text-lg">Have a question or special request? Fill out the form below and our team will get back to you within 24 hours.</p>
      </div>
      <form className="space-y-5 xs:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
          <div>
            <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input type="text" placeholder="John Doe" className="w-full rounded-lg border border-gray-300 px-3 xs:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs xs:text-sm" required />
          </div>
          <div>
            <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input type="email" placeholder="john@example.com" className="w-full rounded-lg border border-gray-300 px-3 xs:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs xs:text-sm" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
          <div>
            <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" placeholder="+1 (555) 000-0000" className="w-full rounded-lg border border-gray-300 px-3 xs:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs xs:text-sm" />
          </div>
          <div>
            <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input type="text" placeholder="Booking Inquiry" className="w-full rounded-lg border border-gray-300 px-3 xs:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs xs:text-sm" />
          </div>
        </div>
        <div>
          <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">Your Message *</label>
          <textarea placeholder="Please write your message here..." rows={5} className="w-full rounded-lg border border-gray-300 px-3 xs:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs xs:text-sm" required />
        </div>
        <div className="text-center pt-2">
          <button type="submit" className="bg-blue-600 text-white px-6 xs:px-8 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition text-xs xs:text-sm">Send Message</button>
        </div>
      </form>
    </section>
  );
} 