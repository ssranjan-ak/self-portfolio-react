import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import profilePicture from '../assets/images/profile_picture.jpg';
import { experiences, technicalSkills, softSkills, languages } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    summary: false,
    experience: false,
    skills: false,
    education: false,
  });
  const [expandedRoles, setExpandedRoles] = useState<{ [key: number]: boolean }>({});
  const [openSkills, setOpenSkills] = useState<{ [key: string]: boolean }>({
    technical: false,
    soft: false,
    languages: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleSkillsSub = (key: string) => {
    setOpenSkills((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleRole = (idx: number) => {
    setExpandedRoles((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="space-y-8">
      {/* 1. Top Bar: Download Resume button floating on right */}
      <div className="flex justify-end">
        <button
          onClick={onOpenResume}
          className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 border border-slate-300 font-semibold rounded-lg transition-all duration-200 shadow-2xs hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-xs focus:bg-slate-900 focus:text-white focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 text-sm cursor-pointer"
        >
          <span>Download Resume</span>
          <Download className="w-4 h-4" />
        </button>
      </div>

      {/* Grid layout accommodating mobile order (1 to 5) and desktop 2-column alignment */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 1. Profile Picture and Name: order-1 on mobile, lg:col-span-5 lg:row-start-1 */}
        <div className="order-1 lg:order-none lg:col-span-5 lg:row-start-1 flex flex-col items-center">
          <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden glass-panel border border-slate-300 shadow-xs flex items-center justify-center">
            <img
              src={profilePicture}
              alt="Soumya Ranjan Satapathy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-3.5 text-center">
            <h2 className="text-xl font-bold text-slate-900">Soumya Ranjan Satapathy</h2>
            <p className="text-sm font-medium text-slate-500 mt-0.5">
              Module Lead
            </p>
          </div>
        </div>

        {/* 2. Profile Summary | Career Objective: order-2 on mobile, lg:col-span-7 lg:row-start-1 */}
        <div className="order-2 lg:order-none lg:col-span-7 lg:row-start-1">
          <div className="glass-panel rounded-2xl p-6 sm:p-7 shadow-xs">
            <div
              onClick={() => toggleSection('summary')}
              className="flex items-center justify-between pb-3 border-b border-slate-200 cursor-pointer lg:cursor-default"
            >
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 flex items-center gap-2">
                <span>About Me</span>
              </h3>
              <div className="flex items-center gap-2">
                <span className="lg:hidden text-slate-400">
                  {openSections.summary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>
            </div>

            <div className={`mt-4 ${openSections.summary ? 'block' : 'hidden'} lg:block`}>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                Senior Software Engineer (Module Lead) with <span className="font-semibold text-slate-900">7+ years</span> specializing in <span className="font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Angular</span> and <span className="font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">real-time frontend systems</span>. Deep expertise in RxJS-driven reactive architectures and WebSocket / Pusher.js-based live data synchronization.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600 mt-3.5 font-normal">
                Owns technical direction for a core module within a production EdTech platform serving thousands of concurrent real-time users. Experience spans R&D-focused engineering units (Wipro Center of Excellence, Xoriant Advanced Technology Group) and product engineering for EdTech platforms.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Professional Experience: order-3 on mobile, lg:col-span-5 lg:row-start-2 */}
        <div className="order-3 lg:order-none lg:col-span-5 lg:row-start-2">
          <div className="glass-panel rounded-2xl p-6 shadow-xs">
            <div
              onClick={() => toggleSection('experience')}
              className="flex items-center justify-between pb-3 border-b border-slate-200 cursor-pointer lg:cursor-default"
            >
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-slate-900">
                  Professional Experience
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 bg-slate-100 border border-slate-200 rounded-full text-slate-600">
                  7+ Years
                </span>
                <span className="lg:hidden text-slate-400">
                  {openSections.experience ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>
            </div>

            <div className={`mt-4 space-y-5 ${openSections.experience ? 'block' : 'hidden'} lg:block`}>
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-4 border-l-2 border-slate-200 pb-2 last:pb-0"
                >
                  <div className="absolute -left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-900" />
                  <div className="lg:cursor-default">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-slate-900">
                          {exp.company}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {exp.subtext} · {exp.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-1 mb-2">
                      <span className="text-xs font-semibold font-mono text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                        {exp.role}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* On mobile: collapse/expand responsibilities. On desktop: always shown */}
                  <div className={`${expandedRoles[idx] ? 'block' : 'hidden'} lg:block`}>
                    <ul className="space-y-1.5 text-xs text-slate-600 mt-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-slate-300 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleRole(idx)}
                    className="lg:hidden mt-2 text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {expandedRoles[idx] ? (
                      <>Hide responsibilities <ChevronUp className="w-3 h-3" /></>
                    ) : (
                      <>View responsibilities ({exp.bullets.length}) <ChevronDown className="w-3 h-3" /></>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Skills Section: order-4 on mobile, lg:col-span-7 lg:row-start-2 lg:row-span-2 */}
        <div className="order-4 lg:order-none lg:col-span-7 lg:row-start-2 lg:row-span-2">
          <div className="glass-panel rounded-2xl p-6 sm:p-7 shadow-xs">
            <div
              onClick={() => toggleSection('skills')}
              className="flex items-center justify-between pb-3 border-b border-slate-200 cursor-pointer lg:cursor-default"
            >
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 flex items-center gap-2">
                <span>Skills</span>
              </h3>
              <div className="flex items-center gap-2">
                <span className="lg:hidden text-slate-400">
                  {openSections.skills ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>
            </div>

            <div className={`mt-5 ${openSections.skills ? 'block' : 'hidden'} lg:block`}>
              {/* 1. Technical Skills */}
              <div className="mb-6">
                <div
                  onClick={() => toggleSkillsSub('technical')}
                  className="flex items-center justify-between cursor-pointer lg:cursor-default mb-3"
                >
                  <h4 className="text-sm font-bold tracking-wide uppercase text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center text-xs font-mono font-bold">
                      1
                    </span>
                    Technical Skills
                  </h4>
                  <span className="lg:hidden text-slate-400">
                    {openSkills.technical ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </div>

                <div className={`${openSkills.technical ? 'block' : 'hidden'} lg:block`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {technicalSkills.map((cat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-slate-200/90 bg-white/70 shadow-2xs"
                      >
                        <h5 className="font-semibold text-xs text-slate-800 mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          {cat.category}
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/80 font-medium hover:border-slate-400 hover:bg-slate-100 transition"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Soft Skills & Leadership */}
              <div className="mb-6 pt-5 border-t border-slate-200">
                <div
                  onClick={() => toggleSkillsSub('soft')}
                  className="flex items-center justify-between cursor-pointer lg:cursor-default mb-3"
                >
                  <h4 className="text-sm font-bold tracking-wide uppercase text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center text-xs font-mono font-bold">
                      2
                    </span>
                    Soft Skills & Leadership
                  </h4>
                  <span className="lg:hidden text-slate-400">
                    {openSkills.soft ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </div>

                <div className={`${openSkills.soft ? 'block' : 'hidden'} lg:block`}>
                  <div className="flex flex-col gap-2">
                    {softSkills.map((soft, idx) => (
                      <div
                        key={idx}
                        className="text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white/70 border border-slate-200 text-slate-700 font-medium flex items-center gap-2.5 shadow-2xs"
                      >
                        <span>{soft}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Languages */}
              <div className="pt-5 border-t border-slate-200">
                <div
                  onClick={() => toggleSkillsSub('languages')}
                  className="flex items-center justify-between cursor-pointer lg:cursor-default mb-3"
                >
                  <h4 className="text-sm font-bold tracking-wide uppercase text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center text-xs font-mono font-bold">
                      3
                    </span>
                    Languages
                  </h4>
                  <span className="lg:hidden text-slate-400">
                    {openSkills.languages ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </div>

                <div className={`${openSkills.languages ? 'block' : 'hidden'} lg:block`}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {languages.map((lang, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl border border-slate-200 bg-white/70 text-center shadow-2xs"
                      >
                        <span className="block font-semibold text-xs sm:text-sm text-slate-900">
                          {lang.name}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Education: order-5 on mobile, lg:col-span-5 lg:row-start-3 */}
        <div className="order-5 lg:order-none lg:col-span-5 lg:row-start-3">
          <div className="glass-panel rounded-2xl p-6 shadow-xs">
            <div
              onClick={() => toggleSection('education')}
              className="flex items-center justify-between pb-3 border-b border-slate-200 cursor-pointer lg:cursor-default"
            >
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <span>Education</span>
              </h3>
              <div className="lg:hidden text-slate-400">
                {openSections.education ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </div>
            <div className={`mt-3 ${openSections.education ? 'block' : 'hidden'} lg:block`}>
              <h4 className="font-bold text-sm sm:text-base text-slate-900">
                B.Tech, Mechanical Engineering
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Siksha 'O' Anusandhan (Deemed University), Bhubaneswar
              </p>
              <div className="flex items-center justify-between mt-2.5">
                <span className="text-xs font-mono text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                  2015 – 2019
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
