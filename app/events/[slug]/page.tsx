import Image from "next/image";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { events } from "@/data/events";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EventPage({
  params,
}: PageProps) {

  const { slug } = await params;

  const event = events.find(
    (item) => item.slug === slug
  );

  if (!event) {
    notFound();
  }

  return (
    <main className="bg-black text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section
        className="
          relative
          flex
          min-h-screen
          items-end
          overflow-hidden
          pt-40
        "
      >

        {/* Background Image */}
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/60
          "
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/40
            to-black/20
          "
        />

        {/* Glow */}
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

        {/* Content */}
        <div
          className="
            container
            relative
            z-10
            pb-24
          "
        >

          {/* Label */}
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              text-rose-500
            "
          >
            Automotive Experience
          </p>

          {/* Title */}
          <h1
            className="
              mt-6
              max-w-6xl
              text-6xl
              font-black
              uppercase
              leading-[0.9]
              tracking-tight
              text-white
              md:text-8xl
            "
          >
            {event.title}
          </h1>

          {/* Meta */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-6
            "
          >

            <div
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                px-6
                py-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white
                backdrop-blur-xl
              "
            >
              {event.date}
            </div>

            <div
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                px-6
                py-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white
                backdrop-blur-xl
              "
            >
              {event.location}
            </div>

          </div>

        </div>

      </section>

      {/* Content */}
      <section
        className="
          relative
          overflow-hidden
          py-32
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
            top-0
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
              gap-20
              lg:grid-cols-[1fr_420px]
            "
          >

            {/* Left */}
            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-rose-500
                "
              >
                About The Event
              </p>

              <h2
                className="
                  mt-6
                  text-5xl
                  font-black
                  uppercase
                  leading-[0.9]
                  tracking-tight
                  text-white
                "
              >
                FEEL THE ADRENALINE
              </h2>

              <p
                className="
                  mt-10
                  max-w-4xl
                  text-xl
                  leading-relaxed
                  text-gray-400
                "
              >
                {event.description}
              </p>

            </div>

            {/* Booking Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-10
                backdrop-blur-xl
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#b11226]/10
                  to-indigo-500/10
                "
              />

              <div className="relative z-10">

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-rose-500
                  "
                >
                  Ticket Booking
                </p>

                <h3
                  className="
                    mt-6
                    text-4xl
                    font-black
                    uppercase
                    leading-none
                    tracking-tight
                    text-white
                  "
                >
                  JOIN THE EVENT
                </h3>

                <p
                  className="
                    mt-8
                    text-lg
                    leading-relaxed
                    text-gray-400
                  "
                >
                  Secure your access and become part of Bangladesh's premier automotive and motorsport experience.
                </p>

                {/* Button */}
                <button
                  className="
                    mt-12
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-[#b11226]
                    to-[#e11d48]
                    px-8
                    py-5
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-white
                    shadow-2xl
                    shadow-rose-600/30
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-rose-600/50
                  "
                >
                  Get Tickets
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}