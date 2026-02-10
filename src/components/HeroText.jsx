import { LayoutTextFlip } from "./LayoutTextFlip";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center z-10 px-4">
      <div className="relative w-full max-w-6xl mx-auto">
        
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <motion.div
            className="text-center"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 md:mb-6"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hi, I'm <span className="text-purple-300">Prem</span>
            </motion.h1>

            {/* Main tagline */}
            <motion.div
              className="mb-4 md:mb-6"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-300 leading-tight">
                Building
              </p>
            </motion.div>

            {/* Flipping words - Centered and larger */}
            <motion.div
              className="my-6 md:my-8 flex justify-center"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="scale-120 md:scale-100 ">
                <LayoutTextFlip 
                  words={words} 
                  duration={1800}
                  className="justify-center"
                />
              </div>
            </motion.div>

            {/* Closing line */}
            <motion.p
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              Web Applications
            </motion.p>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden text-center">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.h1
              className="text-4xl font-medium text-white mb-6"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hi, I'm <span className="text-purple-300">Prem</span>
            </motion.h1>

            {/* Intro */}
            <motion.p
              className="text-3xl font-medium text-neutral-300 mb-4"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Building
            </motion.p>

            {/* Flipping words - Adjusted for mobile */}
            <motion.div
              className="my-6 flex justify-center"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="scale-90">
                <LayoutTextFlip 
                  words={words} 
                  duration={1800}
                  className="justify-center"
                />
              </div>
            </motion.div>

            {/* Closing line */}
            <motion.p
              className="text-3xl font-medium text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              Web Applications
            </motion.p>
          </motion.div>
        </div>

        {/* Subtle floating animation for the entire container */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default HeroText;