import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import EventCard from "@/components/sections/EventCard";
import FadeUp from "@/components/ui/FadeUp";

import { events } from "@/data/events";

export default function EventsPage() {

  return (
    <main className="bg-black text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section
        className="
          relative
          overflow-hidden
          pt-52
        "
      >

        {/* Background */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#140014]
            via-[#070B34]
            to-black
          "
        />

        {/* Glow Left */}
        <div
          className="
            absolute
            left-0
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-pink-500/20
            blur-3xl
          "
        />

        {/* Glow Right */}
        <div
          className="
            absolute
            bottom-0
            right-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-500/20
            blur-3xl
          "
        />

        {/* Noise */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-screen
          "
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        {/* Content */}
        <div
          className="
            container
            relative
            z-10
            py-24
          "
        >

          <FadeUp>

            <div
              className="
                mx-auto
                max-w-5xl
                text-center
              "
            >

              {/* Label */}
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-pink-400
                "
              >
                Premium Experiences
              </p>

              {/* Title */}
              <h1
                className="
                  mt-6
                  text-6xl
                  font-black
                  uppercase
                  leading-[0.9]
                  tracking-tight
                  text-white
                  md:text-8xl
                "
              >
                DISCOVER

                <span
                  className="
                    mt-3
                    block
                    bg-gradient-to-r
                    from-pink-500
                    to-pink-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  EVENTS
                </span>

              </h1>

              {/* Description */}
              <p
                className="
                  mx-auto
                  mt-10
                  max-w-3xl
                  text-xl
                  leading-relaxed
                  text-gray-400
                "
              >
                Explore immersive concerts, festivals, nightlife, and unforgettable cultural experiences curated for the next generation.
              </p>

            </div>

          </FadeUp>

        </div>

      </section>

      {/* Events Grid */}
      <section
        className="
          relative
          overflow-hidden
          pb-32
        "
      >

        {/* Background */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black
            via-[#050816]
            to-black
          "
        />

        {/* Glow */}
        <div
          className="
            absolute
            right-0
            top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-500/10
            blur-3xl
          "
        />

        {/* Content */}
        <div
          className="
            container
            relative
            z-10
          "
        >

          <div
            className="
              grid
              gap-10
              md:grid-cols-2
              xl:grid-cols-3
            "
          >

            {events.map((event, index) => (

              <FadeUp
                key={event.slug}
                delay={index * 0.08}
              >

                <EventCard event={event} />

              </FadeUp>

            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}