import React, { useState } from 'react';
import {
  Database,
  QrCode,
  BellRing,
  Wrench,
  BarChart3,
  FileArchive,
  CheckCircle,
  WifiOff,
  Calendar,
  Flame,
  Camera,
  RotateCcw,
  Users,
  Shield,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const Platform: React.FC = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 'mod-1',
      number: '01',
      title: 'Hazardous-Zone Asset Register',
      shortDesc: 'Structured register of machines, assessed zones, equipment categories and controls.',
      icon: Database,
      details: [
        'Records machinery including bucket elevators, drag conveyors, grain cleaners, driers and silos.',
        'Captures assessed hazardous zones (e.g. Zone 20, 21, 22), required ATEX/UKCA equipment categories, and explosion-protection controls (venting, suppression, isolation).',
        'Stores supporting certificates, motor nameplate data and manufacturer documentation against the machine entry.',
        'Boundary note: Zoning decisions come directly from the competent independent assessor; SiloGuard records and preserves them.',
      ],
      tag: 'Core Specification',
    },
    {
      id: 'mod-2',
      number: '02',
      title: 'Independent Baseline & Machine-Specific Checks',
      shortDesc: 'Competent baseline setup converted into practical QR-linked machine checklists.',
      icon: QrCode,
      details: [
        'A competent independent assessor establishes or verifies the baseline and configures checks appropriate to the machinery, site and recorded controls.',
        'Existing recent competent assessments can be verified and digitised during onboarding rather than automatically repeated.',
        'Illustrative checks cover housekeeping, dust accumulation, guards, earthing, bonding, belt alignment and equipment markings.',
        'Final check requirements, photographic prompts and inspection frequencies are customised for each site.',
      ],
      tag: 'Core Specification',
    },
    {
      id: 'mod-3',
      number: '03',
      title: 'Compliance Rules & Certificate Tracking',
      shortDesc: 'Automated flags for overdue checks, certificate renewals and repeated findings.',
      icon: BellRing,
      details: [
        'Designed to flag overdue checks, approaching certificate expiry dates, lapsed evidence and repeated non-conformance findings.',
        'Each alert explains which specific rule and baseline requirement triggered it, avoiding cryptic warning flags.',
        'Provides operational scores designed strictly as internal tools for prioritising review and action—not proof of legal compliance or safety.',
      ],
      tag: 'Core Specification',
    },
    {
      id: 'mod-4',
      number: '04',
      title: 'Corrective Actions & Repair Change Log',
      shortDesc: 'Close the loop on failed checks, assigned fitters and replacement components.',
      icon: Wrench,
      details: [
        'Record failed checks and assign corrective actions with a named owner, due date, before-and-after evidence, and closure verification.',
        'Log maintenance repairs, replacement parts, motor replacements and equipment markings.',
        'Possible equipment-category mismatches are automatically flagged for competent professional review, not certified by software.',
      ],
      tag: 'Core Specification',
    },
    {
      id: 'mod-5',
      number: '05',
      title: 'Multi-Site Dashboard & Benchmarking',
      shortDesc: 'Group visibility across multiple stores, intake points and processing plants.',
      icon: BarChart3,
      details: [
        'Multi-site dashboard — planned for Year 2: Consolidates completion rates, open corrective actions, certificate issues and action prioritisation scores across all group sites.',
        'Anonymous peer benchmarking — planned for Year 3, subject to sufficient data: Compares check completion and evidence currency against peer agricultural facilities.',
        'Clearly separated from initial launch: Benchmarking and group dashboards are staged releases and not included in Month 6.',
      ],
      tag: 'Year 2 & Year 3 Phased',
    },
    {
      id: 'mod-6',
      number: '06',
      title: 'Evidence Packs & Record Integrity',
      shortDesc: 'Dated audit-ready PDF and CSV bundles preserving historical records.',
      icon: FileArchive,
      details: [
        'Preserves original checks, photographs, operative identifiers and timestamps for complete audit integrity.',
        '“Corrections create a superseding entry so the original record remains traceable.”',
        'Exports dated PDF and CSV packs for selected date ranges, covering the asset register, baseline assessment, routine checks, photo evidence, corrective actions and full audit trail.',
        'Designed for unannounced HSE inspections, agricultural assurance audits and insurer renewals.',
      ],
      tag: 'Core Specification',
    },
  ];

  const supportingFeatures = [
    {
      title: 'Offline Mobile Capture',
      desc: 'Complete machine checklists in concrete intake pits or steel silo galleries with later synchronisation when connectivity returns.',
      icon: WifiOff,
    },
    {
      title: 'QR-Linked Machine Tags',
      desc: 'Weather-resistant industrial QR tags ensure staff physically stand at the machine to complete checks.',
      icon: QrCode,
    },
    {
      title: 'Harvest-Season Schedules',
      desc: 'Configurable check frequencies that scale during peak intake and harvest processing weeks.',
      icon: Calendar,
    },
    {
      title: 'Ignition-Source Control Logs',
      desc: 'Log hot work permits, bearing temperature thermography and electrical checks directly against machine assets.',
      icon: Flame,
    },
    {
      title: 'Dust-Accumulation Photo Proof',
      desc: 'Mandatory photograph capture prompts for critical dust settlement surfaces and aspiration filters.',
      icon: Camera,
    },
    {
      title: 'Renewal Reminders',
      desc: 'Automated 30-day and 60-day alerts ahead of three-yearly baseline renewal and annual review visits.',
      icon: RotateCcw,
    },
    {
      title: 'Planned Role Permissions',
      desc: 'Role-tailored interfaces planned for site operatives, maintenance managers, group leads, assessors and visiting auditors.',
      icon: Users,
    },
  ];

  const roadmapMilestones = [
    {
      period: 'Initial Release — Month 6',
      status: 'Target Core Launch',
      items:
        'Hazardous-zone asset register, machine checks, offline capture, certificate tracking, ignition-source logs, photo evidence, scoring, baseline workflow, corrective actions, repair logs, harvest mode, renewal reminders, and dated evidence exports (PDF/CSV).',
    },
    {
      period: 'Month 12',
      status: 'Planned Extension',
      items: 'Structured near-miss and dust incident register.',
    },
    {
      period: 'Year 2',
      status: 'Group & Auditor Capabilities',
      items:
        'Multi-site central dashboard, insurer/auditor read-only verification portal, and scheduled automated evidence exports.',
    },
    {
      period: 'Year 3',
      status: 'Ecosystem & Benchmarking',
      items:
        'Anonymous peer benchmarking (subject to sufficient data), REST API integration services, and dedicated maltings compliance templates.',
    },
    {
      period: 'Year 4 onward',
      status: 'Future Research',
      items:
        'Further-sector development (wood, sugar, starch). Sensor monitoring and predictive risk modelling are future research and outside the funded initial build.',
    },
  ];

  return (
    <section id="platform" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 mb-3">
            Platform Specification
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            A connected record from machine to evidence pack.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            SiloGuard unites assessor-verified baseline requirements with everyday frontline maintenance, creating a verified digital audit trail that stays current between formal visits.
          </p>
        </div>

        {/* Conceptual Workflow Track */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Connected Record Architecture
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">1</span>
              <div>
                <div className="text-xs font-bold text-slate-900">Machine Register</div>
                <div className="text-[11px] text-slate-500">Assessed DSEAR zones</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">2</span>
              <div>
                <div className="text-xs font-bold text-slate-900">QR Checklists</div>
                <div className="text-[11px] text-slate-500">In-person mobile proof</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">3</span>
              <div>
                <div className="text-xs font-bold text-slate-900">Corrective Actions</div>
                <div className="text-[11px] text-slate-500">Closed repair logs</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">4</span>
              <div>
                <div className="text-xs font-bold text-slate-900">Evidence Packs</div>
                <div className="text-[11px] text-slate-500">Audit-ready exports</div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Modules Grid & Tab Display */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Six Core Platform Modules
            </h3>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Illustrative platform preview • Development specification
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, index) => {
              const IconComp = mod.icon;
              const isSelected = activeModule === index;
              return (
                <div
                  key={mod.id}
                  onClick={() => setActiveModule(index)}
                  className={`cursor-pointer rounded-3xl p-7 transition-all flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-white/80 border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                          isSelected ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/20' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        Module {mod.number}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                        {mod.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {mod.shortDesc}
                      </p>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-3.5">
                      {mod.details.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      {mod.tag}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                      {isSelected ? 'Selected' : 'View details'}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Supporting Capabilities Feature Strip */}
        <div className="bg-slate-950 text-white rounded-3xl p-7 sm:p-10 border border-slate-800 space-y-8 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Supporting Planned Capabilities</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Built for Frontline Agricultural Operations
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              These describe planned future product capabilities designed for practical store and mill environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportingFeatures.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center mb-3 border border-emerald-800/40">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 mb-1.5">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Planned capabilities are part of the future development specifications and are not active landing-page functions.</span>
          </div>
        </div>

        {/* Compact Roadmap Timeline */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Development Roadmap &amp; Phasing
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Relative programme milestones. Core platform go-live planned for Month 6.
              </p>
            </div>
            <span className="text-xs font-mono bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200 font-semibold self-start sm:self-auto">
              Specification Stage
            </span>
          </div>

          <div className="space-y-4">
            {roadmapMilestones.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-colors"
              >
                <div className="md:w-1/4 shrink-0">
                  <div className="text-sm font-bold text-slate-900">
                    {item.period}
                  </div>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {item.status}
                  </span>
                </div>
                <div className="md:w-3/4 text-xs text-slate-700 leading-relaxed">
                  {item.items}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Service Boundaries Banner */}
        <div className="p-7 sm:p-9 rounded-3xl bg-slate-900 text-slate-200 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs tracking-wider uppercase">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>Service Scope &amp; Legal Boundaries</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-300">
            <ul className="space-y-2 list-disc pl-4 text-slate-300">
              <li>SiloGuard supports compliance management and evidence organisation.</li>
              <li>It does not independently classify hazardous zones or certify machinery.</li>
              <li>Specialist baseline assessments are carried out by competent independent DSEAR assessors.</li>
              <li>It does not replace competent professional judgement.</li>
            </ul>
            <ul className="space-y-2 list-disc pl-4 text-slate-300">
              <li>The site duty-holder retains legal responsibility at all times under UK DSEAR/HSAW.</li>
              <li>Alerts and scores indicate evidence or action requirements; they do not certify that a site is safe.</li>
              <li>Sensor monitoring and predictive risk modelling are future research, not part of the funded initial platform.</li>
              <li>No claims of regulatory approval, guaranteed safety, or guaranteed insurance savings are made.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
