import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-sm">
      {/* Backdrop click to close */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={closeModal}
      />
      
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] my-8 overflow-hidden border shadow-sm rounded-2xl bg-linear-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-full top-4 right-4 bg-black/50 hover:bg-gray-700/70 backdrop-blur-sm transition-colors"
          aria-label="Close modal"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="Close" />
        </button>
        
        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Image section */}
          <div className="relative">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 md:h-64 object-cover rounded-t-2xl"
            />
          </div>
          
          {/* Content section */}
          <div className="p-5 md:p-6">
            <h5 className="mb-3 text-2xl font-bold text-white">{title}</h5>
            
            <p className="mb-4 font-normal text-neutral-300">{description}</p>
            
            {subDescription.map((subDesc, index) => (
              <p 
                key={index} 
                className="mb-3 font-normal text-neutral-400"
              >
                {subDesc}
              </p>
            ))}
            
            {/* Tags section */}
            <div className="mt-6 mb-4">
              <p className="mb-3 text-sm font-medium text-neutral-400">Technologies used:</p>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    title={tag.name}
                    className="w-10 h-10 rounded-lg hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col items-start justify-between gap-4 pt-4 mt-6 border-t border-white/10 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span 
                    key={tag.id}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-neutral-300"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              
              <a 
                className="inline-flex items-center gap-2 px-4 py-2 font-medium transition-all rounded-lg bg-white/10 hover:bg-white/20 text-neutral-200 hover:text-white group"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <img 
                  src="assets/arrow-up.svg" 
                  className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" 
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;