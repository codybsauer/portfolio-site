export interface ContactEmailProps {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export interface SecureFormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
  website: string;
  preferredContact: string;
  submissionTime: number;
  humanInteractions: {
    mouseMovements: number;
    keyPresses: number;
    totalTime: number;
  };
}

export interface FormErrors {
  name: string;
  email: string;
  message: string;
}

export type SubmitStatusType = "error" | "success" | null;

export interface SubmitStatus {
  type: SubmitStatusType;
  message: string;
}
