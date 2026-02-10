import { mySocials } from "../constants";
import { useState } from "react";

const Footer = () => {
  return (
    <section className="px-4 pb-6 text-sm text-neutral-400 sm:px-6 lg:px-8">
      {/* Divider line */}
      <div className="mb-6 bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
      
      <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start">
        {/* Legal links - Centered on mobile, left on desktop */}
        <div className="flex flex-col items-center gap-3 lg:items-start lg:gap-4 lg:flex-1">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <a 
              href="/terms" 
              className="transition-colors hover:text-white hover:underline text-center sm:text-left"
            >
              Terms & Conditions
            </a>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <a 
              href="/privacy" 
              className="transition-colors hover:text-white hover:underline text-center sm:text-left"
            >
              Privacy Policy
            </a>
          </div>
          
          {/* Mobile-only copyright */}
          <p className="text-sm text-neutral-500 lg:hidden text-center">
            © 2026 Prem. All rights reserved.
          </p>
        </div>
        {/* Social & copyright - Right aligned on desktop */}
        <div className="flex flex-col items-center gap-4 lg:items-end lg:flex-1 lg:gap-3">
          <div className="flex gap-4">
            {mySocials.map((social, index) => (
              <a 
                href={social.href} 
                key={index}
                className="transition-transform hover:scale-110 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
              >
                <img 
                  src={social.icon} 
                  className="w-5 h-5 sm:w-6 sm:h-6" 
                  alt={social.name} 
                />
              </a>
            ))}
          </div>
          
          {/* Desktop-only copyright */}
          <p className="hidden text-sm text-neutral-500 lg:block text-right">
            © 2026 Prem. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Mobile social links alternative layout - optional */}
      <div className="flex flex-col items-center gap-3 mt-6 lg:hidden">
        <p className="text-xs text-neutral-500 text-center">
          Connect with me on social media
        </p>
      </div>
    </section>
  );
};

export default Footer;