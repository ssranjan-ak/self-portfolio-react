import React, { useState, useEffect } from 'react';
import { Tab } from './types';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Loupe } from './components/Loupe';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

const getTabFromUrl = (): Tab => {
  const path = window.location.pathname.replace(/^\/+/, '').split('/')[0].toLowerCase();
  if (path === 'contact' || window.location.hash === '#contact') return 'contact';
  if (path === 'loupe' || window.location.hash === '#loupe') return 'loupe';
  return 'about';
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(getTabFromUrl);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);

  const navigateTo = (tab: Tab) => {
    setActiveTab(tab);
    const targetPath = tab === 'about' ? '/about' : `/${tab}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(getTabFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-slate-900 selection:text-white transition-colors duration-200">
      <Navbar activeTab={activeTab} onNavigate={navigateTo} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'about' && (
          <About onOpenResume={() => setShowResumeModal(true)} />
        )}
        {activeTab === 'contact' && <Contact />}
        {activeTab === 'loupe' && <Loupe />}
      </main>

      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />

      <Footer />
    </div>
  );
}
