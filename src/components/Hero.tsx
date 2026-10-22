import React, { useRef } from 'react';
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
  Info
} from 'lucide-react';

interface HeroProps {
  onRequestPilot: (triggerRef?: React.RefObject<HTMLElement | null>) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot }) => {
  const ctaButtonRef = useRef<HTMLButtonElement>(null);

  const scrollToPlatform = (e: React.MouseEvent) => {
    e.preventDefault();
    const platformSection = document.getElementById('platform');
    if (platformSection) {
      platformSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Background Subtle Industrial Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Development Status Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>In development • Founding-site enquiries open</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
            <span>UK Agricultural &amp; Milling Sites</span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            From site assessment to <span className="text-emerald-400">everyday evidence.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            SiloGuard is being developed to help UK grain stores, feed mills and flour mills keep machinery checks, equipment certificates, repairs and assessment evidence together—between independent baseline visits.
          </p>

          {/* Central Message Highlight */}
          <div className="inline-block py-2.5 px-5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-emerald-200 text-sm sm:text-base font-semibold shadow-inner">
            “Keep dust-explosion compliance evidence current, organised and ready to share.”
          </div>

          <p className="text-sm font-semibold tracking-wide uppercase text-amber-400/90">
            One structured record. Practical machine checks. Evidence ready to share.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              ref={ctaButtonRef}
              type="button"
              onClick={() => onRequestPilot(ctaButtonRef)}
              className="w-full sm:w-auto px-7 py-3.5 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={scrollToPlatform}
              className="w-full sm:w-auto px-7 py-3.5 text-base font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Explore the Platform</span>
            </button>
          </div>

          {/* Three Factual Proposition Labels */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-3xl mx-auto">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="w-8 h-8 rounded-md bg-emerald-950 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-800/40">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Independent baseline assessment
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="w-8 h-8 rounded-md bg-emerald-950 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-800/40">
                <QrCode className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Machine-specific QR checks
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="w-8 h-8 rounded-md bg-emerald-950 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-800/40">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Dated evidence packs
              </span>
            </div>
          </div>
        </div>

        {/* HERO MOCKUP: Desktop Dashboard paired with Mobile Checklist Preview */}
        <div className="mt-14 lg:mt-16 relative">
          {/* Label banner */}
          <div className="flex items-center justify-between pb-3 px-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-md">
              <Info className="w-3.5 h-3.5" />
              <span>Illustrative platform preview • Sample data only — Not a live customer account</span>
            </div>
            <div className="hidden sm:block text-xs text-slate-400">
              Planned Month 6 Initial Release Specification
            </div>
          </div>

          {/* Main Desktop Container */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
            {/* Mockup Top Window Bar */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/60"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/60"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/60"></span>
                <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">
                  siloguard.internal / site / east-anglia-store-01 / register
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded border border-slate-700">
                  Sample Data
                </span>
                <span className="text-xs text-slate-400">Site: East Anglia Intake &amp; Drier</span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-4 sm:p-6 space-y-6">
              {/* Due / Overdue & Reminders Alert Strip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-0.5">
                    <div className="font-bold text-amber-300 flex items-center gap-2">
                      <span>Attention Required: 1 Check Overdue</span>
                      <span className="px-1.5 py-0.2 bg-amber-500/20 text-amber-300 text-[10px] rounded font-mono">Sample</span>
                    </div>
                    <p className="text-slate-300">
                      Bucket Elevator BE-01 intake aspiration seal check was due 21 Oct. 2 checks due today across pre-cleaning.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-0.5">
                    <div className="font-bold text-slate-200 flex items-center gap-2">
                      <span>Certificate Review Reminder</span>
                      <span className="px-1.5 py-0.2 bg-slate-700 text-slate-300 text-[10px] rounded font-mono">Sample</span>
                    </div>
                    <p className="text-slate-300">
                      Grain Drier GD-04 burner safety system review due in 28 days. Baseline requirements recorded.
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Machine Register Table + Mobile Mockup Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Desktop Machine Register (8 Cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-400" />
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        Hazardous-Zone Machine Register (5 Registered Units)
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">Assessor Verified Baseline</span>
                  </div>

                  {/* Machine items list */}
                  <div className="space-y-2 text-xs">
                    {/* Item 1 */}
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-amber-300">Bucket Elevator BE-01</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                            Intake Pit 1
                          </span>
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-medium border border-amber-500/30">
                            Zone 20 Int. / 22 Ext.
                          </span>
                        </div>
                        <p className="text-slate-400 text-[11px] mt-1">
                          Aspiration boot seal check • Frequency: Weekly • Overdue by 1 day
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-semibold text-amber-400 bg-amber-950/60 px-2 py-1 rounded border border-amber-600/30">
                          Action Assigned
                        </span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-200">Drag Conveyor DC-02</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                            Over-Silo Gallery
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-medium text-slate-300">
                            Zone 21 Int.
                          </span>
                        </div>
                        <p className="text-slate-400 text-[11px] mt-1">
                          Bearing thermometry &amp; chain tension • Completed 20 Oct • Photo logged
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-600/30 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Up to date
                        </span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-200">Grain Cleaner GC-03</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                            Pre-Clean Deck
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-medium text-slate-300">
                            Zone 22
                          </span>
                        </div>
                        <p className="text-slate-400 text-[11px] mt-1">
                          Aspiration filter sleeve inspection &amp; earthing bond • Due today
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-semibold text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                          Due Today
                        </span>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-200">Grain Drier GD-04</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                            Drier Tower 1
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-medium text-slate-300">
                            Zone 22 External
                          </span>
                        </div>
                        <p className="text-slate-400 text-[11px] mt-1">
                          Daily dust accumulation log &amp; burner plenum check • Due tomorrow
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-600/30 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Scheduled
                        </span>
                      </div>
                    </div>

                    {/* Item 5 */}
                    <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-200">Silo S-05</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                            Main Silo Block
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-medium text-slate-300">
                            Zone 20 Int. / 22 Ext.
                          </span>
                        </div>
                        <p className="text-slate-400 text-[11px] mt-1">
                          Explosion relief panel visual check &amp; weather seals • Completed 18 Oct
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-600/30 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Up to date
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Assigned Corrective Action Sub-Panel */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-amber-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-bold text-amber-300">
                          Active Corrective Action #CA-104
                        </span>
                      </div>
                      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                        Target Closure: 24 Oct
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      <strong>Requirement:</strong> Replace degraded aspiration boot seal on BE-01 intake boot to prevent combustible dust release into intake pit.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 pt-1">
                      <span>Owner: <strong className="text-slate-200">D. Miller (Lead Fitter)</strong></span>
                      <span>•</span>
                      <span>Parts: <strong className="text-slate-200">Anti-static EPDM Gasket (Ref G-22)</strong></span>
                      <span>•</span>
                      <span className="text-amber-400 font-semibold">Status: In Progress</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Machine-Check Preview (4 Cols) */}
                <div className="lg:col-span-4 bg-slate-950 rounded-xl p-4 border border-slate-800 shadow-inner space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <Smartphone className="w-4 h-4" />
                      <span>Mobile QR Checklist</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/40">
                      Offline Mode Ready
                    </span>
                  </div>

                  {/* Simulated Mobile Screen Card */}
                  <div className="bg-slate-900 rounded-lg p-3 border border-slate-700/60 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white">BE-01 Intake Pit</span>
                      <span className="text-[10px] font-mono text-slate-400">QR Tag #SG-4019</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Routine Weekly Housekeeping &amp; Dust-Layer Check
                    </p>

                    {/* Question 1 */}
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1">
                      <div className="text-[11px] font-medium text-slate-200">
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
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1">
                      <div className="text-[11px] font-medium text-slate-200">
                        2. Explosion vent inspection &amp; photo evidence
                      </div>
                      <div className="flex items-center gap-2 pt-0.5">
                        <div className="flex items-center gap-1 text-[10px] text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                          <Camera className="w-3 h-3 text-emerald-400" />
                          <span>vent_seal_2210.jpg</span>
                        </div>
                        <span className="text-[10px] text-emerald-400">Attached</span>
                      </div>
                    </div>

                    <div className="pt-1 text-[10px] text-slate-400 flex items-center justify-between">
                      <span>Sync status: Queued (will sync online)</span>
                      <span className="text-emerald-400 font-semibold">Saved Locally</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-900/40 border border-slate-800 text-[10px] text-slate-400 leading-tight">
                    * Illustrative representation. SiloGuard software alerts indicate action requirements and do not certify that a site is safe or 100% compliant.
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
