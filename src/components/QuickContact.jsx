import React from 'react';
import { mySocials } from '../constants';

const QuickContact = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume-1.pdf';
    link.download = 'Prem_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 border rounded-2xl bg-slate-800/40 border-slate-700/50 w-full max-w-400px] hover:border-slate-600/60 transition-all duration-300 backdrop-blur-sm">
      <h4 className="mb-2 text-base font-semibold text-slate-100">Connect</h4>
      
      {/* Social icons only - reduced margin-bottom */}
      <div className="flex items-center gap-2 mb-3">
        {/* Email icon */}
        <a 
          href="mailto:premawasthi428@gmail.com"
          className="p-2 rounded-lg bg-slate-700/40 hover:bg-slate-600/50 transition-all duration-200 group/email hover:scale-105"
          title="Email"
        >
          <svg 
            className="w-4 h-4 text-slate-300 group-hover/email:text-slate-100 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
            />
          </svg>
        </a>
        
        {/* Social icons from constants */}
        {mySocials.map((social) => (
          <a 
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-700/40 hover:bg-slate-600/50 transition-all duration-200 group/social hover:scale-105"
            title={social.name}
          >
            <img 
              src={social.icon} 
              className="w-4 h-4 opacity-90 group-hover/social:opacity-100 transition-opacity" 
              alt={social.name} 
            />
          </a>
        ))}
      </div>
      
      {/* Compact resume button */}
      <button 
        onClick={handleDownloadResume}
        className="w-full py-2 rounded-lg bg-slate-700/40 hover:bg-slate-600/50 transition-all duration-200 text-slate-100 text-sm font-medium flex items-center justify-center gap-1.5 group/btn hover:scale-[1.02] active:scale-[0.98] border border-slate-600/40"
      >
        <svg 
          className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
          />
        </svg>
        Resume
      </button>
    </div>
  );
};

export default QuickContact;