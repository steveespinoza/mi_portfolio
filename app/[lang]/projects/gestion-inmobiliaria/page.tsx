import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconifyIcon } from "@iconify/react";
import reactLogo from "@iconify-icons/logos/react";
import viteLogo from "@iconify-icons/logos/vitejs";
import pythonLogo from "@iconify-icons/logos/python";
import fastapiLogo from "@iconify-icons/logos/fastapi-icon";
import postgresqlLogo from "@iconify-icons/logos/postgresql";
import jwtLogo from "@iconify-icons/logos/jwt-icon";
import awsS3Logo from "@iconify-icons/logos/aws-s3";
import excelIcon from "@iconify-icons/vscode-icons/file-type-excel";
import pdfIcon from "@iconify-icons/vscode-icons/file-type-pdf2";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Droplets,
  FileText,
  MapPin,
  ReceiptText,
  Sparkles,
  Upload,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary, type Locale } from "@/dictionaries";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const COPY = {
  es: {
    metadata: {
      title: "VIVO · Gestión Inmobiliaria | Steve Espinoza",
      description: "Plataforma para distribuir gastos, emitir recibos, validar pagos y seguir la operación de un edificio.",
    },
    back: "Volver a proyectos",
    eyebrow: "Gestión inmobiliaria",
    title: "VIVO",
    subtitle: "Centraliza consumos, gastos y cobranzas de cada edificio.",
    summary: "Un mismo periodo conecta lecturas, recibos, saldos y comprobantes.",
    demoLabel: "Vista ilustrativa · datos de ejemplo",
    dashboard: {
      overline: "Cierre de noviembre",
      title: "Resumen del periodo",
      metrics: [["Por distribuir", "S/ 12,480"], ["Recaudado", "79%"], ["Pendientes", "04"]],
      flow: ["Gastos", "Recibos", "Pagos"],
      records: [["Unidad 301", "S/ 428.50", "Aprobado"], ["Unidad 402", "S/ 391.20", "Reportado"], ["Unidad 504", "S/ 447.80", "Pendiente"]],
    },
    workflow: {
      eyebrow: "Cierre mensual",
      body: "Del recibo del proveedor al pago validado, cada paso conserva el contexto del periodo.",
      steps: [
        ["Registra", "Carga gastos, lecturas y evidencias."],
        ["Distribuye", "Aplica consumo medido o cuota lineal."],
        ["Emite", "Genera recibos por cada unidad."],
        ["Concilia", "Valida pagos y actualiza saldos."],
      ],
    },
    billing: {
      label: "Distribución",
      title: "Un cálculo que todos pueden revisar",
      body: "El sistema transforma el gasto común en cargos por unidad sin separar la factura, las lecturas ni la evidencia.",
      points: ["Consumo medido o prorrateo lineal", "Diferencia común distribuida", "Recibos PDF listos para emitir"],
    },
    billingDemo: {
      overline: "Registrar consumo",
      title: "Agua · noviembre 2026",
      totalLabel: "Monto a distribuir",
      total: "S/ 4,860.00",
      evidence: "Recibo adjunto",
      headers: ["Unidad", "Anterior", "Actual", "Consumo"],
      rows: [["301", "128.420", "134.810", "6.390 m³"], ["402", "94.125", "99.870", "5.745 m³"], ["504", "151.600", "159.245", "7.645 m³"]],
      result: "32 recibos listos",
    },
    payments: {
      label: "Cobranzas",
      title: "Dos roles, un mismo saldo",
      body: "El propietario reporta el depósito y la administración valida el comprobante antes de cerrar la deuda.",
      points: ["Estado de cuenta por unidad", "Comprobante compartido", "Diferencias trasladadas al siguiente periodo"],
    },
    paymentDemo: {
      owner: "Vista del propietario",
      receipt: "Recibo · noviembre",
      concepts: [["Agua", "S/ 148.20"], ["Mantenimiento", "S/ 220.00"], ["Saldo anterior", "S/ 40.30"]],
      total: "S/ 408.50",
      upload: "Comprobante enviado",
      status: "Reportado",
      admin: "Centro de cobranzas",
      unit: "Unidad 402",
      labels: ["Deuda", "Depositado", "Diferencia"],
      values: ["S/ 408.50", "S/ 408.50", "S/ 0.00"],
      voucher: "Voucher disponible",
      approve: "Aprobar pago",
    },
    operations: {
      label: "Continuidad operativa",
      body: "La cobranza comparte el mismo espacio con los pendientes que mantienen al edificio funcionando.",
      points: ["Incidencias con ubicación y evidencia", "Historial de equipos e intervenciones", "Próximos mantenimientos proyectados"],
    },
    operationsDemo: {
      incidents: "Incidencias",
      incidentTitle: "Fuga en área común",
      location: "Lobby · primer piso",
      reported: "Reportado hoy · 09:42",
      pending: "Pendiente",
      evidence: "Evidencia fotográfica",
      resolve: "Marcar como atendido",
      maintenance: "Mantenimiento",
      equipment: "Bomba de agua",
      provider: "Proveedor técnico asignado",
      due: "Próxima fecha",
      date: "18 nov",
      warning: "Por vencer",
      history: "4 intervenciones registradas",
    },
    technology: {
      eyebrow: "Estructura técnica",
      body: "La plataforma separa la experiencia del usuario, las reglas del negocio, los datos y los archivos para operar cada edificio con seguridad.",
      items: [
        ["React + Vite", "Frontend", "Construye la interfaz; React Router organiza las vistas y TanStack Query sincroniza los datos de la API."],
        ["Python + FastAPI", "API REST", "Expone módulos de edificios, unidades, cobranzas e incidencias; Pydantic valida cada entrada y respuesta."],
        ["PostgreSQL + SQLAlchemy", "Datos", "Persiste la operación con transacciones y pool de conexiones; Alembic mantiene el esquema versionado."],
        ["JWT + bcrypt", "Seguridad", "Firma sesiones con vencimiento y protege las contraseñas mediante hashes antes de almacenarlas."],
        ["Amazon S3 + Boto3", "Archivos", "Guarda comprobantes y evidencias mediante cargas directas y enlaces firmados con tiempo limitado."],
        ["OpenPyXL + ReportLab", "Documentos", "Genera hojas de cálculo y recibos PDF desde la información consolidada de cada periodo."],
      ],
    },
  },
  en: {
    metadata: {
      title: "VIVO · Property Management | Steve Espinoza",
      description: "A platform for allocating expenses, issuing receipts, validating payments, and tracking building operations.",
    },
    back: "Back to projects",
    eyebrow: "Property management",
    title: "VIVO",
    subtitle: "Centralize consumption, expenses, and collections for every building.",
    summary: "One period connects readings, receipts, balances, and payment evidence.",
    demoLabel: "Illustrative view · sample data",
    dashboard: {
      overline: "November close",
      title: "Period overview",
      metrics: [["To allocate", "$ 12,480"], ["Collected", "79%"], ["Pending", "04"]],
      flow: ["Expenses", "Receipts", "Payments"],
      records: [["Unit 301", "$ 428.50", "Approved"], ["Unit 402", "$ 391.20", "Reported"], ["Unit 504", "$ 447.80", "Pending"]],
    },
    workflow: {
      eyebrow: "Monthly close",
      body: "From the supplier bill to the approved payment, every step keeps the period context.",
      steps: [
        ["Record", "Add expenses, readings, and evidence."],
        ["Allocate", "Apply metered usage or a fixed share."],
        ["Issue", "Generate a receipt for every unit."],
        ["Reconcile", "Validate payments and update balances."],
      ],
    },
    billing: {
      label: "Allocation",
      title: "A calculation everyone can review",
      body: "The system turns a shared expense into unit charges without separating the bill, readings, or evidence.",
      points: ["Metered usage or fixed allocation", "Shared difference distributed", "PDF receipts ready to issue"],
    },
    billingDemo: {
      overline: "Record consumption",
      title: "Water · November 2026",
      totalLabel: "Amount to allocate",
      total: "$ 4,860.00",
      evidence: "Bill attached",
      headers: ["Unit", "Previous", "Current", "Usage"],
      rows: [["301", "128.420", "134.810", "6.390 m³"], ["402", "94.125", "99.870", "5.745 m³"], ["504", "151.600", "159.245", "7.645 m³"]],
      result: "32 receipts ready",
    },
    payments: {
      label: "Collections",
      title: "Two roles, one balance",
      body: "The owner reports the deposit and administration validates the voucher before closing the debt.",
      points: ["Statement by unit", "Shared payment evidence", "Differences carried into the next period"],
    },
    paymentDemo: {
      owner: "Owner view",
      receipt: "Receipt · November",
      concepts: [["Water", "$ 148.20"], ["Maintenance", "$ 220.00"], ["Previous balance", "$ 40.30"]],
      total: "$ 408.50",
      upload: "Voucher submitted",
      status: "Reported",
      admin: "Collections center",
      unit: "Unit 402",
      labels: ["Debt", "Deposited", "Difference"],
      values: ["$ 408.50", "$ 408.50", "$ 0.00"],
      voucher: "Voucher available",
      approve: "Approve payment",
    },
    operations: {
      label: "Operational continuity",
      body: "Collections share the same workspace with the open work that keeps the building running.",
      points: ["Incidents with location and evidence", "Equipment and intervention history", "Projected maintenance dates"],
    },
    operationsDemo: {
      incidents: "Incidents",
      incidentTitle: "Leak in common area",
      location: "Lobby · first floor",
      reported: "Reported today · 09:42",
      pending: "Pending",
      evidence: "Photographic evidence",
      resolve: "Mark as resolved",
      maintenance: "Maintenance",
      equipment: "Water pump",
      provider: "Assigned technical provider",
      due: "Next date",
      date: "Nov 18",
      warning: "Due soon",
      history: "4 interventions recorded",
    },
    technology: {
      eyebrow: "Technical structure",
      body: "The platform separates user experience, business rules, data, and files to operate every building securely.",
      items: [
        ["React + Vite", "Frontend", "Builds the interface; React Router structures the views and TanStack Query synchronizes API data."],
        ["Python + FastAPI", "REST API", "Exposes buildings, units, collections, and incidents; Pydantic validates every input and response."],
        ["PostgreSQL + SQLAlchemy", "Data", "Persists operations with transactions and connection pooling; Alembic keeps the schema versioned."],
        ["JWT + bcrypt", "Security", "Signs expiring sessions and protects passwords with hashes before they are stored."],
        ["Amazon S3 + Boto3", "Files", "Stores vouchers and evidence through direct uploads and time-limited signed links."],
        ["OpenPyXL + ReportLab", "Documents", "Generates spreadsheets and PDF receipts from each period's consolidated information."],
      ],
    },
  },
} as const;

type Copy = (typeof COPY)["es"] | (typeof COPY)["en"];
const STEP_ICONS: LucideIcon[] = [FileText, Calculator, ReceiptText, CircleDollarSign];
const TECHNOLOGY_ICONS: IconifyIcon[][] = [
  [reactLogo, viteLogo],
  [pythonLogo, fastapiLogo],
  [postgresqlLogo],
  [jwtLogo],
  [awsS3Logo],
  [excelIcon, pdfIcon],
];

function ClosingDashboard({ copy }: { copy: Copy }) {
  return (
    <div className={styles.dashboardDemo} aria-label={copy.demoLabel}>
      <div className={styles.demoHeader}>
        <div><small>{copy.dashboard.overline}</small><strong>{copy.dashboard.title}</strong></div>
        <span><Building2 size={20} /></span>
      </div>
      <div className={styles.metricGrid}>
        {copy.dashboard.metrics.map(([label, value], index) => (
          <div className={styles.metric} key={label}><i data-color={index} /><small>{label}</small><strong>{value}</strong></div>
        ))}
      </div>
      <div className={styles.closeFlow}>
        {copy.dashboard.flow.map((step, index) => (
          <span data-complete={index < 2} key={step}><CheckCircle2 size={14} /> {step}{index < copy.dashboard.flow.length - 1 && <ArrowRight size={13} />}</span>
        ))}
      </div>
      <div className={styles.collectionList}>
        {copy.dashboard.records.map(([unit, amount, status], index) => (
          <div key={unit}><span className={styles.unitIcon}>{unit.slice(-3)}</span><strong>{unit}</strong><em>{amount}</em><small data-state={index}>{status}</small></div>
        ))}
      </div>
      <div className={styles.demoCaption}><Sparkles size={13} /> {copy.demoLabel}</div>
    </div>
  );
}

function BillingDemo({ copy }: { copy: Copy }) {
  return (
    <div className={styles.billingDemo} aria-label={copy.demoLabel}>
      <div className={styles.demoHeader}>
        <div><small>{copy.billingDemo.overline}</small><strong>{copy.billingDemo.title}</strong></div>
        <span><Droplets size={20} /></span>
      </div>
      <div className={styles.billingSummary}>
        <div><small>{copy.billingDemo.totalLabel}</small><strong>{copy.billingDemo.total}</strong></div>
        <span><FileText size={14} /> {copy.billingDemo.evidence}</span>
      </div>
      <div className={styles.meterTable}>
        <div className={styles.meterHead}>{copy.billingDemo.headers.map((header) => <span key={header}>{header}</span>)}</div>
        {copy.billingDemo.rows.map((row) => <div className={styles.meterRow} key={row[0]}>{row.map((cell, index) => <span data-main={index === 0 || index === 3} key={cell}>{cell}</span>)}</div>)}
      </div>
      <div className={styles.billingResult}><span><CheckCircle2 size={15} /> {copy.billingDemo.result}</span><em>PDF / XLSX</em></div>
      <small className={styles.demoHint}>{copy.demoLabel}</small>
    </div>
  );
}

function PaymentDemo({ copy }: { copy: Copy }) {
  return (
    <div className={styles.paymentDemo} aria-label={copy.demoLabel}>
      <div className={styles.ownerPanel}>
        <div className={styles.panelTop}><span><ReceiptText size={16} /> {copy.paymentDemo.owner}</span><em>{copy.paymentDemo.status}</em></div>
        <strong className={styles.panelTitle}>{copy.paymentDemo.receipt}</strong>
        <div className={styles.conceptList}>{copy.paymentDemo.concepts.map(([concept, amount]) => <div key={concept}><span>{concept}</span><strong>{amount}</strong></div>)}</div>
        <div className={styles.receiptTotal}><span>Total</span><strong>{copy.paymentDemo.total}</strong></div>
        <div className={styles.uploadState}><Upload size={15} /> {copy.paymentDemo.upload}</div>
      </div>
      <div className={styles.paymentArrow}><ArrowRight size={20} /><small>{copy.paymentDemo.status}</small></div>
      <div className={styles.adminPanel}>
        <div className={styles.panelTop}><span><CircleDollarSign size={16} /> {copy.paymentDemo.admin}</span><em data-approved><BadgeCheck size={13} /></em></div>
        <strong className={styles.panelTitle}>{copy.paymentDemo.unit}</strong>
        <div className={styles.auditGrid}>
          {copy.paymentDemo.labels.map((label, index) => <div key={label}><small>{label}</small><strong>{copy.paymentDemo.values[index]}</strong></div>)}
        </div>
        <div className={styles.voucherState}><Camera size={15} /> {copy.paymentDemo.voucher}</div>
        <button type="button" tabIndex={-1}><BadgeCheck size={16} /> {copy.paymentDemo.approve}</button>
      </div>
    </div>
  );
}

function OperationsDemo({ copy }: { copy: Copy }) {
  return (
    <div className={styles.operationsDemo} aria-label={copy.demoLabel}>
      <div className={styles.incidentPanel}>
        <div className={styles.operationHeader}><span><AlertTriangle size={16} /> {copy.operationsDemo.incidents}</span><em>{copy.operationsDemo.pending}</em></div>
        <div className={styles.incidentBody}>
          <div className={styles.evidenceImage}><Camera size={25} /></div>
          <div><strong>{copy.operationsDemo.incidentTitle}</strong><span><MapPin size={13} /> {copy.operationsDemo.location}</span><small>{copy.operationsDemo.reported}</small></div>
        </div>
        <div className={styles.evidenceBar}><Camera size={14} /> {copy.operationsDemo.evidence}</div>
        <button type="button" tabIndex={-1}><CheckCircle2 size={15} /> {copy.operationsDemo.resolve}</button>
      </div>
      <div className={styles.maintenancePanel}>
        <div className={styles.operationHeader}><span><CalendarDays size={16} /> {copy.operationsDemo.maintenance}</span><em data-warning>{copy.operationsDemo.warning}</em></div>
        <div className={styles.calendarStrip}>{[14, 15, 16, 17, 18, 19, 20].map((day) => <span data-active={day === 18} key={day}>{day}</span>)}</div>
        <div className={styles.equipmentCard}>
          <span className={styles.wrenchIcon}><Wrench size={18} /></span>
          <div><strong>{copy.operationsDemo.equipment}</strong><small>{copy.operationsDemo.provider}</small></div>
          <div className={styles.dueDate}><small>{copy.operationsDemo.due}</small><strong>{copy.operationsDemo.date}</strong></div>
        </div>
        <div className={styles.historyLine}><FileText size={14} /> {copy.operationsDemo.history}</div>
      </div>
      <small className={styles.operationsHint}>{copy.demoLabel}</small>
    </div>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return lang === "en" ? COPY.en.metadata : COPY.es.metadata;
}

export default async function PropertyManagementPage({ params }: PageProps) {
  const { lang } = await params;
  const locale: Locale = lang === "en" ? "en" : "es";
  const copy = COPY[locale];
  const dict = await getDictionary(locale);

  return (
    <main className={styles.page}>
      <Header dict={dict.nav} />
      <section className={styles.hero}>
        <div className={`shell ${styles.heroInner}`}>
          <Link className={styles.backLink} href={`/${locale}#proyectos`}><ArrowLeft size={16} /> {copy.back}</Link>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>{copy.eyebrow}</span>
              <h1 className={styles.heroSubtitle}>{copy.subtitle}</h1>
              <p className={styles.heroSummary}>{copy.summary}</p>
            </div>
            <ClosingDashboard copy={copy} />
          </div>
        </div>
      </section>

      <section className={styles.section} id="cierre-mensual">
        <div className="shell">
          <div className={styles.centerHeading}><span className={styles.eyebrow}>{copy.workflow.eyebrow}</span><p>{copy.workflow.body}</p></div>
          <div className={styles.flowGrid}>
            {copy.workflow.steps.map(([title, description], index) => { const Icon = STEP_ICONS[index]; return <article key={title}><span className={styles.stepNumber}>0{index + 1}</span><div className={styles.iconBox}><Icon size={22} /></div><h2>{title}</h2><p>{description}</p>{index < copy.workflow.steps.length - 1 && <ArrowRight className={styles.flowArrow} size={20} />}</article>; })}
          </div>

          <div className={styles.showcaseRow}>
            <div className={styles.showcaseCopy}><span className={styles.showcaseIndex}>{copy.billing.label}</span><h2>{copy.billing.title}</h2><p>{copy.billing.body}</p><ul>{copy.billing.points.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul></div>
            <BillingDemo copy={copy} />
          </div>

          <div className={`${styles.showcaseRow} ${styles.showcaseReverse}`}>
            <div className={styles.showcaseCopy}><span className={styles.showcaseIndex}>{copy.payments.label}</span><h2>{copy.payments.title}</h2><p>{copy.payments.body}</p><ul>{copy.payments.points.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul></div>
            <PaymentDemo copy={copy} />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTint}`}>
        <div className={`shell ${styles.operationsLayout}`}>
          <div className={styles.operationsCopy}><span className={styles.eyebrow}>{copy.operations.label}</span><p>{copy.operations.body}</p><ul>{copy.operations.points.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul></div>
          <OperationsDemo copy={copy} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.technologySection}`}>
        <div className="shell">
          <div className={styles.technologyIntro}>
            <span className={styles.eyebrow}>{copy.technology.eyebrow}</span>
            <p>{copy.technology.body}</p>
          </div>
          <div className={styles.technologyGrid}>
            {copy.technology.items.map(([technology, role, description], index) => {
              const icons = TECHNOLOGY_ICONS[index];
              return (
                <article className={styles.technologyCard} key={technology}>
                  <span className={styles.technologyIndex}>0{index + 1}</span>
                  <div className={styles.technologyIcon} data-multiple={icons.length > 1}>
                    {icons.map((icon, iconIndex) => <Icon icon={icon} key={iconIndex} aria-hidden="true" />)}
                  </div>
                  <small>{role}</small>
                  <h3>{technology}</h3>
                  <p>{description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <Footer dict={dict.footer} />
    </main>
  );
}
