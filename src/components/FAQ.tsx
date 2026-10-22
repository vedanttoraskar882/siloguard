import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What is SiloGuard?',
      answer:
        'A planned assessment-and-software service that helps grain, feed and flour sites maintain machinery checks, certificates, repairs and compliance evidence between independent assessments.',
    },
    {
      id: 'faq-2',
      question: 'Who is it designed for?',
      answer:
        'Grain and farm stores, feed mills, flour mills, seed plants and multi-site operators. Maltings templates are planned from Year 3.',
    },
    {
      id: 'faq-3',
      question: 'Does SiloGuard replace a DSEAR assessment?',
      answer:
        'No. It combines a competent independent baseline with ongoing evidence management. It does not replace professional judgement or the site duty-holder’s responsibilities.',
    },
    {
      id: 'faq-4',
      question: 'Can we use an existing assessment?',
      answer:
        'A recent competent assessment can be verified and digitised during the baseline visit, rather than automatically repeated. Site suitability is reviewed during onboarding.',
    },
    {
      id: 'faq-5',
      question: 'Will checks work without mobile signal?',
      answer:
        'Offline mobile capture is planned for the initial release. Records will synchronise when connectivity returns. This is a future product capability, not functionality provided by this landing page.',
    },
    {
      id: 'faq-6',
      question: 'Do we need sensors?',
      answer:
        'Sensor monitoring is not required for the initial proposition. The planned workflow uses machine QR tags, checks and photographs. Sensor and predictive research is planned for Year 4 onward and is outside the funded initial build.',
    },
    {
      id: 'faq-7',
      question: 'How quickly can a site be onboarded?',
      answer:
        'The target is a completed baseline within 21 days of order, followed by configuration and training. Scheduling and site readiness affect the timeline.',
    },
    {
      id: 'faq-8',
      question: 'What does the baseline fee cover?',
      answer:
        'The independent visit that establishes or verifies the site record, captures machinery requirements and controls, and supports QR-linked setup. The baseline is charged separately from the subscription.',
    },
    {
      id: 'faq-9',
      question: 'Can we export records?',
      answer:
        'The planned initial platform will export PDF and CSV evidence packs for selected dates. Scheduled exports and an insurer/auditor portal are planned for Year 2.',
    },
    {
      id: 'faq-10',
      question: 'Who owns the data?',
      answer:
        'Under the planned service model, customers own their site data and SiloGuard processes it under a data processing agreement. This is separate from the browser-only enquiry form on this landing page.',
    },
    {
      id: 'faq-11',
      question: 'Is the multi-site dashboard available immediately?',
      answer:
        'No. It is planned for Year 2. The additional £290 monthly group licence begins from Month 13 for eligible group accounts. Peer benchmarking follows in Year 3, subject to sufficient data.',
    },
    {
      id: 'faq-12',
      question: 'Does a score certify that our site is safe?',
      answer:
        'No. Scores and alerts help prioritise evidence gaps and actions. SiloGuard does not certify equipment, independently classify zones or guarantee safety or compliance.',
    },
    {
      id: 'faq-13',
      question: 'How is the pilot enquiry saved?',
      answer:
        'This landing-page form stores entries only in localStorage in the browser used to submit them. Entries are not sent to SiloGuard, and submitting the form does not confirm a pilot place or payment.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 mb-3">
            Questions &amp; Answers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear, transparent details on SiloGuard’s planned service boundaries, technology and commercial model.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-3.5" role="region" aria-label="Frequently Asked Questions Accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-emerald-600/60 bg-emerald-50/20 shadow-sm'
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-emerald-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-180 bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
