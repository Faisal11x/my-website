/* =============================================================
   FAISAL AL-HARBI — PROCUREMENT & SUPPLY CHAIN PORTFOLIO
   -------------------------------------------------------------
   File map:
     1. EDITABLE DATA   — all personal info & stats live here.
        Every text field is { en, ar } — edit both when you
        change content so the language toggle stays in sync.
     2. ICON LIBRARY     — small inline SVG line icons
     3. RENDER FUNCTIONS — turn the data above into bilingual DOM
     4. INTERACTIONS     — preloader, cursor, nav, animations,
                            language + theme toggles
============================================================= */

/* =============================================================
   1. EDITABLE DATA
============================================================= */

const CONTACT_INFO = {
  email: "faisalm24@hotmail.com",
  linkedinUrl: "https://www.linkedin.com/in/faisal-alharbi-062622360",
  linkedinLabel: "faisal-alharbi-062622360",
  location: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" }, // Editable placeholder — add a specific city if desired
};

// Hero / career statistics — kept in sync with the official CV's
// "Key Achievements" figures. Numeric ones animate as counters.
const STATS = [
  { type: "counter", value: 500, suffix: "+", label: { en: "Purchase Orders Across 50+ Suppliers", ar: "أمر شراء عبر أكثر من 50 مورد" }, icon: "factory" },
  { type: "badge", display: { en: "SAR 1.33M+", ar: "SAR 1.33M+" }, label: { en: "Total Procurement Value", ar: "إجمالي قيمة المشتريات" }, icon: "barChart" },
  { type: "badge", display: { en: "SAR 220K+", ar: "SAR 220K+" }, label: { en: "Avg. Monthly Volume, Zero Major Errors", ar: "متوسط الحجم الشهري بدون أخطاء جوهرية" }, icon: "clipboard" },
  { type: "badge", display: { en: "Oracle Fusion", ar: "Oracle Fusion" }, label: { en: "Hands-on ERP Experience", ar: "خبرة عملية في نظام ERP" }, icon: "cpu" },
];

// About section — core capability cards (kept short, not text-heavy)
const CAPABILITIES = [
  { title: { en: "Procurement", ar: "المشتريات" }, icon: "briefcase", desc: { en: "End-to-end purchasing, from request to delivery.", ar: "إدارة الشراء من الطلب حتى التسليم." } },
  { title: { en: "Strategic Sourcing", ar: "التوريد الاستراتيجي" }, icon: "search", desc: { en: "Finding the right suppliers at the right value.", ar: "إيجاد المورد المناسب بالقيمة المناسبة." } },
  { title: { en: "Supplier Management", ar: "إدارة الموردين" }, icon: "factory", desc: { en: "Building reliable, accountable supplier relationships.", ar: "بناء علاقات موثوقة ومسؤولة مع الموردين." } },
  { title: { en: "RFQ / Bidding", ar: "طلب عروض الأسعار" }, icon: "document", desc: { en: "Structured requests for competitive, transparent pricing.", ar: "طلبات منظمة لتسعير تنافسي وشفاف." } },
  { title: { en: "Negotiation", ar: "التفاوض" }, icon: "message", desc: { en: "Balancing cost, quality, and supplier partnership.", ar: "الموازنة بين التكلفة والجودة والشراكة مع المورد." } },
  { title: { en: "Purchase Requisitions", ar: "طلبات الشراء الداخلية" }, icon: "clipboard", desc: { en: "Turning internal needs into actionable requests.", ar: "تحويل الاحتياجات الداخلية إلى طلبات قابلة للتنفيذ." } },
  { title: { en: "Purchase Orders", ar: "أوامر الشراء" }, icon: "fileCheck", desc: { en: "Formalizing approved purchases with precision.", ar: "توثيق المشتريات المعتمدة بدقة." } },
  { title: { en: "Oracle Fusion", ar: "Oracle Fusion" }, icon: "cpu", desc: { en: "Hands-on ERP experience across the purchase cycle.", ar: "خبرة عملية في نظام ERP عبر دورة الشراء." } },
  { title: { en: "KPI & Performance Tracking", ar: "مؤشرات الأداء والمتابعة" }, icon: "barChart", desc: { en: "Measuring what matters — cost, time, accuracy.", ar: "قياس ما يهم: التكلفة، الوقت، الدقة." } },
  { title: { en: "Supply Chain Operations", ar: "عمليات سلسلة الإمداد" }, icon: "truck", desc: { en: "Connecting procurement to the wider logistics flow.", ar: "ربط المشتريات بتدفق العمليات اللوجستية الأوسع." } },
];

// Experience timeline — kept in sync with the official CV (dates,
// bullets, and figures). Nahdi Logistics: joined via a 6-month training
// period and was confirmed as full-time staff — reflected below.
const EXPERIENCE = [
  {
    role: { en: "Procurement Specialist", ar: "أخصائي مشتريات" },
    company: { en: "Nahdi Logistics", ar: "نهدي لوجستكس" },
    period: { en: "Mar 2026 – Present", ar: "مارس 2026 – حتى الآن" },
    points: [
      { en: "Completed the company's Graduate Program (6 months) and was retained as a full-time Procurement Specialist, continuing in the role", ar: "أكملت برنامج الخريجين (6 أشهر) وتم تثبيتي بعدها كأخصائي مشتريات بدوام كامل، وأستمر في الدور حتى الآن" },
      { en: "Ran daily PR/PO review and validation on Oracle Fusion, keeping requisition-to-order accuracy high and rework low", ar: "مراجعة واعتماد طلبات وأوامر الشراء اليومية عبر Oracle Fusion، مع الحفاظ على دقة عالية وتقليل الأخطاء" },
      { en: "Tracked supplier performance and followed up consistently to protect on-time delivery", ar: "متابعة أداء الموردين بشكل دوري لضمان الالتزام بمواعيد التسليم" },
      { en: "Analyzed competing quotations (RFQ) across suppliers to support cost-effective sourcing decisions", ar: "تحليل عروض الأسعار التنافسية بين الموردين لدعم قرارات توريد فعّالة من حيث التكلفة" },
      { en: "Coordinated with warehouse, operations, and finance teams to keep supply flow uninterrupted", ar: "التنسيق مع فرق المستودعات والعمليات والمالية لضمان استمرارية تدفق الإمداد" },
      { en: "Served as Acting Supervisor for the section on two occasions, overseeing daily operations and team coordination", ar: "تولي مهام المشرف بالنيابة عن القسم مرتين، والإشراف على العمليات اليومية وتنسيق الفريق" },
    ],
    tags: [
      { label: { en: "Oracle Fusion", ar: "Oracle Fusion" }, icon: "cpu" },
      { label: { en: "PR / PO Processing", ar: "معالجة طلبات وأوامر الشراء" }, icon: "fileCheck" },
      { label: { en: "Supplier Evaluation", ar: "تقييم الموردين" }, icon: "checkCircle" },
      { label: { en: "Negotiation", ar: "التفاوض" }, icon: "message" },
    ],
  },
  {
    role: { en: "Supply Chain Intern", ar: "متدرب سلسلة الإمداد" },
    company: { en: "LogiPoint — Bonded & Re-export Zone, Jeddah Islamic Port", ar: "LogiPoint — منطقة الإيداع وإعادة التصدير، ميناء جدة الإسلامي" },
    period: { en: "Aug 2025 – Jan 2026", ar: "أغسطس 2025 – يناير 2026" },
    points: [
      { en: "Rotated across Documentation, Warehouse, Yard, Container Inspection Yard (CIY), VAS, Transportation, Customs Clearance, Customer Service, Sales, and Government Affairs", ar: "تدريب دوّار شمل التوثيق، المستودع، الياردة، ساحة فحص الحاويات (CIY)، خدمات القيمة المضافة (VAS)، النقل، التخليص الجمركي، خدمة العملاء، المبيعات، والشؤون الحكومية" },
      { en: "Built practical expertise in documentation control and import/export compliance within a leading logistics zone", ar: "بناء خبرة عملية في ضبط التوثيق والامتثال لأنظمة الاستيراد والتصدير ضمن منطقة لوجستية رائدة" },
      { en: "Collaborated across departments to ensure seamless cargo flow and timely dispatch", ar: "التعاون بين الأقسام لضمان تدفق سلس للبضائع وسرعة الإنجاز" },
    ],
    tags: [
      { label: { en: "Documentation & Transportation", ar: "التوثيق والنقل" }, icon: "truck" },
      { label: { en: "Yard & Container Inspection (CIY)", ar: "الياردة وفحص الحاويات" }, icon: "building" },
      { label: { en: "Customs Clearance", ar: "التخليص الجمركي" }, icon: "checkCircle" },
      { label: { en: "VAS & Customer Service", ar: "القيمة المضافة وخدمة العملاء" }, icon: "message" },
      { label: { en: "Sales & Government Affairs", ar: "المبيعات والشؤون الحكومية" }, icon: "briefcase" },
    ],
  },
];

// The procurement cycle — signature interactive workflow
const WORKFLOW = [
  { label: { en: "Requisition", ar: "طلب الشراء" }, icon: "clipboard", detail: { en: "A business need is identified and formally captured as a Purchase Requisition (PR).", ar: "يتم تحديد الحاجة وتوثيقها رسميًا كطلب شراء (PR)." } },
  { label: { en: "RFQ", ar: "طلب عرض سعر" }, icon: "document", detail: { en: "A Request for Quotation is issued to qualified suppliers, outlining requirements and terms.", ar: "يُرسل طلب عرض سعر إلى الموردين المؤهلين موضحًا المتطلبات والشروط." } },
  { label: { en: "Supplier Sourcing", ar: "استقطاب الموردين" }, icon: "search", detail: { en: "Potential suppliers are identified and screened against cost, quality, and reliability.", ar: "يتم تحديد الموردين المحتملين وتقييمهم من حيث التكلفة والجودة والموثوقية." } },
  { label: { en: "Bidding", ar: "تقديم العروض" }, icon: "stack", detail: { en: "Suppliers submit competitive offers, compared side-by-side on price and value.", ar: "يقدّم الموردون عروضًا تنافسية تتم مقارنتها من حيث السعر والقيمة." } },
  { label: { en: "Evaluation", ar: "التقييم" }, icon: "checkCircle", detail: { en: "Bids are assessed against technical, commercial, and performance criteria.", ar: "تُقيَّم العروض وفق معايير فنية وتجارية وأداء." } },
  { label: { en: "Negotiation", ar: "التفاوض" }, icon: "message", detail: { en: "Terms are refined to secure the best balance of cost, quality, and service.", ar: "تُصقل الشروط لتحقيق أفضل توازن بين التكلفة والجودة والخدمة." } },
  { label: { en: "PO", ar: "أمر الشراء" }, icon: "fileCheck", detail: { en: "A Purchase Order is issued, formalizing the agreed terms with the supplier.", ar: "يُصدر أمر شراء رسمي يوثّق الشروط المتفق عليها مع المورد." } },
  { label: { en: "Supplier Performance", ar: "أداء المورد" }, icon: "barChart", detail: { en: "Delivery, quality, and service are tracked to inform future sourcing decisions.", ar: "تُتابع الجودة والتسليم والخدمة لدعم قرارات التوريد المستقبلية." } },
];

// Supply chain flow nodes
const SUPPLY_CHAIN = [
  { label: { en: "Supplier", ar: "المورد" }, icon: "factory" },
  { label: { en: "Procurement", ar: "المشتريات" }, icon: "briefcase" },
  { label: { en: "Warehouse", ar: "المستودع" }, icon: "building" },
  { label: { en: "Transportation", ar: "النقل" }, icon: "truck" },
  { label: { en: "Customer", ar: "العميل" }, icon: "user" },
];

// Skills — grouped exactly as requested, no fabricated proficiency %s
const SKILLS = {
  procurement: {
    title: { en: "Procurement", ar: "المشتريات" },
    icon: "briefcase",
    items: [
      { en: "Strategic Sourcing", ar: "التوريد الاستراتيجي" },
      { en: "RFQ Management", ar: "إدارة طلبات عروض الأسعار" },
      { en: "Bidding", ar: "تقديم العروض" },
      { en: "Negotiation", ar: "التفاوض" },
      { en: "Supplier Evaluation", ar: "تقييم الموردين" },
      { en: "PR / PO Management", ar: "إدارة طلبات وأوامر الشراء" },
    ],
  },
  supplyChain: {
    title: { en: "Supply Chain", ar: "سلسلة الإمداد" },
    icon: "truck",
    items: [
      { en: "Logistics", ar: "اللوجستيات" },
      { en: "Supplier Management", ar: "إدارة الموردين" },
      { en: "Procurement Operations", ar: "عمليات المشتريات" },
      { en: "Supply Chain Coordination", ar: "تنسيق سلسلة الإمداد" },
      { en: "KPI Tracking", ar: "متابعة مؤشرات الأداء" },
    ],
  },
  technology: {
    title: { en: "Technology", ar: "التقنية" },
    icon: "cpu",
    items: [
      { en: "Oracle Fusion", ar: "Oracle Fusion" },
      { en: "Microsoft Excel", ar: "Microsoft Excel" },
      { en: "Data Analysis", ar: "تحليل البيانات" },
      { en: "Digital Procurement", ar: "المشتريات الرقمية" },
    ],
  },
  softSkills: {
    title: { en: "Soft Skills", ar: "المهارات الشخصية" },
    icon: "message",
    items: [
      { en: "Communication & Follow-up", ar: "التواصل والمتابعة" },
      { en: "Problem Solving", ar: "حل المشكلات" },
      { en: "Attention to Detail", ar: "الدقة والانتباه للتفاصيل" },
      { en: "Time Management", ar: "إدارة الوقت" },
      { en: "Team Coordination", ar: "التنسيق مع الفريق" },
      { en: "Adaptability", ar: "المرونة والتكيّف" },
    ],
  },
};

const CERTIFICATIONS = [
  { en: "Power BI", ar: "Power BI" },
  { en: "Six Sigma", ar: "Six Sigma" },
  { en: "Excel", ar: "Excel" },
  { en: "Logistics & Operations in Events", ar: "لوجستيات وعمليات الفعاليات" },
  { en: "E-Retail & Supply Chain", ar: "التجارة الإلكترونية وسلسلة الإمداد" },
  { en: "Event Logistics Management", ar: "إدارة الخدمات اللوجستية للفعاليات" },
];

// Education + languages — shown as two compact cards in the About section
const EDUCATION = {
  icon: "document",
  degree: { en: "Bachelor's Degree in Supply Chain Management & Maritime Business", ar: "بكالوريوس في إدارة سلسلة الإمداد والأعمال البحرية" },
  school: { en: "King Abdulaziz University", ar: "جامعة الملك عبدالعزيز" },
  meta: { en: "GPA: 4.15 / 5.00  ·  2022 – 2025", ar: "المعدل: 4.15 / 5.00  ·  2022 – 2025" },
};

const LANGUAGES = {
  icon: "message",
  items: [
    { en: "Arabic — Native", ar: "العربية — اللغة الأم" },
    { en: "English — Professional Working Proficiency", ar: "الإنجليزية — كفاءة عملية احترافية" },
  ],
};

// Projects — conceptual/illustrative, clearly labeled as such
const PROJECTS = [
  {
    badge: { en: "Concept Project", ar: "مشروع مفاهيمي" },
    title: { en: "Predicting Container Congestion Using Artificial Intelligence", ar: "التنبؤ باختناقات الحاويات باستخدام الذكاء الاصطناعي" },
    problem: { en: "Port and terminal congestion disrupts delivery timelines, raises costs, and reduces visibility for procurement and logistics teams.", ar: "ازدحام الموانئ والمحطات يعطل مواعيد التسليم، يرفع التكاليف، ويقلل من وضوح الرؤية لفرق المشتريات واللوجستيات." },
    solution: { en: "A conceptual AI model analyzing historical vessel traffic, port throughput, and seasonal patterns to forecast congestion risk before it happens — enabling proactive rerouting and scheduling.", ar: "نموذج ذكاء اصطناعي مفاهيمي يحلل حركة السفن التاريخية وإنتاجية الموانئ والأنماط الموسمية للتنبؤ بمخاطر الازدحام قبل حدوثها — مما يتيح إعادة التوجيه والجدولة بشكل استباقي." },
    technology: [
      { en: "Data Analysis", ar: "تحليل البيانات" },
      { en: "Predictive Modeling", ar: "النمذجة التنبؤية" },
      { en: "Supply Chain Analytics", ar: "تحليلات سلسلة الإمداد" },
      { en: "Dashboard Visualization", ar: "لوحات العرض المرئي" },
    ],
    impact: { en: "Illustrates how predictive analytics could support more resilient, data-driven procurement and logistics planning.", ar: "يوضح كيف يمكن للتحليلات التنبؤية أن تدعم تخطيطًا أكثر مرونة واعتمادًا على البيانات في المشتريات واللوجستيات." },
  },
];

// Dashboard — clearly labeled demo/concept metrics, not real reported figures
// Process metrics (fulfillment rate, cycle time, monthly volume, receipt
// lead time) are computed from the internal NTC Procure-to-Pay report,
// filtered to Buyer = "Faisal Alharbi" (Mar–Jul 2026). The PO count and
// supplier count are kept unified with the CV's career-total figures
// rather than the narrower Mar–Jul slice, so the two don't disagree.
const DASHBOARD = [
  { type: "gauge", label: { en: "PO Fulfillment Rate", ar: "معدل إنجاز أوامر الشراء" }, value: 99, unit: { en: "% of lines not rejected", ar: "% من البنود غير المرفوضة" } },
  { type: "stat", label: { en: "Avg. Approval Cycle Time", ar: "متوسط مدة اعتماد الطلب" }, value: "1.6", unit: { en: "days, PO creation to approval", ar: "يوم من الإنشاء حتى الاعتماد" } },
  { type: "bar", label: { en: "Monthly PO Volume", ar: "حجم أوامر الشراء الشهري" }, unit: { en: "unique POs, Mar–Jul 2026", ar: "أوامر شراء فريدة، مارس–يوليو 2026" }, series: [28, 88, 50, 112, 10] },
  { type: "stat", label: { en: "Typical Receipt Lead Time", ar: "المدة المعتادة للاستلام" }, value: "5", unit: { en: "days (median), PO to receipt", ar: "يوم (الوسيط) من الأمر حتى الاستلام" } },
  { type: "stat", label: { en: "Purchase Orders Managed", ar: "أوامر شراء تمت إدارتها" }, value: "500+", unit: { en: "career total (see CV)", ar: "الإجمالي الكلي (راجع السيرة الذاتية)" } },
  { type: "stat", label: { en: "Active Suppliers Engaged", ar: "الموردون النشطون" }, value: "50+", unit: { en: "career total (see CV)", ar: "الإجمالي الكلي (راجع السيرة الذاتية)" } },
];

/* =============================================================
   2. ICON LIBRARY — minimal inline line icons
============================================================= */
const ICON_PATHS = {
  clipboard: '<rect x="6" y="4" width="12" height="16" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="15" y2="15"/>',
  document: '<path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><line x1="9" y1="13" x2="17" y2="13"/><line x1="9" y1="17" x2="14" y2="17"/>',
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  stack: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3.5" cy="6" r="1.3"/><circle cx="3.5" cy="12" r="1.3"/><circle cx="3.5" cy="18" r="1.3"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.6 2.6L16 9"/>',
  message: '<path d="M21 14a2 2 0 0 1-2 2H8l-5 4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  fileCheck: '<path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><path d="M9.5 14.3l2 2 4-4"/>',
  barChart: '<line x1="4" y1="21" x2="4" y2="12"/><line x1="10" y1="21" x2="10" y2="5"/><line x1="16" y1="21" x2="16" y2="9"/><line x1="21" y1="21" x2="3" y2="21"/>',
  factory: '<path d="M3 21V11l5 3v-3l5 3V7l6 4v10z"/><line x1="3" y1="21" x2="21" y2="21"/>',
  building: '<rect x="4" y="9" width="16" height="12"/><path d="M4 9l8-5 8 5"/><line x1="10" y1="21" x2="10" y2="15"/><line x1="14" y1="21" x2="14" y2="15"/>',
  truck: '<rect x="1" y="7" width="13" height="10"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="6" cy="19" r="1.7"/><circle cx="17.5" cy="19" r="1.7"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="13" x2="21" y2="13"/>',
  cpu: '<rect x="7" y="7" width="10" height="10" rx="1"/><rect x="10" y="10" width="4" height="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><line x1="8" y1="11" x2="8" y2="17"/><circle cx="8" cy="8" r="1" fill="currentColor" stroke="none"/><path d="M12 17v-3.3a2.2 2.2 0 0 1 4.4 0V17"/><line x1="12" y1="11" x2="12" y2="17"/>',
  mapPin: '<path d="M12 21s7-7.2 7-12a7 7 0 0 0-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  star: '<polygon points="12 2 15 8.5 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 9 8.5"/>',
};

function icon(name, size) {
  size = size || 24;
  const inner = ICON_PATHS[name] || "";
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}

// Wraps a { en, ar } object into the two-span markup the CSS toggles via [data-lang]
function bi(field) {
  if (!field) return "";
  return `<span class="t-en">${field.en}</span><span class="t-ar">${field.ar}</span>`;
}

/* =============================================================
   3. RENDER FUNCTIONS
============================================================= */

function renderCapabilities() {
  const grid = document.getElementById("capabilityGrid");
  if (!grid) return;
  grid.innerHTML = CAPABILITIES.map(
    (c) => `
    <div class="capability-card reveal">
      <div class="icon-wrap">${icon(c.icon, 20)}</div>
      <h3>${bi(c.title)}</h3>
      <p>${bi(c.desc)}</p>
    </div>`
  ).join("");
}

function renderEducationLanguages() {
  const grid = document.getElementById("eduLangGrid");
  if (!grid) return;
  grid.innerHTML = `
    <div class="card reveal">
      <div class="icon-wrap">${icon(EDUCATION.icon, 20)}</div>
      <h3>${bi(EDUCATION.degree)}</h3>
      <p>${bi(EDUCATION.school)}<br/>${bi(EDUCATION.meta)}</p>
    </div>
    <div class="card reveal">
      <div class="icon-wrap">${icon(LANGUAGES.icon, 20)}</div>
      <h3><span class="t-en">Languages</span><span class="t-ar">اللغات</span></h3>
      <p>${LANGUAGES.items.map((l) => bi(l)).join("<br/>")}</p>
    </div>`;
}

function renderStats() {
  const row = document.getElementById("statsRow");
  if (!row) return;
  row.innerHTML = STATS.map((s) => {
    if (s.type === "counter") {
      return `
      <div class="stat-card reveal">
        <div class="icon-wrap">${icon(s.icon, 18)}</div>
        <p class="stat-value"><span class="count" data-target="${s.value}">0</span>${s.suffix || ""}</p>
        <p class="stat-label">${bi(s.label)}</p>
      </div>`;
    }
    return `
      <div class="stat-card reveal">
        <div class="icon-wrap">${icon(s.icon, 18)}</div>
        <p class="stat-value">${bi(s.display)}</p>
        <p class="stat-label">${bi(s.label)}</p>
      </div>`;
  }).join("");
}

function renderTimeline() {
  const wrap = document.getElementById("timeline");
  if (!wrap) return;
  wrap.innerHTML = EXPERIENCE.map(
    (e) => `
    <div class="timeline-item reveal">
      <div class="timeline-card">
        <span class="timeline-period">${bi(e.period)}</span>
        <h3 class="timeline-role">${bi(e.role)}</h3>
        <p class="timeline-company">${bi(e.company)}</p>
        <ul class="timeline-points">
          ${e.points.map((p) => `<li>${bi(p)}</li>`).join("")}
        </ul>
        <div class="timeline-tags">
          ${e.tags.map((t) => `<span class="timeline-tag">${icon(t.icon, 13)}${bi(t.label)}</span>`).join("")}
        </div>
      </div>
    </div>`
  ).join("");
}

let workflowTimer = null;
let workflowActiveIndex = 0;

function stageOfLabel(i) {
  return `<span class="t-en">Stage ${i + 1} of ${WORKFLOW.length}</span><span class="t-ar">المرحلة ${i + 1} من ${WORKFLOW.length}</span>`;
}

function workflowStepMarkup(i) {
  const step = WORKFLOW[i];
  return `
    <p class="step-index">${stageOfLabel(i)}</p>
    <h3>${bi(step.label)}</h3>
    <p>${bi(step.detail)}</p>`;
}

function renderWorkflow() {
  const track = document.getElementById("workflowTrack");
  const detail = document.getElementById("workflowDetail");
  if (!track || !detail) return;

  track.innerHTML = WORKFLOW.map(
    (w, i) => `
    <li class="workflow-step${i === 0 ? " is-active" : ""}" data-index="${i}" tabindex="0" role="button" aria-label="${w.label.en}">
      <span class="node">${icon(w.icon, 20)}</span>
      <span class="label">${bi(w.label)}</span>
    </li>`
  ).join("");

  function showStep(i) {
    workflowActiveIndex = i;
    track.querySelectorAll(".workflow-step").forEach((el, idx) => {
      el.classList.toggle("is-active", idx === i);
    });
    detail.innerHTML = workflowStepMarkup(i);
  }

  track.querySelectorAll(".workflow-step").forEach((el) => {
    const activate = () => {
      stopWorkflowAutoplay();
      showStep(parseInt(el.dataset.index, 10));
    };
    el.addEventListener("click", activate);
    el.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        activate();
      }
    });
  });

  showStep(0);
  startWorkflowAutoplay();
}

function startWorkflowAutoplay() {
  if (window.__reduceMotion) return;
  stopWorkflowAutoplay();
  workflowTimer = setInterval(() => {
    const track = document.getElementById("workflowTrack");
    const detail = document.getElementById("workflowDetail");
    if (!track || !detail) return;
    const next = (workflowActiveIndex + 1) % WORKFLOW.length;
    workflowActiveIndex = next;
    track.querySelectorAll(".workflow-step").forEach((el, idx) => {
      el.classList.toggle("is-active", idx === next);
    });
    detail.innerHTML = workflowStepMarkup(next);
  }, 2600);
}

function stopWorkflowAutoplay() {
  if (workflowTimer) clearInterval(workflowTimer);
  workflowTimer = null;
}

function renderSupplyChain() {
  const wrap = document.getElementById("supplyMap");
  if (!wrap) return;

  const nodes = SUPPLY_CHAIN.map(
    (n) => `
    <div class="supply-node reveal">
      <span class="node">${icon(n.icon, 22)}</span>
      <span>${bi(n.label)}</span>
    </div>`
  ).join("");

  wrap.innerHTML = `
    <div class="supply-route" aria-hidden="true">
      <svg preserveAspectRatio="none" viewBox="0 0 1000 2">
        <line class="route-line" x1="0" y1="1" x2="1000" y2="1"/>
        <line class="route-progress" x1="0" y1="1" x2="1000" y2="1"/>
      </svg>
    </div>
    <span class="route-dot" aria-hidden="true"></span>
    <div class="supply-nodes">${nodes}</div>
    <p class="supply-caption">
      <span class="t-en">A simplified view of the physical and information flow across the chain.</span>
      <span class="t-ar">عرض مبسط لتدفق البضائع والمعلومات عبر السلسلة.</span>
    </p>`;
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <article class="project-card reveal">
      <div class="project-top">
        <div>
          <span class="project-badge">${bi(p.badge)}</span>
          <h3>${bi(p.title)}</h3>
        </div>
      </div>
      <div class="project-body">
        <div class="project-block">
          <h4><span class="t-en">Problem</span><span class="t-ar">المشكلة</span></h4>
          <p>${bi(p.problem)}</p>
        </div>
        <div class="project-block">
          <h4><span class="t-en">Solution</span><span class="t-ar">الحل</span></h4>
          <p>${bi(p.solution)}</p>
        </div>
        <div class="project-block">
          <h4><span class="t-en">Technology</span><span class="t-ar">التقنيات المستخدمة</span></h4>
          <ul>${p.technology.map((t) => `<li class="tech-chip">${bi(t)}</li>`).join("")}</ul>
        </div>
        <div class="project-block">
          <h4><span class="t-en">Impact</span><span class="t-ar">الأثر</span></h4>
          <p>${bi(p.impact)}</p>
        </div>
      </div>
    </article>`
  ).join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (grid) {
    grid.innerHTML = Object.values(SKILLS)
      .map(
        (cat) => `
      <div class="skill-category reveal">
        <div class="skill-category-head">
          <span class="icon-wrap">${icon(cat.icon, 20)}</span>
          <h3>${bi(cat.title)}</h3>
        </div>
        <div class="skill-chip-list">
          ${cat.items.map((s) => `<div class="skill-chip">${bi(s)}</div>`).join("")}
        </div>
      </div>`
      )
      .join("");
  }

  const strip = document.getElementById("certStrip");
  if (strip) {
    strip.innerHTML = CERTIFICATIONS.map((c) => `<span class="cert-chip">${bi(c)}</span>`).join("");
  }
}

function renderDashboard() {
  const grid = document.getElementById("dashboardGrid");
  if (!grid) return;

  grid.innerHTML = DASHBOARD.map((m) => {
    if (m.type === "gauge") {
      const r = 34;
      const c = 2 * Math.PI * r;
      return `
      <div class="dash-card reveal">
        <h4>${bi(m.label)}</h4>
        <div class="gauge-wrap">
          <svg width="88" height="88" viewBox="0 0 88 88">
            <circle class="gauge-track" cx="44" cy="44" r="${r}"/>
            <circle class="gauge-progress" cx="44" cy="44" r="${r}"
              stroke-dasharray="${c}" stroke-dashoffset="${c}"
              data-offset="${c - (m.value / 100) * c}" data-circ="${c}"/>
          </svg>
          <div>
            <p class="dash-value"><span class="count" data-target="${m.value}">0</span>%</p>
            <p class="dash-unit">${bi(m.unit)}</p>
          </div>
        </div>
      </div>`;
    }
    if (m.type === "bar") {
      const max = Math.max(...m.series);
      return `
      <div class="dash-card reveal">
        <h4>${bi(m.label)}</h4>
        <div class="bar-chart">
          ${m.series.map((v) => `<div class="bar" data-height="${Math.round((v / max) * 100)}"></div>`).join("")}
        </div>
        <p class="dash-unit" style="margin-top:10px;">${bi(m.unit)}</p>
      </div>`;
    }
    if (m.type === "rating") {
      const filled = Math.round(m.value);
      const stars = Array.from({ length: 5 })
        .map((_, i) => `<span class="${i < filled ? "is-filled" : ""}">${icon("star", 16)}</span>`)
        .join("");
      return `
      <div class="dash-card reveal">
        <h4>${bi(m.label)}</h4>
        <p class="dash-value">${m.value}<span style="font-size:1rem;color:var(--text-faint);">/5</span></p>
        <div class="rating-stars">${stars}</div>
        <p class="dash-unit" style="margin-top:10px;">${bi(m.unit)}</p>
      </div>`;
    }
    // plain stat
    return `
      <div class="dash-card reveal">
        <h4>${bi(m.label)}</h4>
        <p class="dash-value">
          <span class="count" data-target="${m.value}" data-static="${isNaN(Number(m.value)) ? m.value : ""}">0</span>
          ${m.trend === "up" ? '<span class="trend-up">▲</span>' : ""}
        </p>
        <p class="dash-unit">${bi(m.unit)}</p>
      </div>`;
  }).join("");
}

function renderContact() {
  const grid = document.getElementById("contactGrid");
  if (!grid) return;
  grid.innerHTML = `
    <a class="contact-card reveal" href="mailto:${CONTACT_INFO.email}">
      <span class="icon-wrap">${icon("mail", 20)}</span>
      <h3><span class="t-en">Email</span><span class="t-ar">البريد الإلكتروني</span></h3>
      <p>${CONTACT_INFO.email}</p>
    </a>
    <a class="contact-card reveal" href="${CONTACT_INFO.linkedinUrl}" target="_blank" rel="noopener">
      <span class="icon-wrap">${icon("linkedin", 20)}</span>
      <h3>LinkedIn</h3>
      <p>${CONTACT_INFO.linkedinLabel}</p>
    </a>
    <div class="contact-card reveal">
      <span class="icon-wrap">${icon("mapPin", 20)}</span>
      <h3><span class="t-en">Location</span><span class="t-ar">الموقع</span></h3>
      <p>${bi(CONTACT_INFO.location)}</p>
    </div>`;
}

/* =============================================================
   4. INTERACTIONS
============================================================= */

document.body.classList.add("lock-scroll");
window.__reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (window.__reduceMotion) document.documentElement.classList.add("reduced-motion");

document.addEventListener("DOMContentLoaded", () => {
  renderCapabilities();
  renderEducationLanguages();
  renderStats();
  renderTimeline();
  renderWorkflow();
  renderSupplyChain();
  renderProjects();
  renderSkills();
  renderDashboard();
  renderContact();

  initPreloader();
  initCustomCursor();
  initNav();
  initLangAndTheme();
  initRevealObserver();
  initCounters();
  initGaugesAndBars();
  initHeroCanvas();
  initHeroParallax();
  initBackToTop();
  initQrWidget();

  const year = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  const yearArEl = document.getElementById("year-ar");
  if (yearEl) yearEl.textContent = year;
  if (yearArEl) yearArEl.textContent = year;
});

/* ---------- Language + theme toggles ---------- */
function initLangAndTheme() {
  const root = document.documentElement;
  const titles = {
    en: "Faisal Mohammed Al-Harbi | Procurement & Supply Chain Professional",
    ar: "فيصل محمد الحربي | متخصص مشتريات وسلسلة إمداد",
  };

  function currentLang() {
    return root.getAttribute("data-lang") === "ar" ? "ar" : "en";
  }

  function syncLangButton() {
    const btn = document.getElementById("langToggle");
    if (!btn) return;
    const lang = currentLang();
    btn.textContent = lang === "ar" ? "EN" : "AR";
    btn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
  }

  function applyLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    root.setAttribute("lang", lang);
    document.title = titles[lang];
    localStorage.setItem("lang", lang);
    syncLangButton();
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  syncLangButton();

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => applyLang(currentLang() === "ar" ? "en" : "ar"));
  }

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }
}

/* ---------- Preloader ---------- */
function initPreloader() {
  const pre = document.getElementById("preloader");
  if (!pre) return;

  const minTime = new Promise((res) => setTimeout(res, window.__reduceMotion ? 200 : 1200));
  const loaded = new Promise((res) => {
    if (document.readyState === "complete") res();
    else window.addEventListener("load", res, { once: true });
  });
  const fallback = new Promise((res) => setTimeout(res, 3000));

  Promise.race([Promise.all([minTime, loaded]), fallback]).then(() => {
    pre.classList.add("is-hidden");
    document.body.classList.remove("lock-scroll");
  });
}

/* ---------- Custom cursor (desktop, fine pointer only) ---------- */
function initCustomCursor() {
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!supportsHover) return;

  document.body.classList.add("has-custom-cursor");
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  const hoverTargets = "a, button, .capability-card, .stat-card, .timeline-card, .workflow-step, .skill-chip, .project-card, .contact-card, .dash-card, .cert-chip";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) ring.classList.add("is-hovering");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) ring.classList.remove("is-hovering");
  });
}

/* ---------- Navigation ---------- */
function initNav() {
  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll("[data-nav]");

  function onScroll() {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("mobile-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen);
    });
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("mobile-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const sections = document.querySelectorAll("main section[id]");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          const link = document.querySelector(`.nav-link[href="#${id}"]`);
          if (!link) return;
          navLinks.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
  }
}

/* ---------- Scroll reveal ---------- */
function initRevealObserver() {
  const els = document.querySelectorAll(".reveal");
  if (window.__reduceMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in-view"));
    return;
  }
  els.forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 80 + "ms";
  });
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => obs.observe(el));
}

/* ---------- Animated counters ---------- */
function animateCount(el) {
  const target = parseFloat(el.getAttribute("data-target"));
  const staticText = el.getAttribute("data-static");
  if (staticText) {
    el.textContent = staticText;
    return;
  }
  const decimals = target % 1 !== 0 ? 1 : 0;
  const duration = 1300;
  const start = performance.now();
  function step(now) {
    const ratio = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - ratio, 3);
    el.textContent = (target * eased).toFixed(decimals);
    if (ratio < 1) requestAnimationFrame(step);
    else el.textContent = target.toFixed(decimals);
  }
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll(".count");
  if (!("IntersectionObserver" in window)) {
    counters.forEach((el) => animateCount(el));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (window.__reduceMotion) {
            const t = entry.target.getAttribute("data-static") || parseFloat(entry.target.getAttribute("data-target"));
            entry.target.textContent = t;
          } else {
            animateCount(entry.target);
          }
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((el) => obs.observe(el));
}

/* ---------- Dashboard gauges + bars reveal ---------- */
function initGaugesAndBars() {
  const gauges = document.querySelectorAll(".gauge-progress");
  const bars = document.querySelectorAll(".bar-chart .bar");
  if (!("IntersectionObserver" in window)) {
    gauges.forEach((g) => (g.style.strokeDashoffset = g.dataset.offset));
    bars.forEach((b) => (b.style.height = b.dataset.height + "%"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.classList.contains("gauge-progress")) el.style.strokeDashoffset = el.dataset.offset;
        if (el.classList.contains("bar")) el.style.height = el.dataset.height + "%";
        obs.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  gauges.forEach((g) => obs.observe(g));
  bars.forEach((b) => obs.observe(b));
}

/* ---------- Hero network canvas ---------- */
function initHeroCanvas() {
  const canvas = document.getElementById("networkCanvas");
  const hero = document.getElementById("home");
  if (!canvas || !hero) return;
  const ctx = canvas.getContext("2d");
  let nodes = [];
  let width, height, dpr;
  let running = false;
  let rafId = null;

  const ACCENT = "45, 212, 191";

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = hero.clientWidth;
    height = hero.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedNodes();
  }

  function seedNodes() {
    const count = Math.max(28, Math.min(64, Math.round((width * height) / 26000)));
    nodes = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));
  }

  function drawFrame() {
    ctx.clearRect(0, 0, width, height);
    const maxDist = Math.min(160, width / 6);

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      if (!window.__reduceMotion) {
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.35;
          ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      ctx.fillStyle = `rgba(${ACCENT}, 0.75)`;
      ctx.beginPath();
      ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop() {
    drawFrame();
    if (!window.__reduceMotion) rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    if (window.__reduceMotion) {
      drawFrame();
    } else {
      rafId = requestAnimationFrame(loop);
    }
  }
  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
  }

  resize();
  start();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });

  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => (entry.isIntersecting ? start() : stop()));
      },
      { threshold: 0.05 }
    );
    obs.observe(hero);
  }
}

/* ---------- Hero parallax on mouse move ---------- */
function initHeroParallax() {
  if (window.__reduceMotion) return;
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!supportsHover) return;
  const hero = document.getElementById("home");
  const content = document.getElementById("heroContent");
  if (!hero || !content) return;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    content.style.transform = `translate(${px * -12}px, ${py * -8}px)`;
  });
  hero.addEventListener("mouseleave", () => {
    content.style.transform = "translate(0, 0)";
  });
}

/* ---------- Back to top ---------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 600);
    },
    { passive: true }
  );
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: window.__reduceMotion ? "auto" : "smooth" });
  });
}

/* ---------- QR corner widget ---------- */
function initQrWidget() {
  const widget = document.getElementById("qrWidget");
  const closeBtn = document.getElementById("qrClose");
  if (!widget) return;

  if (localStorage.getItem("qrDismissed") === "1") {
    widget.classList.add("is-dismissed");
    return;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 500) widget.classList.add("visible");
    },
    { passive: true }
  );

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      widget.classList.add("is-dismissed");
      localStorage.setItem("qrDismissed", "1");
    });
  }
}
