import Image from "next/image";

const exploreLinks = [
  { name: "About", href: "#" },
  { name: "Rooms", href: "#" },
  { name: "Dining", href: "#" },
  { name: "Experiences", href: "#" },
];
const legalLinks = [
  { name: "Privacy", href: "#" },
  { name: "Terms of Use", href: "#" },
  { name: "Sitemap", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact", href: "#" },
];
const hotelAreas = [
  { name: "Batticaloa", href: "#" },
  { name: "Kalkudah", href: "#" },
  { name: "Pasikudah", href: "#" },
];
const socialIcons = [
  { name: "Facebook", src: "/facebook.svg", href: "#" },
  { name: "Instagram", src: "/instagram.svg", href: "#" },
  { name: "X", src: "/x.svg", href: "#" },
  { name: "Google", src: "/google.svg", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f6f8] text-gray-700 pt-12 pb-6 px-4 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        {/* Left: Logo, description, social */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="LORD Resort Logo" width={60} height={40} />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-wide text-gray-900">LORD Resort</span>
              <span className="text-xs text-gray-700">The Place For Relax Stay</span>
            </div>
          </div>
          <p className="text-sm max-w-xs mt-2">
            A serene retreat nestled alongside a pristine lagoon in Trincomalee, offering the perfect balance of relaxation and adventure.
          </p>
          <div className="flex gap-3 mt-2">
            {socialIcons.map((icon) => (
              <a key={icon.name} href={icon.href} aria-label={icon.name}>
                <Image src={icon.src} alt={icon.name} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
        {/* Center: Navigation columns */}
        <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-2 text-gray-900">EXPLORE</h4>
            <ul className="space-y-1">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-900">LEGAL</h4>
            <ul className="space-y-1">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-900">HOTEL AREAS</h4>
            <ul className="space-y-1">
              {hotelAreas.map((area) => (
                <li key={area.name}>
                  <a href={area.href} className="hover:underline text-sm">{area.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-900">CONTACT</h4>
            <ul className="space-y-1 text-sm">
              <li>LORD Resort<br />848A, Nilaveli</li>
              <li>1234567890<br />lordresort@gmail.com</li>
              <li>Reception: 24 Hours</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-200 text-xs text-gray-500 gap-4">
        <span>© 2025 LORD Resort. All rights reserved.</span>
        <div className="flex gap-2 items-center">
          <span>We accept:</span>
          <Image src="/visa.svg" alt="Visa" width={28} height={18} />
          <Image src="/mastercard.svg" alt="Mastercard" width={28} height={18} />
          <Image src="/paypal.svg" alt="Paypal" width={28} height={18} />
        </div>
      </div>
    </footer>
  );
} 