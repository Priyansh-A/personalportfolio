import { mySocials } from "../constants";
import { useState } from "react";

const Footer = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Method 1: Direct download (if file is in public folder)
      const pdfUrl = "assets/resume-1.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Prem_Resume_2026.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Track download with analytics
      console.log("Resume downloaded successfully");
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download resume. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

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

        {/* Download section - Always centered */}
        <div className="flex flex-col items-center justify-center lg:flex-none">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center justify-center gap-2 px-4 py-2.5 transition-all rounded-lg bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed group w-full max-w-xs sm:max-w-sm"
          >
            {isDownloading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span className="whitespace-nowrap">Downloading...</span>
              </>
            ) : (
              <>
                <img 
                  src="assets/download.svg" 
                  className="w-4 h-4 group-hover:animate-bounce" 
                  alt="Download" 
                />
                <span className="whitespace-nowrap text-sm sm:text-base">
                  Download Resume (PDF)
                </span>
              </>
            )}
          </button>
          
          {/* Optional subtitle */}
          <p className="mt-2 text-xs text-neutral-500 text-center max-w-xs">
            Updated for 2026
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