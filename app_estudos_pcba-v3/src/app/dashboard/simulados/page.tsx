'use client';

import Link from 'next/link';
import { SIMULADOS_DATA } from '@/lib/data';
import { Target, Clock, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function SimuladosListPage() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-xl text-amber-500">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Simulados Inéditos no Estilo Instituto AOCP</h2>
            <p className="text-xs text-slate-400">
              5 provas no formato oficial de Escrivão PC/BA com cronômetro em tempo real, dicas por questão, sensation de progresso e relatório pós-prova.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SIMULADOS_DATA.map((simulado) => (
          <div
            key={simulado.id}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded-md">
                  Simulado Oficial 0{simulado.id}
                </span>
                <div className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>{simulado.duracaoMinutos} min</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                {simulado.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {simulado.subtitle}
              </p>

              <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 text-xs text-slate-300 space-y-1 mb-6">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Questões:</span>
                  <strong className="text-white">{simulado.questoes.length} Itens Múltipla Escolha</strong>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Recursos:</span>
                  <strong className="text-amber-400">Dicas + Diagnóstico + Resolução</strong>
                </div>
              </div>
            </div>

            <Link
              href={`/dashboard/simulados/${simulado.id}`}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-all shadow-md shadow-amber-500/10"
            >
              <span>Iniciar Simulado em Ambiente Real</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
