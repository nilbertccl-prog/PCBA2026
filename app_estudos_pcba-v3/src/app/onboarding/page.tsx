'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Calendar, Clock, User, CheckCircle2, ArrowRight } from 'lucide-react';
import { generateStudyPlan } from '@/lib/data';

export default function OnboardingPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);

    // Generate study plan object
    const plan = generateStudyPlan(name, daysPerWeek, hoursPerDay);

    // Save locally
    if (typeof window !== 'undefined') {
      localStorage.setItem('userName', name);
      localStorage.setItem('userStudyPlan', JSON.stringify(plan));
    }

    setTimeout(() => {
      router.push('/dashboard?planCreated=true');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-amber-600 p-2 rounded-lg text-slate-950">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Monte seu Planejamento de Estudos</h1>
            <p className="text-xs text-amber-500">Focado exclusivamente em Simulados e Resumos</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-500" />
              <span>Seu Nome Completo ou Como Quer Ser Chamado</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Escrivão Carlos Silva"
              className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
            />
          </div>

          {/* Dias na semana */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>Quantos dias por semana você pode estudar?</span>
            </label>
            <div className="grid grid-cols-5 gap-2">
              {[3, 4, 5, 6, 7].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setDaysPerWeek(num)}
                  className={`py-3 rounded-xl border text-sm font-bold transition-all ${
                    daysPerWeek === num
                      ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {num} dias
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5">
              Recomendado: 5 dias (Segunda a Sexta-feira)
            </p>
          </div>

          {/* Horas por dia */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Quantas horas de estudo por dia?</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 1.5, 2, 3].map((hrs) => (
                <button
                  key={hrs}
                  type="button"
                  onClick={() => setHoursPerDay(hrs)}
                  className={`py-3 rounded-xl border text-sm font-bold transition-all ${
                    hoursPerDay === hrs
                      ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {hrs}h/dia
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5">
              No Método MERFR, 1h a 2h diárias são suficientes para a aprovação.
            </p>
          </div>

          {/* Resumo do Planejamento Previsto */}
          <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 text-xs text-slate-300 space-y-2">
            <div className="font-semibold text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>O seu planejamento automático incluirá:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px]">
              <li>Mapeamento sequencial dos <strong>14 Guias e Resumos</strong> (Google Drive)</li>
              <li>Agendamento dos <strong>5 Simulados Inéditos</strong> no estilo AOCP</li>
              <li>Sessões de reforço das Leis Secas e Caderno de Erros</li>
              <li>Data-limite do exame: <strong>06 de Dezembro de 2026</strong></li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={loading || !name.trim()}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 text-sm disabled:opacity-50"
          >
            {loading ? 'Gerando Cronograma Tático...' : 'Gerar Meu Planejamento e Entrar no Painel'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
