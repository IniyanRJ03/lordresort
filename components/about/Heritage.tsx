import Image from "next/image";

const timeline = [
  {
    year: "2018",
    desc: "Initial construction began with a vision to create a peaceful, nature-inspired resort.",
  },
  {
    year: "2020",
    desc: "Development was delayed due to the COVID-19 pandemic and economic challenges.",
  },
  {
    year: "2022",
    desc: "Construction resumed with renewed focus and momentum.",
  },
  {
    year: "2025",
    desc: "LORD Resort proudly opened its doors in May 2025, offering guests a serene escape with world-class amenities.",
  },
];

export default function Heritage() {
  return (
    <section className="w-full flex justify-center items-center py-10 xs:py-14 sm:py-20">
      <div className="max-w-7xl w-full mx-auto px-3 xs:px-4 sm:px-6 py-6 xs:py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
      {/* Left: Text and Timeline */}
      <div>
        <div className="flex items-center gap-3 sm:gap-4 mb-2">
          <span className="h-0.5 w-6 xs:w-8 bg-blue-600 rounded" />
          <span className="uppercase text-xs font-semibold tracking-widest text-blue-700">Our Heritage</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">A Legacy of Luxury</h2>
        <h3 className="text-lg xs:text-xl sm:text-2xl font-light text-gray-700 mb-4 sm:mb-6">Since 2018</h3>
        <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">
          Founded in 2018, LORD Resort emerged from a vision to create a sanctuary that harmoniously blends with its natural surroundings while offering unparalleled luxury experiences.<br /><br />
          Our journey began with the careful selection of this pristine lagoon location, followed by years of thoughtful development that prioritized both environmental preservation and guest comfort.
        </p>
        <div className="space-y-4 xs:space-y-6">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex items-start gap-3 xs:gap-4">
              <div className="flex flex-col items-center">
                <span className="text-blue-700 text-base xs:text-lg font-bold mb-1">{item.year}</span>
                <span className="h-0.5 w-6 xs:w-8 bg-blue-600 rounded mb-1" />
              </div>
              <p className="text-gray-700 text-xs xs:text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Images */}
      <div className="relative flex justify-center items-center mt-8 md:mt-0">
        <div className="rounded-2xl overflow-hidden shadow-lg w-[320px] xs:w-[380px] sm:w-[440px] h-[200px] xs:h-[260px] sm:h-[320px] relative transition-all duration-300">
          <Image src="/home/1.jpg" alt="Main heritage" fill className="object-cover w-full h-full" />
        </div>
        {/* Top right small image - hidden on mobile */}
        <div className="hidden md:block absolute top-[-18px] xs:top-[-24px] sm:top-[-32px] right-[-18px] xs:right-[-24px] sm:right-[-32px] w-[70px] xs:w-[100px] sm:w-[140px] h-[50px] xs:h-[70px] sm:h-[100px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
          <Image src="/home/2.jpg" alt="Heritage detail 1" fill className="object-cover w-full h-full" />
        </div>
        {/* Bottom left small image - hidden on mobile */}
        <div className="hidden md:block absolute bottom-[-18px] xs:bottom-[-24px] sm:bottom-[-32px] left-[-18px] xs:left-[-24px] sm:left-[-32px] w-[60px] xs:w-[80px] sm:w-[120px] h-[40px] xs:h-[60px] sm:h-[90px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
          <Image src="/home/3.jpg" alt="Heritage detail 2" fill className="object-cover w-full h-full" />
        </div>
      </div>
      </div>
    </section>
  );
} 