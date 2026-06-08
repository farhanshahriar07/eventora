"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`
        group
        relative
        overflow-hidden
        rounded-full
        bg-gradient-to-r
        from-[#b11226]
        to-[#e11d48]
        px-6
        py-3
        md:px-8
        md:py-4
        text-xs
        md:text-sm
        font-bold
        uppercase
        tracking-[0.2em]
        text-white
        shadow-2xl
        shadow-rose-600/30
        transition-all
        duration-300
        hover:shadow-rose-600/50
        disabled:opacity-50
        disabled:cursor-not-allowed
        w-full
        sm:w-auto

        ${className}
      `}
    >

      {/* Animated Glow */}
      <motion.span
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-rose-400/20
          to-red-500/20
          opacity-0
          group-hover:opacity-100
        "
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{
          scale: [1, 1.5, 1],
          opacity: [0, 0.5, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Shine Effect */}
      <motion.span
        className="
          absolute
          inset-0
          translate-x-[-120%]
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
        animate={{
          translateX: ["120%", "-120%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
        }}
      />

      {/* Text */}
      <span className="relative z-10">
        {children}
      </span>

    </motion.button>
  );
}