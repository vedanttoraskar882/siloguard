import React, { useRef } from 'react';
import { Shield, ArrowUp, ChevronRight } from 'lucide-react';

interface FooterProps {
  onRequestPilot: (triggerRef?: React.RefObject<HTMLElement | null>) => void;
  onOpenPrivacyNotice: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPilot, onOpenPrivacyNotice }) => {
  const currentYear = new Date().getFullYear();
  const pilotButtonRef = useRef<HTMLButtonElement>(null);

  const sections = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Market Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Footer', href: '#footer' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-12">
        {/* Top Footer Section: Wordmark + Description + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          <div className="space-y-3 max-w-xl">
            {/* Wordmark */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
                  aria-hidden="true"
                >
                  <path d="M5 21V9a7 7 0 0 1 14 0v12" />
                  <path d="M4 21h16" />
                  <path d="M9 5l3-3 3 3" />
                  <path d="M12 2v3" />
                  <path d="M9 13h6" />
                  <path d="M9 17h6" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                SiloGuard
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Independent baseline assessments and practical compliance-evidence management for grain, feed and flour sites.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400/90 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>In development • Founding-site enquiries open • Core platform go-live planned for Month 6</span>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              ref={pilotButtonRef}
              type="button"
              onClick={() => onRequestPilot(pilotButtonRef)}
              className="px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Request a Pilot</span>
              <ChevronRight className="w-4 h-4 text-emerald-200" />
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="px-4 py-3 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to top</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Links */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Page Navigation
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer Section Navigation">
            {sections.map((sec) => (
              <a
                key={sec.name}
                href={sec.href}
                className="text-sm text-slate-400 hover:text-emerald-400 transition-colors focus:outline-none focus-visible:underline"
              >
                {sec.name}
              </a>
            ))}
            <button
              type="button"
              onClick={onOpenPrivacyNotice}
              className="text-sm text-slate-400 hover:text-emerald-400 transition-colors focus:outline-none focus-visible:underline text-left"
            >
              Browser Storage Notice
            </button>
          </nav>
        </div>

        {/* Mandatory Service-Scope Statement */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800/80 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <Shield className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-300">Service Scope Notice:</strong> SiloGuard supports compliance evidence management. It does not independently classify hazardous zones, certify equipment or replace competent professional judgement. Site duty-holders retain responsibility.
          </p>
        </div>

        {/* Bottom Bar: Dynamic Copyright & Legal Note */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} SiloGuard. All rights reserved. British English and UK commercial standards.
          </div>
          <div>
            Planned for United Kingdom grain and milling duty-holders.
          </div>
        </div>
      </div>
    </footer>
  );
};
