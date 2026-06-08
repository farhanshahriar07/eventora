import { events } from "@/data/events";

import EventCard from "./EventCard";
import FadeUp from "../ui/FadeUp";

export default function EventsGrid() {

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black
        py-16
        sm:py-24
        md:py-32
      "
    >

      {/* Background Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#050816]
          via-black
          to-[#0A0014]
        "
      />

      {/* Glow Left */}
      <div
        className="
          absolute
          left-0
          top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-rose-600/10
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
          bg-indigo-500/10
          blur-3xl
        "
      />

      {/* Noise Texture */}
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
      <div className="container relative z-10">

        {/* Header */}
        <FadeUp>

          <div
            className="
              mx-auto
              mb-16
              sm:mb-20
              md:mb-24
              max-w-4xl
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
              Featured Motorsport Experiences
            </p>

            {/* Heading */}
            <h2
              className="
                mt-4
                sm:mt-6
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                uppercase
                leading-[0.9]
                tracking-tight
                text-white
                px-4
                sm:px-0
              "
            >
              AUTOMOTIVE

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

            </h2>

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
                lg:text-2xl
                leading-relaxed
                text-gray-400
                px-4
                sm:px-0
              "
            >
              Experience the thrill of motorsport through premium car exhibitions, professional drift competitions, and world-class automotive festivals.
            </p>

          </div>

        </FadeUp>

        {/* Grid */}
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
              delay={index * 0.1}
            >

              <EventCard event={event} />

            </FadeUp>

          ))}

        </div>

      </div>

    </section>
  );
}