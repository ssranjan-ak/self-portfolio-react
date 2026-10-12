import React from 'react';
import { Chrome, ArrowRight, WifiOff, EyeOff, Cpu, ExternalLink } from 'lucide-react';

export const Loupe: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 1. Loupe by SR Title, Overview & Store Link */}
      <div>
        <div className="p-5 sm:p-6 glass-panel rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600 bg-slate-50 shadow-2xs">
                Logo
              </div>
              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
                  Loupe by SR
                </h2>
              </div>
            </div>

            <a
              href="https://chromewebstore.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white text-slate-900 border border-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer shadow-2xs hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-xs focus:bg-slate-900 focus:text-white focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            >
              <Chrome className="w-4 h-4" />
              <span>View On Chrome Web Store</span>
            </a>
          </div>

          {/* Overview details */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              Loupe is a deterministic, local-first web accessibility evaluation Chrome Extension engineered to bridge the critical gap between accessibility violation discovery and code remediation.
            </p>
            <p>
              The idea was born out of a major engineering frustration: traditional audit tools flood developers with abstract, cluttered lists of errors without showing where defects live on the live page, forcing teams to manually decipher cryptic logs and craft prompts from scratch.
            </p>
            <p>
              Loupe solves this by operating natively within Google Chrome via the Side Panel API and DevTools, projecting non-destructive visual overlay boundaries over live DOM trees in real-time.
            </p>
            <p>
              Powered by axe-core, it translates complex engine logs into plain-language impact breakdowns and features a built-in AI remediation generator that transfers structured, context-aware fix prompts directly into AI coding assistants — all with 100% local-first data privacy and zero telemetry.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Screenshot of the extension running */}
      <div>
        <div className="glass-panel rounded-2xl p-5 shadow-xs border border-slate-200/90">
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-center justify-center p-6 text-center">
            <span className="text-base sm:text-lg font-medium text-slate-400">
              Screenshot of the extension running
            </span>
          </div>
        </div>
      </div>

      {/* 3. Core Workflow Box */}
      <div>
        <div className="glass-panel rounded-2xl p-5 shadow-xs border border-slate-200/90">
          <h3 className="font-bold text-base text-slate-900 pb-3 border-b border-slate-200 mb-4 text-center">
            Core Workflow
          </h3>

          {/* Flow Diagram */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
              {/* Step 1 */}
              <div className="flex-1 w-full p-2.5 rounded-lg glass-panel border border-slate-200 text-xs font-semibold text-slate-800">
                <span className="block text-[10px] text-slate-900 font-mono uppercase font-bold">Step 1</span>
                One click scan
                <span className="block text-[11px] font-normal text-slate-500">(Live DOM)</span>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 sm:rotate-0 shrink-0" />

              {/* Step 2 */}
              <div className="flex-1 w-full p-2.5 rounded-lg glass-panel border border-slate-200 text-xs font-semibold text-slate-800">
                <span className="block text-[10px] text-slate-900 font-mono uppercase font-bold">Step 2</span>
                Visual Overlay
                <span className="block text-[11px] font-normal text-slate-500">(Live Highlights)</span>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 sm:rotate-0 shrink-0" />

              {/* Step 3 */}
              <div className="flex-1 w-full p-2.5 rounded-lg glass-panel border border-slate-200 text-xs font-semibold text-slate-800">
                <span className="block text-[10px] text-slate-900 font-mono uppercase font-bold">Step 3</span>
                Inspect - Plain Language Triage
                <span className="block text-[11px] font-normal text-slate-500">(What, Why, How)</span>
              </div>
            </div>

            {/* Step 4: Standardized AI fix prompt */}
            <div className="pt-2 flex flex-col items-center">
              <div className="w-0.5 h-4 bg-slate-300 mb-1" />
              <div className="w-full sm:w-3/4 p-2.5 rounded-lg border border-slate-300 bg-slate-100 text-center text-xs font-bold text-slate-800 shadow-2xs">
                <span className="block text-[10px] uppercase tracking-wider font-mono text-slate-600">Actionable Output</span>
                Standardized AI fix prompt
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Features Section: Visual Overlay Engine + AI Fix Prompt Generator */}
      <div>
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-5">
          Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1: Visual Overlay Engine (Placeholder) */}
          <div className="glass-panel rounded-2xl p-5 shadow-xs space-y-4 border border-slate-200/90">
            <h4 className="font-bold text-base text-slate-900">
              Visual Overlay Engine
            </h4>

            {/* Screenshot Placeholder */}
            <div className="w-full h-52 sm:h-60 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-center justify-center text-center">
              <span className="text-sm font-medium text-slate-400">
                Screenshot
              </span>
            </div>
          </div>

          {/* Feature 2: AI Fix Prompt Generator (Placeholder) */}
          <div className="glass-panel rounded-2xl p-5 shadow-xs space-y-4 border border-slate-200/90">
            <h4 className="font-bold text-base text-slate-900">
              AI Fix Prompt Generator
            </h4>

            {/* Screenshot Placeholder */}
            <div className="w-full h-52 sm:h-60 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-center justify-center text-center">
              <span className="text-sm font-medium text-slate-400">
                Screenshot
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Privacy First Architecture */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/90">
        <h3 className="font-bold text-lg text-slate-900 pb-4 border-b border-slate-200 mb-6 text-center sm:text-left">
          Privacy First Architecture
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {/* 1. No Network Request */}
          <div className="flex flex-col items-center space-y-2.5 p-3">
            <div className="w-14 h-14 rounded-full border border-slate-200 bg-slate-100 text-slate-700 flex items-center justify-center shadow-2xs">
              <WifiOff className="w-6 h-6 text-slate-700" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">
              No Network Request
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Zero outgoing HTTP calls. Analysis executes 100% locally inside the webpage's isolated sandbox.
            </p>
          </div>

          {/* 2. Zero Telemetry */}
          <div className="flex flex-col items-center space-y-2.5 p-3">
            <div className="w-14 h-14 rounded-full border border-slate-200 bg-slate-100 text-slate-700 flex items-center justify-center shadow-2xs">
              <EyeOff className="w-6 h-6 text-slate-700" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">
              Zero Telemetry
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              No analytics pings, tracking cookies, or logging. Your source code and DOM never leave your browser.
            </p>
          </div>

          {/* 3. On-board Axe-core engine */}
          <div className="flex flex-col items-center space-y-2.5 p-3">
            <div className="w-14 h-14 rounded-full border border-slate-200 bg-slate-100 text-slate-700 flex items-center justify-center shadow-2xs">
              <Cpu className="w-6 h-6 text-slate-700" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">
              On-board Axe-core engine
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Bundles Deque's industry-standard axe-core testing library directly within the extension package.
            </p>
          </div>
        </div>
      </div>

      {/* 6. Bottom Strip matching wireframe */}
      <div className="glass-panel rounded-xl p-4 px-6 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-semibold text-slate-600 gap-2 shadow-xs">
        <div>Developed by Soumya Ranjan S.</div>
        <div className="font-mono text-xs px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
          Version 1.0
        </div>
        <a
          href="https://chromewebstore.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-900 hover:underline flex items-center gap-1"
        >
          Find Loupe on Chrome Web Store <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
