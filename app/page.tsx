import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import EventsGrid from "@/components/sections/EventsGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Events */}
      <EventsGrid />

      {/* Footer */}
      <Footer />

    </main>
  );
}