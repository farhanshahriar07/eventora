import Link from "next/link";
import Image from "next/image";

const links = [
  {
    name: "Experiences",
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

export default function Footer() {

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-black
        py-20
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
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-pink-500/10
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
        "
      >

        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >

          {/* Logo */}
          <Link
            href="/"
            className="
              group
              inline-flex
              items-center
              justify-center
            "
          >

            <Image
              src="/logo_footer.png"
              alt="EELEVEN"
              width={420}
              height={180}
              className="
                h-auto
                w-[260px]
                md:w-[380px]
              "
            />

          </Link>

          {/* Navigation */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-10
            "
          >

            {links.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                className="
                  text-lg
                  font-medium
                  text-gray-400
                  transition-all
                  duration-300
                  hover:text-pink-400
                "
              >
                {link.name}
              </Link>

            ))}

          </div>

          {/* Socials */}
          <div
            className="
              mt-10
              flex
              items-center
              gap-6
            "
          >

            {/* Facebook */}
            <a
              href="#"
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-gray-400
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-pink-500/30
                hover:bg-pink-500/10
                hover:text-pink-400
                hover:shadow-2xl
                hover:shadow-pink-500/20
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12z"/>
              </svg>

            </a>

            {/* Instagram */}
            <a
              href="#"
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-gray-400
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-pink-500/30
                hover:bg-pink-500/10
                hover:text-pink-400
                hover:shadow-2xl
                hover:shadow-pink-500/20
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5c0 2.08-1.67 3.75-3.75 3.75h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 16.5 5zm-4.5 1.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5zm0 2A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5z"/>
              </svg>

            </a>

            {/* Mail */}
            <a
              href="#"
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-gray-400
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-pink-500/30
                hover:bg-pink-500/10
                hover:text-pink-400
                hover:shadow-2xl
                hover:shadow-pink-500/20
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4z"/>
                <path d="m22 6-10 7L2 6"/>
              </svg>

            </a>

          </div>

          {/* Copyright */}
          <div className="mt-12">

            <p
              className="
                text-lg
                text-gray-500
              "
            >
              © 2026 EELEVEN. All rights reserved.
            </p>

            <p
              className="
                mt-2
                text-sm
                text-gray-600
              "
            >
              Developed with immersive cinematic experiences in mind.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}