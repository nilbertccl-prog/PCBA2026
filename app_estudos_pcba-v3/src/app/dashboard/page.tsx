'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, BookOpen, Target, Clock, Download, ArrowRight, CheckCircle2, Shield, User } from 'lucide-react';
import { downloadPlanPDF } from '@/lib/pdfExporter';
import { GUIAS_RESUMOS, SIMULADOS_DATA } from '@/lib/data';

export default function DashboardHome() {
  const [userName, setUserName] = useState<string>('Concurseiro');
  const [userPlan, setUserPlan] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem('userName');
      const storedPlan = localStorage.getItem('userStudyPlan');

      if (storedName) setUserName(storedName);
      if (storedPlan) {
        try {
          setUserPlan(JSON.parse(storedPlan));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-semibold text-xs uppercase tracking-wider mb-1">
              <Shield className="w-4 h-4" />
              <span>Painel do Candidato — PC/BA 2026</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Bem-vindo, <span className="text-amber-400">{userName}</span>!
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1 max-w-2xl">
              Sua rotina tática para o cargo de Escrivão de Polícia está pronta. Acesse abaixo seu planejamento em PDF, resumos e simulados.
            </p>
          </div>

          {/* Big PDF Download Button */}
          {userPlan && (
            <button
              onClick={() => downloadPlanPDF(userPlan)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl flex items-center gap-2.5 shadow-lg shadow-amber-500/20 transition-all text-sm shrink-0 hover:scale-105"
            >
              <Download className="w-5 h-5 text-slate-950" />
              <span>Baixar Meu Planejamento (PDF)</span>
            </button>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-3">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase">Resumos no Drive</p>
            <p className="text-xl font-bold text-white">{GUIAS_RESUMOS.length} Materiais</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-3">
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-lg">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase">Simulados Inéditos</p>
            <p className="text-xl font-bold text-white">{SIMULADOS_DATA.length} Simulados</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-3">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase">Rotina Definida</p>
            <p className="text-xl font-bold text-white">
              {userPlan ? `${userPlan.daysPerWeek} dias/sem (${userPlan.hoursPerDay}h)` : 'Padrão 5 dias/sem'}
            </p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-3">
          <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase">Data da Prova</p>
            <p className="text-xl font-bold text-white">06/12/2026</p>
          </div>
        </div>
      </div>

      {/* Main Grid Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Module 1: Guias e Resumos */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                14 Resumos no Drive
              </span>
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Guias de Estudo e Resumos Rápido</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Links diretos para todos os 14 materiais em PDF salvos no Google Drive: Arquivologia, Português, Direito Penal, Processual, Medicina Legal, Dossiê Tático e Editais.
            </p>
          </div>
          <Link
            href="/dashboard/guias"
            className="w-full bg-slate-800 hover:bg-slate-700 text-blue-400 border border-blue-500/30 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors"
          >
            <span>Acessar Resumos e Guias (14 PDFs)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Module 2: Simulados */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                Ambiente Real de Prova
              </span>
              <Target className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">5 Simulados Inéditos AOCP</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Simule o dia da prova com cronômetro em tempo real, dicas estratégicas para cada questão, sensação de progresso instantânea e diagnóstico com relatório pós-prova.
            </p>
          </div>
          <Link
            href="/dashboard/simulados"
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors"
          >
            <span>Realizar Simulados (5 Provas)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Module 3: Visualizador do Planejamento */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span>Seu Cronograma Tático Personalizado</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Cronograma gerado com base no seu perfil de estudo.
            </p>
          </div>

          <Link
            href="/dashboard/planejamento"
            className="bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors shrink-0"
          >
            <span>Ver Planejamento Completo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Preview snippet of plan */}
        {userPlan?.schedule ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] border-b border-slate-800">
                <tr>
                  <th className="py-2.5 px-3">Dia</th>
                  <th className="py-2.5 px-3">Semana</th>
                  <th className="py-2.5 px-3">Dia da Semana</th>
                  <th className="py-2.5 px-3">Foco Principal de Estudo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {userPlan.schedule.slice(0, 5).map((item: any) => (
                  <tr key={item.diaGlobal} className="hover:bg-slate-800/40">
                    <td className="py-2.5 px-3 font-bold text-amber-500">Dia {item.diaGlobal}</td>
                    <td className="py-2.5 px-3 text-slate-400">Semana {item.semana}</td>
                    <td className="py-2.5 px-3 font-semibold">{item.diaSemana}</td>
                    <td className="py-2.5 px-3 text-white">{item.foco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 bg-slate-950 rounded-xl text-center text-xs text-slate-500">
            Nenhum planejamento individual configurado ainda.{' '}
            <Link href="/onboarding" className="text-amber-500 underline font-semibold">
              Clique aqui para configurar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
