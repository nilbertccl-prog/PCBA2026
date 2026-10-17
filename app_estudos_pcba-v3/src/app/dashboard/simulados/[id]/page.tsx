'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { SIMULADOS_DATA, Simulado, Questao } from '@/lib/data';
import { Target, Clock, AlertTriangle, CheckCircle2, HelpCircle, ArrowLeft, ArrowRight, ShieldCheck, Award, RefreshCw } from 'lucide-react';

export default function SimuladoRunnerPage() {
  const params = useParams();
  const router = useRouter();

  const simuladoId = parseInt(params.id as string) || 1;
  const simulado: Simulado | undefined = SIMULADOS_DATA.find((s) => s.id === simuladoId);

  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [hintsUsed, setHintsUsed] = useState<{ [key: number]: boolean }>({});
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState<number>((simulado?.duracaoMinutos || 60) * 60);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [onlyShowErrors, setOnlyShowErrors] = useState<boolean>(false);

  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isFinished]);

  if (!simulado) {
    return (
      <div className="p-8 text-center text-slate-400">
        Simulado não encontrado.{' '}
        <button onClick={() => router.push('/dashboard/simulados')} className="text-amber-500 underline">
          Voltar
        </button>
      </div>
    );
  }

  const currentQuestion: Questao = simulado.questoes[currentQuestionIdx];
  const totalQuestions = simulado.questoes.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const selectOption = (optionIdx: number) => {
    if (isFinished) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIdx,
    }));
  };

  const toggleHint = (qId: number) => {
    setHintsUsed((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  // Evaluation calculations
  let correctCount = 0;
  let wrongCount = 0;
  let unAnsweredCount = 0;

  if (isFinished) {
    simulado.questoes.forEach((q) => {
      const userAns = answers[q.id];
      if (userAns === undefined) {
        unAnsweredCount++;
      } else if (userAns === q.correctAnswer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });
  }

  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  // Performance perspective logic
  let performanceLabel = '';
  let performanceColor = '';
  if (scorePercent >= 80) {
    performanceLabel = 'Aprovado nas Vagas! Desempenho excelente dentro da margem de corte.';
    performanceColor = 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
  } else if (scorePercent >= 60) {
    performanceLabel = 'Classificado para a Discursiva. Atenção para reforçar pontos fracos no Caderno de Erros.';
    performanceColor = 'text-amber-400 border-amber-500/30 bg-amber-500/10';
  } else {
    performanceLabel = 'Necessita Reforço Tático Urgente. Revise os resumos das disciplinas com taxa de acerto baixa.';
    performanceColor = 'text-rose-400 border-rose-500/30 bg-rose-500/10';
  }

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Top Header of Simulator */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-500 font-semibold text-xs uppercase tracking-wider mb-1">
            <Target className="w-4 h-4" />
            <span>Ambiente Real de Simulação — PC/BA 2026</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white">{simulado.title}</h2>
        </div>

        {!isFinished ? (
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-center">
              <span className="text-[10px] text-slate-500 block font-semibold uppercase">Tempo Restante</span>
              <span className="text-lg font-mono font-bold text-amber-400">{formatTimer(secondsLeft)}</span>
            </div>

            <button
              onClick={() => {
                if (confirm('Tem certeza que deseja encerrar e entregar o simulado agora?')) {
                  setIsFinished(true);
                }
              }}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-xs transition-all shadow-lg shadow-amber-500/10 shrink-0"
            >
              Finalizar Simulado
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setIsFinished(false);
              setAnswers({});
              setCurrentQuestionIdx(0);
              setSecondsLeft(simulado.duracaoMinutos * 60);
            }}
            className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refazer Simulado</span>
          </button>
        )}
      </div>

      {!isFinished ? (
        /* Exam Runner Mode */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Question Card */}
          <div className="lg:col-span-3 space-y-6">
            {/* Progress Bar & Sensation of Progress */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span className="text-amber-400">Sensação de Progresso: {answeredCount} de {totalQuestions} respondidas</span>
                <span>{progressPercent}% Concluído</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-2.5 border border-slate-800">
                <div
                  className="bg-amber-500 h-2.5 rounded-full transition-all duration-300 shadow-sm shadow-amber-500/30"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Question Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
                  Questão {currentQuestionIdx + 1} de {totalQuestions} • {currentQuestion.disciplina}
                </span>

                <button
                  onClick={() => toggleHint(currentQuestion.id)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-lg transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{hintsUsed[currentQuestion.id] ? 'Ocultar Dica' : 'Ver Dica Tática'}</span>
                </button>
              </div>

              {/* Hint Callout */}
              {hintsUsed[currentQuestion.id] && (
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-xs text-blue-200 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-blue-400 mb-1">Dica do Professor:</strong>
                    <span>{currentQuestion.dica}</span>
                  </div>
                </div>
              )}

              {/* Enunciado */}
              <p className="text-sm md:text-base font-medium text-slate-100 leading-relaxed">
                {currentQuestion.enunciado}
              </p>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = answers[currentQuestion.id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => selectOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border text-xs md:text-sm font-medium transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 text-amber-300 shadow-md shadow-amber-500/10'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Controls */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                <button
                  disabled={currentQuestionIdx === 0}
                  onClick={() => setCurrentQuestionIdx((prev) => prev - 1)}
                  className="px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:text-white disabled:opacity-30 text-xs font-semibold flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <button
                  disabled={currentQuestionIdx === totalQuestions - 1}
                  onClick={() => setCurrentQuestionIdx((prev) => prev + 1)}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 disabled:opacity-30 text-xs font-bold flex items-center gap-1.5 shadow-md shadow-amber-500/10"
                >
                  <span>Próxima</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Question Navigator Drawer */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 h-fit">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Gabarito da Prova</h3>
            <div className="grid grid-cols-5 gap-2">
              {simulado.questoes.map((q, idx) => {
                const isAnswered = answers[q.id] !== undefined;
                const isCurrent = idx === currentQuestionIdx;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIdx(idx)}
                    className={`h-9 rounded-lg text-xs font-bold border transition-all ${
                      isCurrent
                        ? 'border-amber-500 ring-2 ring-amber-500/30 font-extrabold'
                        : ''
                    } ${
                      isAnswered
                        ? 'bg-amber-500 text-slate-950 border-amber-500'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-amber-500 rounded-sm"></span>
                <span>Respondida</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-slate-950 border border-slate-800 rounded-sm"></span>
                <span>Pendente</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Complete Post-Exam Performance Diagnostic */
        <div className="space-y-6">
          {/* Diagnostic Banner */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                Relatório Tático Pós-Prova
              </span>
              <Award className="w-8 h-8 text-amber-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Pontuação Final</span>
                <p className="text-3xl font-extrabold text-amber-400 mt-1">{scorePercent}%</p>
                <p className="text-[11px] text-slate-400 mt-1">{correctCount} de {totalQuestions} acertos</p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Acertos</span>
                <p className="text-3xl font-extrabold text-emerald-400 mt-1">{correctCount}</p>
                <p className="text-[11px] text-slate-400 mt-1">Questões corretas</p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Erros</span>
                <p className="text-3xl font-extrabold text-rose-400 mt-1">{wrongCount}</p>
                <p className="text-[11px] text-slate-400 mt-1">Pontos a corrigir</p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Não Respondidas</span>
                <p className="text-3xl font-extrabold text-slate-400 mt-1">{unAnsweredCount}</p>
                <p className="text-[11px] text-slate-400 mt-1">Branco</p>
              </div>
            </div>

            {/* Perspectiva de Desempenho */}
            <div className={`p-4 rounded-xl border ${performanceColor} text-xs leading-relaxed`}>
              <strong className="block text-sm font-bold mb-1">Perspectiva de Desempenho na Prova Oficial:</strong>
              <span>{performanceLabel}</span>
            </div>
          </div>

          {/* Correction Section */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">Resolução e Gabarito Comentado</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Análise cirúrgica com comentários fundamentados para cada item.
                </p>
              </div>

              <button
                onClick={() => setOnlyShowErrors(!onlyShowErrors)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                  onlyShowErrors
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {onlyShowErrors ? 'Exibindo Apenas Questões Erradas' : 'Filtrar Apenas Minhas Erradas'}
              </button>
            </div>

            <div className="space-y-6">
              {simulado.questoes
                .filter((q) => {
                  if (!onlyShowErrors) return true;
                  const uAns = answers[q.id];
                  return uAns !== q.correctAnswer;
                })
                .map((q, qIndex) => {
                  const userAns = answers[q.id];
                  const isCorrect = userAns === q.correctAnswer;
                  const isUnanswered = userAns === undefined;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-xl border text-xs space-y-4 ${
                        isCorrect
                          ? 'bg-emerald-950/20 border-emerald-500/30'
                          : 'bg-rose-950/20 border-rose-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-300">
                          Questão {qIndex + 1} • {q.disciplina}
                        </span>
                        <span
                          className={`font-extrabold uppercase px-2.5 py-1 rounded text-[10px] ${
                            isCorrect
                              ? 'bg-emerald-500 text-slate-950'
                              : 'bg-rose-500 text-white'
                          }`}
                        >
                          {isCorrect ? 'Acerto' : isUnanswered ? 'Em Branco' : 'Erro'}
                        </span>
                      </div>

                      <p className="font-medium text-white text-sm leading-relaxed">{q.enunciado}</p>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isOfficialCorrect = optIdx === q.correctAnswer;
                          const isUserChoice = userAns === optIdx;

                          let optionStyle = 'bg-slate-950 border-slate-800 text-slate-400';
                          if (isOfficialCorrect) {
                            optionStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                          } else if (isUserChoice && !isCorrect) {
                            optionStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 line-through';
                          }

                          return (
                            <div key={optIdx} className={`p-3 rounded-lg border text-xs ${optionStyle}`}>
                              {opt}
                              {isOfficialCorrect && ' ✓ (Gabarito Oficial)'}
                              {isUserChoice && !isCorrect && ' ✗ (Sua Resposta)'}
                            </div>
                          );
                        })}
                      </div>

                      {/* Comentário Tático */}
                      <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-1.5 text-slate-300">
                        <strong className="text-amber-400 block">Comentário Tático & Fundamentação:</strong>
                        <p className="leading-relaxed">{q.comentario}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
