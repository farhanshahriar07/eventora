"use client";

import { motion } from "framer-motion";

type FloatingCardProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function FloatingCard({
  children,
  delay = 0,
}: FloatingCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
}
