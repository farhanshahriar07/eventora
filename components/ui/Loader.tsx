"use client";

import Image from "next/image";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

type LoaderProps = {
  loading: boolean;
};

export default function Loader({
  loading,
}: LoaderProps) {

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-black
          "
        >

          {/* Background Glow */}
          <div
            className="
              absolute
              h-[400px]
              w-[400px]
              rounded-full
              bg-pink-500/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              h-[300px]
              w-[300px]
              rounded-full
              bg-red-500/10
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
          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
            "
          >

            {/* Animated Logo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                relative
              "
            >

              {/* Logo Glow */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[200px]
                  w-[200px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-pink-500/20
                  blur-3xl
                "
              />

              {/* Logo */}
              <Image
                src="/logo_footer.png"
                alt="EELEVEN"
                width={320}
                height={140}
                priority
                className="
                  relative
                  z-10
                  h-auto
                  w-[220px]
                  md:w-[320px]
                "
              />

            </motion.div>

            {/* Loading Line */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 160,
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: "easeOut",
              }}
              className="
                mt-10
                h-[2px]
                overflow-hidden
                rounded-full
                bg-white/10
              "
            >

              <motion.div
                animate={{
                  x: [
                    "-100%",
                    "100%",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                }}
                className="
                  h-full
                  w-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-pink-500
                  to-transparent
                "
              />

            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
              className="
                mt-6
                text-xs
                uppercase
                tracking-[0.4em]
                text-gray-500
              "
            >
              Immersive Premium Experiences
            </motion.p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}