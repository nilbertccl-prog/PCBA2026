import './globals.css';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'PC/BA 2026 — Plataforma Tática de Estudos Escrivão',
  description: 'Simulados, Guias de Estudo, Pomodoro e Planejamento Personalizado para a PC/BA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
