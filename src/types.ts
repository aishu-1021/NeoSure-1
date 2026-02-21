export type RiskLevel = 'NORMAL' | 'MODERATE' | 'HIGH';

export interface Patient {
  id: string;
  name: string;
  age: number;
  gestationWeeks: number;
  gestationDays: number;
  rchId: string;
  riskLevel: RiskLevel;
  lastVisitDate: string;
  phone?: string;
  lmpDate?: string;
}

export type AppView = 
  | 'DASHBOARD' 
  | 'PATIENT_DIRECTORY' 
  | 'PATIENT_HISTORY' 
  | 'RISK_ASSESSMENT' 
  | 'ASSESSMENT_RESULT' 
  | 'LIVE_CONSULTATION' 
  | 'PROFILE' 
  | 'SYNC_CENTER' 
  | 'REGISTRATION' 
  | 'REFERRAL_LOGS' 
  | 'SCHEDULE_VISIT'
  | 'ADMISSION_CONFIRMATION';
