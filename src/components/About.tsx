import React from 'react';
import {
  AlertCircle,
  Building,
  Factory,
  Wheat,
  Warehouse,
  Boxes,
  Clock,
  ShieldCheck,
  CheckCircle2,
  HardHat
} from 'lucide-react';

export const About: React.FC = () => {
  const customerGroups = [
    {
      title: 'Independent Grain & Farm Stores',
      icon: Warehouse,
      desc: 'Commercial and on-farm storage facilities managing intake pits, driers, elevators and flat storage.',
    },
    {
      title: 'Feed Mills',
      icon: Factory,
      desc: 'Compound and livestock feed production plants handling fine ground grains, meal and additives.',
    },
    {
      title: 'Flour Mills',
      icon: Building,
      desc: 'Wheat and grain milling installations requiring disciplined ignition control and aspiration tracking.',
    },
    {
      title: 'Seed Processors & Merchants',
      icon: Wheat,
      desc: 'Specialist seed dressing, cleaning, grading and conditioning operations.',
    },
    {
      title: 'Co-operatives & Multi-Site Merchants',
      icon: Boxes,
      desc: 'Centralised storage networks and agricultural merchant groups operating multiple intake sites.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 mb-3">
            Operational Reality
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Keep the evidence moving after the assessment.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            A site assessment establishes the baseline, but everyday operations continue afterwards. Machines are repaired, parts replaced, checks missed, and certificates lapse—leaving compliance records fragmented across separate folders, spreadsheets and paper logbooks.
          </p>
        </div>

        {/* Operational Problem vs Combined Service Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* The Operational Challenge */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-rose-700 font-bold text-sm tracking-wide uppercase mb-4">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <span>The Industry Challenge Today</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Evidence becomes outdated between three-yearly visits
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Most UK grain stores and mills carry out an assessment every three years, but day-to-day operations don&apos;t pause. When insurers or inspectors request proof, locating recent machine checks and repair logs is time-consuming and uncertain.
              </p>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                  <span><strong>Dispersed documentation:</strong> Reports in binder files, certificates in email inboxes, and maintenance sheets in workshop clipboards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                  <span><strong>Unrecorded equipment changes:</strong> Replacement motors, conveyor belts, or aspiration filters fitted during harvest without recording equipment-category checks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                  <span><strong>Uncertain audit trails:</strong> Paper sheets get soiled, lost, or backfilled, making it difficult to prove that required checks took place on time.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500">
              Focus: Sites handling grain, feed, flour and combustible agricultural dusts.
            </div>
          </div>

          {/* The SiloGuard Combined Service */}
          <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-emerald-900 shadow-lg">
            <div>
              <div className="flex items-center gap-2.5 text-emerald-300 font-bold text-sm tracking-wide uppercase mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>SiloGuard&apos;s Combined Service</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Independent baseline assessment + practical digital evidence
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed mb-6">
                “An independent baseline assessment establishes the site record. The planned platform then helps teams maintain that record through routine checks, photographs, certificate tracking, repair logs and corrective actions.”
              </p>

              <ul className="space-y-3 text-sm text-emerald-100/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Independent DSEAR baseline:</strong> Competent assessors verify zones, machine controls and checklist frequencies on site.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Industrial QR machine tags:</strong> Operatives scan tags directly at bucket elevators, driers and cleaners to access specific checks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Preserved evidence packs:</strong> Dated PDF and CSV exports assemble the asset register, check photos and closure records for auditors.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-900/80 text-xs text-emerald-300/70">
              SiloGuard connects professional assessment with everyday operational compliance.
            </div>
          </div>
        </div>

        {/* Customer Groups: Compact "Designed for" Area */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-xl font-bold text-slate-900">
              Designed for Agricultural &amp; Milling Sectors
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Engineered specifically for sites handling combustible organic dusts across the United Kingdom, with initial focus in Eastern England.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {customerGroups.map((group) => {
              const IconComp = group.icon;
              return (
                <div
                  key={group.title}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-emerald-500/40 hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {group.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {group.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Sector Phasing Scope Notice */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-2">
              <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
              <span>
                <strong>Sector Phasing:</strong> Maltings compliance templates are planned for release from Year 3. Sawmills, wood processing, sugar and starch are later expansion opportunities, not initial supported sectors.
              </span>
            </div>
          </div>
        </div>

        {/* Founder Panel */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                <HardHat className="w-3.5 h-3.5" />
                <span>Engineering Leadership</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Maurya Patel — Founder and Chief Executive
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                “An engineering-led founder with experience in mechanical engineering, agricultural machinery operations, bucket-elevator development and supervising grain-cleaning plant projects. Maurya will lead product specification, machine-check templates and rule design, working with competent independent assessors.”
              </p>
            </div>
            <div className="shrink-0 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-xs space-y-1.5">
              <div className="font-semibold text-slate-200">Independent Quality</div>
              <p className="leading-snug">
                Assessments are conducted directly by qualified, competent independent DSEAR assessors. Software rules match verified agricultural and process engineering standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
