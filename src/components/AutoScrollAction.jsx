// components/AutoScrollAction.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, Children, cloneElement } from 'react';

const AutoScrollAction = ({ children, index = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  // Auto-calculate delay based on index
  const delay = index * 0.1;

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{
        duration: 1,
        delay: delay,
        ease: "easeOut"
    }}
    className={className}
    >
      {children}
    </motion.div>
  );
};

// Wrapper component for multiple children
export const ScrollWrapper = ({ children, className = "" }) => {
  return (
    <div className={`space-y-24 ${className}`}>
      {Children.map(children, (child, index) => (
        <AutoScrollAction index={index}>
          {child}
        </AutoScrollAction>
      ))}
    </div>
  );
};

export default AutoScrollAction;