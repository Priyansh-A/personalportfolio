import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

function Navigation() {
  return (
    <ul className="flex items-center space-x-6 lg:space-x-8">
    {['Home', 'About', 'Projects', 'Contact'].map((item) => (
        <li key={item} className="nav-li">
        <a 
            href={`#${item.toLowerCase()}`} 
            className="nav-link relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-white group"
        >
            {item}
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-linear-to-r from-purple-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
        </a>
        </li>
      ))}
    </ul>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:px-6 overflow-x-hidden">
      <motion.div 
        className="relative w-full max=w-[90vw]"
        animate={{ 
        width: isScrolled ? '60%' : '80%',
        }}
        transition={{ 
        duration: 0.4,
        ease: "easeInOut"
        }}
      >
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-500/20 to-violet-500/20 blur-xl opacity-60"></div>
        
        <motion.div 
          className="relative backdrop-blur-xl border border-white/10 bg-linear-to-b from-white/10 to-white/5 rounded-2xl shadow-2xl"
          animate={{
            paddingTop: isScrolled ? '0.5rem' : '0.75rem',
            paddingBottom: isScrolled ? '0.5rem' : '0.75rem',
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-1 sm:py-0">
              {/* Logo */}
              <motion.a 
                href="#home" 
                className="text-xl font-bold bg-linear-to-r from-purple-300 to-white bg-clip-text text-transparent transition-all duration-300 hover:scale-105 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Prem
              </motion.a>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex">
                <Navigation />
              </nav>
              
              {/* Mobile Menu Button */}
              <motion.button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex cursor-pointer text-neutral-300 hover:text-white focus:outline-none md:hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative w-8 h-8">
                  {isOpen ? (
                    <motion.svg 
                    className="w-8 h-8" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ rotate: -180 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </motion.svg>
                  ) : (
                    <motion.svg 
                    className="w-8 h-8" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </motion.svg>
                  )}
                </div>
              </motion.button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <motion.div 
            className="overflow-hidden md:hidden"
            initial={false}
            animate={{ 
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ 
              height: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.2 }
            }}
          >
            <nav className="px-2 pt-2 pb-4 space-y-2 border-t border-white/10 mt-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-base font-medium rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    x: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Nav;