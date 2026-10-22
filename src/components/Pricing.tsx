import React, { useRef } from 'react';
import {
  Check,
  Building,
  Factory,
  Layers,
  ArrowRight,
  Info,
  Calendar,
  Sparkles
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 mb-3">
            Market Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Clear pricing for stores, mills and groups.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Planned launch pricing. All prices exclude VAT. Each site requires a separate baseline assessment in addition to its subscription.
          </p>
        </div>

        {/* Founding-Site Offer Highlight Banner */}
        <div className="p-6 rounded-2xl bg-emerald-950 text-white border border-emerald-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Year 1 Founding-Site Baseline Offer</span>
            </div>
            <p className="text-sm text-emerald-100 font-medium">
              “The Year 1 founding-site offer reduces the baseline-assessment fee by 20%, in exchange for feedback, a case study and a reference call.”
            </p>
            <p className="text-xs text-emerald-300/80">
              * The discount applies to baseline assessment fees only. This is not a free pilot, free subscription or ongoing subscription discount.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestPilot()}
            className="shrink-0 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Enquire for Founding Place
          </button>
        </div>

        {/* 3 Principal Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Store */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
            <div className="space-y-6">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-3">
                  <Building className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Store</h3>
                <p className="text-xs text-slate-500 mt-1">
                  For a single grain or farm store with up to approximately 20 registered machines.
                </p>
              </div>

              {/* Monthly Subscription Price */}
              <div className="py-3 border-y border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">£89</span>
                  <span className="text-xs font-semibold text-slate-500">per site / month</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-0.5 block">Excludes VAT • Billed monthly on annual contract</span>
              </div>

              {/* Baseline Fees */}
              <div className="space-y-2 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Baseline Assessment Fees:
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Standard baseline fee:</span>
                  <span className="font-bold text-slate-900">£1,950</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/60">
                  <span className="font-semibold text-emerald-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Year 1 founding-site:
                  </span>
                  <span className="font-extrabold text-emerald-700">£1,560</span>
                </div>
              </div>

              {/* Feature Inclusions */}
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Up to approx. 20 registered machine records</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>QR tags and machine-specific checklist templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Offline mobile capture &amp; photo logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Corrective actions, repair log &amp; certificate tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Dated PDF &amp; CSV evidence pack exports</span>
                </li>
                <li className="flex items-start gap-2">
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
                className="w-full py-3 px-4 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Mill */}
          <div className="bg-white rounded-2xl border-2 border-emerald-600 p-7 flex flex-col justify-between shadow-md relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              Most Common for Processing
            </div>

            <div className="space-y-6">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                  <Factory className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Mill</h3>
                <p className="text-xs text-slate-500 mt-1">
                  For feed mills, flour mills and seed plants with larger machine registers.
                </p>
              </div>

              {/* Monthly Subscription Price */}
              <div className="py-3 border-y border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">£189</span>
                  <span className="text-xs font-semibold text-slate-500">per site / month</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-0.5 block">Excludes VAT • Billed monthly on annual contract</span>
              </div>

              {/* Baseline Fees */}
              <div className="space-y-2 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Baseline Assessment Fees:
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Standard baseline fee:</span>
                  <span className="font-bold text-slate-900">£3,450</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/60">
                  <span className="font-semibold text-emerald-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Year 1 founding-site:
                  </span>
                  <span className="font-extrabold text-emerald-700">£2,760</span>
                </div>
              </div>

              {/* Feature Inclusions */}
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Larger machine registers &amp; multi-deck processing lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Intensive milling aspiration &amp; ignition logs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>QR tags and machine-specific checklist templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Offline mobile capture &amp; photo logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Corrective actions, repair log &amp; certificate tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>No per-user charge on site</span>
                </li>
              </ul>

              {/* Maltings Note */}
              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200/60 text-[11px] text-amber-900">
                <strong>Sector Note:</strong> Maltings compliance templates are planned from Year 3.
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                ref={millBtnRef}
                type="button"
                onClick={() => onRequestPilot(millBtnRef)}
                className="w-full py-3 px-4 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Group Site */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
            <div className="space-y-6">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Group Site</h3>
                <p className="text-xs text-slate-500 mt-1">
                  For each site within a multi-site account.
                </p>
              </div>

              {/* Monthly Subscription Price */}
              <div className="py-3 border-y border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">£159</span>
                  <span className="text-xs font-semibold text-slate-500">per site / month</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-0.5 block">Excludes VAT • Billed monthly on annual contract</span>
              </div>

              {/* Baseline Fees */}
              <div className="space-y-2 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Baseline Assessment Fees:
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Standard baseline fee:</span>
                  <span className="font-bold text-slate-900">£2,950 per site</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/60">
                  <span className="font-semibold text-emerald-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Year 1 founding-site:
                  </span>
                  <span className="font-extrabold text-emerald-700">£2,360 per site</span>
                </div>
              </div>

              {/* Feature Inclusions */}
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Per-site rate for multi-site operator accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Standardised machine-check templates across sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Full QR tagging, photo logs &amp; corrective actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Local site manager &amp; operative access</span>
                </li>
                <li className="flex items-start gap-2">
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
                className="w-full py-3 px-4 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Distinct Panel: Additional Group Licence */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                <span>Separate Central Management Fee</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Additional Group Licence
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Distinct from individual site subscriptions. Provides multi-site central visibility and reporting across operators with 3 or more sites.
              </p>
            </div>

            <div className="text-left lg:text-right bg-slate-950 p-4 rounded-xl border border-slate-800 shrink-0">
              <div className="text-3xl font-extrabold text-white">£290</div>
              <div className="text-xs font-semibold text-slate-400">per group / month</div>
              <div className="text-[11px] text-amber-400/90 mt-1">Billed from Month 13</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
            <div className="space-y-2">
              <div className="font-bold text-white flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Eligibility &amp; Commercial Terms:</span>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-300">
                <li>Additional to per-site subscriptions (£159 per site/month).</li>
                <li>Applies to group accounts with three or more sites.</li>
                <li>Never bundled: £159 is per individual site; £290 is the additional central group licence.</li>
                <li>Billed from Month 13, when the group dashboard is planned for release.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-white flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Roadmap Integration:</span>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-300">
                <li>Multi-site dashboard — planned for Year 2.</li>
                <li>Consolidates site completion, open actions, certificate issues and scores.</li>
                <li>Anonymous peer benchmarking — planned for Year 3, subject to sufficient data.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Services Compact Table */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-2">
            <h3 className="text-xl font-bold text-slate-900">
              Additional Professional Services
            </h3>
            <p className="text-xs text-slate-600">
              Optional visits, renewals and specialist support to maintain compliance integrity.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
              <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-5 py-3.5">Service</th>
                  <th scope="col" className="px-5 py-3.5">Price &amp; Timing</th>
                  <th scope="col" className="px-5 py-3.5 hidden sm:table-cell">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {additionalServices.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-5 py-3.5 font-bold text-slate-900">
                      {row.service}
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-emerald-800 whitespace-nowrap">
                      {row.pricing}
                    </td>
                    <td className="px-5 py-3.5 text-slate-500 hidden sm:table-cell">
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
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm tracking-wide uppercase">
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
