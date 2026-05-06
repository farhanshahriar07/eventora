"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  width: number;
  height: number;
  left: number;
  top: number;
  duration: number;
  opacity: number;
};

export default function HeroEffects() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [particles, setParticles] =
    useState<Particle[]>([]);

  useEffect(() => {

    const handleMouseMove = (
      e: MouseEvent
    ) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    // Generate particles ONLY on client
    const generatedParticles =
      [...Array(40)].map((_, i) => ({
        id: i,
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        opacity: Math.random(),
      }));

    setParticles(generatedParticles);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

  }, []);

  return (
    <>
      {/* Spotlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          transition
          duration-300
        "
        style={{
          background: `
            radial-gradient(
              600px at ${position.x}px ${position.y}px,
              rgba(99,102,241,0.18),
              transparent 80%
            )
          `,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {particles.map((particle) => (

          <span
            key={particle.id}
            className="
              absolute
              rounded-full
              bg-white/40
              animate-pulse
            "
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDuration: `${particle.duration}s`,
              opacity: particle.opacity,
            }}
          />

        ))}

      </div>
    </>
  );
}