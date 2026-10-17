'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, Download, Shield, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { downloadPlanPDF } from '@/lib/pdfExporter';

export default function PlanejamentoPage() {
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
      {/* Top Banner with PDF Button */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-500 font-semibold text-xs uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>Cronograma de Estudos MERFR</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            Planejamento Individual de <span className="text-amber-400">{userName}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Data-limite do exame: <strong>06 de Dezembro de 2026</strong> | {userPlan?.daysPerWeek || 5} dias por semana ({userPlan?.hoursPerDay || 2}h/dia)
          </p>
        </div>

        {userPlan && (
          <button
            onClick={() => downloadPlanPDF(userPlan)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2.5 shadow-xl shadow-amber-500/20 transition-all text-sm shrink-0 hover:scale-105"
          >
            <Download className="w-5 h-5 text-slate-950" />
            <span>BAIXAR PLANEJAMENTO EM PDF</span>
          </button>
        )}
      </div>

      {/* Schedule Table */}
      {userPlan?.schedule ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              <span>Cronograma Detalhado Dia a Dia</span>
            </h3>
            <span className="text-xs text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
              Total de {userPlan.schedule.length} Dias Mapeados
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Dia Global</th>
                  <th className="py-3 px-4">Semana</th>
                  <th className="py-3 px-4">Dia da Semana</th>
                  <th className="py-3 px-4">Carga Horária</th>
                  <th className="py-3 px-4">Foco Principal de Estudo</th>
                  <th className="py-3 px-4">Ação Direta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {userPlan.schedule.map((item: any) => (
                  <tr key={item.diaGlobal} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-amber-500">Dia {item.diaGlobal}</td>
                    <td className="py-3 px-4 text-slate-400">Semana {item.semana}</td>
                    <td className="py-3 px-4 font-semibold text-white">{item.diaSemana}</td>
                    <td className="py-3 px-4 text-slate-300">{item.horas} Hora(s)</td>
                    <td className="py-3 px-4 text-slate-200 font-medium">{item.foco}</td>
                    <td className="py-3 px-4">
                      {item.linkGuia ? (
                        <a
                          href={item.linkGuia}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2.5 py-1 rounded text-[11px] font-semibold inline-block"
                        >
                          Abrir Guia PDF
                        </a>
                      ) : item.linkSimulado ? (
                        <Link
                          href={item.linkSimulado}
                          className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded text-[11px] font-semibold inline-block"
                        >
                          Ir para Simulado
                        </Link>
                      ) : (
                        <span className="text-slate-500 text-[11px]">Revisão de Erros</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom PDF Download Button */}
          <div className="mt-6 pt-6 border-t border-slate-800 flex justify-center">
            <button
              onClick={() => downloadPlanPDF(userPlan)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl flex items-center gap-3 shadow-xl shadow-amber-500/20 transition-all text-base hover:scale-105"
            >
              <Download className="w-6 h-6 text-slate-950" />
              <span>BAIXAR SEU PLANEJAMENTO COMPLETO EM PDF</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
          <h3 className="text-xl font-bold text-white">Você ainda não configurou seu planejamento individual</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Informe o seu nome e rotina disponível para que a plataforma monte seu cronograma tático focado exclusivamente nos 14 resumos e nos 5 simulados.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all"
          >
            Configurar Planejamento Agora
          </Link>
        </div>
      )}
    </div>
  );
}
