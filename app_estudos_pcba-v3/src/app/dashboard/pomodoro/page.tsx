'use client';

import { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw, CheckCircle2, Shield } from 'lucide-react';

export default function PomodoroPage() {
  const [secondsLeft, setSecondsLeft] = useState<number>(25 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [mode, setMode] = useState<'focus' | 'shortBreak' | 'longBreak'>('focus');
  const [selectedSubject, setSelectedSubject] = useState<string>('Resumos e Simulados');
  const [completedSessions, setCompletedSessions] = useState<number>(0);

  useEffect(() => {
    let interval: any = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isActive) {
      setIsActive(false);
      if (mode === 'focus') {
        setCompletedSessions((prev) => prev + 1);
        alert('🎉 Parabéns! Ciclo de Pomodoro Tático concluído! Faça uma pausa.');
      }
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft, mode]);

  const switchMode = (newMode: 'focus' | 'shortBreak' | 'longBreak') => {
    setMode(newMode);
    setIsActive(false);
    if (newMode === 'focus') setSecondsLeft(25 * 60);
    if (newMode === 'shortBreak') setSecondsLeft(5 * 60);
    if (newMode === 'longBreak') setSecondsLeft(15 * 60);
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-2xl space-y-6">
        <div className="flex items-center justify-center gap-2 text-amber-500 font-semibold text-xs uppercase tracking-wider">
          <Clock className="w-4 h-4" />
          <span>Timer Pomodoro de Estudos Táticos</span>
        </div>

        {/* Mode Selector */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => switchMode('focus')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              mode === 'focus'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-950 border border-slate-800 text-slate-400'
            }`}
          >
            Foco (25 min)
          </button>
          <button
            onClick={() => switchMode('shortBreak')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              mode === 'shortBreak'
                ? 'bg-blue-500 text-slate-950 shadow-lg shadow-blue-500/20'
                : 'bg-slate-950 border border-slate-800 text-slate-400'
            }`}
          >
            Pausa Curta (5 min)
          </button>
          <button
            onClick={() => switchMode('longBreak')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              mode === 'longBreak'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-950 border border-slate-800 text-slate-400'
            }`}
          >
            Descanso Longo (15 min)
          </button>
        </div>

        {/* Big Display */}
        <div className="py-8">
          <div className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white font-mono">
            {formatTime(secondsLeft)}
          </div>
          <p className="text-xs text-amber-400 mt-2 font-medium">
            {mode === 'focus' ? 'Sessão de Foco Total na Resolução de Questões' : 'Tempo de Descanso Mental'}
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl flex items-center gap-2 text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-105"
          >
            {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            <span>{isActive ? 'Pausar' : 'Iniciar Foco'}</span>
          </button>

          <button
            onClick={() => switchMode(mode)}
            className="bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 p-3.5 rounded-xl transition-all"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Subject Selector */}
        <div className="pt-6 border-t border-slate-800/80 max-w-md mx-auto text-left space-y-2">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            Mapear Ciclo para Disciplina:
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
          >
            <option value="Resumos e Simulados">Leitura de Resumos & Simulados</option>
            <option value="Língua Portuguesa">Língua Portuguesa e Redação</option>
            <option value="Direito Penal">Direito Penal e Processual Penal</option>
            <option value="Direito Administrativo">Direito Administrativo / LOPC BA</option>
            <option value="Medicina Legal">Medicina Legal e Arquivologia</option>
          </select>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Ciclos de Estudo Concluídos Hoje:</span>
          </div>
          <span className="font-extrabold text-amber-400 text-base">{completedSessions} Ciclos ({completedSessions * 25} min)</span>
        </div>
      </div>
    </div>
  );
}
