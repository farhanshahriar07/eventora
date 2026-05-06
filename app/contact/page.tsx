import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FadeUp from "@/components/ui/FadeUp";

export default function ContactPage() {

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
                Contact Eventora
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
                LET’S CREATE

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
                  SOMETHING ICONIC
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
                Whether you’re planning a concert, nightlife experience, festival, or immersive activation — we’d love to hear from you.
              </p>

            </div>

          </FadeUp>

        </div>

      </section>

      {/* Contact Section */}
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
              gap-10
              lg:grid-cols-[420px_1fr]
            "
          >

            {/* Contact Info */}
            <FadeUp>

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

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-pink-400
                  "
                >
                  Contact Information
                </p>

                <div className="mt-10 space-y-8">

                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-gray-500
                      "
                    >
                      Email
                    </p>

                    <p
                      className="
                        mt-3
                        text-xl
                        text-white
                      "
                    >
                      hello@eventora.com
                    </p>

                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-gray-500
                      "
                    >
                      Phone
                    </p>

                    <p
                      className="
                        mt-3
                        text-xl
                        text-white
                      "
                    >
                      +880 1234 567890
                    </p>

                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-gray-500
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        mt-3
                        text-xl
                        text-white
                      "
                    >
                      Dhaka, Bangladesh
                    </p>

                  </div>

                </div>

              </div>

            </FadeUp>

            {/* Form */}
            <FadeUp delay={0.15}>

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

                <div className="grid gap-6">

                  {/* Name */}
                  <div>

                    <label
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-gray-500
                      "
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="
                        mt-3
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-6
                        py-5
                        text-white
                        outline-none
                        transition
                        placeholder:text-gray-500
                        focus:border-pink-500/50
                      "
                    />

                  </div>

                  {/* Email */}
                  <div>

                    <label
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-gray-500
                      "
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="
                        mt-3
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-6
                        py-5
                        text-white
                        outline-none
                        transition
                        placeholder:text-gray-500
                        focus:border-pink-500/50
                      "
                    />

                  </div>

                  {/* Message */}
                  <div>

                    <label
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-gray-500
                      "
                    >
                      Message
                    </label>

                    <textarea
                      rows={6}
                      placeholder="Tell us about your project or event..."
                      className="
                        mt-3
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-6
                        py-5
                        text-white
                        outline-none
                        transition
                        placeholder:text-gray-500
                        focus:border-pink-500/50
                      "
                    />

                  </div>

                  {/* Button */}
                  <button
                    className="
                      mt-4
                      rounded-full
                      bg-gradient-to-r
                      from-pink-500
                      to-pink-400
                      px-8
                      py-5
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-white
                      shadow-2xl
                      shadow-pink-500/30
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:shadow-pink-500/50
                    "
                  >
                    Send Message
                  </button>

                </div>

              </div>

            </FadeUp>

          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}