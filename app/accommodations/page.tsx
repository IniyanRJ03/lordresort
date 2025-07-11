import AccommodationsHero from "../../components/accommodations/AccommodationsHero";
import Accommodations from "@/components/home/Accommodations";
import Amenities from "@/components/accommodations/Amenities";
import Features from "@/components/accommodations/Features";
import Book from "@/components/accommodations/Book";


export default function AccommodationsPage() {
  return (
    <>
      <AccommodationsHero />
      <Accommodations/>
      <Amenities/>
      <Features/>
      <Book/>
      {/* Add accommodations sections and content here */}
    </>
  );
} 