import React from 'react';
import { FileText, Printer, X } from 'lucide-react';
import { experiences } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl border border-slate-200 max-w-3xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Modal Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-slate-900" />
            <h3 className="font-bold text-lg text-slate-900">
              Resume Preview · Soumya Ranjan Satapathy
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintResume}
              className="px-3.5 py-1.5 rounded-lg border border-slate-300 font-semibold text-xs flex items-center gap-1.5 hover:bg-slate-100 text-slate-700 cursor-pointer transition"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Printable Card */}
        <div className="p-6 bg-[#fbfbfa] border border-slate-200 rounded-xl text-slate-900 font-sans text-xs sm:text-sm space-y-4 shadow-2xs">
          {/* Header */}
          <div className="text-center pb-3 border-b border-slate-200">
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">SOUMYA RANJAN SATAPATHY</h1>
            <p className="text-xs font-semibold text-slate-700 mt-0.5">
              Module Lead | Senior Software Engineer | Angular Specialist | Real-Time Systems (RxJS, Pusher.js, WebSockets)
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Bhubaneswar, Odisha | ssranjan.ak@gmail.com | Open to relocation: Bangalore, Pune
            </p>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 mb-1.5">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-600">
              Senior Software Engineer (Module Lead) with 7+ years specializing in Angular and real-time frontend systems. Deep expertise in RxJS-driven reactive architectures and WebSocket / Pusher.js-based live data synchronization. Owns technical direction for a core module within a production EdTech platform serving thousands of concurrent real-time users. Experience spans R&D-focused engineering units (Wipro Center of Excellence, Xoriant Advanced Technology Group) and product engineering for EdTech platforms.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 mb-1.5">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1 text-slate-600">
              <p><span className="font-semibold text-slate-900">Frontend Core:</span> Angular (Advanced), TypeScript, JavaScript (ES6+), HTML5, CSS3 / SCSS</p>
              <p><span className="font-semibold text-slate-900">Real-Time & State Management:</span> RxJS (Expert), Pusher.js, WebSockets, Subject-based state management</p>
              <p><span className="font-semibold text-slate-900">Testing & Quality:</span> Jasmine, Karma, Virtuoso, TestRail</p>
              <p><span className="font-semibold text-slate-900">Tools & Cloud:</span> AWS Amplify, AWS S3, REST API Integration, Git</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 mb-2">
              Professional Experience
            </h2>

            <div className="space-y-3">
              {experiences.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline font-bold text-xs">
                    <span>{exp.company} {exp.subtext && <span className="font-normal text-slate-500">{exp.subtext}</span>}</span>
                    <span className="font-normal text-[11px] text-slate-500">{exp.location}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-700 font-semibold mb-1">
                    <span>{exp.role}</span>
                    <span className="font-mono text-[11px] text-slate-400">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 mb-1">
                Education
              </h2>
              <p className="text-xs font-bold text-slate-900">B.Tech, Mechanical Engineering</p>
              <p className="text-[11px] text-slate-500">Siksha 'O' Anusandhan, Bhubaneswar (2015 – 2019)</p>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 mb-1">
                Languages
              </h2>
              <p className="text-xs text-slate-600">English (Full Professional) | Hindi (Native) | Odia (Native)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
