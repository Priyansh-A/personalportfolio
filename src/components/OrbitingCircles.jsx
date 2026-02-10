import { twMerge } from "tailwind-merge";
import React from "react";
import { motion } from "framer-motion";

export function OrbitingCircles({
className,
children,
reverse,
duration = 20,
radius = 160,
path = true,
iconSize = 30,
speed = 1,
...props
}) {
  const calculatedDuration = duration / speed;
  
  // Generate circular path positions
  const generateOrbit = (startAngle = 0) => {
    const points = 60; // Number of points in the orbit
    return Array.from({ length: points + 1 }).map((_, i) => {
      const angle = startAngle + (i * 360) / points;
      const radian = (angle * Math.PI) / 180;
      return {
        x: radius * Math.cos(radian),
        y: radius * Math.sin(radian),
        rotate: reverse ? -angle : angle,
      };
    });
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {path && (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute inset-0 pointer-events-none size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      
      {React.Children.map(children, (child, index) => {
        const startAngle = (360 / React.Children.count(children)) * index;
        const orbitPath = generateOrbit(startAngle);
        
        return (
          <motion.div
            key={index}
            style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            }}
            animate={{
            x: orbitPath.map(p => p.x),
            y: orbitPath.map(p => p.y),
            rotate: orbitPath.map(p => p.rotate),
            }}
            transition={{
            duration: calculatedDuration,
            repeat: Infinity,
            ease: "linear",
            }}
            className={twMerge(
              "absolute flex items-center justify-center rounded-full",
              className
            )}
            {...props}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}