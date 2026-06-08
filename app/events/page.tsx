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
          pt-32
          sm:pt-40
          md:pt-52
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
            bg-rose-600/20
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
            py-16
            sm:py-20
            md:py-24
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
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  sm:tracking-[0.35em]
                  text-rose-500
                  px-4
                  sm:px-0
                "
              >
                Motorsport & Automotive Experiences
              </p>

              {/* Title */}
              <h1
                className="
                  mt-4
                  sm:mt-6
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                  font-black
                  uppercase
                  leading-[0.9]
                  tracking-tight
                  text-white
                  px-4
                  sm:px-0
                "
              >
                UPCOMING

                <span
                  className="
                    mt-2
                    sm:mt-3
                    block
                    bg-gradient-to-r
                    from-[#b11226]
                    to-[#e11d48]
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
                  mt-6
                  sm:mt-8
                  md:mt-10
                  max-w-3xl
                  text-base
                  sm:text-lg
                  md:text-xl
                  leading-relaxed
                  text-gray-400
                  px-4
                  sm:px-0
                "
              >
                Experience world-class automotive exhibitions, professional drift competitions, supercar showcases, and motorsport festivals that bring the thrill of speed to life.
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
          pb-16
          sm:pb-24
          md:pb-32
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
              gap-6
              sm:gap-8
              md:gap-10
              grid-cols-1
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