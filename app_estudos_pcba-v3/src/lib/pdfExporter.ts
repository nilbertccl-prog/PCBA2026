import jsPDF from 'jspdf';

export function downloadPlanPDF(plan: any) {
  if (!plan) return;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const userName = plan.userName || 'Concurseiro PC/BA';
  
  // Header
  doc.setFillColor(15, 23, 42); // slate-950
  doc.rect(0, 0, 210, 35, 'F');

  doc.setTextColor(245, 158, 11); // amber-500
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('CRONOGRAMA TÁTICO DE ESTUDOS — PC/BA 2026', 15, 15);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.text(`Cargo: Escrivão de Polícia Civil | Plano Personalizado de: ${userName}`, 15, 24);
  doc.text(`Exame Confirmado: 06 de Dezembro de 2026 | Rotina: ${plan.daysPerWeek} dias/semana (${plan.hoursPerDay}h/dia)`, 15, 30);

  // Body Content
  let y = 45;
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('Planejamento de Sequência de Estudos (Método MERFR)', 15, y);
  y += 8;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');

  const schedule = plan.schedule || [];
  
  // Table Headers
  doc.setFillColor(30, 41, 59); // slate-800
  doc.rect(15, y, 180, 8, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text('Dia', 18, y + 5.5);
  doc.text('Semana', 30, y + 5.5);
  doc.text('Dia da Semana', 52, y + 5.5);
  doc.text('Foco Principal do Estudo / Material Focal', 90, y + 5.5);

  y += 8;

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'normal');

  schedule.slice(0, 32).forEach((item: any, idx: number) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    if (idx % 2 === 0) {
      doc.setFillColor(241, 245, 249); // slate-100
      doc.rect(15, y, 180, 7, 'F');
    }

    doc.text(`${item.diaGlobal}`, 18, y + 5);
    doc.text(`Semana ${item.semana}`, 30, y + 5);
    doc.text(`${item.diaSemana}`, 52, y + 5);
    
    // Truncate long text
    const focoText = item.foco.length > 55 ? item.foco.substring(0, 52) + '...' : item.foco;
    doc.text(focoText, 90, y + 5);

    y += 7;
  });

  // Footer Note
  if (y > 260) {
    doc.addPage();
    y = 20;
  }
  y += 10;
  doc.setFillColor(254, 243, 199); // amber-100
  doc.rect(15, y, 180, 15, 'F');
  doc.setTextColor(180, 83, 9); // amber-700
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('RECOMENDAÇÃO TÁTICA FINAL:', 20, y + 6);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('Utilize os 14 Resumos/Guias no Drive e resolva semanalmente os 5 Simulados em ambiente com cronômetro no painel.', 20, y + 11);

  doc.save(`planejamento_estudos_pcba_${userName.toLowerCase().replace(/\s+/g, '_')}.pdf`);
}
