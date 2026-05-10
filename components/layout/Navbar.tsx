"use client";

import Link from "next/link";
import Image from "next/image";

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
      setScrolled(window.scrollY > 40);
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
          left-1/2
          top-0
          z-50
          w-full
          -translate-x-1/2
          px-4
          pt-4
        "
      >

        <header
          className={`
            mx-auto
            max-w-7xl
            transition-all
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              scrolled
                ? `
                  h-[72px]
                  translate-y-0
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
                  shadow-2xl
                  shadow-black/40
                  backdrop-blur-2xl
                `
                : `
                  border border-transparent
                  bg-transparent
                  backdrop-blur-0
                  shadow-none
                  translate-y-2
                `
            }
          `}
        >

          <div
            className="
              flex
              h-full
              items-center
              justify-between
              px-5
              py-0
              lg:px-6
            "
          >

            {/* Logo */}
            <Link
              href="/"
              className="
                flex
                items-center
                shrink-0
              "
            >

              <Image
                src="/logo_header.png"
                alt="EELEVEN"
                width={240}
                height={70}
                priority
                className="
                  h-auto
                  w-[190px]
                  object-contain
                  md:w-[230px]
                "
              />

            </Link>

            {/* Desktop Navigation */}
            <nav
              className={`
                hidden
                items-center
                gap-1
                rounded-full
                transition-all
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                lg:flex

                ${
                  scrolled
                    ? `
                      border
                      border-white/10
                      bg-white/[0.03]
                      py-[3px]
                      px-[4px]
                      backdrop-blur-xl
                    `
                    : `
                      border border-transparent
                      bg-transparent
                      p-0
                    `
                }
              `}
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
                      px-8
                      py-3
                      text-xs
                      font-bold
                      uppercase
                      leading-none
                      tracking-[0.28em]
                      transition-all
                      duration-300

                      ${
                        active
                          ? scrolled
                            ? `
                              bg-white
                              text-black
                              shadow-lg
                            `
                            : `
                              text-pink-400
                            `
                          : `
                              text-gray-300
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

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
              className="
                flex
                h-9
                w-9
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
                        ? "translate-y-[7px] rotate-45"
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
                        ? "-translate-y-[7px] -rotate-45"
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

        {/* Mobile Links */}
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