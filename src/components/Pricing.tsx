import React, { useRef } from 'react';
import {
  Check,
  Building,
  Factory,
  Layers,
  ArrowRight,
  Info,
  Calendar,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface PricingProps {
  onRequestPilot: (triggerRef?: React.RefObject<HTMLElement | null>) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRequestPilot }) => {
  const storeBtnRef = useRef<HTMLButtonElement>(null);
  const millBtnRef = useRef<HTMLButtonElement>(null);
  const groupBtnRef = useRef<HTMLButtonElement>(null);

  const additionalServices = [
    {
      service: 'Optional re-verification visit',
      pricing: '£750 per visit, at 12, 24 and 48 months',
      details: 'On-site assessor verification of records, machine alterations and physical tag integrity.',
    },
    {
      service: 'Baseline renewal assessment',
      pricing: '60% of the relevant tier’s baseline fee, every 36 months',
      details: 'Full three-yearly assessment review calculated against standard baseline fees.',
    },
    {
      service: 'Additional site training day',
      pricing: 'Quoted on request',
      details: 'On-site operational training for new shift teams and maintenance staff.',
    },
    {
      service: 'Integration services',
      pricing: 'Quoted, from Year 3',
      details: 'REST API data links for enterprise maintenance management systems (CMMS).',
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 mb-3">
            Market Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Clear pricing for stores, mills and groups.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Planned launch pricing. All prices exclude VAT. Each site requires a separate baseline assessment in addition to its subscription.
          </p>
        </div>

        {/* Founding-Site Offer Highlight Banner */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 text-white border border-emerald-800/60 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="space-y-2 relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Year 1 Founding-Site Baseline Offer</span>
            </div>
            <p className="text-base sm:text-lg text-emerald-100 font-semibold leading-relaxed">
              “The Year 1 founding-site offer reduces the baseline-assessment fee by 20%, in exchange for feedback, a case study and a reference call.”
            </p>
            <p className="text-xs text-emerald-300/80">
              * The discount applies to baseline assessment fees only. This is not a free pilot, free subscription or ongoing subscription discount.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestPilot()}
            className="shrink-0 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 relative z-10 flex items-center gap-2"
          >
            <span>Enquire for Founding Place</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Principal Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Store */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 hover:shadow-md transition-all">
            <div className="space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Store</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  For a single grain or farm store with up to approximately 20 registered machines.
                </p>
              </div>

              {/* Monthly Subscription Price */}
              <div className="py-4 border-y border-slate-100">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">£89</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">per site / month</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">Excludes VAT • Billed monthly on annual contract</span>
              </div>

              {/* Baseline Fees */}
              <div className="space-y-2.5 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Baseline Assessment Fees:
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Standard baseline fee:</span>
                  <span className="font-bold text-slate-900">£1,950</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-200/60">
                  <span className="font-semibold text-emerald-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Year 1 founding-site:
                  </span>
                  <span className="font-black text-emerald-700 text-sm">£1,560</span>
                </div>
              </div>

              {/* Feature Inclusions */}
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Up to approx. 20 registered machine records</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>QR tags and machine-specific checklist templates</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Offline mobile capture &amp; photo logging</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Corrective actions, repair log &amp; certificate tracking</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Dated PDF &amp; CSV evidence pack exports</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>No per-user charge on site</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                ref={storeBtnRef}
                type="button"
                onClick={() => onRequestPilot(storeBtnRef)}
                className="w-full py-3.5 px-4 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Mill */}
          <div className="bg-white rounded-3xl border-2 border-emerald-600 p-8 flex flex-col justify-between shadow-xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Most Common for Processing Sites
            </div>

            <div className="space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Mill</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  For feed mills, flour mills and seed plants with larger machine registers.
                </p>
              </div>

              {/* Monthly Subscription Price */}
              <div className="py-4 border-y border-slate-100">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">£189</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">per site / month</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">Excludes VAT • Billed monthly on annual contract</span>
              </div>

              {/* Baseline Fees */}
              <div className="space-y-2.5 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Baseline Assessment Fees:
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Standard baseline fee:</span>
                  <span className="font-bold text-slate-900">£3,450</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-200/60">
                  <span className="font-semibold text-emerald-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Year 1 founding-site:
                  </span>
                  <span className="font-black text-emerald-700 text-sm">£2,760</span>
                </div>
              </div>

              {/* Feature Inclusions */}
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Larger machine registers &amp; multi-deck processing lines</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Intensive milling aspiration &amp; ignition logs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>QR tags and machine-specific checklist templates</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Offline mobile capture &amp; photo logging</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Corrective actions, repair log &amp; certificate tracking</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>No per-user charge on site</span>
                </li>
              </ul>

              {/* Maltings Note */}
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 text-[11px] text-amber-900 leading-snug">
                <strong>Sector Note:</strong> Maltings compliance templates are planned from Year 3.
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                ref={millBtnRef}
                type="button"
                onClick={() => onRequestPilot(millBtnRef)}
                className="w-full py-3.5 px-4 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Group Site */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 hover:shadow-md transition-all">
            <div className="space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Group Site</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  For each site within a multi-site operator account.
                </p>
              </div>

              {/* Monthly Subscription Price */}
              <div className="py-4 border-y border-slate-100">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">£159</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">per site / month</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">Excludes VAT • Billed monthly on annual contract</span>
              </div>

              {/* Baseline Fees */}
              <div className="space-y-2.5 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Baseline Assessment Fees:
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Standard baseline fee:</span>
                  <span className="font-bold text-slate-900">£2,950 per site</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-200/60">
                  <span className="font-semibold text-emerald-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Year 1 founding-site:
                  </span>
                  <span className="font-black text-emerald-700 text-sm">£2,360 per site</span>
                </div>
              </div>

              {/* Feature Inclusions */}
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Per-site rate for multi-site operator accounts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Standardised machine-check templates across sites</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Full QR tagging, photo logs &amp; corrective actions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Local site manager &amp; operative access</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Eligible for group dashboard integration (from Month 13)</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                ref={groupBtnRef}
                type="button"
                onClick={() => onRequestPilot(groupBtnRef)}
                className="w-full py-3.5 px-4 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Distinct Panel: Additional Group Licence */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                <span>Separate Central Management Fee</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Additional Group Licence
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Distinct from individual site subscriptions. Provides multi-site central visibility and reporting across operators with 3 or more sites.
              </p>
            </div>

            <div className="text-left lg:text-right bg-slate-950/90 p-5 rounded-2xl border border-slate-800 shrink-0">
              <div className="text-3xl sm:text-4xl font-black text-white">£290</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">per group / month</div>
              <div className="text-[11px] text-amber-400/90 mt-1 font-mono">Billed from Month 13</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
            <div className="space-y-2.5">
              <div className="font-bold text-white flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Eligibility &amp; Commercial Terms:</span>
              </div>
              <ul className="space-y-2 list-disc pl-5 text-slate-300">
                <li>Additional to per-site subscriptions (£159 per site/month).</li>
                <li>Applies to group accounts with three or more sites.</li>
                <li>Never bundled: £159 is per individual site; £290 is the additional central group licence.</li>
                <li>Billed from Month 13, when the group dashboard is planned for release.</li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Roadmap Integration:</span>
              </div>
              <ul className="space-y-2 list-disc pl-5 text-slate-300">
                <li>Multi-site dashboard — planned for Year 2.</li>
                <li>Consolidates site completion, open actions, certificate issues and scores.</li>
                <li>Anonymous peer benchmarking — planned for Year 3, subject to sufficient data.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Services Table */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-2xl font-bold text-slate-900">
              Additional Professional Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Optional visits, renewals and specialist support to maintain compliance integrity.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
              <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4">Service</th>
                  <th scope="col" className="px-6 py-4">Price &amp; Timing</th>
                  <th scope="col" className="px-6 py-4 hidden sm:table-cell">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {additionalServices.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">
                      {row.service}
                    </td>
                    <td className="px-6 py-4 font-semibold text-emerald-800 whitespace-nowrap">
                      {row.pricing}
                    </td>
                    <td className="px-6 py-4 text-slate-500 hidden sm:table-cell leading-relaxed">
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500">
            * Baseline renewal charges are calculated at 60% of the relevant tier&apos;s standard baseline fee, not from discounted founding-site rates.
          </p>
        </div>

        {/* Commercial Terms Summary */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-xs tracking-wider uppercase">
            <Info className="w-4 h-4 text-emerald-700" />
            <span>Commercial &amp; Contract Terms</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed">
            <ul className="space-y-2 list-disc pl-4">
              <li>Annual subscription contract, billed monthly.</li>
              <li>30 days’ notice after the first 12 months.</li>
              <li>Baseline fee: 50% payable on booking and 50% when the baseline report is issued.</li>
              <li>Standard invoice terms: 30 days.</li>
              <li>Visit and renewal fees invoiced on completion.</li>
            </ul>
            <ul className="space-y-2 list-disc pl-4">
              <li>Subscription charging starts from platform go-live (Month 6).</li>
              <li>No separate per-user or individual-machine charges within the applicable tier.</li>
              <li>Store tier is intended for up to approximately 20 registered machines.</li>
              <li>Launch prices are held for Years 1 and 2.</li>
              <li>The business plan models 3% annual increases from Year 3; not an indefinite price guarantee.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
