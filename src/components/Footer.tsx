import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 py-6 glass-nav no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
        <div>
          Soumya Ranjan Satapathy
        </div>
        <div>
          © 2026
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:ssranjan.ak@gmail.com"
            className="hover:text-slate-900 transition"
          >
            ssranjan.ak@gmail.com
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/soumya-ranjan-satapathy-938a18434"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="https://github.com/ssranjan-ak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
