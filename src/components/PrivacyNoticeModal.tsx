import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, Database, HardDrive, Lock } from 'lucide-react';
import { PILOT_STORAGE_KEY } from '../types';

interface PrivacyNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyNoticeModal: React.FC<PrivacyNoticeModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="fixed inset-0" aria-hidden="true" onClick={onClose} />

      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col"
      >
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h2 id="privacy-modal-title" className="text-base font-bold text-white">
              Browser-Only Privacy Notice
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg p-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-sm text-slate-600 space-y-4">
          <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <HardDrive className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-slate-700">
              This landing page is entirely static and frontend-only. It contains no backend, tracking cookies, analytics scripts or third-party CRM connections.
            </p>
          </div>

          <div className="space-y-2 text-xs leading-relaxed text-slate-600">
            <div className="flex items-start gap-2.5">
              <Database className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Local Storage Only:</strong> When you complete the “Request a Pilot” form, your submission is written exclusively to your web browser&apos;s <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-semibold">{PILOT_STORAGE_KEY}</code> key.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Zero Network Transmission:</strong> No information leaves your device. SiloGuard does not receive, transmit, or hold any personal data submitted through this page.
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
            You can clear these records at any time by clearing your browser cache or site data for this domain.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 px-4 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
