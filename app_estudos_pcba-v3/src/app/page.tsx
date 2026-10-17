'use client';

import Link from 'next/link';
import { Shield, Calendar, BookOpen, Clock, Target, ArrowRight, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-4 md:p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto w-full flex items-center justify-between py-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="bg-amber-600 p-2.5 rounded-xl text-slate-950 font-bold shadow-lg shadow-amber-600/20">
            <Shield className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">POLÍCIA CIVIL BA 2026</h1>
            <p className="text-xs text-amber-500 font-medium">Escrivão de Polícia — 150 Vagas</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-xs text-slate-300">
          <Clock className="w-4 h-4 text-amber-500" />
          <span>Prova: <strong>06 de Dezembro de 2026</strong></span>
        </div>
      </header>

      {/* Main Choice Section */}
      <main className="max-w-5xl mx-auto w-full my-auto py-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase inline-block mb-3">
            Método MERFR — Engenharia Reversa
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Como você deseja acessar sua preparação hoje?
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Escolha abaixo para configurar seu planejamento de estudos individual ou entrar direto na central tática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Option 1: Planejamento */}
          <div className="bg-slate-900 border-2 border-amber-500/40 hover:border-amber-500 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase px-3 py-1 rounded-bl-xl tracking-wider">
              Recomendado
            </div>
            <div>
              <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                Planejamento de Estudos
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Informe o seu nome, dias da semana e carga horária disponível. A plataforma criará automaticamente o seu cronograma personalizado focado exclusivamente nos <strong>14 Guias/Resumos</strong> e nos <strong>5 Simulados da Prova</strong>.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-amber-500" />
                  <span>Gerador automático de cronograma individual</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span><strong>Download do Planejamento em PDF</strong> no painel</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  <span>Mapeamento sequencial de resumos + simulados</span>
                </li>
              </ul>
            </div>
            <Link
              href="/onboarding"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 text-sm"
            >
              <span>Configurar Meu Planejamento</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Option 2: Estudos Direto */}
          <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group">
            <div>
              <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Acesso Direto aos Estudos
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Siga direto para o painel de estudos com os 14 resumos e guias no Google Drive, os 5 simulados interativos em ambiente real de prova, o timer pomodoro e os alertas de aproximação do exame.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Acesso direto aos 14 Guias e Resumos (Drive)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span>5 Simulados com tempo real, dicas e diagnóstico</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Timer Pomodoro e contador regressivo de prova</span>
                </li>
              </ul>
            </div>
            <Link
              href="/dashboard"
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 border border-slate-700 transition-all text-sm"
            >
              <span>Ir Direto para os Estudos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full py-4 text-center border-t border-slate-900 text-xs text-slate-500">
        Polícia Civil da Bahia (PC/BA) — Preparatório Tático para Escrivão | Método MERFR 2026
      </footer>
    </div>
  );
}
