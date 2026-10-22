import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, Building2, User, Phone, Mail, Clock } from 'lucide-react';
import type { PilotSubmission } from '../types';
import { PILOT_STORAGE_KEY } from '../types';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null> | null;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose, triggerRef }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [organisationName, setOrganisationName] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [storageError, setStorageError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus trap and escape listener
  useEffect(() => {
    if (!isOpen) return;

    setErrors({});
    setStorageError(null);
    setSuccessMessage(null);

    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (triggerRef?.current) {
        triggerRef.current.focus();
      }
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const validateForm = () => {
    const errs: Record<string, string> = {};
    const trimmedName = fullName.trim();
    const trimmedPhone = phoneNumber.trim();
    const trimmedEmail = emailAddress.trim();
    const trimmedOrg = organisationName.trim();

    if (!trimmedName) {
      errs.fullName = 'Full name is required.';
    }

    if (!trimmedPhone) {
      errs.phoneNumber = 'Phone number is required.';
    } else {
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,20}$/;
      if (!phoneRegex.test(trimmedPhone)) {
        errs.phoneNumber = 'Please enter a valid telephone number.';
      }
    }

    if (!trimmedEmail) {
      errs.emailAddress = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        errs.emailAddress = 'Please enter a valid email address.';
      }
    }

    if (!trimmedOrg) {
      errs.organisationName = 'Organisation name is required.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setStorageError(null);
    setSuccessMessage(null);

    const isValid = validateForm();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        throw new Error('Browser localStorage is not available.');
      }

      const existingRaw = window.localStorage.getItem(PILOT_STORAGE_KEY);
      let existingArray: PilotSubmission[] = [];

      if (existingRaw !== null) {
        try {
          const parsed = JSON.parse(existingRaw);
          if (!Array.isArray(parsed)) {
            setStorageError(
              'Existing saved enquiry data in this browser is not formatted as an array. Stored data has been preserved and not overwritten.'
            );
            setIsSubmitting(false);
            return;
          }
          existingArray = parsed;
        } catch {
          setStorageError(
            'Existing saved enquiry data in this browser is malformed. Stored data has been preserved and not overwritten.'
          );
          setIsSubmitting(false);
          return;
        }
      }

      const newId =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `pilot_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

      const newSubmission: PilotSubmission = {
        id: newId,
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        emailAddress: emailAddress.trim(),
        organisationName: organisationName.trim(),
        submittedAt: new Date().toISOString(),
      };

      const updatedArray = [...existingArray, newSubmission];

      window.localStorage.setItem(PILOT_STORAGE_KEY, JSON.stringify(updatedArray));

      setSuccessMessage(
        'Your pilot enquiry has been saved in this browser. No information has been sent to SiloGuard.'
      );

      setFullName('');
      setPhoneNumber('');
      setEmailAddress('');
      setOrganisationName('');
      setErrors({});
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred while accessing browser storage.';
      setStorageError(`Failed to save enquiry to browser storage: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pilot-modal-title"
    >
      <div className="fixed inset-0" aria-hidden="true" onClick={onClose} />

      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 text-white flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Founding-Site Programme
            </div>
            <h2 id="pilot-modal-title" className="text-xl font-bold tracking-tight text-white">
              Request a Pilot Assessment
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Founding-site enquiries open for UK grain, feed and flour handling facilities.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {successMessage ? (
            <div
              className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col items-center text-center space-y-3"
              role="alert"
              aria-live="polite"
            >
              <CheckCircle2 className="w-12 h-12 text-emerald-600" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-emerald-900">Enquiry Saved Locally</h3>
                <p className="text-sm text-emerald-800 leading-relaxed font-medium">
                  {successMessage}
                </p>
              </div>
              <div className="text-xs text-emerald-700 bg-emerald-100/70 p-3 rounded-lg w-full text-left flex items-start gap-2 mt-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Record stored under key <code className="font-mono font-semibold">{PILOT_STORAGE_KEY}</code> in your local browser storage.
                </span>
              </div>
              <div className="pt-2 flex gap-3 w-full">
                <button
                  type="button"
                  onClick={() => setSuccessMessage(null)}
                  className="flex-1 px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Record Another Submission
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {storageError && (
                <div
                  className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-2.5"
                  role="alert"
                  aria-live="polite"
                >
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="leading-snug">{storageError}</div>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label
                  htmlFor="pilot-fullName"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    ref={firstInputRef}
                    id="pilot-fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) {
                        setErrors((prev) => ({ ...prev, fullName: '' }));
                      }
                    }}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border ${
                      errors.fullName
                        ? 'border-rose-400 bg-rose-50/50 text-rose-900 focus:ring-rose-400'
                        : 'border-slate-300 bg-white text-slate-900 focus:border-emerald-600 focus:ring-emerald-500/20'
                    } focus:outline-none focus:ring-2 transition-colors`}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                </div>
                {errors.fullName && (
                  <p id="fullName-error" className="text-xs text-rose-600 mt-1 font-medium">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Organisation Name */}
              <div>
                <label
                  htmlFor="pilot-organisationName"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Organisation Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    id="pilot-organisationName"
                    name="organisationName"
                    type="text"
                    required
                    autoComplete="organization"
                    value={organisationName}
                    onChange={(e) => {
                      setOrganisationName(e.target.value);
                      if (errors.organisationName) {
                        setErrors((prev) => ({ ...prev, organisationName: '' }));
                      }
                    }}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border ${
                      errors.organisationName
                        ? 'border-rose-400 bg-rose-50/50 text-rose-900 focus:ring-rose-400'
                        : 'border-slate-300 bg-white text-slate-900 focus:border-emerald-600 focus:ring-emerald-500/20'
                    } focus:outline-none focus:ring-2 transition-colors`}
                    aria-invalid={!!errors.organisationName}
                    aria-describedby={errors.organisationName ? 'organisationName-error' : undefined}
                  />
                </div>
                {errors.organisationName && (
                  <p id="organisationName-error" className="text-xs text-rose-600 mt-1 font-medium">
                    {errors.organisationName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="pilot-emailAddress"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="pilot-emailAddress"
                    name="emailAddress"
                    type="email"
                    required
                    autoComplete="email"
                    value={emailAddress}
                    onChange={(e) => {
                      setEmailAddress(e.target.value);
                      if (errors.emailAddress) {
                        setErrors((prev) => ({ ...prev, emailAddress: '' }));
                      }
                    }}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border ${
                      errors.emailAddress
                        ? 'border-rose-400 bg-rose-50/50 text-rose-900 focus:ring-rose-400'
                        : 'border-slate-300 bg-white text-slate-900 focus:border-emerald-600 focus:ring-emerald-500/20'
                    } focus:outline-none focus:ring-2 transition-colors`}
                    aria-invalid={!!errors.emailAddress}
                    aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
                  />
                </div>
                {errors.emailAddress && (
                  <p id="emailAddress-error" className="text-xs text-rose-600 mt-1 font-medium">
                    {errors.emailAddress}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="pilot-phoneNumber"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="pilot-phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) {
                        setErrors((prev) => ({ ...prev, phoneNumber: '' }));
                      }
                    }}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border ${
                      errors.phoneNumber
                        ? 'border-rose-400 bg-rose-50/50 text-rose-900 focus:ring-rose-400'
                        : 'border-slate-300 bg-white text-slate-900 focus:border-emerald-600 focus:ring-emerald-500/20'
                    } focus:outline-none focus:ring-2 transition-colors`}
                    aria-invalid={!!errors.phoneNumber}
                    aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                  />
                </div>
                {errors.phoneNumber && (
                  <p id="phoneNumber-error" className="text-xs text-rose-600 mt-1 font-medium">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Form Actions */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Saving...</span>
                    </>
                  ) : (
                    <span>Save Pilot Enquiry</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
