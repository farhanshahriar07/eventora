"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
};

export default function RevealOnScroll({
  children,
  width = "fit-content",
  direction = "up",
  delay = 0,
}: RevealOnScrollProps) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -75, y: 0 };
      case "right":
        return { x: 75, y: 0 };
      case "up":
        return { x: 0, y: 75 };
      case "down":
        return { x: 0, y: -75 };
      default:
        return { x: 0, y: 75 };
    }
  };

  const initial = getInitialPosition();

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, ...initial },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
