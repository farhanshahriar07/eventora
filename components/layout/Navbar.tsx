"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {

  const pathname = usePathname();

  const [scrolled, setScrolled] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
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
    <>
      {/* Navbar */}
      <div
        className="
          fixed
          top-0
          left-1/2
          z-50
          w-full
          -translate-x-1/2
          px-4
          pt-5
        "
      >

        <header
          className={`
            mx-auto
            max-w-7xl
            transition-all
            duration-500

            ${
              scrolled
                ? `
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  backdrop-blur-xl
                  shadow-2xl
                `
                : `
                  bg-transparent
                `
            }
          `}
        >

          <div
            className="
              flex
              items-center
              justify-between
              px-6
              py-5
              lg:px-8
            "
          >

            {/* Logo */}
            <Link
              href="/"
              className="
                flex
                items-center
                gap-3
              "
            >

              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  text-lg
                  font-black
                  text-white
                  shadow-lg
                  shadow-primary/40
                "
              >
                E
              </div>

              {/* Text */}
              <div className="leading-none">

                <h1
                  className="
                    text-2xl
                    font-black
                    uppercase
                    tracking-tight
                    text-white
                  "
                >
                  Eventora
                </h1>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-gray-400
                  "
                >
                  Premium Experiences
                </p>

              </div>

            </Link>

            {/* Desktop Navigation */}
            <nav
              className="
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                p-2
                backdrop-blur-xl
                lg:flex
              "
            >

              {links.map((link) => {

                const active =
                  pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      rounded-full
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      transition-all
                      duration-300

                      ${
                        active
                          ? `
                            bg-white
                            text-black
                            shadow-lg
                          `
                          : `
                            text-gray-300
                            hover:bg-white/10
                            hover:text-white
                          `
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );

              })}

            </nav>

            {/* Mobile Button */}
            <button
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-white
                backdrop-blur-xl
                lg:hidden
              "
            >

              <div className="space-y-1.5">

                <div
                  className={`
                    h-[2px]
                    w-5
                    bg-white
                    transition-all
                    duration-300

                    ${
                      mobileMenu
                        ? "translate-y-[8px] rotate-45"
                        : ""
                    }
                  `}
                />

                <div
                  className={`
                    h-[2px]
                    w-5
                    bg-white
                    transition-all
                    duration-300

                    ${
                      mobileMenu
                        ? "opacity-0"
                        : ""
                    }
                  `}
                />

                <div
                  className={`
                    h-[2px]
                    w-5
                    bg-white
                    transition-all
                    duration-300

                    ${
                      mobileMenu
                        ? "-translate-y-[8px] -rotate-45"
                        : ""
                    }
                  `}
                />

              </div>

            </button>

          </div>

        </header>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed
          inset-0
          z-40
          flex
          items-center
          justify-center
          bg-black/90
          backdrop-blur-2xl
          transition-all
          duration-500

          ${
            mobileMenu
              ? `
                visible
                opacity-100
              `
              : `
                invisible
                opacity-0
              `
          }
        `}
      >

        {/* Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[400px]
            w-[400px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-500/20
            blur-3xl
          "
        />

        {/* Links */}
        <nav
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            gap-8
          "
        >

          {links.map((link) => {

            const active =
              pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  setMobileMenu(false)
                }
                className={`
                  text-4xl
                  font-black
                  uppercase
                  tracking-[0.2em]
                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        text-pink-400
                      `
                      : `
                        text-white
                        hover:text-pink-300
                      `
                  }
                `}
              >
                {link.name}
              </Link>
            );

          })}

        </nav>

      </div>
    </>
  );
}