"use client";

import {
  useEffect,
  useState,
} from "react";

import Loader from "@/components/ui/Loader";

export default function AppLoader({
  children,
}: {
  children: React.ReactNode;
}) {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () =>
      clearTimeout(timer);

  }, []);

  return (
    <>
      {/* Loader */}
      <Loader loading={loading} />

      {/* Site */}
      <div
        className={`
          transition-opacity
          duration-1000

          ${
            loading
              ? "opacity-0"
              : "opacity-100"
          }
        `}
      >
        {children}
      </div>
    </>
  );
}