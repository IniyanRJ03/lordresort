import Image from "next/image";

const stats = [
  { label: "Distance to Airport", value: "4 Hours(252 Km)" },
  { label: "Lagoon Access", value: "Direct" },
  { label: "Resort Area", value: "2 acres" },
  { label: "Lagoon View Rooms", value: "100%" },
];

const features = [
  {
    title: "Prime Location",
    desc: "Situated on a pristine lagoon with direct access to crystal-clear waters.",
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
    ),
    image: "/home/1.jpg",
  },
  {
    title: "Easy Access",
    desc: "Just 4 hours from the international airport with luxury transfer service.",
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8V6a5 5 0 00-10 0v2M5 8h14l1 12H4L5 8zm2 4h10" /></svg>
    ),
    image: "/home/2.jpg",
  },
  {
    title: "Perfect Climate",
    desc: "Year-round tropical weather with average temperatures of 27°C (80°F).",
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.05 6.05L4.64 4.64m12.02 0l-1.41 1.41M6.05 17.95l-1.41 1.41" /></svg>
    ),
    image: "/home/3.jpg",
  },
  {
    title: "Natural Beauty",
    desc: "Surrounded by lush landscapes and protected ecosystems.",
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-10V7a8 8 0 10-16 0v5c0 5.5 8 10 8 10z" /></svg>
    ),
    image: "/home/3.jpg",
  },
];

export default function Location() {
  return (
    <section className="bg-gray-50 py-10 xs:py-14 sm:py-20 flex justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-3 xs:px-4 sm:px-6 py-6 xs:py-8 sm:py-12">
        <div className="max-w-3xl mx-auto text-center mb-8 xs:mb-12">
          <div className="flex items-center justify-center gap-3 xs:gap-4 mb-2">
            <span className="h-0.5 w-6 xs:w-8 bg-blue-600 rounded" />
            <span className="uppercase text-xs font-semibold tracking-widest text-blue-700">Our Location</span>
            <span className="h-0.5 w-6 xs:w-8 bg-blue-600 rounded" />
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">A Paradise Setting</h2>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-light text-gray-700 mb-4 sm:mb-6">In Perfect Harmony</h3>
          <p className="text-gray-600 max-w-xs xs:max-w-md sm:max-w-2xl mx-auto mb-2 text-base sm:text-lg">
            Discover our uniquely positioned resort, where natural beauty meets accessibility, creating the perfect escape for our guests.
          </p>
          <div className="text-blue-900 font-medium mb-2 text-sm sm:text-base">LORD RESORT 848A,VALAIYOOTTU, 31000 Walauttu</div>
        </div>
        {/* Main image and stats */}
        <div className="max-w-7xl mx-auto mb-16 xs:mb-12 relative flex flex-col items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-[160px] xs:h-[220px] sm:h-[320px] relative">
            <Image src="/home/2.jpg" alt="Resort location" fill className="object-cover w-full h-full" />
          </div>
          <div className="grid grid-cols-2 gap-3 xs:gap-4 w-full max-w-md mx-auto -mt-6 xs:-mt-8 z-10 md:flex md:flex-row md:justify-center md:items-center md:gap-4 md:w-full md:max-w-none">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-xl shadow px-4 xs:px-6 py-4 flex flex-col items-center min-w-0 text-center border border-gray-100 md:min-w-[150px] md:py-4 md:px-6">
                <div className="text-xs text-gray-500 mb-1">{s.label}</div>
                <div className="text-base xs:text-lg font-semibold text-blue-900">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Features grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 xs:gap-8 mb-10 xs:mb-12">
          {features.map((f) => (
            <div key={f.title} className="relative bg-white rounded-2xl shadow p-5 xs:p-8 flex flex-col items-start min-h-[120px] xs:min-h-[180px] overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="absolute inset-0 w-full h-full z-0 opacity-20">
                <Image src={f.image} alt={f.title} fill className="object-cover w-full h-full" />
              </div>
              <div className="z-10 mb-2 xs:mb-3">{f.icon}</div>
              <div className="font-semibold text-base xs:text-lg text-gray-900 mb-1 xs:mb-2 z-10">{f.title}</div>
              <div className="text-gray-600 text-xs xs:text-sm z-10">{f.desc}</div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto text-center text-gray-500 italic text-sm xs:text-base">
          "Our location offers the perfect balance of seclusion and accessibility, allowing you to escape the ordinary while staying connected to the world."
        </div>
      </div>
    </section>
  );
} 