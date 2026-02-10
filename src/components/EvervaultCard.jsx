"use client";
import { useMotionValue } from "motion/react";
import { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const EvervaultCard = ({
  text,
  className,
  textClassName
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={twMerge(
        "p-0.5 bg-transparent w-full h-full flex items-center justify-center relative",
        className
      )}>
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full h-full relative overflow-hidden bg-transparent flex items-center justify-center">
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <div className="relative flex items-center justify-center w-full h-full">
            <div className="absolute w-full h-full bg-white/80 dark:bg-black/80 blur-sm rounded-3xl" />
            <span className={twMerge(
              "dark:text-white text-black z-20 p-8 text-center text-xl md:text-3xl font-medium leading-tight",
              textClassName
            )}>
              {text || "I'm based in Nepal. Open to work."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  randomString
}) {
  let maskImage = useMotionTemplate`radial-gradient(350px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-linear-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style} />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}>
        <div className="absolute inset-0 p-4 overflow-hidden">
          <pre className="text-[9px] md:text-[10px] text-white font-mono font-bold w-full h-full leading-tight break-all whitespace-pre-wrap scale-500">
            {randomString}
          </pre>
        </div>
      </motion.div>
    </div>
  );
};
// Remove the export keyword from this function
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};