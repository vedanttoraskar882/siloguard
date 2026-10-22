import React from 'react';
import {
  FileText,
  QrCode,
  Sliders,
  CheckSquare,
  Wrench,
  Download,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Enquire & Prepare',
      icon: FileText,
      description:
        'After a demonstration and agreement of terms, the customer pays a 50% baseline-assessment deposit and supplies its machine list, existing assessment documents, zoning drawings and user details.',
      clarification:
        'Please note: The landing-page pilot form only records an enquiry; it does not create a booking or take payment.',
    },
    {
      step: '02',
      title: 'Assess & Tag',
      icon: QrCode,
      description:
        'A competent independent assessor verifies or updates the baseline, records machine requirements and controls, photographs equipment and attaches durable industrial QR tags.',
      clarification:
        'Target: baseline completed within 21 days of order (stated as an operational target, not a guarantee).',
    },
    {
      step: '03',
      title: 'Configure & Train',
      icon: Sliders,
      description:
        'Set machine-check frequencies, responsible people, alert escalation routes and harvest-season peak schedules. Train the frontline site team on mobile routine checks.',
      clarification:
        'Customised to store capacity, milling equipment complexity and operational shift patterns.',
    },
    {
      step: '04',
      title: 'Complete Routine Checks',
      icon: CheckSquare,
      description:
        'Staff scan the machine’s QR tag, answer short checks and capture photographs. Planned offline capture supports work where connectivity is limited, with synchronisation when connectivity returns.',
      clarification:
        'Ensures checks are completed in-person at the equipment with verifiable timestamped evidence.',
    },
    {
      step: '05',
      title: 'Resolve Findings',
      icon: Wrench,
      description:
        'Managers review explained alerts, assign corrective actions to fitters and record repairs. Potential equipment mismatches are referred for competent review.',
      clarification:
        'Changes are logged with before-and-after photo records to verify proper remedial work.',
    },
    {
      step: '06',
      title: 'Export & Review',
      icon: Download,
      description:
        'Export dated PDF and CSV evidence packs for audit and insurance review. Maintain the continuous cycle through optional re-verification visits and three-yearly baseline renewal.',
      clarification:
        'Complete chronological trail ready for Red Tractor, TASCC, UFAS, HSE or insurer inspections.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 mb-3">
            Service Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            How SiloGuard works in practice.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From initial site onboarding and independent assessment to routine checks and audit-ready evidence packs.
          </p>
        </div>

        {/* 6 Steps Grid with Connected Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-white hover:shadow-lg transition-all relative group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-mono text-emerald-700/80 group-hover:text-emerald-600 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <div className="text-[11px] text-slate-500 flex items-start gap-2 leading-relaxed">
                    <Clock className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                    <span>{item.clarification}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Banner */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-800/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong>Onboarding Commitment:</strong> Baseline assessments are carried out by vetted, competent independent DSEAR assessors. Operating parameters and checklists are established against physical site drawings and equipment categories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
