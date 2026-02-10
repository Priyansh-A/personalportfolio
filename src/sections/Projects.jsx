import { useState, useEffect } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  
  const [preview, setPreview] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (!isMobile) {
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
    }
  };

  // Calculate preview image size based on screen width - SIMPLIFIED
  const getPreviewSize = () => {
    if (windowWidth < 400) {
      return { width: '65vw', height: '40vw' }; // Very small screens
    } else if (windowWidth < 640) {
      return { width: '55vw', height: '35vw' }; // Small mobile
    } else if (windowWidth < 768) {
      return { width: '45vw', height: '28vw' }; // Tablet
    } else {
      return { width: '18rem', height: '12rem' }; // Desktop (slightly smaller)
    }
  };

  const previewSize = getPreviewSize();

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing overflow-x-hidden"
    >
      {/* Responsive heading - smaller on mobile */}
      <h2 className="text-3xl sm:text-4xl md:text-heading font-bold mb-8 md:mb-12">
        My Selected Projects
      </h2>
      
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-8 md:mt-12 h-1px w-full" />
      
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      
      {/* Responsive preview image with better mobile handling */}
      {preview && !isMobile && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover rounded-lg shadow-lg pointer-events-none"
          src={preview}
          style={{ 
            x: springX, 
            y: springY,
            width: previewSize.width,
            height: previewSize.height,
            maxWidth: '85vw', // Slightly smaller to prevent edge overflow
            maxHeight: '45vh'
          }}
          alt="Project preview"
        />
      )}
    </section>
  );
};

export default Projects;