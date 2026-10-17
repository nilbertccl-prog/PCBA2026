'use client';

import { useState } from 'react';
import { GUIAS_RESUMOS, GuiaItem } from '@/lib/data';
import { BookOpen, ExternalLink, Search, Filter, ShieldCheck } from 'lucide-react';

export default function GuiasPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Conhecimentos Gerais', 'Conhecimentos Específicos', 'Editais & Dossiês'];

  const filteredGuias = GUIAS_RESUMOS.filter((guia) => {
    const matchesSearch =
      guia.title.toLowerCase().includes(search.toLowerCase()) ||
      guia.description.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'Todos' || guia.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-500/10 border border-blue-500/30 p-2.5 rounded-xl text-blue-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Central de Resumos e Guias de Estudo</h2>
            <p className="text-xs text-slate-400">
              Links diretos para os 14 materiais de apoio e resumos salvos no Google Drive.
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por matéria ou palavra-chave (ex: Penal, Português, Edital)..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-500 text-slate-950 font-bold'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of 14 Guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGuias.map((guia) => (
          <div
            key={guia.id}
            className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-950 text-blue-400 border border-slate-800 px-2 py-0.5 rounded">
                  {guia.category}
                </span>
                <ShieldCheck className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                {guia.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                {guia.description}
              </p>
            </div>

            <a
              href={guia.url}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-slate-950 border border-blue-500/30 font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-xs transition-all mt-2"
            >
              <span>Abrir Guia no Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
