/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Calendar, 
  Users, 
  FileText, 
  LayoutDashboard, 
  Plus, 
  Bell, 
  Search, 
  ArrowLeft, 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Video, 
  Phone, 
  Camera, 
  LogOut, 
  CloudOff, 
  RefreshCw, 
  ShieldCheck,
  Stethoscope,
  Baby,
  Thermometer,
  Droplets,
  Activity,
  History,
  Settings,
  HelpCircle,
  Lock,
  Globe,
  Download,
  Ambulance,
  MapPin,
  Check
} from 'lucide-react';
import { AppView, Patient, RiskLevel } from './types';
import { MOCK_PATIENTS } from './constants';

// --- Shared Components ---

const Header = ({ title, subtitle, onBack, showProfile = true }: { title: string; subtitle?: string; onBack?: () => void; showProfile?: boolean }) => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10 px-4 md:px-8 py-3 shadow-sm">
    <div className="max-w-5xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        {onBack && (
          <button onClick={onBack} className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary">
            <ArrowLeft size={20} />
          </button>
        )}
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <Stethoscope size={24} />
          </div>
          <div>
            <h1 className="text-slate-900 text-xl font-bold font-serif leading-none tracking-tight">{title}</h1>
            {subtitle && <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
      {showProfile && (
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end mr-2">
            <span className="text-slate-900 text-sm font-bold">ASHA Sunita Devi</span>
            <span className="text-slate-500 text-xs">ID: ANM-2023-88</span>
          </div>
          <div className="size-10 rounded-full bg-primary/20 border-2 border-primary overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdTqY5kpqwiYNKOOInN6KeHgn9kOE-_3OsNcx0omtE6p8kM37Cl650Sr7uhG11ulm3OqTT4Gh4ybKVWK5NvX8Dqjp48NDDyWMPWWzHIvrbrinVFCZGvs0NUA7JSPnAcbAMe-ZFmr_qsEsfQrMJey5Exjj8p5kMaLUzSeWKICOWnPCkams7eJ9mhzg_kaffSGd5oXXuBIx6BfjB4nl90m-_EuPfKLOsC4Hwu_CH0G4YxN1jGqbal2-KsXBS27A1NmmL9allMcd2iZA" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  </header>
);

const BottomNav = ({ currentView, setView }: { currentView: AppView; setView: (v: AppView) => void }) => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-4 py-2 z-50">
    <div className="max-w-[600px] mx-auto flex justify-between items-center">
      <button onClick={() => setView('DASHBOARD')} className={`flex flex-col items-center gap-1 p-2 ${currentView === 'DASHBOARD' ? 'text-primary' : 'text-slate-400'}`}>
        <LayoutDashboard size={24} />
        <span className="text-[10px] font-bold">DASHBOARD</span>
      </button>
      <button onClick={() => setView('SCHEDULE_VISIT')} className={`flex flex-col items-center gap-1 p-2 ${currentView === 'SCHEDULE_VISIT' ? 'text-primary' : 'text-slate-400'}`}>
        <Calendar size={24} />
        <span className="text-[10px] font-bold">VISITS</span>
      </button>
      <button onClick={() => setView('REGISTRATION')} className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg -translate-y-4 border-4 border-background-light">
        <Plus size={32} />
      </button>
      <button onClick={() => setView('PATIENT_DIRECTORY')} className={`flex flex-col items-center gap-1 p-2 ${currentView === 'PATIENT_DIRECTORY' ? 'text-primary' : 'text-slate-400'}`}>
        <Users size={24} />
        <span className="text-[10px] font-bold">PATIENTS</span>
      </button>
      <button onClick={() => setView('REFERRAL_LOGS')} className={`flex flex-col items-center gap-1 p-2 ${currentView === 'REFERRAL_LOGS' ? 'text-primary' : 'text-slate-400'}`}>
        <FileText size={24} />
        <span className="text-[10px] font-bold">REPORTS</span>
      </button>
    </div>
  </nav>
);

// --- Screens ---

const Dashboard = ({ setView }: { setView: (v: AppView) => void }) => {
  return (
    <div className="pb-24">
      <Header title="NeoSure ANC" subtitle="Maternal Health Intelligence" />
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Upcoming Visits</h1>
            <p className="text-slate-500 max-w-md">Manage daily maternal health follow-ups and prioritize high-risk clinical tasks.</p>
          </div>
          <button onClick={() => setView('SCHEDULE_VISIT')} className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <Calendar size={18} />
            View Full Calendar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-lg">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total Visits Today</p>
              <p className="text-3xl font-black">8</p>
            </div>
          </div>
          <div className="bg-red-50 p-6 rounded-xl border-2 border-red-100 shadow-sm flex items-center gap-4">
            <div className="bg-red-100 text-red-600 p-3 rounded-lg">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-red-600">High Risk (RED)</p>
              <p className="text-3xl font-black text-red-600">3</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="bg-green-50 text-green-600 p-3 rounded-lg">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Routine Check-ups</p>
              <p className="text-3xl font-black">5</p>
            </div>
          </div>
        </div>

        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">High Priority</span>
              <h2 className="text-lg font-bold">High Risk Follow-ups</h2>
            </div>
            <div className="space-y-4">
              {MOCK_PATIENTS.filter(p => p.riskLevel === 'HIGH').map(patient => (
                <div key={patient.id} className="bg-white p-5 rounded-xl shadow-sm border border-red-100 flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden shrink-0">
                      <img src={`https://picsum.photos/seed/${patient.id}/200/200`} alt={patient.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{patient.name}</h3>
                        <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded">RED</span>
                      </div>
                      <p className="text-sm text-slate-500 mb-2">ID: #{patient.id} • GA: {patient.gestationWeeks} Weeks</p>
                      <div className="flex items-center gap-1.5 text-red-600 bg-red-50 px-2 py-1 rounded w-fit">
                        <AlertTriangle size={14} />
                        <span className="text-xs font-semibold">Risk Factor: {patient.id === 'ANC-4829' ? 'BP Check Required' : 'Severe Anemia'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <button className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <Phone size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <MapPin size={18} />
                    </button>
                    <button onClick={() => setView('RISK_ASSESSMENT')} className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm">Start Visit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const PatientDirectory = ({ setView }: { setView: (v: AppView) => void }) => {
  return (
    <div className="pb-24">
      <Header title="Patient Directory" onBack={() => setView('DASHBOARD')} />
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-primary" size={24} />
            </div>
            <input 
              className="w-full h-16 pl-14 pr-6 bg-white border-none rounded-2xl shadow-xl shadow-primary/5 focus:ring-2 focus:ring-primary text-lg placeholder:text-slate-400" 
              placeholder="Search by Name, RCH ID, or Phone..." 
              type="text" 
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Your Patients</h2>
          <div className="flex gap-6 border-b border-primary/10">
            <button className="pb-3 border-b-4 border-primary text-primary font-bold text-sm tracking-wide">RECENTLY ACCESSED</button>
            <button className="pb-3 border-b-4 border-transparent text-slate-400 hover:text-primary transition-colors font-bold text-sm tracking-wide">UPCOMING VISITS</button>
          </div>
        </div>

        <div className="space-y-4">
          {MOCK_PATIENTS.map(patient => (
            <div 
              key={patient.id} 
              onClick={() => setView('PATIENT_HISTORY')}
              className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/20 flex items-center group cursor-pointer"
            >
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className={`size-12 rounded-full flex items-center justify-center border-2 relative ${patient.riskLevel === 'HIGH' ? 'bg-red-50 text-red-600 border-red-500' : 'bg-green-50 text-green-600 border-green-500'}`}>
                    {patient.riskLevel === 'HIGH' ? <AlertTriangle size={24} /> : <CheckCircle2 size={24} />}
                    <div className={`absolute -top-1 -right-1 size-3 rounded-full border-2 border-white ${patient.riskLevel === 'HIGH' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{patient.name}</h3>
                    <p className="text-xs font-mono text-slate-500 tracking-tight">RCH ID: {patient.rchId}</p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Gestation</p>
                  <p className="text-sm font-semibold text-slate-700">{patient.gestationWeeks} Weeks, {patient.gestationDays} Days</p>
                </div>
                <div className="hidden md:block">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Last Visit</p>
                  <p className="text-sm font-semibold text-slate-700">{patient.lastVisitDate}</p>
                </div>
                <div className="flex justify-end pr-2">
                  <ChevronRight className="text-primary opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-2" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className="fixed bottom-24 right-8 z-50">
        <button onClick={() => setView('REGISTRATION')} className="bg-primary hover:bg-primary/90 text-white flex items-center gap-3 px-8 py-4 rounded-full shadow-2xl shadow-primary/40 transform hover:scale-105 active:scale-95 transition-all">
          <Plus size={24} />
          <span className="font-bold text-lg tracking-wide">New Registration</span>
        </button>
      </div>
    </div>
  );
};

const RiskAssessment = ({ setView }: { setView: (v: AppView) => void }) => {
  return (
    <div className="pb-32 bg-background-light min-h-screen">
      <Header title="Risk Assessment" onBack={() => setView('DASHBOARD')} />
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 tracking-wide">ANC VISIT ENTRY</span>
          <h2 className="text-slate-900 text-4xl md:text-5xl font-serif font-black leading-tight mb-2">Patient Risk Assessment</h2>
          <p className="text-slate-500 max-w-md mx-auto">AI-powered classification based on ICMR guidelines. Please ensure all data is accurate.</p>
        </div>

        <div className="space-y-6">
          <section className="bg-white rounded-[24px] shadow-sm border border-transparent overflow-hidden relative group p-6 md:p-8">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users size={18} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">1. Patient Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input className="w-full h-12 px-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary" placeholder="e.g. Meera Devi" defaultValue="Anjali Devi" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Age</label>
                <input className="w-full h-12 px-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary" placeholder="Years" defaultValue="26" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-semibold text-slate-700">Gestational Age</label>
                  <span className="text-xs text-primary font-medium">LMP: 12 Jan 2024</span>
                </div>
                <div className="relative">
                  <input className="w-full h-12 px-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary" defaultValue="24" />
                  <span className="absolute right-4 top-3 text-sm text-slate-500 font-medium">Weeks</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-[24px] shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Activity size={18} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">2. Vitals</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Height (cm)</label>
                <input className="w-full h-12 px-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary" placeholder="150" defaultValue="155" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-semibold text-slate-700">Weight (kg)</label>
                  <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">BMI: 22.4</span>
                </div>
                <input className="w-full h-12 px-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary" placeholder="55" defaultValue="54" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-semibold text-slate-700">BP (mmHg)</label>
                  <span className="text-xs bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <AlertTriangle size={10} /> High Risk
                  </span>
                </div>
                <div className="flex gap-2">
                  <input className="w-full h-12 px-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary" placeholder="Sys" defaultValue="145" />
                  <span className="self-center text-slate-400">/</span>
                  <input className="w-full h-12 px-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary" placeholder="Dia" defaultValue="95" />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-[24px] shadow-sm p-6 md:p-8 border-2 border-red-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <AlertTriangle size={120} className="text-red-500" />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="size-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 animate-pulse">
                <AlertTriangle size={18} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">3. Current Symptoms</h3>
            </div>
            <div className="bg-red-50 rounded-xl p-4 mb-6 flex items-start gap-3">
              <Info size={18} className="text-red-500 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-red-800">Danger Signs Alert</p>
                <p className="text-xs text-red-700 mt-1">Check carefully. Any positive selection here will mark this pregnancy as High Risk immediately.</p>
              </div>
            </div>
            <div className="space-y-3 relative z-10">
              {[
                { label: 'High Fever (>38°C)', icon: <Thermometer size={20} /> },
                { label: 'Vaginal Bleeding', icon: <Droplets size={20} /> },
                { label: 'Convulsions / Fits', icon: <Activity size={20} /> },
                { label: 'Severe Swelling (Oedema)', icon: <Activity size={20} /> }
              ].map((symptom, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                      {symptom.icon}
                    </div>
                    <span className="font-medium text-slate-900">{symptom.label}</span>
                  </div>
                  <input className="rounded text-red-500 focus:ring-red-500 size-6 border-2 border-gray-300" type="checkbox" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-6 pt-12 bg-gradient-to-t from-background-light to-transparent">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <button onClick={() => setView('DASHBOARD')} className="flex-1 bg-white text-slate-900 border border-slate-200 h-14 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <ArrowLeft size={20} />
            Cancel
          </button>
          <button onClick={() => setView('ASSESSMENT_RESULT')} className="flex-[2] bg-primary text-white h-14 rounded-full font-bold text-lg shadow-xl shadow-primary/30 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group">
            Analyze Risk
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const AssessmentResult = ({ setView }: { setView: (v: AppView) => void }) => {
  return (
    <div className="pb-24 bg-background-light min-h-screen">
      <Header title="Assessment Result" onBack={() => setView('RISK_ASSESSMENT')} />
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <section className="bg-red-50 rounded-[24px] border-l-8 border-red-600 shadow-xl overflow-hidden mb-12">
          <div className="p-6 md:p-10">
            <div className="flex flex-col items-center text-center mb-8">
              <span className="text-[10px] font-bold text-red-600/60 tracking-[0.2em] uppercase mb-2">Risk Classification</span>
              <div className="bg-red-600 text-white px-8 py-2.5 rounded-full text-xl font-black tracking-widest shadow-lg shadow-red-600/20">
                RED - HIGH RISK
              </div>
            </div>
            
            <div className="mb-8 space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Flagged Conditions</h4>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 flex items-start gap-4 border border-red-100">
                <AlertTriangle className="text-red-600 shrink-0" size={24} />
                <div>
                  <p className="font-bold text-slate-900">Severe Anemia</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Hb levels are critically low (9.8 g/dL), indicating high risk for maternal exhaustion and fetal distress.</p>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 flex items-start gap-4 border border-red-100">
                <AlertTriangle className="text-red-600 shrink-0" size={24} />
                <div>
                  <p className="font-bold text-slate-900">Elevated Blood Pressure</p>
                  <p className="text-sm text-slate-500 leading-relaxed">BP of 145/95 mmHg requires immediate stabilization and monitoring for pre-eclampsia.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-8">
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider">
                <FileText className="mr-1.5" size={14} />
                MOHFW ANC Guidelines 2021 — Ref: Section 4.2
              </span>
            </div>

            <div className="mb-10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-500">Assessment Confidence</span>
                <span className="text-sm font-bold text-primary">95%</span>
              </div>
              <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button onClick={() => setView('LIVE_CONSULTATION')} className="w-full h-14 rounded-full border-2 border-primary text-primary font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                <Video size={20} />
                Escalate to Tele-Consultation
              </button>
              <button onClick={() => setView('ADMISSION_CONFIRMATION')} className="w-full h-14 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
                <Ambulance size={20} />
                Confirm Hospital Admission
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const LiveConsultation = ({ setView }: { setView: (v: AppView) => void }) => {
  return (
    <div className="h-screen w-full bg-slate-900 flex flex-col md:flex-row overflow-hidden">
      <div className="relative flex-1 h-full">
        {/* Main Video Feed (Doctor) */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPI5q_JcfkuFT6-SX6U_bAZMWGMfS4dq-4Ii-LnCbO57IFmysGE0lrJ1lQkliYiS46G0xPYo0KUFLs1qiKnGfFg9VU-yxkJ6rJ8OI8JiceMHTNyUokICGtDh5KvA_pz70-DwZsnKS34bxzh9zjcSPj9jQAoUgzVQEntF0NoTRxBw2b_3K_d05APhz2rsDN5wf4LhZTym5ahOMFgDWJkGPMj7dsiULbtBhC3q59HK4JaiOZbMhdy2xL6SUzlzfF2RzoBwIaze6OKk0')" }}>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Overlays */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-start justify-between z-10">
          <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-3 shadow-lg">
            <div className="size-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Live Consultation</span>
          </div>
          <div className="bg-white/90 backdrop-blur px-5 py-2 rounded-full flex items-center gap-6 shadow-lg">
            <div className="border-r border-slate-200 pr-4">
              <p className="text-[10px] text-slate-500 uppercase font-bold">Patient</p>
              <p className="text-sm font-bold text-slate-900">Anjali Devi</p>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-red-600 uppercase font-bold">BP</span>
              <span className="text-sm font-black text-red-600">160/110</span>
            </div>
          </div>
        </div>

        {/* PIP */}
        <div className="absolute bottom-28 right-8 z-20">
          <div className="w-48 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/50 shadow-2xl bg-slate-800">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnUOVEihMc230ytGwdN9UElTciyMZZY_H_D2_An4T5sTQd7Z8vlLgbo60ll63fMnjpkm7lE5LXjU1QxAlPESC1NekK4oIOGWC2Xk07NJvDAgxi6sqd6_9IBsvY2I6l_v6XH0pUt-dNbVhf6Q2WaaJT-SpOASpKa6xctbIkrgY1r_k6K0AujQ6aUVaPg_pO9DbA1uYMweXYAKXmtqpnXnJ0XaoDZWBj4t0iscFfPhCtRoi6bplu8pnTGek5zybZo662u-q0sbPBbqE" alt="Local feed" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="flex items-center gap-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-2xl">
            <button className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><Phone size={20} className="rotate-[135deg]" /></button>
            <button className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><Video size={20} /></button>
            <button className="h-12 px-6 rounded-full bg-primary text-white font-bold flex items-center gap-2"><Camera size={20} /> Switch</button>
            <div className="w-px h-8 bg-slate-200"></div>
            <button onClick={() => setView('DASHBOARD')} className="h-12 px-6 rounded-full bg-red-600 text-white font-bold">End Call</button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-80 h-1/3 md:h-full bg-white border-l border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-900">Consultation Notes</h3>
          <p className="text-xs text-slate-500">Real-time advice for Anjali Devi</p>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <textarea className="w-full h-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-sm resize-none" placeholder="Type clinical instructions here..."></textarea>
        </div>
        <div className="p-4 bg-slate-50">
          <button className="w-full bg-white border border-slate-200 py-3 rounded-xl font-bold text-sm shadow-sm flex items-center justify-center gap-2">
            <FileText size={18} />
            Generate Prescription
          </button>
        </div>
      </aside>
    </div>
  );
};

const Profile = ({ setView }: { setView: (v: AppView) => void }) => {
  return (
    <div className="pb-24">
      <Header title="My Profile" onBack={() => setView('DASHBOARD')} />
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <section className="bg-white rounded-xl p-8 mb-8 border border-primary/5 shadow-sm text-center">
          <div className="relative inline-block mb-4">
            <div className="size-32 rounded-full border-4 border-primary/20 p-1">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVMAfDjJdOr21o45hpNrImuRPQYPPlEsQm0mhVKryPOZ_7qTLXZQ1covIbkCDJi63tDOM4cY0WBMe4p1gCjFvGn8veyZqZ4Rz6-RFck0LTjklE7JpQRTWIsMMF55EnkVwjgfKPDi8FuY5oIExbkrq-Iw2g-Ks9dCVHZwLKOO9XfKn4Vv9_9DiLJNCOXJihS_z7Jj6-mTyLI5evU1fgQKydjSxB2ImQMgDTJL8u_RCdfkJyiWPxYy62zwv5yAYjYQOn0jckhJGR7uU" alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white shadow-lg">
              <ShieldCheck size={14} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Sunita Sharma</h2>
          <p className="text-lg text-primary font-medium">ANM - Rural Health Center</p>
          <p className="text-sm text-slate-500 mt-1">Serving since October 2023</p>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Performance Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Total ANC Visits', value: '124' },
              { label: 'High-Risk Referrals', value: '12' },
              { label: 'Avg. Sync Time', value: '2m' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border-b-4 border-primary shadow-sm">
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-primary mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          {[
            { label: 'Account Details', sub: 'Profile, contact, and ID information', icon: <Users size={20} /> },
            { label: 'Language Preference', sub: 'Current: English / Hindi', icon: <Globe size={20} /> },
            { label: 'Offline Storage Settings', sub: 'Manage locally saved records', icon: <CloudOff size={20} /> },
            { label: 'Security & PIN', sub: 'Update login PIN and bio-metrics', icon: <Lock size={20} /> },
            { label: 'Help & Support', sub: 'FAQs, contact support, and tutorials', icon: <HelpCircle size={20} /> }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-white p-4 rounded-lg border border-primary/5 hover:border-primary/20 cursor-pointer transition-all">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-slate-800">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.sub}</p>
                </div>
              </div>
              <ChevronRight className="text-slate-400" size={20} />
            </div>
          ))}
        </section>

        <footer className="flex flex-col items-center gap-6 py-12">
          <button className="w-full max-w-xs flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-white transition-all">
            <LogOut size={20} />
            Logout
          </button>
          <p className="text-slate-400 text-xs text-center">NeoSure ANC Risk Intelligence v2.4.0<br/>© 2024 Maternal Health Initiative</p>
        </footer>
      </main>
    </div>
  );
};

const SyncCenter = ({ setView }: { setView: (v: AppView) => void }) => {
  return (
    <div className="pb-24">
      <Header title="Sync Center" onBack={() => setView('DASHBOARD')} />
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <section className="bg-white rounded-xl shadow-sm border-l-[6px] border-primary flex flex-col md:flex-row items-center p-6 gap-6 mb-8">
          <div className="flex-shrink-0 size-20 rounded-full bg-primary/10 flex items-center justify-center">
            <CloudOff size={40} className="text-primary" />
          </div>
          <div className="flex-grow text-center md:text-left space-y-1">
            <h3 className="text-2xl font-bold tracking-tight">Status: Offline</h3>
            <p className="text-slate-500">4 records are currently saved locally on your device. Connect to the internet to upload them securely.</p>
            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-3">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 shadow-lg shadow-primary/20">
                <RefreshCw size={18} />
                Sync All Records
              </button>
              <button className="bg-primary/10 hover:bg-primary/20 text-primary font-bold py-3 px-8 rounded-full transition-colors">
                Refresh
              </button>
            </div>
          </div>
        </section>

        <div className="flex items-end justify-between mb-4">
          <h2 className="font-serif text-3xl text-slate-800">Pending Uploads</h2>
          <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">4 Items</span>
        </div>

        <div className="space-y-4">
          {MOCK_PATIENTS.map(patient => (
            <div key={patient.id} className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-full bg-slate-100 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${patient.id}/200/200`} alt={patient.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold leading-none mb-1">{patient.name}</h4>
                  <p className="text-sm text-slate-500">Visit: {patient.lastVisitDate} • <span className={`${patient.riskLevel === 'HIGH' ? 'text-red-600' : 'text-green-600'} font-bold`}>{patient.riskLevel} Risk</span></p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <RefreshCw size={20} className="text-primary animate-spin-slow" />
                <span className="text-[10px] font-bold uppercase text-primary tracking-tighter">Waiting</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const ReferralLogs = ({ setView }: { setView: (v: AppView) => void }) => {
  return (
    <div className="pb-24">
      <Header title="Referral Activity Logs" onBack={() => setView('DASHBOARD')} />
      <main className="max-w-5xl mx-auto p-4 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="space-y-1">
            <h2 className="font-serif text-4xl text-slate-900">Referral Activity Logs</h2>
            <p className="text-slate-500">Detailed audit trail and history of all patient transfers.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            <Download size={18} />
            Export Logs as CSV
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-primary/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase text-[11px] font-bold tracking-widest border-b border-primary/5">
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4">Patient Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {[
                { name: 'Priya Sharma', time: 'Oct 24, 09:30 AM', status: 'Emergency', color: 'text-red-600 bg-red-50' },
                { name: 'Sunita Verma', time: 'Oct 24, 10:15 AM', status: 'In-Progress', color: 'text-amber-600 bg-amber-50' },
                { name: 'Anjali Gupta', time: 'Oct 23, 04:20 PM', status: 'Completed', color: 'text-green-600 bg-green-50' }
              ].map((log, i) => (
                <tr key={i} className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{log.time}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold">{log.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${log.color}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary text-sm font-semibold hover:underline">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const ScheduleVisit = ({ setView }: { setView: (v: AppView) => void }) => {
  return (
    <div className="pb-24 bg-background-light min-h-screen">
      <Header title="Schedule Visit" onBack={() => setView('DASHBOARD')} />
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Users size={24} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-lg">Meera Devi, 24 Weeks Gestation</h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Patient ID: ANC-9921</p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-100 px-4 py-1.5 rounded-full flex items-center gap-2">
            <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-700 font-bold text-xs tracking-widest uppercase">Green - Normal Risk</span>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Info size={18} className="text-primary" />
                <p className="text-sm font-semibold text-slate-900">MOHFW Guideline Recommendation</p>
              </div>
              <div className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-bold">
                Recommended: 22 Nov 2024
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h4 className="font-serif font-bold text-slate-900 text-lg">Select Date</h4>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400"><ChevronRight className="rotate-180" size={20} /></button>
                  <span className="font-bold text-slate-900 px-2 py-2">November 2024</span>
                  <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400"><ChevronRight size={20} /></button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-7 gap-2 text-center">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                    <div key={d} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{d}</div>
                  ))}
                  {Array.from({ length: 30 }, (_, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square flex items-center justify-center text-sm font-medium rounded-xl cursor-pointer transition-all ${i + 1 === 22 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'hover:bg-primary/5'}`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h4 className="font-serif font-bold text-slate-900 mb-4">Select Time Slot</h4>
              <div className="flex flex-col gap-3">
                <button className="w-full py-3 px-4 rounded-full border-2 border-primary bg-primary text-white font-bold text-sm flex items-center justify-between">
                  <span>Morning (9AM - 12PM)</span>
                  <CheckCircle2 size={16} />
                </button>
                <button className="w-full py-3 px-4 rounded-full border border-primary/20 bg-white text-primary font-bold text-sm hover:bg-primary/5 transition-colors text-left">
                  Afternoon (2PM - 5PM)
                </button>
              </div>
            </div>
            <button onClick={() => setView('DASHBOARD')} className="w-full h-16 rounded-2xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all flex items-center justify-center gap-3">
              <Calendar size={20} />
              Confirm Schedule
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

const AdmissionConfirmation = ({ setView }: { setView: (v: AppView) => void }) => {
  return (
    <div className="pb-24 bg-background-light min-h-screen">
      <Header title="Admission Confirmation" onBack={() => setView('ASSESSMENT_RESULT')} />
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <section className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-slate-100">
          <div className="p-8 md:p-12 text-center">
            <div className="size-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check size={48} strokeWidth={3} />
            </div>
            <h2 className="text-4xl font-serif font-black text-slate-900 mb-4">Admission Confirmed</h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto mb-10">Hospital admission for Anjali Devi has been successfully logged and the referral facility has been notified.</p>
            
            <div className="bg-slate-50 rounded-2xl p-6 text-left mb-10 space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Reference ID</span>
                <span className="font-mono font-bold text-slate-900">ADM-2023-9921-X</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Facility</span>
                <span className="font-bold text-slate-900">City District Hospital</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Priority</span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Emergency</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-full h-14 rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                <Download size={20} />
                Download Referral Slip
              </button>
              <button onClick={() => setView('DASHBOARD')} className="w-full h-14 rounded-full border-2 border-slate-200 text-slate-600 font-bold text-lg hover:bg-slate-50 transition-all">
                Return to Dashboard
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const PatientHistory = ({ setView }: { setView: (v: AppView) => void }) => {
  return (
    <div className="pb-24 bg-background-light min-h-screen">
      <Header title="Patient History" onBack={() => setView('PATIENT_DIRECTORY')} />
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="size-32 rounded-3xl overflow-hidden shadow-2xl border-4 border-white shrink-0">
            <img src="https://picsum.photos/seed/anjali/400/400" alt="Patient" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-4xl font-serif font-black text-slate-900">Anjali Devi</h2>
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">High Risk</span>
            </div>
            <p className="text-slate-500 font-medium mb-6">26 Years • RCH ID: 102938475612 • G2P1L1</p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Gestation</p>
                <p className="text-lg font-bold text-slate-900">24 Weeks</p>
              </div>
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">EDD</p>
                <p className="text-lg font-bold text-slate-900">12 May 2024</p>
              </div>
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Blood Group</p>
                <p className="text-lg font-bold text-slate-900">B Positive</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Visit Timeline</h3>
          <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {[
              { date: 'Oct 24, 2023', type: 'ANC Visit 3', risk: 'HIGH', bp: '145/95', hb: '9.8', note: 'Referred to District Hospital due to severe anemia and hypertension.' },
              { date: 'Sep 12, 2023', type: 'ANC Visit 2', risk: 'MODERATE', bp: '130/85', hb: '10.5', note: 'Iron-folic acid supplements prescribed. Advised high protein diet.' },
              { date: 'Aug 05, 2023', type: 'ANC Visit 1', risk: 'NORMAL', bp: '120/80', hb: '11.2', note: 'Initial registration. All vitals normal.' }
            ].map((visit, i) => (
              <div key={i} className="relative pl-12">
                <div className={`absolute left-0 top-1 size-8 rounded-full border-4 border-white shadow-md flex items-center justify-center ${visit.risk === 'HIGH' ? 'bg-red-600' : visit.risk === 'MODERATE' ? 'bg-amber-500' : 'bg-green-500'}`}>
                  <div className="size-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{visit.date}</p>
                      <h4 className="text-xl font-bold text-slate-900">{visit.type}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${visit.risk === 'HIGH' ? 'bg-red-50 text-red-600' : visit.risk === 'MODERATE' ? 'bg-amber-50 text-amber-600' : 'bg-green-50 text-green-600'}`}>
                      {visit.risk} RISK
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Blood Pressure</p>
                      <p className="font-bold text-slate-900">{visit.bp} mmHg</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Hemoglobin</p>
                      <p className="font-bold text-slate-900">{visit.hb} g/dL</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed italic">"{visit.note}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [view, setView] = useState<AppView>('DASHBOARD');

  const renderView = () => {
    switch (view) {
      case 'DASHBOARD': return <Dashboard setView={setView} />;
      case 'PATIENT_DIRECTORY': return <PatientDirectory setView={setView} />;
      case 'RISK_ASSESSMENT': return <RiskAssessment setView={setView} />;
      case 'ASSESSMENT_RESULT': return <AssessmentResult setView={setView} />;
      case 'LIVE_CONSULTATION': return <LiveConsultation setView={setView} />;
      case 'PROFILE': return <Profile setView={setView} />;
      case 'SYNC_CENTER': return <SyncCenter setView={setView} />;
      case 'REFERRAL_LOGS': return <ReferralLogs setView={setView} />;
      case 'SCHEDULE_VISIT': return <ScheduleVisit setView={setView} />;
      case 'ADMISSION_CONFIRMATION': return <AdmissionConfirmation setView={setView} />;
      case 'PATIENT_HISTORY': return <PatientHistory setView={setView} />;
      case 'REGISTRATION': return <RiskAssessment setView={setView} />; // Reusing assessment for demo
      default: return <Dashboard setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-light transition-colors duration-300">
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>
      <BottomNav currentView={view} setView={setView} />
    </div>
  );
}
