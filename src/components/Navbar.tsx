import React, { useState } from 'react';
import { Search, Github, Linkedin, Menu, X } from 'lucide-react';
import { Tab } from '../types';

interface NavbarProps {
  activeTab: Tab;
  onNavigate: (tab: Tab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleNavClick = (tab: Tab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 glass-nav no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo / Author Name */}
        <div className="flex flex-col">
          <button
            onClick={() => handleNavClick('about')}
            className="text-left font-bold text-xl sm:text-2xl tracking-tight text-slate-900 hover:text-slate-700 transition cursor-pointer"
          >
            Soumya Ranjan Satapathy
          </button>
          <span className="hidden sm:block text-xs font-mono text-slate-500">
            Module Lead · 7+ Years Exp · Front-end Specialist
          </span>
        </div>

        {/* Right Navigation Controls */}
        <div className="flex items-center">
          {/* Hamburger Button on Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100 transition cursor-pointer shadow-2xs"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            {/* Nav Links */}
            <nav className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base">
              <button
                onClick={() => handleNavClick('about')}
                className={`px-3.5 py-1.5 font-semibold transition rounded-full border ${
                  activeTab === 'about'
                    ? 'text-white bg-slate-900 border-slate-900 shadow-xs'
                    : 'text-slate-600 border-transparent hover:border-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-2xs'
                }`}
              >
                About
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3.5 py-1.5 font-semibold transition rounded-full border ${
                  activeTab === 'contact'
                    ? 'text-white bg-slate-900 border-slate-900 shadow-xs'
                    : 'text-slate-600 border-transparent hover:border-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-2xs'
                }`}
              >
                Contact
              </button>

              <button
                onClick={() => handleNavClick('loupe')}
                className={`px-3.5 py-1.5 font-semibold transition rounded-full flex items-center gap-1.5 border ${
                  activeTab === 'loupe'
                    ? 'text-white bg-slate-900 border-slate-900 shadow-xs'
                    : 'text-slate-600 border-transparent hover:border-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-2xs'
                }`}
                title="Loupe - Accessibility Checker"
              >
                Loupe
              </button>
            </nav>

            {/* Separator */}
            <div className="h-5 w-px bg-slate-200" />

            {/* Icon Buttons */}
            <div className="flex items-center space-x-2">
              {/* GitHub */}
              <a
                href="https://github.com/ssranjan-ak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full border border-slate-200 bg-white/80 hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition shadow-2xs hover:shadow-xs"
                title="GitHub URL"
              >
                <Github className="w-4.5 h-4.5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/soumya-ranjan-satapathy-938a18434"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full border border-slate-200 bg-white/80 hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition shadow-2xs hover:shadow-xs"
                title="LinkedIn URL"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden glass-panel border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg z-40">
          <nav className="flex flex-col space-y-1 text-base font-semibold">
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left px-3 py-2 rounded-lg transition border ${
                activeTab === 'about'
                  ? 'text-white bg-slate-900 font-bold border-slate-900'
                  : 'text-slate-700 border-transparent hover:border-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-2xs'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left px-3 py-2 rounded-lg transition border ${
                activeTab === 'contact'
                  ? 'text-white bg-slate-900 font-bold border-slate-900'
                  : 'text-slate-700 border-transparent hover:border-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-2xs'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick('loupe')}
              className={`text-left px-3 py-2 rounded-lg flex items-center gap-2 transition border ${
                activeTab === 'loupe'
                  ? 'text-white bg-slate-900 font-bold border-slate-900'
                  : 'text-slate-700 border-transparent hover:border-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-2xs'
              }`}
            >
              <Search className="w-4 h-4" />
              Loupe
            </button>
          </nav>

          <div className="pt-3 border-t border-slate-200 flex items-center gap-3">
            <a
              href="https://github.com/ssranjan-ak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-slate-200 bg-white/80 text-xs font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-xs text-slate-700 transition"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/soumya-ranjan-satapathy-938a18434"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-slate-200 bg-white/80 text-xs font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-xs text-slate-700 transition"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
