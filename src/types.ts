export interface PilotSubmission {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  submittedAt: string; // ISO 8601 string
}

export const PILOT_STORAGE_KEY = 'siloguard_pilot_requests';
