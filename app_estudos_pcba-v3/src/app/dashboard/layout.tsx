'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, BookOpen, Target, Clock, Calendar, AlertCircle, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [daysRemaining, setDaysRemaining] = useState<number>(0);

  useEffect(() => {
    const examDate = new Date('2026-12-06T00:00:00');
    const today = new Date();
    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysRemaining(diffDays > 0 ? diffDays : 0);
  }, []);

  const navItems = [
    { href: '/dashboard', label: 'Início', icon: Home },
    { href: '/dashboard/planejamento', label: 'Meu Planejamento PDF', icon: Calendar },
    { href: '/dashboard/guias', label: 'Guias e Resumos (14)', icon: BookOpen },
    { href: '/dashboard/simulados', label: 'Simulados (5)', icon: Target },
    { href: '/dashboard/pomodoro', label: 'Timer Pomodoro', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Banner Alert: Proximidade da Prova */}
      <div className="bg-amber-500 text-slate-950 px-4 py-2 font-semibold text-xs md:text-sm flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2 max-w-6xl mx-auto w-full">
          <AlertCircle className="w-4 h-4 text-slate-950 shrink-0" />
          <span>
            <strong>ALERTA DE PROVA PC/BA 2026:</strong> Faltam <strong>{daysRemaining} dias</strong> para a sua prova em <strong>06 de Dezembro de 2026</strong>!
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <div className="bg-amber-600 p-2 rounded-xl text-slate-950 font-bold">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-base font-bold text-white tracking-tight">POLÍCIA CIVIL BA</h1>
                <p className="text-[10px] text-amber-500 font-semibold uppercase">Escrivão de Polícia 2026</p>
              </div>
            </Link>
          </div>

          {/* Navigation Bar */}
          <nav className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-4 px-4 text-center text-xs text-slate-500 mt-auto">
        Plataforma Tática de Preparação Escrivão PC/BA 2026 • Método MERFR
      </footer>
    </div>
  );
}
