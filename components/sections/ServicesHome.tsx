import FadeUp from "../ui/FadeUp";

export default function ServicesHome() {
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
          from-[#050816]
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
          bg-rose-600/10
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

        <FadeUp>

          <div className="mx-auto max-w-4xl text-center">

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
              What We Offer
            </p>

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
              OUR SERVICES
            </h2>

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
              Comprehensive automotive event solutions that connect brands, enthusiasts, and communities.
            </p>

          </div>

        </FadeUp>

        <div
          className="
            mt-12
            sm:mt-16
            md:mt-20
            grid
            gap-6
            sm:gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {[
            {
              icon: "🏎️",
              title: "Automotive Exhibitions",
              description: "Premium showcases featuring supercars, luxury vehicles, and classic automobiles.",
            },
            {
              icon: "🏁",
              title: "Motorsport Events",
              description: "Professional drift competitions, racing festivals, and track day experiences.",
            },
            {
              icon: "🚗",
              title: "Vehicle Launches",
              description: "Product launches and brand activations for automotive companies.",
            },
            {
              icon: "🎵",
              title: "Entertainment",
              description: "Live concerts, DJ festivals, and youth lifestyle events.",
            },
            {
              icon: "💼",
              title: "Brand Activations",
              description: "Interactive marketing zones and influencer campaigns.",
            },
            {
              icon: "🤝",
              title: "Corporate & VIP",
              description: "Executive networking and premium hospitality experiences.",
            },
          ].map((service, index) => (

            <FadeUp
              key={service.title}
              delay={index * 0.1}
            >

              <div
                className="
                  group
                  rounded-[24px]
                  sm:rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  sm:p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-rose-600/30
                  hover:bg-white/[0.06]
                  hover:shadow-[0_0_80px_rgba(236,72,153,0.15)]
                "
              >

                {/* Icon */}
                <div
                  className="
                    text-4xl
                    sm:text-5xl
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {service.icon}
                </div>

                <h3
                  className="
                    mt-4
                    sm:mt-6
                    text-xl
                    sm:text-2xl
                    font-black
                    uppercase
                    tracking-tight
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-rose-500
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    sm:mt-4
                    text-sm
                    sm:text-base
                    leading-relaxed
                    text-gray-400
                  "
                >
                  {service.description}
                </p>

              </div>

            </FadeUp>

          ))}

        </div>

      </div>

    </section>
  );
}
