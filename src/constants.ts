import { Patient } from './types';

export const MOCK_PATIENTS: Patient[] = [
  {
    id: 'ANC-4829',
    name: 'Priya Sharma',
    age: 26,
    gestationWeeks: 28,
    gestationDays: 0,
    rchId: '102938475612',
    riskLevel: 'HIGH',
    lastVisitDate: 'Oct 24, 2023',
    phone: '+91 98765 43210'
  },
  {
    id: 'ANC-9210',
    name: 'Meena Devi',
    age: 34,
    gestationWeeks: 34,
    gestationDays: 2,
    rchId: '443322119988',
    riskLevel: 'HIGH',
    lastVisitDate: 'Oct 24, 2023'
  },
  {
    id: 'ANC-5501',
    name: 'Sunita Patel',
    age: 24,
    gestationWeeks: 12,
    gestationDays: 0,
    rchId: '887722334455',
    riskLevel: 'NORMAL',
    lastVisitDate: 'Sep 28, 2023'
  },
  {
    id: 'ANC-1122',
    name: 'Kavita Reddy',
    age: 29,
    gestationWeeks: 32,
    gestationDays: 5,
    rchId: '554433221100',
    riskLevel: 'NORMAL',
    lastVisitDate: 'Oct 05, 2023'
  }
];
