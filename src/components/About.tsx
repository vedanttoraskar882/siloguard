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
  HardHat,
  Sparkles
} from 'lucide-react';

export const About: React.FC = () => {
  const customerGroups = [
    {
      title: 'Independent Grain & Farm Stores',
      icon: Warehouse,
      desc: 'Commercial and on-farm storage facilities managing intake pits, driers, elevators and flat storage.',
      badge: 'On-Farm & Commercial',
    },
    {
      title: 'Feed Mills',
      icon: Factory,
      desc: 'Compound and livestock feed production plants handling fine ground grains, meal and additives.',
      badge: 'High Dust Load',
    },
    {
      title: 'Flour Mills',
      icon: Building,
      desc: 'Wheat and grain milling installations requiring disciplined ignition control and aspiration tracking.',
      badge: 'Zone 20/21 Focus',
    },
    {
      title: 'Seed Processors & Merchants',
      icon: Wheat,
      desc: 'Specialist seed dressing, cleaning, grading and conditioning operations.',
      badge: 'Conditioning Lines',
    },
    {
      title: 'Co-operatives & Multi-Site Merchants',
      icon: Boxes,
      desc: 'Centralised storage networks and agricultural merchant groups operating multiple intake sites.',
      badge: 'Central Governance',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 mb-3">
            Operational Context
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Keep the evidence moving after the assessment.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A site assessment establishes the baseline, but everyday operations continue afterwards. Machines are repaired, parts replaced, checks missed, and certificates lapse—leaving compliance records fragmented across separate folders, spreadsheets and paper logbooks.
          </p>
        </div>

        {/* Operational Problem vs Combined Service: Modern Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* The Operational Challenge (6 cols) */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200/90 rounded-3xl p-7 sm:p-9 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs tracking-wider uppercase mb-3">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>The Common Challenge</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Evidence becomes outdated between three-yearly visits
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Most UK grain stores and mills carry out an assessment every three years, but day-to-day operations don&apos;t pause. When insurers or inspectors request proof, locating recent machine checks and repair logs is time-consuming and uncertain.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="text-xs font-bold text-slate-900 mb-1">
                    Dispersed Documentation
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reports stored in office binders, certificates in individual email inboxes, and maintenance sheets on workshop clipboards.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="text-xs font-bold text-slate-900 mb-1">
                    Unrecorded Equipment Changes
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Replacement motors, conveyor belts, or aspiration filters fitted during harvest without recording equipment-category checks.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="text-xs font-bold text-slate-900 mb-1">
                    Uncertain Audit Trails
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Paper sheets become soiled, lost, or backfilled, making it difficult to prove that required checks took place on time.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-medium text-slate-500">
              Focus: Sites handling grain, feed, flour and combustible agricultural dusts.
            </div>
          </div>

          {/* SiloGuard Combined Service (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-900 text-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between border border-emerald-900/60 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs tracking-wider uppercase mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SiloGuard Combined Service</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Independent baseline assessment + practical digital evidence
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed mb-6 font-medium">
                “An independent baseline assessment establishes the site record. The planned platform then helps teams maintain that record through routine checks, photographs, certificate tracking, repair logs and corrective actions.”
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Independent DSEAR Baseline</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    Competent independent assessors verify zones, machine controls and checklist frequencies directly on site.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Industrial QR Machine Tags</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    Operatives scan tags directly at bucket elevators, driers and cleaners to access machine-specific routine checks.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Preserved Evidence Packs</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    Dated PDF and CSV exports assemble the asset register, check photos and closure records ready for auditors.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-900/60 text-xs text-emerald-300/80 relative z-10">
              SiloGuard connects professional assessment with everyday operational compliance.
            </div>
          </div>
        </div>

        {/* Customer Groups: Compact "Designed for" Area */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-2xl font-bold text-slate-900">
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
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-500/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                        {group.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                      {group.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {group.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sector Phasing Scope Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
              <span>
                <strong>Sector Phasing:</strong> Maltings compliance templates are planned for release from Year 3. Sawmills, wood processing, sugar and starch are later expansion opportunities, not initial supported sectors.
              </span>
            </div>
          </div>
        </div>

        {/* Founder Panel: Strictly Text & Engineering Leadership (NO PHOTO, NO PHOTO PLACEHOLDER) */}
        <div className="bg-slate-900 text-white rounded-3xl p-7 sm:p-9 border border-slate-800 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                <HardHat className="w-4 h-4" />
                <span>Founder &amp; Chief Executive</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Maurya Patel
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                “An engineering-led founder with experience in mechanical engineering, agricultural machinery operations, bucket-elevator development and supervising grain-cleaning plant projects. Maurya will lead product specification, machine-check templates and rule design, working with competent independent assessors.”
              </p>
            </div>

            <div className="shrink-0 p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-xs space-y-2">
              <div className="font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Competent Independent Standards</span>
              </div>
              <p className="leading-relaxed">
                Assessments are conducted directly by qualified, competent independent DSEAR assessors. Software rules match verified agricultural and process engineering standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
