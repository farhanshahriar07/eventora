import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FadeUp from "@/components/ui/FadeUp";

export default function AboutPage() {

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
                  text-rose-500
                "
              >
                About EELEVEN
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
                WE BUILD

                <span
                  className="
                    mt-3
                    block
                    bg-gradient-to-r
                    from-[#b11226]
                    to-[#e11d48]
                    bg-clip-text
                    text-transparent
                  "
                >
                  EXPERIENCES
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
                EELEVEN is a next-generation cultural platform focused on immersive entertainment, unforgettable concerts, nightlife, and premium experiences for modern audiences.
              </p>

            </div>

          </FadeUp>

        </div>

      </section>

      {/* Story Section */}
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
            top-20
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
              lg:grid-cols-2
            "
          >

            {/* Left */}
            <FadeUp>

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
                  Our Mission
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
                  CREATING CULTURAL MOMENTS
                </h2>

              </div>

            </FadeUp>

            {/* Right */}
            <FadeUp delay={0.2}>

              <div className="space-y-8">

                <p
                  className="
                    text-xl
                    leading-relaxed
                    text-gray-400
                  "
                >
                  We believe events should be more than entertainment. They should become memories, movements, and emotional experiences that connect people together.
                </p>

                <p
                  className="
                    text-xl
                    leading-relaxed
                    text-gray-400
                  "
                >
                  From immersive nightlife to large-scale concerts and cultural festivals, EELEVEN is designed to redefine how modern audiences experience live entertainment.
                </p>

              </div>

            </FadeUp>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section
        className="
          relative
          overflow-hidden
          pb-32
        "
      >

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
              gap-8
              md:grid-cols-3
            "
          >

            {[
              {
                number: "120+",
                label: "Events Produced",
              },
              {
                number: "50K+",
                label: "Audience Reached",
              },
              {
                number: "12",
                label: "Cities Activated",
              },
            ].map((item, index) => (

              <FadeUp
                key={item.label}
                delay={index * 0.1}
              >

                <div
                  className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-10
                    backdrop-blur-xl
                  "
                >

                  <h3
                    className="
                      text-6xl
                      font-black
                      uppercase
                      tracking-tight
                      text-white
                    "
                  >
                    {item.number}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-gray-400
                    "
                  >
                    {item.label}
                  </p>

                </div>

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