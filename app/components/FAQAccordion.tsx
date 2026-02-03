'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type FAQItem = { question: string; answer: string };

const defaultItems: FAQItem[] = [
  {
    question: 'Do we need to change our tools or systems?',
    answer: 'No. We work with the tools you already use—Excel, Google Sheets, Shopify, Amazon, accounting software, etc. The goal is to remove manual work, not force you into new platforms.',
  },
  {
    question: 'Is this overkill for a small team?',
    answer: 'Most of our clients have 5–50 employees. If someone on your team is manually updating spreadsheets every week, automation usually pays for itself very quickly.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Simple automations are usually delivered within 5–7 days. You start saving time as soon as the workflow goes live.',
  },
  {
    question: 'What if something breaks or the data changes?',
    answer: "We build in error handling and logging so issues are caught early. If a source changes or something fails, you'll know exactly what happened and why.",
  },
  {
    question: 'Is our data secure?',
    answer: "Yes. We follow best practices for handling credentials and sensitive data. Access is limited to what's required, and nothing is shared without your approval.",
  },
  {
    question: 'What does this usually cost?',
    answer: "Most single-workflow automations range from $500–$1,000, depending on complexity. During the free audit, we'll tell you exactly what's worth automating and what isn't.",
  },
  {
    question: "What if automation isn't a good fit for us?",
    answer: "Then we'll tell you. The audit is designed to find clear wins—not to force a project that won't deliver value.",
  },
];

export function FAQAccordion({ items = defaultItems }: { items?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0 rounded-xl border border-cyan-500/30 overflow-hidden bg-gray-900/40">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-cyan-500/20 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-3 py-3 px-4 text-left hover:bg-gray-800/40 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-white pr-2">
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-cyan-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-3 pt-0">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
