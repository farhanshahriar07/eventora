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
        py-32
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
          bg-pink-500/10
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
              mb-24
              max-w-4xl
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
              Featured Experiences
            </p>

            {/* Heading */}
            <h2
              className="
                mt-6
                text-5xl
                font-black
                uppercase
                leading-[0.9]
                tracking-tight
                text-white
                md:text-7xl
              "
            >
              IMMERSIVE

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

            </h2>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-10
                max-w-3xl
                text-lg
                leading-relaxed
                text-gray-400
                md:text-2xl
              "
            >
              Step into unforgettable nights of music, culture, lights, and immersive entertainment experiences.
            </p>

          </div>

        </FadeUp>

        {/* Grid */}
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