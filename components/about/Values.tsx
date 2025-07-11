const values = [
  {
    title: "Exceptional Service",
    desc: "Personalized attention and memorable experiences.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
    ),
    image: "/home/1.jpg",
  },
  {
    title: "Environmental Stewardship",
    desc: "Eco-friendly practices to protect the lagoon.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-7h2v2h-2zm0-4h2v2h-2z" /></svg>
    ),
    image: "/home/2.jpg",
  },
  {
    title: "Cultural Connection",
    desc: "Celebrating local traditions and diversity.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a10 10 0 000 20M12 2a10 10 0 010 20" /></svg>
    ),
    image: "/home/3.jpg",
  },
  {
    title: "Quality Excellence",
    desc: "Highest standards of luxury and comfort.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="4" /><path d="M9 9h6v6H9z" /></svg>
    ),
    image: "/home/1.jpg",
  },
];

import Image from "next/image";

export default function Values() {
  return (
    <section className="bg-gray-50 py-10 xs:py-14 sm:py-20 flex justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-3 xs:px-4 sm:px-6 py-6 xs:py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center mb-8 xs:mb-12">
          <div className="flex items-center justify-center gap-3 xs:gap-4 mb-2">
            <span className="h-0.5 w-6 xs:w-8 bg-blue-600 rounded" />
            <span className="uppercase text-xs font-semibold tracking-widest text-blue-700">Our Values</span>
            <span className="h-0.5 w-6 xs:w-8 bg-blue-600 rounded" />
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">The Principles That</h2>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-light text-gray-700 mb-4 sm:mb-6">Guide Our Journey</h3>
          <p className="text-gray-600 max-w-xs xs:max-w-md sm:max-w-2xl mx-auto text-base sm:text-lg">
            At LORD Resort, our values form the foundation of everything we do, from how we serve our guests to how we protect our environment.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 xs:gap-8 mb-8 xs:mb-12">
          {values.map((v) => (
            <div
              key={v.title}
              className="group bg-white rounded-2xl shadow p-5 xs:p-8 flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
            >
              {/* Hover image */}
              <div className="absolute inset-0 w-full h-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image src={v.image} alt={v.title} fill className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-white/80" />
              </div>
              <div className="mb-3 xs:mb-4 z-10 relative">{v.icon}</div>
              <div className="font-semibold text-base xs:text-lg text-gray-900 mb-1 xs:mb-2 z-10 relative">{v.title}</div>
              <div className="text-gray-600 text-xs xs:text-sm z-10 relative">{v.desc}</div>
              {/* Decorative background shape */}
              <div className="absolute bottom-0 right-0 w-16 xs:w-24 h-16 xs:h-24 bg-blue-50 rounded-full opacity-40 -z-10" />
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto text-center text-gray-500 italic text-sm xs:text-base">
          "These values have guided us since our founding and continue to shape our future as we strive to create an exceptional resort experience that respects both our guests and our environment."
        </div>
      </div>
    </section>
  );
} 