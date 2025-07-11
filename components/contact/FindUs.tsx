"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function FindUs() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="mb-10 text-center">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Find Us</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">Visit Our Resort</h2>
        <h3 className="text-2xl font-light text-gray-700 mb-4">Location & Directions</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg w-full md:w-2/3 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.45925797286!2d81.70241537448835!3d7.7410125078198755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afad3bd621ced69%3A0xb972724fedc6ef24!2sLord%20of%20beach%20resort.%20Yoga%20meditation%20Centre!5e0!3m2!1sen!2slk!4v1752214520427!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JKAB Lagoon Resort Map"
          />
        </div>
        {/* Info Card */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <div className="font-semibold text-gray-900">Our Location</div>
                <div className="text-gray-700 text-sm">Lord of beach resort. Yoga meditation Centre<br />36 School Rd, Batticaloa 30000</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <div className="font-semibold text-gray-900">Phone Numbers</div>
                <div className="text-gray-700 text-sm">1234567890</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-blue-600 text-xl mt-1" />
              <div>
                <div className="font-semibold text-gray-900">Email Address</div>
                <div className="text-gray-700 text-sm">lordresort@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaClock className="text-blue-600 text-xl mt-1" />
              <div>
                <div className="font-semibold text-gray-900">Opening Hours</div>
                <div className="text-gray-700 text-sm">Reception: 24/7<br />Restaurant: 6:30 AM - 10:30 PM</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 mt-2">
            <div className="font-semibold text-gray-900 mb-1">Getting Here</div>
            <div className="text-gray-700 text-sm">We're located in Batticaloa. From the Kovil in Navalady, head north for about 500 meters. Look for our distinctive entrance on the right side, marked by our resort sign. Free parking is available for all guests.</div>
          </div>
        </div>
      </div>
    </section>
  );
} 