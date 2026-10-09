/* Yu Chiao Lin – job search toolkit: base CV data, rules, and the Word/PDF renderers.
   Loaded by tracker.html (browser) and by the local render test (Node). */
(function (root) {
  const NB = ' ';

  const CONTACT = 'Île-de-France, France | 07 69 34 64 58 | yuchiao.lin@kedgebs.com';
  const NAME = 'YU CHIAO LIN';
  const AVAIL = { en: 'December 2026', fr: 'décembre 2026' };

  // Base CV (Sisley Supply Planner v2, 2026-10-09). Every tailored CV starts from this.
  const BASE_EN = {
    target: 'Supply Planner',
    summary: "Supply chain profile (KEDGE ISLI) with hands-on experience in the luxury beauty, cosmetics and fragrance industry, following up supplier production and orders for prestige brands such as L'Oréal Luxe, Puig, Guerlain and Sephora. Skilled in stock data reconciliation, supplier KPIs (OTD, OTIF), Microsoft Dynamics 365 and Power BI, with training in demand planning, forecasting and S&OP.",
    skills: {
      hard: 'Demand planning, forecasting, S&OP and inventory management (academic training); stock data reconciliation and data quality control; supplier production follow-up and delay risk management; supplier KPIs (OTD, OTIF, lead time); purchase order and invoice processing; palletization planning; international logistics (ETD/ETA, Incoterms); CAPA and continuous improvement',
      soft: 'Rigour and attention to detail; problem-solving; analytical thinking; proactive risk escalation; cross-functional communication; adaptability in multicultural teams',
      tools: "Microsoft Dynamics 365 (ERP), Power BI, Advanced Excel, SQL, Cape Pack (palletization), L'Oréal COSMO",
    },
    experience: [
      {
        title: 'Supply Chain & Logistics Performance Intern',
        company_line: 'PURE TRADE, Île-de-France, France | July 2026 to January 2027 (6 months)',
        description: "Luxury packaging and gift-with-purchase (GWP) supplier to premium beauty and fragrance brands, with offices in France, the USA, Hong Kong and Shenzhen. Clients include L'Oréal Luxe brands, Puig, Guerlain and Sephora.",
        bullets: [
          'Lead weekly meetings with 4 suppliers to track production schedules and milestones on 100+ luxury beauty GWP and VIP gift orders (makeup pouches, bags), working with the purchasing and manufacturing planning teams to anticipate supply delays and secure client launch dates.',
          'Process 10–15 purchase orders and invoices per day in Microsoft Dynamics 365 (ERP), following up with buyers on missing or incorrect data to keep order status reliable.',
          'Check KPIs daily in Power BI and clean the source data in Excel, detecting and correcting errors so that supplier delivery (OTD, OTIF) and order reporting stays reliable.',
          'Cleaned and restructured 1,900+ historical order records, and now feed ongoing supplier data into an in-house KPI web tool, supporting the shift from manual reporting to automated tracking of factory KPIs and production efficiency.',
          "Measure finished products with their packaging and record the data in L'Oréal's COSMO system; build palletization plans in Cape Pack that meet each brand's maximum pallet height and weight.",
          'Coordinate international shipments from factory to final delivery (ETD/ETA; sea, air and road freight; FCA Incoterms) with suppliers and freight forwarders, resolving transport delays.',
          'Monitor the in-office stock of BAT (pre-production approval) samples.',
        ],
      },
      {
        title: 'Consulting Mission: Sustainable Supply Chains to Circular Economy',
        company_line: 'TNP Consultants, Paris, France | November 2025 to May 2026 (6 months)',
        bullets: [
          'Mapped drivers and bottlenecks across supply chain processes and translated the findings into continuous improvement actions and stakeholder-ready materials.',
          'Produced a reusable playbook based on a cross-industry bottleneck analysis to support client projects in circular economy transformation.',
        ],
      },
      {
        title: 'Operations Data & Planning Support',
        company_line: 'Clear Express, Paris, France | April 2025 to August 2025 (4 months)',
        bullets: [
          'Consolidated and reconciled stock data across systems to ensure reliable stock visibility, reducing discrepancies and strengthening daily stock follow-up.',
          'Built and maintained Excel and SQL KPI trackers for weekly performance and flow monitoring, structuring data inputs for operational planning and reporting.',
          'Detected execution exceptions early and coordinated corrective actions with internal teams and external partners, documenting recurring issues for CAPA tracking.',
        ],
      },
    ],
    education: [
      {
        title: 'ISLI - Global Supply Chain Management (ranked 2nd in France, Eduniversal 2026)',
        school_line: 'KEDGE Business School, Bordeaux, France | September 2024 to May 2026',
        details: 'Relevant coursework: Inventory Management, Demand Planning, Forecasting, S&OP, ERP, Sourcing, Global Logistics, Risk Management, Global Supply Chain Strategy',
      },
      {
        title: "Bachelor's Degree - International Business (ranked 236th in Asia, QS 2026)",
        school_line: 'Yuan Ze University, Taoyuan, Taiwan | September 2020 to June 2024',
        details: 'Minors in Investment and Corporate Finance, and in Leadership and Human Resources; Excellence in Academic Performance Award (top 10%); Council of Agriculture Scholarship',
      },
    ],
    languages: ['Chinese (Mandarin): Native', 'English: Fluent (professional working proficiency)', 'French: Intermediate (currently studying)'],
  };

  const BASE_FR = {
    target: 'Supply Planner',
    summary: "Profil supply chain (KEDGE ISLI) avec une expérience dans l'industrie du luxe, de la beauté et du parfum : suivi de production fournisseurs et des commandes pour des marques de prestige comme L'Oréal Luxe, Puig, Guerlain et Sephora. Maîtrise de la réconciliation des stocks, des KPI fournisseurs (OTD, OTIF), de Dynamics 365 et Power BI ; formation en prévision de la demande et S&OP.",
    skills: {
      hard: 'Planification et prévision de la demande, S&OP et gestion des stocks (formation) ; réconciliation des stocks et contrôle qualité des données ; suivi de production fournisseurs et gestion des risques de retard ; KPI fournisseurs (OTD, OTIF, lead time) ; traitement des bons de commande et des factures ; plans de palettisation ; logistique internationale (ETD/ETA, Incoterms) ; CAPA et amélioration continue',
      soft: "Rigueur et sens du détail ; résolution de problèmes ; esprit d'analyse ; proactivité dans la remontée des risques ; communication transverse ; aisance en équipes multiculturelles",
      tools: "Microsoft Dynamics 365 (ERP), Power BI, Excel avancé, SQL, Cape Pack (palettisation), COSMO (L'Oréal)",
    },
    experience: [
      {
        title: 'Stagiaire Supply Chain & Performance Logistique',
        company_line: 'PURE TRADE, Île-de-France, France | Juillet 2026 à janvier 2027 (6 mois)',
        description: "Fournisseur de packaging de luxe et d'objets promotionnels (gift-with-purchase, GWP) pour des marques premium de beauté et de parfum, avec des bureaux en France, aux États-Unis, à Hong Kong et à Shenzhen. Clients : marques L'Oréal Luxe, Puig, Guerlain et Sephora.",
        bullets: [
          "Animation de réunions hebdomadaires avec 4 fournisseurs pour suivre les plannings et jalons de production de plus de 100 commandes GWP et cadeaux VIP (trousses de maquillage, sacs), en lien avec les équipes achats et planification de production, afin d'anticiper les retards et de sécuriser les dates de lancement clients.",
          'Traitement de 10 à 15 bons de commande et factures par jour dans Microsoft Dynamics 365 (ERP), avec relance des acheteurs en cas de données manquantes ou erronées.',
          'Contrôle quotidien des KPI sous Power BI et nettoyage des données sources sous Excel pour détecter et corriger les erreurs, afin de fiabiliser le reporting fournisseurs (OTD, OTIF) et commandes.',
          "Nettoyage et restructuration de plus de 1 900 commandes historiques, puis alimentation continue d'un outil web KPI interne avec les données fournisseurs, en appui au passage d'un reporting manuel à un suivi automatisé des KPI usines et de l'efficacité de production.",
          "Mesure des produits finis avec leur emballage et saisie des données dans COSMO, l'outil de L'Oréal ; conception des plans de palettisation sous Cape Pack selon la hauteur et le poids maximaux de chaque marque.",
          "Coordination des flux internationaux de l'usine à la livraison finale (ETD/ETA ; fret maritime, aérien et routier ; Incoterm FCA) avec les fournisseurs et les transitaires, et résolution des retards de transport.",
          'Suivi du stock de BAT (échantillons de validation avant production) au bureau.',
        ],
      },
      {
        title: "Mission de conseil : des supply chains durables à l'économie circulaire",
        company_line: 'TNP Consultants, Paris, France | Novembre 2025 à mai 2026 (6 mois)',
        bullets: [
          "Cartographie des leviers et des goulots d'étranglement des processus supply chain, traduits en actions d'amélioration continue et en supports destinés aux parties prenantes.",
          "Réalisation d'un playbook réutilisable, issu d'une analyse intersectorielle des goulots d'étranglement, pour accompagner les projets clients de transformation vers l'économie circulaire.",
        ],
      },
      {
        title: 'Support Données Opérationnelles & Planification',
        company_line: 'Clear Express, Paris, France | Avril 2025 à août 2025 (4 mois)',
        bullets: [
          'Consolidation et réconciliation des données de stock entre plusieurs systèmes pour fiabiliser la visibilité des stocks, réduire les écarts et renforcer le suivi quotidien.',
          'Création et mise à jour de tableaux de suivi KPI sous Excel et SQL pour le pilotage hebdomadaire de la performance et des flux, avec une structuration des données pour la planification opérationnelle et le reporting.',
          "Détection précoce des anomalies d'exécution et coordination des actions correctives avec les équipes internes et les partenaires externes, avec documentation des problèmes récurrents pour le suivi CAPA.",
        ],
      },
    ],
    education: [
      {
        title: 'ISLI - Global Supply Chain Management (classé 2e en France, Eduniversal 2026)',
        school_line: 'KEDGE Business School, Bordeaux, France | Septembre 2024 à mai 2026',
        details: 'Cours principaux : gestion des stocks, planification de la demande, prévisions, S&OP, ERP, sourcing, logistique internationale, gestion des risques, stratégie supply chain globale',
      },
      {
        title: 'Bachelor - Commerce international (université classée 236e en Asie, QS 2026)',
        school_line: 'Yuan Ze University, Taoyuan, Taïwan | Septembre 2020 à juin 2024',
        details: "Mineures en investissement et finance d'entreprise, et en leadership et ressources humaines ; prix d'excellence académique (top 10 %) ; bourse du Council of Agriculture (Taïwan)",
      },
    ],
    languages: ['Chinois (mandarin) : langue maternelle', 'Anglais : courant (niveau professionnel)', "Français : intermédiaire (en cours d'apprentissage)"],
  };

  const FACTS = [
    'Pure Trade (July 2026 – January 2027, internship, current): leads weekly meetings with 4 suppliers on production plans and milestones; works with the purchasing team and the manufacturing planning team.',
    'Processes 10–15 purchase orders and invoices per day in Microsoft Dynamics 365; volume depends on whether buyers have uploaded the PO documents; follows up with buyers (acheteurs) on missing data.',
    'Every morning checks KPIs in Power BI and cleans data in Excel to make sure the data is right.',
    "Measures finished products with their packaging and records the data in L'Oréal's COSMO logistics system.",
    "Builds palletization plans in Cape Pack (Esko); each brand has a different maximum pallet height and weight.",
    'Monitors the in-office stock of BAT (bon à tirer, pre-production approval) samples.',
    'Cleaned and restructured 1,900+ historical order records; feeds supplier data into an in-house KPI web tool (move from manual to automated factory KPI tracking).',
    'Tracks 100+ luxury beauty GWP and VIP gift orders (makeup pouches, bags); presents OTD/OTIF and order KPIs to internal teams.',
    'Coordinates international shipments (ETD/ETA; sea, air, road; FCA Incoterms) with suppliers and freight forwarders.',
    "Pure Trade's clients: L'Oréal Luxe brands, Puig, Guerlain, Sephora. Offices in France, USA, Hong Kong, Shenzhen.",
    'Self-described core strength: finding mistakes in data and processes and working out how to correct them.',
    'Personality: comfortable talking with people and enjoys brainstorming. Interested in marketing (studied some marketing during her bachelor) but has no direct marketing work experience.',
    'Languages: Mandarin native, English fluent, French intermediate (no certificate).',
  ];

  const TARGETS = 'Target industries: luxury, cosmetics, food (FMCG), tech. Target roles: Supply Planner, Production Tracker, Supply Chain Performance Analyst, Distribution Planner, Retail Planner (stretch), Demand Planner, Supply / Launch Coordinator.';

  const RULES = [
    'Never invent experience, skills, tools, metrics, certificates or results. Use only the base CV and the confirmed facts. If the job asks for something she does not have, say so in "cannot_fix" instead of adding it.',
    'Summary: 2 or 3 sentences, at most 380 characters so it fits on 3 lines. Name the industries relevant to this job (for example luxury, beauty, cosmetics, fragrance) and Pure Trade\'s client brands (L\'Oréal Luxe, Puig, Guerlain, Sephora) so the ATS finds them. Never write that she works at Pure Trade and do not name Pure Trade in the summary. For food or tech jobs, lead with planning, KPIs and data reliability, and still mention the client brands briefly.',
    'Skills: exactly three categories, Hard Skills, Soft Skills and Tools, in that order. Never repeat an item across categories. No "Supply Chain Skills" category. Tools contains software only. Put the items this job asks for first and drop items that are irrelevant to it.',
    'Bullets: action + context or method + result. Present tense for Pure Trade (current until January 2027), past tense for finished roles. British English. Use the job description\'s terms only where her experience truly supports them. No first person, no vague filler. Perfect grammar.',
    'Keep every job title, company name, location and date exactly as in the base CV. Keep education entries and rankings exactly as given (you may reorder the coursework list to put relevant courses first, but add none). Keep languages exactly as given.',
    'One page: Pure Trade 5 to 7 bullets of at most 220 characters each; TNP Consultants 2 bullets; Clear Express 2 or 3 bullets; Hard Skills at most 360 characters; Soft Skills at most 170 characters.',
    'The "target" field is the job title from the job description, written as the company writes it.',
  ];

  // ---------- helpers ----------
  function frTypo(s) {
    return String(s ?? '')
      .replace(/ +([:;!?%»])/g, NB + '$1')
      .replace(/« +/g, '«' + NB)
      .replace(/(\d) (\d{3})\b/g, '$1' + NB + '$2');
  }
  function deepMap(v, fn) {
    if (typeof v === 'string') return fn(v);
    if (Array.isArray(v)) return v.map(x => deepMap(x, fn));
    if (v && typeof v === 'object') { const o = {}; for (const k in v) o[k] = deepMap(v[k], fn); return o; }
    return v;
  }
  function dataUrlBytes(u) {
    const b64 = u.split(',')[1];
    if (typeof atob === 'function') { const s = atob(b64); const a = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a; }
    return Uint8Array.from(Buffer.from(b64, 'base64'));
  }

  const LABELS = {
    en: { summary: 'SUMMARY', skills: 'SKILLS', exp: 'EXPERIENCE', edu: 'EDUCATION', lang: 'LANGUAGES', hard: 'Hard Skills: ', soft: 'Soft Skills: ', tools: 'Tools: ', target: t => `Target: ${t} | Available: ${AVAIL.en}` },
    fr: { summary: 'PROFIL', skills: 'COMPÉTENCES', exp: 'EXPÉRIENCES PROFESSIONNELLES', edu: 'FORMATION', lang: 'LANGUES', hard: 'Compétences techniques' + NB + ': ', soft: 'Savoir-être' + NB + ': ', tools: 'Outils' + NB + ': ', target: t => `Poste visé${NB}: ${t} | Disponibilité${NB}: ${AVAIL.fr}` },
  };

  // Template geometry (from the original Word file): A4, margins 26/24/36/36 pt, Calibri 9 pt.
  const PAGE_W = 595.28, MARGIN_X = 36, CONTENT_W = PAGE_W - 2 * MARGIN_X;
  const PHOTO = { x: 495.75, y: 14, w: 54.75, h: 67.75 };
  const QR = { x: 514.3, y: 760.6, w: 44.6, h: 44.6 };

  // ---------- CV: PDF (pdfmake doc definition) ----------
  function cvPdf(cv, lang, scale, images) {
    const L = LABELS[lang], f = n => +(n * scale).toFixed(2), body = f(9);
    const heading = t => ({ stack: [
      { text: t, bold: true, fontSize: f(11), margin: [0, f(4.5), 0, 0] },
      { canvas: [{ type: 'line', x1: 0, y1: 1, x2: CONTENT_W, y2: 1, lineWidth: 0.6, lineColor: '#444444' }], margin: [0, 0, 0, f(2.5)] },
    ] });
    const bullet = t => ({ columns: [{ width: 12, text: '•', fontSize: body }, { width: '*', text: t, fontSize: body }], columnGap: 0, margin: [6, 0, 0, f(0.75)] });
    const content = [
      { text: NAME, bold: true, fontSize: f(15), margin: [0, 0, 0, 1] },
      { text: CONTACT, fontSize: body, margin: [0, 0, 0, 1] },
      { text: L.target(cv.target), bold: true, fontSize: body, margin: [0, 0, 0, f(3)] },
      heading(L.summary),
      { text: cv.summary, fontSize: body, margin: [0, 0, 0, 1] },
      heading(L.skills),
      { text: [{ text: L.hard, bold: true }, cv.skills.hard], fontSize: body, margin: [0, 0, 0, f(1.25)] },
      { text: [{ text: L.soft, bold: true }, cv.skills.soft], fontSize: body, margin: [0, 0, 0, f(1.25)] },
      { text: [{ text: L.tools, bold: true }, cv.skills.tools], fontSize: body, margin: [0, 0, 0, f(1.25)] },
      heading(L.exp),
    ];
    cv.experience.forEach(e => {
      content.push({ text: e.title, bold: true, fontSize: f(10), margin: [0, f(3.5), 0, 0.5] });
      content.push({ text: e.company_line, fontSize: body, margin: [0, 0, 0, 1] });
      if (e.description) content.push({ text: e.description, italics: true, fontSize: body, margin: [0, 0, 0, 1] });
      e.bullets.forEach(b => content.push(bullet(b)));
    });
    content.push(heading(L.edu));
    cv.education.forEach(e => {
      content.push({ text: e.title, bold: true, fontSize: f(10), margin: [0, f(4), 0, 1] });
      content.push({ text: e.school_line, fontSize: body, margin: [0, 0, 0, 1] });
      if (e.details) content.push({ text: e.details, fontSize: body, margin: [0, 0, 0, 1] });
    });
    content.push(heading(L.lang));
    cv.languages.forEach(l => content.push({ text: l, fontSize: body, margin: [0, 0, 0, 1] }));
    const bg = images ? [
      { image: images.photo, absolutePosition: { x: PHOTO.x, y: PHOTO.y }, width: PHOTO.w, height: PHOTO.h },
      { image: images.qr, absolutePosition: { x: QR.x, y: QR.y }, width: QR.w, height: QR.h },
    ] : [];
    return {
      pageSize: 'A4', pageMargins: [MARGIN_X, 26, MARGIN_X, 24],
      info: { title: `CV ${NAME} – ${cv.target}`, author: 'Yu Chiao Lin' },
      defaultStyle: { font: 'Carlito', fontSize: body, lineHeight: 1 },
      background: (page) => (page === 1 ? bg : null),
      content,
    };
  }

  // ---------- CV: Word (docx.js) ----------
  function cvDocx(cv, lang, scale, images, D) {
    const L = LABELS[lang], hp = n => Math.round(n * 2 * scale); // half-points
    const run = (text, o = {}) => new D.TextRun({ text, font: 'Calibri', size: hp(o.size || 9), bold: !!o.bold, italics: !!o.italics });
    const p = (children, o = {}) => new D.Paragraph({ children, spacing: { before: o.before || 0, after: o.after ?? 20 }, border: o.border, numbering: o.numbering, indent: o.indent });
    const heading = t => p([run(t, { bold: true, size: 11 })], { before: Math.round(90 * scale), after: 30, border: { bottom: { style: D.BorderStyle.SINGLE, size: 6, color: '444444', space: 1 } } });
    const float = (img, xEmu, yEmu, wPx, hPx, name) => new D.ImageRun({
      type: 'jpg', data: dataUrlBytes(img), transformation: { width: wPx, height: hPx },
      floating: { horizontalPosition: { relative: D.HorizontalPositionRelativeFrom.PAGE, offset: xEmu }, verticalPosition: { relative: D.VerticalPositionRelativeFrom.PAGE, offset: yEmu }, allowOverlap: true, wrap: { type: D.TextWrappingType.NONE } },
      altText: { name, description: name, title: name },
    });
    const children = [
      p([...(images ? [float(images.photo, 6296025, 177800, 73, 90, 'Photo')] : []), run(NAME, { bold: true, size: 15 })]),
      p([run(CONTACT)]),
      p([run(L.target(cv.target), { bold: true })], { after: 80 }),
      heading(L.summary),
      p([run(cv.summary)]),
      heading(L.skills),
      p([run(L.hard, { bold: true }), run(cv.skills.hard)], { after: 25 }),
      p([run(L.soft, { bold: true }), run(cv.skills.soft)], { after: 25 }),
      p([run(L.tools, { bold: true }), run(cv.skills.tools)], { after: 25 }),
      heading(L.exp),
    ];
    cv.experience.forEach(e => {
      children.push(p([run(e.title, { bold: true, size: 10 })], { before: Math.round(70 * scale), after: 10 }));
      children.push(p([run(e.company_line)]));
      if (e.description) children.push(p([run(e.description, { italics: true })]));
      e.bullets.forEach(b => children.push(p([run(b)], { after: 15, numbering: { reference: 'cv-bullets', level: 0 } })));
    });
    children.push(heading(L.edu));
    cv.education.forEach(e => {
      children.push(p([run(e.title, { bold: true, size: 10 })], { before: Math.round(80 * scale) }));
      children.push(p([run(e.school_line)]));
      if (e.details) children.push(p([run(e.details)]));
    });
    children.push(heading(L.lang));
    cv.languages.forEach((l, i) => children.push(p([...(images && i === 0 ? [float(images.qr, 6531300, 9660235, 60, 60, 'QR code')] : []), run(l)])));
    return new D.Document({
      creator: 'Yu Chiao Lin', title: `CV ${NAME} – ${cv.target}`,
      styles: { default: { document: { run: { font: 'Calibri', size: hp(9) } } } },
      numbering: { config: [{ reference: 'cv-bullets', levels: [{ level: 0, format: D.LevelFormat.BULLET, text: '•', alignment: D.AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 240 } } } }] }] },
      sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 520, bottom: 480, left: 720, right: 720 } } }, children }],
    });
  }

  // ---------- Cover letter ----------
  const NAVY = '#14306b';
  function letterPdf(letter) {
    return {
      pageSize: 'A4', pageMargins: [60, 56, 60, 56],
      defaultStyle: { font: 'Carlito', fontSize: 11, lineHeight: 1.25 },
      content: [
        { text: 'Yu Chiao Lin', bold: true, fontSize: 16 },
        { text: CONTACT, fontSize: 9.5, color: '#444444', margin: [0, 2, 0, 18] },
        letter.recipient ? { text: letter.recipient, margin: [0, 0, 0, 10] } : '',
        { text: letter.date || '', margin: [0, 0, 0, 10] },
        { text: letter.subject, bold: true, margin: [0, 0, 0, 14] },
        { text: letter.greeting, margin: [0, 0, 0, 10] },
        ...letter.paragraphs.map(t => ({ text: t, alignment: 'justify', margin: [0, 0, 0, 10] })),
        { text: letter.closing, margin: [0, 6, 0, 2] },
        { text: 'Yu Chiao Lin' },
      ],
    };
  }
  function letterDocx(letter, D) {
    const p = (text, o = {}) => new D.Paragraph({ children: [new D.TextRun({ text, font: 'Calibri', size: o.size || 22, bold: !!o.bold, color: o.color })], spacing: { after: o.after ?? 200, line: 300 }, alignment: o.justify ? D.AlignmentType.JUSTIFIED : undefined });
    const kids = [p('Yu Chiao Lin', { bold: true, size: 32, after: 40 }), p(CONTACT, { size: 19, color: '444444', after: 360 })];
    if (letter.recipient) kids.push(p(letter.recipient));
    if (letter.date) kids.push(p(letter.date));
    kids.push(p(letter.subject, { bold: true, after: 280 }), p(letter.greeting));
    letter.paragraphs.forEach(t => kids.push(p(t, { justify: true })));
    kids.push(p(letter.closing, { after: 40 }), p('Yu Chiao Lin'));
    return new D.Document({ creator: 'Yu Chiao Lin', sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1120, bottom: 1120, left: 1200, right: 1200 } } }, children: kids }] });
  }

  // ---------- Interview prep (Step 4) PDF ----------
  const PREP_LABELS = {
    en: { title: 'Interview preparation', pitch: 'Tell me about yourself: 60-second outline', q: 'Question', assesses: 'What they are assessing', structure: 'Suggested answer structure', s: 'Situation', a: 'Action', r: 'Result', prepare: 'Evidence to prepare', avoid: 'Avoid', practise: 'Three areas to practise before the interview', ask: 'Questions to ask the interviewer', note: 'Built only from your real experience. Where evidence is thin, the guide tells you what to prepare instead of inventing it.' },
    fr: { title: "Préparation à l'entretien", pitch: 'Présentez-vous : trame de 60 secondes', q: 'Question', assesses: 'Ce que le recruteur évalue', structure: 'Structure de réponse proposée', s: 'Situation', a: 'Action', r: 'Résultat', prepare: 'Éléments à préparer', avoid: 'À éviter', practise: "Trois points à travailler avant l'entretien", ask: 'Questions à poser au recruteur', note: "Construit uniquement à partir de votre expérience réelle. Quand un exemple manque, le guide indique quoi préparer au lieu de l'inventer." },
    zh: { title: '面試準備', pitch: '自我介紹：60 秒架構', q: '問題', assesses: '面試官想評估什麼', structure: '建議回答架構', s: '情境 Situation', a: '行動 Action', r: '結果 Result', prepare: '需要準備的證據', avoid: '避免', practise: '面試前要練習的三個重點', ask: '可以反問面試官的問題', note: '內容只根據你真實的經歷。如果某題缺少例子，指南會告訴你要準備什麼，而不是幫你編造。' },
  };
  function prepPdf(prep, meta, lang) {
    const L = PREP_LABELS[lang], font = lang === 'zh' ? 'NotoTC' : 'Carlito';
    const h2 = t => ({ text: t, bold: true, fontSize: 13, color: NAVY, margin: [0, 14, 0, 4] });
    const label = t => ({ text: t, bold: true, fontSize: 9.5, color: '#000000', margin: [0, 5, 0, 1] });
    const list = arr => ({ ul: (arr || []).filter(Boolean), margin: [0, 0, 0, 2], markerColor: NAVY });
    const content = [
      { text: `${L.title}`, fontSize: 22, bold: true, color: NAVY },
      { text: `${meta.role} · ${meta.company}${meta.country ? ' · ' + meta.country : ''}`, fontSize: 12, margin: [0, 2, 0, 2] },
      { text: L.note, fontSize: 9, color: '#555555', margin: [0, 2, 0, 6] },
      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 475, y2: 0, lineWidth: 1.2, lineColor: NAVY }] },
      h2(L.pitch), list(prep.pitch),
    ];
    (prep.questions || []).forEach((q, i) => {
      content.push({ unbreakable: false, stack: [
        { text: `${i + 1}. ${q.category}`, fontSize: 9, bold: true, color: NAVY, margin: [0, 14, 0, 1] },
        { text: q.question, fontSize: 12, bold: true, margin: [0, 0, 0, 3] },
        label(L.assesses), { text: q.assesses },
        label(L.structure),
        { text: [{ text: L.s + ': ', bold: true }, q.structure?.situation || ''], margin: [8, 1, 0, 1] },
        { text: [{ text: L.a + ': ', bold: true }, q.structure?.action || ''], margin: [8, 1, 0, 1] },
        { text: [{ text: L.r + ': ', bold: true }, q.structure?.result || ''], margin: [8, 1, 0, 1] },
        label(L.prepare), { text: q.evidence_to_prepare },
        label(L.avoid), { text: q.avoid },
      ] });
    });
    content.push(h2(L.practise));
    (prep.practice_areas || []).forEach((p, i) => content.push({ text: [{ text: `${i + 1}. ${p.area}. `, bold: true }, p.how || ''], margin: [0, 2, 0, 3] }));
    content.push(h2(L.ask), list(prep.ask_them));
    return {
      pageSize: 'A4', pageMargins: [60, 50, 60, 50],
      info: { title: `${L.title} – ${meta.company}` },
      defaultStyle: { font, fontSize: 10, lineHeight: 1.3 },
      footer: (cur, total) => ({ text: `${cur} / ${total}`, alignment: 'right', fontSize: 8, color: '#777777', margin: [0, 16, 60, 0] }),
      content,
    };
  }

  root.CVKit = { NB, CONTACT, NAME, AVAIL, BASE_EN, BASE_FR, FACTS, TARGETS, RULES, frTypo, deepMap, cvPdf, cvDocx, letterPdf, letterDocx, prepPdf, PREP_LABELS };
})(typeof window !== 'undefined' ? window : globalThis);
