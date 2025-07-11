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
    <section className="w-full flex justify-center items-center py-20">
      <div className="max-w-7xl w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Text and Timeline */}
      <div>
        <div className="flex items-center gap-4 mb-2">
          <span className="h-0.5 w-8 bg-blue-600 rounded" />
          <span className="uppercase text-xs font-semibold tracking-widest text-blue-700">Our Heritage</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">A Legacy of Luxury</h2>
        <h3 className="text-2xl font-light text-gray-700 mb-6">Since 2018</h3>
        <p className="text-gray-700 mb-6">
          Founded in 2018, LORD Resort emerged from a vision to create a sanctuary that harmoniously blends with its natural surroundings while offering unparalleled luxury experiences.<br /><br />
          Our journey began with the careful selection of this pristine lagoon location, followed by years of thoughtful development that prioritized both environmental preservation and guest comfort.
        </p>
        <div className="space-y-6">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <span className="text-blue-700 text-lg font-bold mb-1">{item.year}</span>
                <span className="h-0.5 w-8 bg-blue-600 rounded mb-1" />
              </div>
              <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Images */}
      <div className="relative flex justify-center items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg w-[340px] h-[260px] relative">
          <Image src="/home/1.jpg" alt="Main heritage" fill className="object-cover w-full h-full" />
        </div>
        {/* Top right small image */}
        <div className="absolute top-[-32px] right-[-32px] w-[140px] h-[100px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
          <Image src="/home/2.jpg" alt="Heritage detail 1" fill className="object-cover w-full h-full" />
        </div>
        {/* Bottom left small image */}
        <div className="absolute bottom-[-32px] left-[-32px] w-[120px] h-[90px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
          <Image src="/home/3.jpg" alt="Heritage detail 2" fill className="object-cover w-full h-full" />
        </div>
      </div>
      </div>
    </section>
  );
} 