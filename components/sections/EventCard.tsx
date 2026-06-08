"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type EventCardProps = {
  event: {
    slug: string;
    title: string;
    date: string;
    location: string;
    image: string;
  };
};

export default function EventCard({
  event,
}: EventCardProps) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block"
    >

      <motion.div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          transition-all
          duration-700
        "
        whileHover={{ y: -8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          boxShadow: isHovered
            ? "0 0 80px rgba(236, 72, 153, 0.15)"
            : "none",
          borderColor: isHovered
            ? "rgba(225, 29, 72, 0.3)"
            : "rgba(255, 255, 255, 0.1)",
        }}
      >

        {/* Glow */}
        <motion.div
          className="
            absolute
            inset-0
            opacity-0
            pointer-events-none
          "
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="
              absolute
              -left-20
              top-0
              h-60
              w-60
              rounded-full
              bg-rose-600/20
              blur-3xl
            "
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="
              absolute
              bottom-0
              right-0
              h-60
              w-60
              rounded-full
              bg-indigo-500/20
              blur-3xl
            "
            animate={{
              scale: isHovered ? [1, 1.15, 1] : 1,
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>

        {/* Image Container */}
        <div className="relative h-[300px] sm:h-[360px] md:h-[420px] overflow-hidden">

          {/* Image with zoom effect */}
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
            "
            className="
              object-cover
              transition-transform
              duration-1000
              ease-out
            "
            style={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />

          {/* Dark Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/30
              to-transparent
              pointer-events-none
            "
          />

          {/* Top Gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/30
              to-transparent
              pointer-events-none
            "
          />

          {/* Floating Badge */}
          <motion.div
            className="
              absolute
              left-5
              top-5
              rounded-full
              border
              border-white/10
              bg-black/30
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
              backdrop-blur-xl
              z-10
            "
            whileHover={{ scale: 1.05 }}
          >
            {event.location}
          </motion.div>

          {/* Content */}
          <div
            className="
              absolute
              bottom-0
              left-0
              z-10
              w-full
              p-4
              sm:p-6
              md:p-8
            "
          >

            {/* Date */}
            <motion.p
              className="
                text-xs
                sm:text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                sm:tracking-[0.25em]
                text-rose-500
              "
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {event.date}
            </motion.p>

            {/* Title */}
            <motion.h3
              className="
                mt-3
                md:mt-4
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-black
                uppercase
                leading-none
                tracking-tight
                text-white
              "
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {event.title}
            </motion.h3>

            {/* CTA */}
            <motion.div
              className="
                mt-4
                sm:mt-6
                md:mt-8
                inline-flex
                items-center
                gap-3
                text-xs
                sm:text-sm
                font-semibold
                uppercase
                tracking-[0.15em]
                sm:tracking-[0.2em]
                text-white/80
                transition-all
                duration-300
                group-hover:text-white
              "
              animate={{
                gap: isHovered ? "1.25rem" : "0.75rem",
                x: isHovered ? 4 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Explore Event →

            </motion.div>

          </div>

        </div>

      </motion.div>

    </Link>
  );
}