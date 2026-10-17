export interface GuiaItem {
  id: string;
  title: string;
  category: 'Conhecimentos Gerais' | 'Conhecimentos Específicos' | 'Editais & Dossiês';
  url: string;
  description: string;
}

export const GUIAS_RESUMOS: GuiaItem[] = [
  {
    id: '1',
    title: 'Arquivologia',
    category: 'Conhecimentos Específicos',
    url: 'https://drive.google.com/file/d/1f-X_Boo9zNktscdBzAG7wJaCTtgA6uMj/view?usp=drive_link',
    description: 'Gestão de documentos, ciclo vital (3 idades), protocolo, ordenação e tabela de temporalidade cartorária.'
  },
  {
    id: '2',
    title: 'Atualidades',
    category: 'Conhecimentos Gerais',
    url: 'https://drive.google.com/file/d/1SmxRxhpyGobM62CKk5M89fudgtGmjR5a/view?usp=drive_link',
    description: 'Tópicos globais e estaduais sobre segurança, política, economia e transformações sociais.'
  },
  {
    id: '3',
    title: 'Direito Administrativo',
    category: 'Conhecimentos Específicos',
    url: 'https://drive.google.com/file/d/1P3dH9GLbkRYxoW-X5HyA5C74ANm_2Bhu/view?usp=drive_link',
    description: 'Atos administrativos, poderes da administração, licitações (Lei 14.133) e responsabilidade do Estado.'
  },
  {
    id: '4',
    title: 'Direito Constitucional',
    category: 'Conhecimentos Específicos',
    url: 'https://drive.google.com/file/d/1KCby589ewMV3Z_P43meBRNP6e0hqC9bN/view?usp=drive_link',
    description: 'Art. 5º da CF/88, direitos e garantias fundamentais e Segurança Pública (Art. 144).'
  },
  {
    id: '5',
    title: 'Direito Penal',
    category: 'Conhecimentos Específicos',
    url: 'https://drive.google.com/file/d/1ji3PAaFDH-jM-pJJbUrnJhceRchk9bao/view?usp=drive_link',
    description: 'Teoria do crime, fato típico, excludentes de ilicitude e crimes contra a Administração Pública.'
  },
  {
    id: '6',
    title: 'Direito Processual Penal',
    category: 'Conhecimentos Específicos',
    url: 'https://drive.google.com/file/d/1FTOmbj3zVTaFaP7sBLSH3FTEsjkyhBQS/view?usp=drive_link',
    description: 'Inquérito policial, prisões em flagrante/preventiva/temporária, provas e cadeia de custódia.'
  },
  {
    id: '7',
    title: 'Medicina Legal',
    category: 'Conhecimentos Gerais',
    url: 'https://drive.google.com/file/d/1U4oh9dQ3z9bJp0VTz5hYLZPrV-S00Smq/view?usp=drive_link',
    description: 'Traumatologia forense, tanatologia (fenômenos cadavéricos), asfixiologia e documentos médico-legais.'
  },
  {
    id: '8',
    title: 'D. Administrativo - Dossiê Tático',
    category: 'Editais & Dossiês',
    url: 'https://drive.google.com/file/d/1E8pQsfHCAR4Y3H0M6hQjBOd5VXY2Ioa_/view?usp=drive_link',
    description: 'Análise aprofundada da jurisprudência e pegadinhas recorrentes do Instituto AOCP em D. Administrativo.'
  },
  {
    id: '9',
    title: 'Edital Oficial PC/BA',
    category: 'Editais & Dossiês',
    url: 'https://drive.google.com/file/d/1Cbh5QQd8crs11B2AAy5yAB8giZ1Ihqa3/view?usp=drive_link',
    description: 'Edital completo de abertura de inscrições com conteúdo programático e critérios de avaliação.'
  },
  {
    id: '10',
    title: 'Informática',
    category: 'Conhecimentos Gerais',
    url: 'https://drive.google.com/file/d/1bWUvIMR5SS--V9S_8CNNkKDM4QuwFUR_/view?usp=drive_link',
    description: 'Windows 11, Office 365, atalhos, segurança da informação, malwares e comandos Linux (mkdir).'
  },
  {
    id: '11',
    title: 'Legislação Própria (LOPC/BA)',
    category: 'Conhecimentos Gerais',
    url: 'https://drive.google.com/file/d/1cJj0fJHLNebe5zvCJ_sQ4GihB-tAjnJ1/view?usp=drive_link',
    description: 'Lei Orgânica da Polícia Civil da Bahia (Lei nº 11.370/2009) e atribuições do Escrivão.'
  },
  {
    id: '12',
    title: 'Legislação Geral (Estatuto BA)',
    category: 'Conhecimentos Gerais',
    url: 'https://drive.google.com/file/d/1L1yDsVKiQb_HuZc6P0nP8W2NfV2XWcal/view?usp=drive_link',
    description: 'Estatuto dos Servidores Públicos do Estado da Bahia (Lei nº 6.677/1994).'
  },
  {
    id: '13',
    title: 'Língua Portuguesa',
    category: 'Conhecimentos Gerais',
    url: 'https://drive.google.com/file/d/10tnnkkaSFqH2ganF-eNKipD_EkyyJUDZ/view?usp=drive_link',
    description: 'Compreensão de textos, crase, regência, concordância e Redação Oficial da Presidência da República.'
  },
  {
    id: '14',
    title: 'Raciocínio Lógico',
    category: 'Conhecimentos Gerais',
    url: 'https://drive.google.com/file/d/1fqeq6zsMSeiadHqzHgPfHY0medoPRbUv/view?usp=drive_link',
    description: 'Tabela-verdade, negações categóricas, probabilidade, combinatória e problemas de contagem.'
  }
];

export interface Questao {
  id: number;
  disciplina: string;
  enunciado: string;
  options: string[];
  correctAnswer: number;
  dica: string;
  comentario: string;
}

export interface Simulado {
  id: number;
  title: string;
  subtitle: string;
  duracaoMinutos: number;
  questoes: Questao[];
}

export const SIMULADOS_DATA: Simulado[] = [
  {
    id: 1,
    title: 'Simulado 01 — Modelo Padrão Instituto AOCP',
    subtitle: 'Prova completa com 10 questões representativas de todas as áreas do edital de Escrivão PC/BA.',
    duracaoMinutos: 60,
    questoes: [
      {
        id: 1,
        disciplina: 'Língua Portuguesa',
        enunciado: 'Assinale a alternativa em que a regência verbal atende estritamente à norma-padrão da Língua Portuguesa:',
        options: [
          'A) O Escrivão aspirava o cargo público há anos com muita dedicação.',
          'B) O delegado assistiu ao depoimento da testemunha na sala de oitiva.',
          'C) O policial preferia mais investigar crimes do que preencher relatórios.',
          'D) A lei visa o bem-estar social e a proteção do cidadão comum.',
          'E) O escrivão obedeceu o mandado judicial expedido pelo juiz.'
        ],
        correctAnswer: 1,
        dica: 'Lembre-se: o verbo "assistir" no sentido de presenciar/ver exige preposição "A" (assistiu AO depoimento).',
        comentario: 'O verbo assistir, no sentido de presenciar/ver, é transitivo indireto e exige a preposição "a" (assistiu ao depoimento). Já "preferir" rejeita a expressão "mais... do que".'
      },
      {
        id: 2,
        disciplina: 'Direito Processual Penal',
        enunciado: 'Nos termos do Código de Processo Penal brasileiro, sobre o Inquérito Policial, é CORRETO afirmar que:',
        options: [
          'A) É um procedimento judicial inquisitorial presidido pelo Promotor de Justiça.',
          'B) Possui caráter vinculante, obrigando o Ministério Público a oferecer a denúncia.',
          'C) É peça administrativa informativa, dispensável para o oferecimento da denúncia.',
          'D) Pode ser arquivado diretamente pela autoridade policial quando provada a atipicidade.',
          'E) Impõe o contraditório e a ampla defesa prévia obrigatoriamente desde a restauração.'
        ],
        correctAnswer: 2,
        dica: 'A autoridade policial NUNCA pode mandar arquivar autos de inquérito (Art. 17 do CPP).',
        comentario: 'O Inquérito Policial é um procedimento administrativo pré-processual e informativo, sendo dispensável caso o titular da ação penal já possua elementos suficientes.'
      },
      {
        id: 3,
        disciplina: 'Direito Penal',
        enunciado: 'Em relação ao crime de Peculato (Art. 312 do Código Penal), assinale a alternativa correta:',
        options: [
          'A) O peculato culposo ocorre quando o funcionário age com dolo direto de favorecer terceiro.',
          'B) No peculato culposo, a reparação do dano anterior à sentença irrecorrível extingue a punibilidade.',
          'C) É crime comum que pode ser praticado por qualquer cidadão sem qualidade de funcionário.',
          'D) A reparação do dano posterior ao trânsito em julgado extingue integralmente a pena.',
          'E) Exige obrigatoriamente que a posse do bem tenha sido obtida mediante fraude e violência.'
        ],
        correctAnswer: 1,
        dica: 'No peculato culposo: reparação ANTES do trânsito em julgado = Extingue a punibilidade. DEPOIS = Reduz a pena pela metade.',
        comentario: 'Nos termos do Art. 312, §3º do CP, no peculato culposo, se a reparação do dano precede à sentença irrecorrível, extingue-se a punibilidade.'
      },
      {
        id: 4,
        disciplina: 'Direito Constitucional',
        enunciado: 'Segundo o Art. 5º, XI da Constituição Federal de 1988, a casa é asilo inviolável do indivíduo. É permitido nele penetrar sem consentimento do morador, À NOITE, em caso de:',
        options: [
          'A) Cumprimento de mandado judicial de busca e apreensão expedido por juiz competente.',
          'B) Determinação da autoridade policial quando houver fundada suspeita de contravenção.',
          'C) Flagrante delito, desastre, ou para prestar socorro.',
          'D) Investigação criminal administrativa em andamento urgente.',
          'E) Notificação judicial de intimação para depoimento em cartório.'
        ],
        correctAnswer: 2,
        dica: 'Mandado judicial na casa alheia só pode ser cumprido DURANTE O DIA. À noite, só socorro, desastre ou flagrante delito!',
        comentario: 'Durante a noite, o ingresso no domicílio sem consentimento só é admitido em 3 hipóteses: flagrante delito, desastre ou para prestar socorro. Mandado judicial é só DURANTE O DIA.'
      },
      {
        id: 5,
        disciplina: 'Direito Administrativo',
        enunciado: 'Acerca dos atributos dos Atos Administrativos, assinale a opção que indica o atributo pelo qual o ato se presume editado em conformidade com a lei:',
        options: [
          'A) Imperatividade.',
          'B) Presunção de Legitimidade e Veracidade.',
          'C) Autoexecutoriedade.',
          'D) Tipicidade.',
          'E) Coercibilidade Externa.'
        ],
        correctAnswer: 1,
        dica: 'O próprio nome diz: presume-se que o ato respeitou a LEI (legitimidade) e os FATOS (veracidade).',
        comentario: 'A Presunção de Legitimidade e Veracidade é atributo de todo ato administrativo, fazendo com que sejam tidos como verdadeiros e legais até prova em contrário (presunção relativa).'
      },
      {
        id: 6,
        disciplina: 'Medicina Legal',
        enunciado: 'Na Tanatologia Forense, a rigidez cadavérica (rigor mortis) é um fenômeno abiótico consecutivo. A Lei de Nysten descreve a progressão desse fenômeno, que tipicamente se inicia pela:',
        options: [
          'A) Musculatura dos membros inferiores e pés.',
          'B) Musculatura da face, mandíbula e nuca.',
          'C) Região abdominal e tórax.',
          'D) Musculatura dos braços e mãos.',
          'E) Musculatura lisa do intestino grosso.'
        ],
        correctAnswer: 1,
        dica: 'Mnemônico da Lei de Nysten: De CIMA para BAIXO (Rosto/Mandíbula -> Pescoço -> Tronco -> Membros Inferiores).',
        comentario: 'Pela Lei de Nysten-Sommer, a rigidez cadavérica surge no sentido crânio-caudal: face, mandíbula e nuca, descendo para o tronco e membros inferiores.'
      },
      {
        id: 7,
        disciplina: 'Informática',
        enunciado: 'No sistema operacional Linux, qual comando de linha de texto é utilizado para criar um novo diretório (pasta)?',
        options: [
          'A) rmdir',
          'B) cd',
          'C) mkdir',
          'D) touch',
          'E) ls -l'
        ],
        correctAnswer: 2,
        dica: 'Vem do inglês "Make Directory" = mkdir.',
        comentario: 'O comando "mkdir" (make directory) cria novas pastas no Linux. O "touch" cria arquivos vazios e "rmdir" remove diretórios.'
      },
      {
        id: 8,
        disciplina: 'Legislação Geral (LOPC BA)',
        enunciado: 'Segundo a Lei Orgânica da Polícia Civil da Bahia (Lei Estadual nº 11.370/2009), é atribuição prioritária do cargo de Escrivão de Polícia Civil:',
        options: [
          'A) Comandar operações táticas ostensivas e patrulhamento de vias urbanas.',
          'B) Lavrar termos, autos e certidões, bem como manter a guarda dos livros cartorários.',
          'C) Julgar os processos administrativos disciplinares instaurados na Corregedoria.',
          'D) Dirigir formalmente os órgãos de inteligência estratégica da Secretaria de Segurança.',
          'E) Proferir decisões sobre a concessão de liberdade provisória mediante fiança.'
        ],
        correctAnswer: 1,
        dica: 'Escrivão é o gestor do cartório policial: lavra autos, colhe depoimentos e guarda os livros.',
        comentario: 'A LOPC/BA (Lei 11.370/09) estabelece que ao Escrivão cabe a execução das tarefas de formalização e tramitação dos autos de inquérito policial e termos cartorários.'
      },
      {
        id: 9,
        disciplina: 'Arquivologia',
        enunciado: 'Na teoria das Três Idades Documentais da Arquivologia, os documentos que aguardam a eliminação ou o recolhimento definitivo por terem valor intermediário localizam-se no:',
        options: [
          'A) Arquivo Corrente.',
          'B) Arquivo Intermediário (ou Setorial de Segunda Fase).',
          'C) Arquivo Permanente (ou Histórico).',
          'D) Arquivo Morto de Eliminação Sumária.',
          'E) Protocolo Ativo de Distribuição.'
        ],
        correctAnswer: 1,
        dica: 'Três Idades: 1º Corrente (uso frequente) -> 2º Intermediário (uso esporádico/guarda) -> 3º Permanente (valor histórico).',
        comentario: 'O Arquivo Intermediário custodeia documentos oriundos do arquivo corrente com uso pouco frequente, aguardando temporalidade para eliminação ou destinação permanente.'
      },
      {
        id: 10,
        disciplina: 'Raciocínio Lógico',
        enunciado: 'Qual é a negação lógica da proposição categórica "Todos os suspeitos são culpados"?',
        options: [
          'A) Nenhum suspeito é culpado.',
          'B) Todos os suspeitos são inocentes.',
          'C) Pelo menos um suspeito não é culpado.',
          'D) Alguns suspeitos são culpados.',
          'E) Nenhum inocente é suspeito.'
        ],
        correctAnswer: 2,
        dica: 'Mnemônico para negar o "TODOS": PEA + NÃO (Pelo menos um / Existe / Algum + NÃO é). NUNCA negue "Todos" usando "Nenhum"!',
        comentario: 'A negação do quantificador universal "Todos A são B" é dada pela existência de ao menos uma exceção: "Existe/Algum/Pelo menos um A que NÃO é B".'
      }
    ]
  },
  {
    id: 2,
    title: 'Simulado 02 — Foco Legislação Específica e Direitos',
    subtitle: 'Simulação aprofundada em Legislação Extravagante, LOPC/BA, Estatuto BA e Direito Constitucional.',
    duracaoMinutos: 60,
    questoes: [
      {
        id: 1,
        disciplina: 'Legislação Extravagante',
        enunciado: 'Nos termos da Lei Maria da Penha (Lei nº 11.340/2006), sobre as medidas protetivas de urgência, assinale a afirmativa correta:',
        options: [
          'A) Só podem ser concedidas se houver prévio inquérito policial instaurado.',
          'B) O juiz poderá concedê-las de imediato, independentemente de oitiva do Ministério Público.',
          'C) Dependem de laudo pericial lesional conclusivo e lavratura de flagrante.',
          'D) Cessam automaticamente após 30 dias de sua concessão sem prorrogação.',
          'E) Podem ser revogadas unilateralmente pela autoridade policial em cartório.'
        ],
        correctAnswer: 1,
        dica: 'Art. 19 da Lei Maria da Penha: as medidas protetivas podem ser concedidas de imediato, inaudita altera parte.',
        comentario: 'As medidas protetivas de urgência podem ser deferidas pelo juiz de imediato, sem necessidade de oitiva prévia das partes ou do MP, visando proteger a integridade da vítima.'
      },
      {
        id: 2,
        disciplina: 'Legislação Extravagante',
        enunciado: 'Segundo a Lei de Drogas (Lei nº 11.343/2006), a conduta de adquirir ou guardar drogas para consumo pessoal (Art. 28):',
        options: [
          'A) É punida com pena privativa de liberdade de reclusão de 1 a 3 anos.',
          'B) Não prevê pena privativa de liberdade, sujeitando-se a advertência, prestação de serviços e medida educativa.',
          'C) Foi descriminalizada pelo STF, tornando-se ilícito puramente administrativo sem registro policial.',
          'D) Admite prisão em flagrante delito com recolhimento obrigatório à cela.',
          'E) Impõe o pagamento imediato de fiança arbitrável pelo Escrivão de Polícia.'
        ],
        correctAnswer: 1,
        dica: 'Art. 28 da Lei 11.343/06 não possui pena de prisão! Apenas advertência, prestação de serviços à comunidade e medida educativa.',
        comentario: 'O Art. 28 da Lei de Drogas comina penas alternativas (advertência, prestação de serviços à comunidade e medida educativa). Não há pena privativa de liberdade.'
      },
      {
        id: 3,
        disciplina: 'Direito Administrativo',
        enunciado: 'A respeito das Licitações e Contratos Administrativos na Lei nº 14.133/2021, é hipótese de INEXIGIBILIDADE de licitação:',
        options: [
          'A) Compra de material de uso pelas Forças Armadas com valor reduzido.',
          'B) Contratação de profissional do setor artístico, diretamente ou através de empresário exclusivo, desde que consagrado pela crítica especializada.',
          'C) Casos de emergência ou de calamidade pública para atendimento de situação urgente.',
          'D) Aquisição de bens produzidos por fundações criadas com fim específico na lei.',
          'E) Alienação de imóveis públicos para outros órgãos da administração.'
        ],
        correctAnswer: 1,
        dica: 'Inexigibilidade ocorre quando há INVIABILIDADE de competição (ex: artista consagrado, fornecedor exclusivo). Emergência é DISPENSA.',
        comentario: 'A inviabilidade de competição gera Inexigibilidade (Art. 74 da Lei 14.133/21). Artista consagrado e notória especialização são exemplos clássicos.'
      },
      {
        id: 4,
        disciplina: 'Promoção da Igualdade Racial',
        enunciado: 'Conforme a Lei nº 7.716/1989 (Crimes de Preconceito de Raça ou de Cor), os crimes resultantes de discriminação racial são:',
        options: [
          'A) Afiançáveis e prescritíveis no prazo de 5 anos.',
          'B) Inafiançáveis e imprescritíveis, sujeitos à pena de reclusão.',
          'C) Puníveis apenas com detenção e multa administrativa.',
          'D) Passíveis de anistia mediante decreto presidencial.',
          'E) Crimes de ação penal privada dependentes de representação do ofendido.'
        ],
        correctAnswer: 1,
        dica: 'Art. 5º, XLII da CF/88: O racismo é crime INAFIANÇÁVEL e IMPRESCRITÍVEL.',
        comentario: 'Por mandado de criminalização constitucional (Art. 5º, XLII da CF/88), a prática do racismo constitui crime inafiançável e imprescritível.'
      },
      {
        id: 5,
        disciplina: 'Legislação Geral (Estatuto BA)',
        enunciado: 'Segundo a Lei Estadual nº 6.677/1994 (Estatuto dos Servidores da Bahia), a demissão do servidor público será aplicada nos casos de:',
        options: [
          'A) Insubordinação grave em serviço e incontinência pública conduta escandalosa na repartição.',
          'B) Atraso injustificado de 15 minutos na chegada ao trabalho.',
          { id: 'C', text: 'Ausência não justificada por 2 dias consecutivos.' },
          'D) Ausência de vestimenta formal em atos oficiais.',
          'E) Permuta de turno de trabalho autorizada verbalmente pelo chefe.'
        ],
        correctAnswer: 0,
        dica: 'Demissão é penalidade capital disciplinar! Aplica-se a faltas gravíssimas (insubordinação grave, abandono de cargo, improbidade).',
        comentario: 'Insubordinação grave em serviço, improbidade administrativa e abandono de cargo acarretam a pena de demissão (Art. 192 da Lei 6.677/94).'
      }
    ]
  },
  {
    id: 3,
    title: 'Simulado 03 — Conhecimentos Específicos & Criminalística',
    subtitle: 'Foco em Medicina Legal, Processo Penal, Prisões e Cadeia de Custódia de Provas.',
    duracaoMinutos: 60,
    questoes: [
      {
        id: 1,
        disciplina: 'Medicina Legal',
        enunciado: 'Um orifício de entrada de projétil de arma de fogo disparado a CURTÍSSIMA DISTÂNCIA (encostado ou com queimadura) apresenta a chamada "Câmara de Mina de Hoffmann". Esse sinal é caracterizado por:',
        options: [
          'A) Bordas evertidas e ausência completa de fumaça na ferida.',
          'B) Rasgamento irregular das bordas em forma de estrela por reflexão dos gases no osso subjacente.',
          'C) Formação de auréola de equimose a mais de 2 metros da lesão.',
          'D) Queimadura uniforme apenas na roupas sem atingir a derme.',
          'E) Presença exclusiva de orifício perfeitamente circular sem zona de contusão.'
        ],
        correctAnswer: 1,
        dica: 'Câmara de Mina de Hoffmann = disparo encostado sobre plano ósseo, onde os gases expandem e rasgam a pele em formato estrelado.',
        comentario: 'A câmara de mina de Hoffmann ocorre em tiros encostados sobre estruturas ósseas, onde o recesso dos gases provoca o estouramento das bordas cutâneas para fora em formato de estrela.'
      },
      {
        id: 2,
        disciplina: 'Direito Processual Penal',
        enunciado: 'Sobre a Cadeia de Custódia de vestígios (Art. 158-A a 158-F do CPP, incluídos pelo Pacote Anticrime), assinale a afirmativa correta:',
        options: [
          'A) Inicia-se obrigatoriamente com o julgamento em plenário do júri.',
          'B) Compreende o rastreamento completo do vestígio desde seu reconhecimento/recolhimento até o descarte.',
          'C) É procedimento opcional e aplicável somente a vestígios digitais e de informática.',
          'D) Autoriza qualquer policial a descartar o material periciado sem registro formal.',
          'E) Impede que o perito oficial lacre o envelope de transporte.'
        ],
        correctAnswer: 1,
        dica: 'Cadeia de custódia é o histórico documentado da cronologia do vestígio (reconhecimento, isolamento, fixação, coleta, transporte, custódia e descarte).',
        comentario: 'O Art. 158-A do CPP define a cadeia de custódia como o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio.'
      },
      {
        id: 3,
        disciplina: 'Direito Processual Penal',
        enunciado: 'A Prisão Temporária (Lei nº 7.960/1989), aplicada na fase de Inquérito Policial para crimes graves, possui prazo geral de:',
        options: [
          'A) 24 horas, inprorrogáveis.',
          'B) 5 dias, prorrogável por igual período em caso de extrema e comprovada necessidade.',
          'C) 30 dias, vedada qualquer prorrogação.',
          'D) 10 dias úteis com concordância automática da defesa.',
          'E) 60 dias corridos em qualquer modalidade de crime.'
        ],
        correctAnswer: 1,
        dica: 'Prisão Temporária regra geral = 5 dias + 5 dias. Se for crime HEDIONDO = 30 dias + 30 dias.',
        comentario: 'A prisão temporária terá o prazo de 5 dias, prorrogável por igual período em caso de extrema necessidade. Para crimes hediondos ou equiparados, o prazo é de 30 + 30 dias.'
      },
      {
        id: 4,
        disciplina: 'Direito Penal',
        enunciado: 'Considere que Tício, pretendendo matar Mévio, ministra-lhe uma substância achando tratar-se de veneno mortal, quando na verdade era açúcar refinado inofensivo. O caso configura:',
        options: [
          'A) Homicídio tentado com pena reduzida.',
          'B) Crime Impossível por ineficácia absoluta do meio.',
          'C) Arrependimento eficaz.',
          'D) Desistência voluntária.',
          'E) Lesão corporal culposa.'
        ],
        correctAnswer: 1,
        dica: 'Art. 17 do CP: Não se pune a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar o crime.',
        comentario: 'Trata-se de Crime Impossível (Art. 17 do CP) devido à ineficácia absoluta do meio empregado (açúcar não possui propriedade tóxica para causar morte).'
      },
      {
        id: 5,
        disciplina: 'Estatística',
        enunciado: 'Em um levantamento cartorário de oitivas realizadas na delegacia, os tempos em minutos foram: 10, 15, 15, 20, 40. A Moda desta distribuição de dados é:',
        options: [
          'A) 10 minutos.',
          'B) 15 minutos.',
          'C) 20 minutos.',
          'D) 22 minutos.',
          'E) 40 minutos.'
        ],
        correctAnswer: 1,
        dica: 'Moda é o valor que aparece com MAIOR FREQUÊNCIA na amostra. O número 15 aparece duas vezes.',
        comentario: 'A Moda estatística representa o elemento mais frequente do conjunto. O número 15 ocorre 2 vezes, enquanto os demais aparecem apenas 1 vez.'
      }
    ]
  },
  {
    id: 4,
    title: 'Simulado 04 — Maratona de Questões AOCP',
    subtitle: 'Simulação focada na cobrança gramatical, lógica, estatística e rotinas policiais.',
    duracaoMinutos: 60,
    questoes: [
      {
        id: 1,
        disciplina: 'Língua Portuguesa',
        enunciado: 'Assinale a alternativa em que a sinalização da CRASE está empregada corretamente:',
        options: [
          'A) O escrivão referiu-se à uma testemunha chave durante o interrogatório.',
          'B) O mandado foi entregue à ele na presença de dois advogados.',
          'C) A equipe policial dirigiu-se à delegacia central para lavrar o flagrante.',
          'D) O policial começou à investigar os rastros de roubo de carga.',
          'E) Os documentos foram entregues à partir das oito horas da manhã.'
        ],
        correctAnswer: 2,
        dica: 'Crase proibida: antes de verbo (à partir / à investigar), antes de artigo indefinido (à uma) e antes de pronome masculino (à ele).',
        comentario: 'A crase em "à delegacia" está correta pois junta a preposição "a" exigida por "dirigiu-se" com o artigo feminino "a" de "delegacia". É proibida antes de verbo ou pronomes masculinos.'
      },
      {
        id: 2,
        disciplina: 'Informática',
        enunciado: 'Qual atalho do teclado no pacote Microsoft Office (Word/Excel no Windows 11 em português) é utilizado para SALVAR o documento ativo?',
        options: [
          'A) Ctrl + C',
          'B) Ctrl + S',
          'C) Ctrl + B',
          'D) Ctrl + P',
          'E) Alt + F4'
        ],
        correctAnswer: 2,
        dica: 'Atenção ao Office em Português: Salvar = CTRL + B (no inglês é Ctrl+S, no português é Ctrl+B!).',
        comentario: 'No Microsoft Office em português do Brasil, o atalho padrão para salvar arquivos é Ctrl + B (no Office em inglês é Ctrl + S).'
      },
      {
        id: 3,
        disciplina: 'Direito Constitucional',
        enunciado: 'Nos termos do Art. 144 da Constituição Federal, a Polícia Civil, dirigida por delegado de polícia de carreira, destina-se às funções de:',
        options: [
          'A) Patrulhamento ostensivo e preservação da ordem pública rodoviária.',
          'B) Polícia judiciária e apuração de infrações penais, exceto as militares.',
          'C) Guarda patrimonial e fiscalização de trânsito exclusivamente municipal.',
          'D) Apuração de crimes militares praticados por integrantes das forças armadas.',
          'E) Polícia ostensiva de fronteiras internacionais marítimas.'
        ],
        correctAnswer: 1,
        dica: 'Art. 144, §4º da CF: Às polícias civis cabem ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, EXCETO as militares.',
        comentario: 'A Constituição atribui à Polícia Civil a função de polícia judiciária e apuração de infrações penais comuns (estaduais e federais), excluindo expressamente as infrações militares.'
      },
      {
        id: 4,
        disciplina: 'Direito Penal',
        enunciado: 'O agente que, voluntariamente, desiste de prosseguir na execução do crime ou impede que o resultado se produza, responde por:',
        options: [
          'A) Tentativa do crime inicialmente pretendido com pena reduzida de 2/3.',
          'B) Apenas pelos atos já praticados (Desistência Voluntária e Arrependimento Eficaz).',
          'C) Homicídio consumado por ficção jurídica.',
          'D) Isenção total de pena para qualquer ato violento anterior.',
          'E) Crime culposo com perdão judicial obrigatório.'
        ],
        correctAnswer: 1,
        dica: 'Art. 15 do CP: Na desistência voluntária e no arrependimento eficaz, o agente só responde pelos atos já praticados.',
        comentario: 'Pela regra do Art. 15 do Código Penal, na desistência voluntária e no arrependimento eficaz, afasta-se a tentativa do crime pretendido e o agente só responde pelos atos que já praticou.'
      },
      {
        id: 5,
        disciplina: 'Atualidades',
        enunciado: 'A Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) estabelece princípios essenciais para o tratamento de dados pessoais no Brasil. É autoridade competente para fiscalizar o cumprimento dessa lei:',
        options: [
          'A) ANATEL.',
          'B) ANPD (Autoridade Nacional de Proteção de Dados).',
          'C) CONTRAN.',
          'D) IBAMA.',
          'E) CVM.'
        ],
        correctAnswer: 1,
        dica: 'Órgão regulador de dados no Brasil: ANPD (Autoridade Nacional de Proteção de Dados).',
        comentario: 'A ANPD é o órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento da LGPD em todo o território nacional.'
      }
    ]
  },
  {
    id: 5,
    title: 'Simulado 05 — Prova de Revisão Final de Véspera',
    subtitle: 'Revisão intensiva dos tópicos de maior peso da prova de Escrivão PC/BA.',
    duracaoMinutos: 60,
    questoes: [
      {
        id: 1,
        disciplina: 'Direito Processual Penal',
        enunciado: 'A respeito do Auto de Prisão em Flagrante Delito (APFD) lavrado pelo Escrivão de Polícia, a nota de culpa informando o motivo da prisão e os condutores/testemunhas deve ser entregue ao preso no prazo máximo de:',
        options: [
          'A) 12 horas.',
          'B) 24 horas após a prisão.',
          'C) 48 horas.',
          'D) 5 dias úteis.',
          'E) Imediatamente no ato da abordagem sem lavratura.'
        ],
        correctAnswer: 1,
        dica: 'Art. 306, §2º do CPP: Em até 24 HORAS após a prisão, será entregue ao preso, mediante recibo, a NOTA DE CULPA.',
        comentario: 'O Art. 306, §2º do CPP estipula que a Nota de Culpa deve ser entregue ao preso mediante recibo no prazo improrrogável de 24 horas a contar de sua prisão.'
      },
      {
        id: 2,
        disciplina: 'Direito Administrativo',
        enunciado: 'A Anulação de um Ato Administrativo eivado de vício de ilegalidade produz efeitos:',
        options: [
          'A) Ex Nunc (não retroativos).',
          'B) Ex Tunc (retroativos às origens do ato).',
          'C) Prospectivos para o futuro após 5 anos.',
          'D) Apenas declaratórios sem alteração jurídica.',
          'E) Modificativos condicionados a pagamento de multa.'
        ],
        correctAnswer: 1,
        dica: 'Mnemônico clássico: Anulação por ilegalidade = Ex TUNC (Testa -> bate na testa e cai pra TRÁS / retroage!). Revogação por conveniência = Ex NUNC (Nuca -> bate na nuca e vai pra FRENTE).'
      },
      {
        id: 3,
        disciplina: 'Legislação Extravagante',
        enunciado: 'Nos termos da Lei de Abuso de Autoridade (Lei nº 13.869/2019), para que haja a configuração do crime, exige-se elemento subjetivo específico consistente na intenção de:',
        options: [
          'A) Agir por mera culpa profissional ou imperícia técnica.',
          'B) Prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por mero capricho/satisfação pessoal.',
          'C) Cumprir estritamente o dever legal sem qualquer dolo.',
          'D) Exercer regular direito decorrente da hierarquia do cargo.',
          'E) Promover a celeridade administrativa de processos judiciais.'
        ],
        correctAnswer: 1,
        dica: 'Art. 1º, §1º da Lei 13.869/19: Exige a finalidade específica de prejudicar outrem ou beneficiar a si/terceiro, ou mero capricho/satisfação pessoal.',
        comentario: 'A Lei de Abuso de Autoridade exige expressamente o dolo específico (animus nocendi / capricho pessoal). Não existe abuso de autoridade na modalidade culposa.'
      },
      {
        id: 4,
        disciplina: 'Língua Portuguesa',
        enunciado: 'No trecho: "O escrivão concluiu o relatório, PORTANTO os autos foram remetidos ao Poder Judiciário", a conjunção destacada introduz uma oração coordenada sindética:',
        options: [
          'A) Explicativa.',
          'B) Adversativa.',
          'C) Conclusiva.',
          'D) Alternativa.',
          'E) Concessiva.'
        ],
        correctAnswer: 2,
        dica: 'Conjunções Conclusivas: portanto, logo, assim, por conseguinte, pois (deslocado).',
        comentario: 'A conjunção "portanto" indica o fechamento/conclusão de um raciocínio dedutivo, classificando a oração como coordenada sindética conclusiva.'
      },
      {
        id: 5,
        disciplina: 'Estatística',
        enunciado: 'Dada a lista com o número de inquéritos relatados por dia: 2, 4, 6, 8, 10. A Média Aritmética desse conjunto é:',
        options: [
          'A) 4',
          'B) 5',
          'C) 6',
          'D) 7',
          'E) 8'
        ],
        correctAnswer: 2,
        dica: 'Média = Soma dos valores / Quantidade de elementos. Soma = 30 / 5 = 6.',
        comentario: 'A média aritmética é dada pela soma (2+4+6+8+10 = 30) dividida pelo número de elementos (5). 30 / 5 = 6.'
      }
    ]
  }
];

export function generateStudyPlan(name: string, daysPerWeek: number, hoursPerDay: number) {
  const totalWeeks = 8;
  const daysList: string[] = [];
  const weekDaysNames = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  
  // Select active days based on user input
  const activeDays = weekDaysNames.slice(0, Math.min(daysPerWeek, 7));

  const planSchedule = [];

  let dayCounter = 1;
  for (let w = 1; w <= totalWeeks; w++) {
    for (let d = 0; d < activeDays.length; d++) {
      const dayName = activeDays[d];
      let focusArea = '';
      let targetGuia = '';
      let targetSimulado = '';

      if (w <= 4) {
        // Phase 1: Guias & Resumos
        const guiaIndex = (dayCounter - 1) % GUIAS_RESUMOS.length;
        focusArea = `Estudo MERFR do Guia: ${GUIAS_RESUMOS[guiaIndex].title}`;
        targetGuia = GUIAS_RESUMOS[guiaIndex].url;
      } else if (w <= 6) {
        // Phase 2: Resolvendo Simulados
        const simNum = ((dayCounter - 1) % 5) + 1;
        focusArea = `Execução e Análise Tática do Simulado 0${simNum}`;
        targetSimulado = `/dashboard/simulados/${simNum}`;
      } else {
        // Phase 3: Reta Final
        focusArea = `Revisão de Caderno de Erros + Leitura Seca das Leis (LOPC/BA & Estatuto BA)`;
      }

      planSchedule.push({
        diaGlobal: dayCounter,
        semana: w,
        diaSemana: dayName,
        horas: hoursPerDay,
        foco: focusArea,
        linkGuia: targetGuia,
        linkSimulado: targetSimulado
      });

      dayCounter++;
    }
  }

  return {
    userName: name,
    daysPerWeek,
    hoursPerDay,
    totalDaysPlanned: planSchedule.length,
    totalHoursPlanned: planSchedule.length * hoursPerDay,
    examDate: '06 de Dezembro de 2026',
    schedule: planSchedule
  };
}
