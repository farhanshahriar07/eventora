"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import Button from "../ui/Button";
import FadeUp from "../ui/FadeUp";
import HeroEffects from "./HeroEffects";

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
      <div
        className="
          absolute
          left-0
          top-0
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-pink-500/20
          blur-3xl
        "
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />

      {/* Glow Right */}
      <div
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
            <div
              className="
                mb-8
                inline-flex
                items-center
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-2
                text-sm
                font-medium
                text-white/80
                backdrop-blur-xl
              "
            >
              ✨ Premium Event Experience Platform
            </div>

            {/* Heading */}
            <h1
              className="
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
              WE CREATE

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
                EXPERIENCES
              </span>

            </h1>

            {/* Description */}
            <p
              className="
                mt-10
                max-w-3xl
                text-center
                text-lg
                leading-relaxed
                text-gray-300
                md:text-2xl
              "
            >
              Youth-driven cultural platform creating impactful experiences through concerts, festivals, and immersive entertainment.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-14
                flex
                flex-wrap
                items-center
                justify-center
                gap-5
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

                <button
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
                    hover:scale-[1.03]
                    hover:border-pink-500/30
                    hover:bg-white/[0.06]
                    hover:shadow-2xl
                    hover:shadow-pink-500/10
                    active:scale-[0.98]
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
                        bg-pink-500/10
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

                </button>

              </Link>

            </div>

          </div>

        </FadeUp>

      </div>

    </section>
  );
}