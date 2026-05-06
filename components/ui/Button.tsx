import { ButtonHTMLAttributes } from "react";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {

  return (
    <button
      className={`
        group
        relative
        overflow-hidden
        rounded-full
        bg-gradient-to-r
        from-pink-500
        to-pink-400
        px-8
        py-4
        text-sm
        font-bold
        uppercase
        tracking-[0.2em]
        text-white
        shadow-2xl
        shadow-pink-500/30
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:shadow-pink-500/50
        active:scale-[0.98]

        ${className}
      `}
      {...props}
    >

      {/* Shine Effect */}
      <span
        className="
          absolute
          inset-0
          translate-x-[-120%]
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-[120%]
        "
      />

      {/* Text */}
      <span className="relative z-10">
        {children}
      </span>

    </button>
  );
}