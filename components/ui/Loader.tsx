"use client";

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
              bg-indigo-500/20
              blur-3xl
            "
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

            {/* Spinner */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                border-t-pink-500
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >

              <div
                className="
                  h-10
                  w-10
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-pink-300
                "
              />

            </motion.div>

            {/* Brand */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="
                mt-10
                text-5xl
                font-black
                uppercase
                tracking-tight
                text-white
              "
            >
              Eventora
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
              }}
              className="
                mt-3
                text-sm
                uppercase
                tracking-[0.35em]
                text-gray-400
              "
            >
              Premium Experiences
            </motion.p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}