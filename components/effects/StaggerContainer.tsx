"use client";

import { motion } from "framer-motion";

type StaggerContainerProps = {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
};

export default function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: StaggerContainerProps) {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const StaggerItem = ({ children }: { children: React.ReactNode }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return <motion.div variants={item}>{children}</motion.div>;
};
