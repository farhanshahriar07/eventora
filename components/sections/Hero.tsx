"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import Button from "../ui/Button";
import FadeUp from "../ui/FadeUp";
import HeroEffects from "./HeroEffects";
import AnimatedText from "../ui/AnimatedText";
import { motion } from "framer-motion";

export default function Hero() {

  const [offset, setOffset] =
    useState(0);

  useEffect(() => {

    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        pb-24
        pt-52
      "
    >

      {/* Effects */}
      <HeroEffects />

      {/* Background */}
      <div
        className="
          absolute
          inset-0
          z-0
          bg-gradient-to-br
          from-[#140014]
          via-[#070B34]
          to-black
        "
        style={{
          transform: `translateY(${offset}px)`,
        }}
      />

      {/* Glow Left */}
      <motion.div
        className="
          absolute
          left-0
          top-0
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-rose-600/20
          blur-3xl
        "
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />

      {/* Glow Right */}
      <motion.div
        className="
          absolute
          bottom-0
          right-0
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-500/20
          blur-3xl
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          transform: `translateY(${offset * -0.3}px)`,
        }}
      />

      {/* Noise */}
      <div
        className="
          absolute
          inset-0
          z-0
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

        <FadeUp>

          <div
            className="
              mx-auto
              flex
              max-w-6xl
              flex-col
              items-center
              text-center
            "
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mb-6
                md:mb-8
                inline-flex
                items-center
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-1.5
                md:px-5
                md:py-2
                text-xs
                md:text-sm
                font-medium
                text-white/80
                backdrop-blur-xl
                text-center
              "
            >
              🏁 Automotive Event & Motorsport Experience Company
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="
                max-w-6xl
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
                md:px-0
              "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              TURNING SPEED

              <motion.span
                className="
                  mt-2
                  md:mt-3
                  block
                  bg-gradient-to-r
                  from-[#b11226]
                  to-[#e11d48]
                  bg-clip-text
                  text-transparent
                "
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                INTO EXPERIENCES
              </motion.span>

            </motion.h1>

            {/* Description */}
            <AnimatedText
              text="Bangladesh's leading automotive event company creating world-class motorsport experiences, premium car exhibitions, drift competitions, and automotive lifestyle festivals."
              delay={0.8}
              className="
                mt-6
                md:mt-10
                max-w-3xl
                text-center
                text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl
                leading-relaxed
                text-gray-300
                px-4
                md:px-0
              "
            />

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-10
                md:mt-14
                flex
                flex-col
                sm:flex-row
                flex-wrap
                items-center
                justify-center
                gap-4
                md:gap-5
                px-4
                md:px-0
              "
            >

              {/* Explore Events */}
              <Link href="/events">

                <Button>
                  Explore Events
                </Button>

              </Link>

              {/* About */}
              <Link href="/about">

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-8
                    py-4
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-rose-600/30
                    hover:bg-white/[0.06]
                    hover:shadow-2xl
                    hover:shadow-rose-600/10
                  "
                >

                  {/* Glow */}
                  <span
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-32
                        w-32
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-rose-600/10
                        blur-2xl
                      "
                    />
                  </span>

                  {/* Shine */}
                  <span
                    className="
                      absolute
                      inset-0
                      translate-x-[-120%]
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                      transition-transform
                      duration-1000
                      group-hover:translate-x-[120%]
                    "
                  />

                  {/* Text */}
                  <span className="relative z-10">
                    About Us
                  </span>

                </motion.button>

              </Link>

            </motion.div>

          </div>

        </FadeUp>

      </div>

    </section>
  );
}