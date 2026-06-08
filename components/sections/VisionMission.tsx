import FadeUp from "../ui/FadeUp";

export default function VisionMission() {
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

      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#0A0014]
          via-black
          to-[#050816]
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
            gap-12
            md:gap-16
            lg:gap-20
            lg:grid-cols-2
          "
        >

          {/* Vision */}
          <FadeUp>

            <div>

              <p
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  sm:tracking-[0.35em]
                  text-rose-500
                "
              >
                Our Vision
              </p>

              <h2
                className="
                  mt-4
                  sm:mt-6
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-black
                  uppercase
                  leading-[0.9]
                  tracking-tight
                  text-white
                "
              >
                LEADING THE FUTURE
              </h2>

              <p
                className="
                  mt-6
                  sm:mt-8
                  md:mt-10
                  text-base
                  sm:text-lg
                  md:text-xl
                  leading-relaxed
                  text-gray-400
                "
              >
                To become Bangladesh's leading automotive event and motorsport experience company by creating internationally recognized events that connect entertainment, innovation, and automotive culture across South Asia.
              </p>

            </div>

          </FadeUp>

          {/* Mission */}
          <FadeUp delay={0.2}>

            <div>

              <p
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  sm:tracking-[0.35em]
                  text-rose-500
                "
              >
                Our Goals
              </p>

              <h2
                className="
                  mt-4
                  sm:mt-6
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-black
                  uppercase
                  leading-[0.9]
                  tracking-tight
                  text-white
                "
              >
                TRANSFORMING AUTOMOTIVE CULTURE
              </h2>

              <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-6">

                <p
                  className="
                    text-base
                    sm:text-lg
                    md:text-xl
                    leading-relaxed
                    text-gray-400
                  "
                >
                  Our mission is to transform Bangladesh's automotive landscape through world-class experiences.
                </p>

                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Introduce global motorsport culture into Bangladesh",
                    "Promote innovation and youth engagement",
                    "Build platforms for automotive brands and enthusiasts",
                    "Position Bangladesh as a regional hub for motorsport",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        sm:text-base
                        md:text-lg
                        text-gray-400
                      "
                    >
                      <span className="mt-1.5 text-rose-500 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>

          </FadeUp>

        </div>

      </div>

    </section>
  );
}
