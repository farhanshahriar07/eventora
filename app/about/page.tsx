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
                About EELEVEN
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
                TRANSFORMING

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
                  AUTOMOTIVE CULTURE
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
                EELEVEN is a pioneering automotive event management and motorsport experience company dedicated to transforming Bangladesh's automotive and entertainment landscape through premium exhibitions, racing festivals, and world-class experiences.
              </p>

            </div>

          </FadeUp>

        </div>

      </section>

      {/* Vision & Mission Section */}
      <section
        className="
          relative
          overflow-hidden
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
                  Our Mission
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

                <div className="mt-6 sm:mt-8 md:mt-10 space-y-6 sm:space-y-8">

                  <p
                    className="
                      text-base
                      sm:text-lg
                      md:text-xl
                      leading-relaxed
                      text-gray-400
                    "
                  >
                    Our mission is to transform Bangladesh's automotive landscape through world-class experiences that inspire, connect, and elevate communities.
                  </p>

                  <ul className="space-y-3 sm:space-y-4">
                    {[
                      "Introduce global motorsport culture into Bangladesh",
                      "Promote innovation and youth engagement",
                      "Build platforms for automotive brands and enthusiasts",
                      "Position Bangladesh as a regional hub for motorsport entertainment",
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
                        <span className="mt-1.5 text-rose-500">▸</span>
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

      {/* Core Values Section */}
      <section
        className="
          relative
          overflow-hidden
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
                What Drives Us
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
                CORE VALUES
              </h2>

            </div>

          </FadeUp>

          <div
            className="
              mt-20
              grid
              gap-8
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {[
              {
                title: "Innovation",
                description: "Developing modern event concepts through technology, immersive experiences, and creative engagement.",
              },
              {
                title: "Motorsport Culture",
                description: "Building awareness and appreciation for racing, performance engineering, and automotive excellence.",
              },
              {
                title: "Experience Design",
                description: "Creating memorable experiences that leave lasting impressions on audiences, partners, and brands.",
              },
              {
                title: "Community Building",
                description: "Connecting enthusiasts, creators, businesses, influencers, racers, and fans into one unified ecosystem.",
              },
              {
                title: "Excellence",
                description: "Maintaining international standards in event execution, safety, hospitality, and audience engagement.",
              },
              {
                title: "Youth Engagement",
                description: "Inspiring the next generation through automotive passion, education, and career opportunities.",
              },
            ].map((value, index) => (

              <FadeUp
                key={value.title}
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
                  "
                >

                  <h3
                    className="
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
                    {value.title}
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
                    {value.description}
                  </p>

                </div>

              </FadeUp>

            ))}

          </div>

        </div>

      </section>

      {/* Services Section */}
      <section
        className="
          relative
          overflow-hidden
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
            from-black
            via-[#050816]
            to-black
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
                Comprehensive automotive event solutions that connect brands, enthusiasts, and communities through unforgettable experiences.
              </p>

            </div>

          </FadeUp>

          <div
            className="
              mt-20
              grid
              gap-8
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {[
              {
                icon: "🏎️",
                title: "Automotive Exhibitions",
                description: "Premium showcases featuring supercars, luxury vehicles, classic cars, modified vehicles, and electric vehicles with exclusive access and brand opportunities.",
              },
              {
                icon: "🏁",
                title: "Motorsport Events",
                description: "Professional drift competitions, racing festivals, Formula racing experiences, and track day events that bring the thrill of speed to life.",
              },
              {
                icon: "🚗",
                title: "Vehicle Launches",
                description: "Product launches, new vehicle unveilings, dealership showcases, and brand activations that create direct engagement with consumers.",
              },
              {
                icon: "🎵",
                title: "Entertainment Experiences",
                description: "Live concerts, DJ festivals, celebrity performances, and youth lifestyle events that create unique festival atmospheres.",
              },
              {
                icon: "💼",
                title: "Brand Activations",
                description: "Interactive sponsor booths, experiential marketing zones, influencer campaigns, and digital engagement initiatives.",
              },
              {
                icon: "🤝",
                title: "Corporate & VIP",
                description: "Executive networking sessions, industry summits, investor showcases, media events, and premium hospitality experiences.",
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

      {/* Flagship Event Section */}
      <section
        className="
          relative
          overflow-hidden
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
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
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

            <div className="mx-auto max-w-5xl text-center">

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
                Flagship Event
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
                EELEVEN

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
                  MOTOR FEST
                </span>

              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  sm:mt-8
                  md:mt-10
                  max-w-4xl
                  text-base
                  sm:text-lg
                  md:text-xl
                  leading-relaxed
                  text-gray-400
                  px-4
                  sm:px-0
                "
              >
                Bangladesh's largest automotive and entertainment festival, combining international car exhibitions, professional drift competitions, live concerts, and VIP experiences under one platform.
              </p>

            </div>

          </FadeUp>

          <div
            className="
              mt-12
              sm:mt-14
              md:mt-16
              grid
              gap-4
              sm:gap-6
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {[
              {
                title: "Car Exhibition",
                description: "Supercars, luxury vehicles, classic collections, and concept cars",
              },
              {
                title: "Drift Arena",
                description: "Professional drift performances and motorsport demonstrations",
              },
              {
                title: "Live Entertainment",
                description: "Concerts, DJ festivals, gaming, and influencer appearances",
              },
              {
                title: "VIP Zones",
                description: "Premium lounges, networking areas, and sponsor activations",
              },
            ].map((feature, index) => (

              <FadeUp
                key={feature.title}
                delay={index * 0.1}
              >

                <div
                  className="
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                  "
                >

                  <h4
                    className="
                      text-lg
                      font-black
                      uppercase
                      tracking-tight
                      text-white
                    "
                  >
                    {feature.title}
                  </h4>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-relaxed
                      text-gray-400
                    "
                  >
                    {feature.description}
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