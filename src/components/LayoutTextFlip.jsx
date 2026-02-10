"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";

export const LayoutTextFlip = ({
  words = [],
  duration = 2000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <div className={twMerge("flex items-center justify-center w-full", className)}>
      <motion.span
        layout
        className="relative w-fit overflow-hidden rounded-xl border border-purple-300/30 bg-linear-to-br from-purple-900/30 to-violet-900/20 px-6 py-4 font-sans text-3xl font-bold tracking-tight text-white shadow-xl backdrop-blur-sm md:text-5xl"
        style={{
          textShadow: "0 0 20px rgba(192, 132, 252, 0.8)",
          boxShadow: `
            0 0 40px rgba(168, 85, 247, 0.4),
            0 0 80px rgba(147, 51, 234, 0.2),
            inset 0 0 20px rgba(192, 132, 252, 0.2)
          `,
        }}
      >
        {/* Glowing background effect */}
        <div className="absolute inset-0 rounded-xl bg-linear-to-r from-purple-600/10 to-violet-600/10 blur-xl" />
        
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-xl bg-linear-to-b from-transparent via-purple-500/5 to-transparent" />
        
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)", opacity: 0.5 }}
            animate={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
              textShadow: [
                "0 0 10px rgba(192, 132, 252, 0.5)",
                "0 0 20px rgba(192, 132, 252, 0.8)",
                "0 0 10px rgba(192, 132, 252, 0.5)",
              ],
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
              textShadow: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className={twMerge(
              "inline-block whitespace-nowrap bg-linear-to-r from-purple-200 to-violet-200 bg-clip-text text-transparent"
            )}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-linear-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear",
          }}
        />
      </motion.span>
    </div>
  );
};