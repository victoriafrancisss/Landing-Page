'use client';

import { ArrowRight } from 'lucide-react';

const CTA_URL = "https://calendly.com/victoriafranciss/automation-discovery-call";
const CTA_LABEL = "Free Financial Accuracy Snapshot™";

export function StickyCtaBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 py-3 backdrop-blur-xl bg-[#0A0A0A]/95 border-t border-[#262626] shadow-[0_-4px_24px_rgba(0,0,0,0.3)] transition-transform duration-300"
      role="banner"
      aria-label="Book your free snapshot"
    >
      <a
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/95 active:scale-[0.98] transition-transform"
      >
        {CTA_LABEL}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
