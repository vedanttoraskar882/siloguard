import React, { useState, useRef } from 'react';
import {
  ShieldCheck,
  QrCode,
  FileCheck2,
  AlertTriangle,
  Clock,
  ArrowRight,
  CheckCircle,
  Camera,
  Layers,
  Wrench,
  Smartphone,
  Info,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onRequestPilot: (triggerRef?: React.RefObject<HTMLElement | null>) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot }) => {
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'attention' | 'completed'>('all');
  const [activeTab, setActiveTab] = useState<'register' | 'mobile'>('register');

  const scrollToPlatform = (e: React.MouseEvent) => {
    e.preventDefault();
    const platformSection = document.getElementById('platform');
    if (platformSection) {
      platformSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sampleMachines = [
    {
      id: 'BE-01',
      name: 'Bucket Elevator BE-01',
      location: 'Intake Pit 1',
      zone: 'Zone 20 Int. / 22 Ext.',
      check: 'Aspiration boot seal check • Weekly',
      status: 'attention',
      statusLabel: 'Action Assigned',
      note: 'Overdue by 1 day',
    },
    {
      id: 'DC-02',
      name: 'Drag Conveyor DC-02',
      location: 'Over-Silo Gallery',
      zone: 'Zone 21 Int.',
      check: 'Bearing thermometry & chain tension',
      status: 'completed',
      statusLabel: 'Up to Date',
      note: 'Photo logged 20 Oct',
    },
    {
      id: 'GC-03',
      name: 'Grain Cleaner GC-03',
      location: 'Pre-Clean Deck',
      zone: 'Zone 22',
      check: 'Aspiration sleeve & earthing bond',
      status: 'attention',
      statusLabel: 'Due Today',
      note: 'Scheduled for 14:00',
    },
    {
      id: 'GD-04',
      name: 'Grain Drier GD-04',
      location: 'Drier Tower 1',
      zone: 'Zone 22 External',
      check: 'Daily dust accumulation log & burner review',
      status: 'completed',
      statusLabel: 'Scheduled',
      note: 'Due tomorrow',
    },
    {
      id: 'S-05',
      name: 'Silo S-05',
      location: 'Main Silo Block',
      zone: 'Zone 20 Int. / 22 Ext.',
      check: 'Explosion relief panel visual check',
      status: 'completed',
      statusLabel: 'Up to Date',
      note: 'Verified 18 Oct',
    },
  ];

  const filteredMachines = sampleMachines.filter((m) => {
    if (activeFilter === 'attention') return m.status === 'attention';
    if (activeFilter === 'completed') return m.status === 'completed';
    return true;
  });

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-48 right-10 w-[350px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Development Status Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>In development • Founding-site enquiries open</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800 backdrop-blur-sm">
            <span>UK Agricultural &amp; Milling Sites</span>
          </div>
        </div>

        {/* Hero Headings & Central Message */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
            From site assessment to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              everyday evidence.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            SiloGuard is being developed to help UK grain stores, feed mills and flour mills keep machinery checks, equipment certificates, repairs and assessment evidence together—between independent baseline visits.
          </p>

          {/* Central Message Highlight */}
          <div className="inline-block py-3 px-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 border border-slate-700/70 text-emerald-200 text-sm sm:text-base font-semibold shadow-xl backdrop-blur-md">
            “Keep dust-explosion compliance evidence current, organised and ready to share.”
          </div>

          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400/90">
            One structured record. Practical machine checks. Evidence ready to share.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              ref={ctaButtonRef}
              type="button"
              onClick={() => onRequestPilot(ctaButtonRef)}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-950/60 hover:shadow-emerald-600/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 text-emerald-200" />
            </button>
            <button
              type="button"
              onClick={scrollToPlatform}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Explore the Platform</span>
            </button>
          </div>

          {/* 3 Proposition Badges */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left max-w-3xl mx-auto">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-sm hover:border-slate-700 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-950/80 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-800/40">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-200 leading-snug">
                Independent baseline assessment
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-sm hover:border-slate-700 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-950/80 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-800/40">
                <QrCode className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-200 leading-snug">
                Machine-specific QR checks
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-sm hover:border-slate-700 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-950/80 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-800/40">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-200 leading-snug">
                Dated evidence packs
              </div>
            </div>
          </div>
        </div>

        {/* HERO MOCKUP: Layered Interactive Platform Preview */}
        <div className="mt-16 lg:mt-20 relative">
          {/* Top Label & Mode Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 px-1 gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-lg">
              <Info className="w-3.5 h-3.5" />
              <span>Illustrative platform preview • Sample data only — Not a live customer account</span>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs text-slate-400 hidden sm:inline">
                Initial Release (Month 6) Spec
              </span>
            </div>
          </div>

          {/* Main Desktop Container with Dark Glass Chrome */}
          <div className="bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
            {/* Window Chrome Header */}
            <div className="bg-slate-950 px-4 py-3.5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/70"></span>
                <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">
                  siloguard.app / sites / east-anglia-store-01
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('register')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === 'register'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Desktop Register
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('mobile')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors lg:hidden ${
                    activeTab === 'mobile'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Mobile Checklist
                </button>
                <span className="text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                  Sample Data
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              {/* Due and Overdue Alerts Bar */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-950/60 flex items-center justify-center text-amber-400 shrink-0 border border-amber-500/30">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="font-bold text-amber-300 flex items-center gap-2">
                      <span>Attention Required: 1 Check Overdue</span>
                      <span className="px-1.5 py-0.2 bg-amber-500/20 text-amber-300 text-[10px] rounded font-mono">Sample</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      Bucket Elevator BE-01 intake aspiration seal check was due 21 Oct. 2 checks due today across pre-cleaning.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/60 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/30">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="font-bold text-slate-200 flex items-center gap-2">
                      <span>Certificate Review Reminder</span>
                      <span className="px-1.5 py-0.2 bg-slate-800 text-slate-300 text-[10px] rounded font-mono">Sample</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      Grain Drier GD-04 burner safety system review due in 28 days. Baseline requirements recorded.
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid: Desktop Register + Mobile Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Desktop Machine Register (8 Cols) */}
                <div className={`space-y-4 ${activeTab === 'register' ? 'block' : 'hidden lg:block'} lg:col-span-8`}>
                  {/* Register Header & Filter Chips */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800 gap-3">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-400" />
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        Hazardous-Zone Machine Register
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        (5 Registered Units)
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
                      <button
                        type="button"
                        onClick={() => setActiveFilter('all')}
                        className={`px-2.5 py-1 rounded font-medium transition-colors ${
                          activeFilter === 'all'
                            ? 'bg-slate-800 text-white'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        All (5)
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveFilter('attention')}
                        className={`px-2.5 py-1 rounded font-medium transition-colors ${
                          activeFilter === 'attention'
                            ? 'bg-amber-500/20 text-amber-300 font-bold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Action (2)
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveFilter('completed')}
                        className={`px-2.5 py-1 rounded font-medium transition-colors ${
                          activeFilter === 'completed'
                            ? 'bg-emerald-500/20 text-emerald-300 font-bold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Up to Date (3)
                      </button>
                    </div>
                  </div>

                  {/* Machine List */}
                  <div className="space-y-2.5 text-xs">
                    {filteredMachines.map((m) => {
                      const isAttention = m.status === 'attention';
                      return (
                        <div
                          key={m.id}
                          className={`p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            isAttention
                              ? 'bg-slate-950/80 border-amber-500/40 hover:border-amber-400/60'
                              : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                          }`}
                        >
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`font-bold ${isAttention ? 'text-amber-300' : 'text-slate-100'}`}>
                                {m.name}
                              </span>
                              <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                                {m.location}
                              </span>
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-medium border ${
                                  isAttention
                                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                                    : 'bg-slate-800/80 text-slate-300 border-slate-700'
                                }`}
                              >
                                {m.zone}
                              </span>
                            </div>
                            <p className="text-slate-400 text-[11px] mt-1.5">
                              {m.check} • <span className={isAttention ? 'text-amber-400' : 'text-slate-400'}>{m.note}</span>
                            </p>
                          </div>

                          <div className="shrink-0 flex items-center gap-2">
                            <span
                              className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border flex items-center gap-1 ${
                                isAttention
                                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                              }`}
                            >
                              {!isAttention && <CheckCircle className="w-3 h-3 text-emerald-400" />}
                              {m.statusLabel}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Assigned Corrective Action Sub-Panel */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-bold text-amber-300">
                          Active Corrective Action #CA-104
                        </span>
                      </div>
                      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                        Target Closure: 24 Oct
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Requirement:</strong> Replace degraded aspiration boot seal on BE-01 intake boot to prevent combustible dust release into intake pit.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 pt-1 border-t border-slate-900">
                      <span>Owner: <strong className="text-slate-200">D. Miller (Lead Fitter)</strong></span>
                      <span>•</span>
                      <span>Parts: <strong className="text-slate-200">Anti-static EPDM Gasket (Ref G-22)</strong></span>
                      <span>•</span>
                      <span className="text-amber-400 font-semibold">Status: In Progress</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Machine-Check Preview (4 Cols) */}
                <div
                  className={`bg-slate-950 rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-inner space-y-3.5 ${
                    activeTab === 'mobile' ? 'block' : 'hidden lg:block'
                  } lg:col-span-4`}
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                      <Smartphone className="w-4 h-4" />
                      <span>Mobile QR Checklist</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/50">
                      Offline Ready
                    </span>
                  </div>

                  {/* Smartphone Screen Card */}
                  <div className="bg-slate-900 rounded-xl p-3.5 border border-slate-800 space-y-3 shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">BE-01 Intake Pit</span>
                      <span className="text-[10px] font-mono text-slate-400">QR Tag #SG-4019</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Routine Weekly Housekeeping &amp; Dust-Layer Check
                    </p>

                    {/* Question 1 */}
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                      <div className="text-[11px] font-medium text-slate-200 leading-snug">
                        1. Dust accumulation on motor casing &lt; 2mm?
                      </div>
                      <div className="flex items-center gap-2 pt-0.5">
                        <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-[10px] font-bold border border-emerald-600/40">
                          Pass
                        </span>
                        <span className="text-[10px] text-slate-400">Recorded 0.5mm</span>
                      </div>
                    </div>

                    {/* Question 2 */}
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                      <div className="text-[11px] font-medium text-slate-200 leading-snug">
                        2. Explosion vent inspection &amp; photo evidence
                      </div>
                      <div className="flex items-center gap-2 pt-0.5">
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">
                          <Camera className="w-3 h-3 text-emerald-400" />
                          <span>vent_seal_2210.jpg</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-medium">Attached</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800">
                      <span>Sync status: Queued locally</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Ready
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 text-[10px] text-slate-400 leading-relaxed">
                    * Illustrative preview. SiloGuard software alerts indicate action requirements and do not certify that a site is safe or 100% compliant.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
