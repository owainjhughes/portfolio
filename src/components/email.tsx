import React, { useState } from "react";

interface EmailModalProps {
  show: boolean;
  onClose: () => void;
  email: string;
}

export default function EmailModal({ show, onClose, email }: EmailModalProps) {
  const [copied, setCopied] = useState(false);

  if (!show) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
      <div className="bg-black text-white rounded-2xl shadow-2xl p-10 flex flex-col items-center min-w-[500px] max-w-[700px] border border-gray-500 transition-all duration-300 ease-out opacity-100 scale-100 animate-modal-in"
        style={{
          animation: "modal-in 0.25s cubic-bezier(0.4,0,0.2,1)"
        }}>
        <h2 className="text-2xl font-extrabold mb-2 text-white tracking-tight">Contact Me</h2>
        <span className="mb-2 text-center text-base text-gray-200">You can reach me at:</span>
        <div className="mb-6 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${email}`}
              className="select-all break-all text-lg font-mono bg-black/40 px-3 py-2 rounded-lg border border-gray-500 hover:underline transition text-center">
              {email}
            </a>
            <button
              onClick={handleCopy}
              className="ml-2 px-2 py-2 rounded-lg bg-gray-800 border border-gray-600 hover:bg-gray-700 transition relative"
              aria-label="Copy email"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2" />
                <rect x="3" y="3" width="13" height="13" rx="2" strokeWidth="2" />
              </svg>
              {copied && (
                <span className="absolute left-1/2 -translate-x-1/2 top-[-1.8rem] text-green-400 font-semibold text-xs animate-fade-fizzle pointer-events-none select-none">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
        <button
          className="group relative w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-200 flex items-center justify-center"
          onClick={onClose}
          aria-label="Close modal">
          <svg 
            className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <style jsx global>{`
        @keyframes modal-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fade-fizzle {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.95);
          }
          20% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          80% {
            opacity: 1;
            transform: translateY(-8px) scale(1.05);
          }
          100% {
            opacity: 0;
            transform: translateY(-16px) scale(1.1);
          }
        }
        .animate-fade-fizzle {
          animation: fade-fizzle 1.2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}