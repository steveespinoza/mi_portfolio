import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  Camera,
  CheckCircle2,
  CircleDollarSign,
  Droplets,
  FileSpreadsheet,
  FileText,
  MapPin,
  ReceiptText,
  Sparkles,
  Upload,
  Wrench,
} from "lucide-react";
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
      title: "Plataforma de Gestión Inmobiliaria | Steve Espinoza",
      description: "Plataforma para distribuir gastos, emitir recibos, validar pagos y seguir la operación de un edificio.",
    },
    back: "Volver a proyectos",
    eyebrow: "Gestión inmobiliaria",
    title: "Cierra el mes sin reconstruir cuentas entre hojas y comprobantes",
    subtitle: "Registra consumos y gastos, distribuye cada monto entre las unidades y sigue la cobranza desde el mismo historial.",
    summary: "Cada recibo conserva las lecturas, evidencias y saldos que explican cómo se calculó.",
    demoLabel: "Vista ilustrativa · datos de ejemplo",
    dashboard: {
      overline: "Cierre de noviembre",
      title: "Resumen del periodo",
      metrics: [["Por distribuir", "S/ 12,480"], ["Recaudado", "79%"], ["Unidades pendientes", "04"]],
      flow: ["Consumos", "Recibos", "Pagos"],
      records: [["Unidad 301", "S/ 428.50", "Aprobado"], ["Unidad 402", "S/ 391.20", "Reportado"], ["Unidad 504", "S/ 447.80", "Pendiente"]],
    },
    billing: {
      eyebrow: "Cierre mensual",
      title: "Del gasto común al saldo de cada unidad",
      body: "El problema caro aparece cuando el recibo del proveedor, las lecturas de los medidores y las deudas anteriores se calculan por separado. Un valor incorrecto termina multiplicado entre todas las unidades y obliga a rehacer recibos, responder reclamos y conciliar nuevamente el mes.",
      decision: "Por eso el flujo trabaja alrededor de un periodo contable: registra el gasto con su evidencia, calcula cada consumo y revisa los saldos pendientes antes de emitir los recibos.",
    },
    billingDemo: {
      overline: "Registrar consumo",
      title: "Agua · noviembre 2026",
      totalLabel: "Monto a distribuir",
      total: "S/ 4,860.00",
      evidence: "Recibo adjunto",
      headers: ["Unidad", "Anterior", "Actual", "Consumo"],
      rows: [["301", "128.420", "134.810", "6.390 m³"], ["402", "94.125", "99.870", "5.745 m³"], ["504", "151.600", "159.245", "7.645 m³"]],
      result: "32 recibos listos para generar",
      exports: "PDF / XLSX",
    },
    payments: {
      eyebrow: "Un registro, dos responsabilidades",
      title: "Propietario y administración ven el mismo pago desde roles distintos",
      body: "El propietario consulta su estado de cuenta, descarga el recibo y adjunta el comprobante. La administración compara la deuda con el depósito y revisa la evidencia antes de aprobarlo.",
      decision: "Un comprobante enviado no se convierte automáticamente en dinero recaudado: primero queda reportado y después pasa por validación.",
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
      debt: "Deuda",
      deposited: "Depositado",
      difference: "Diferencia",
      values: ["S/ 408.50", "S/ 408.50", "S/ 0.00"],
      voucher: "Voucher disponible",
      approve: "Aprobar pago",
    },
    operations: {
      eyebrow: "Continuidad operativa",
      title: "Los pendientes también tienen fecha, evidencia y responsable",
      body: "Una incidencia indica dónde ocurrió, muestra la evidencia y conserva su resolución. El mantenimiento proyecta la siguiente fecha de cada equipo desde su frecuencia y mantiene el costo de cada intervención en el historial.",
    },
    operationsDemo: {
      incidents: "Bandeja de incidencias",
      incidentTitle: "Fuga en área común",
      location: "Lobby · primer piso",
      reported: "Reportado hoy · 09:42",
      pending: "Pendiente",
      evidence: "Evidencia fotográfica",
      resolve: "Marcar como atendido",
      maintenance: "Calendario de mantenimiento",
      equipment: "Bomba de agua",
      provider: "Proveedor técnico asignado",
      due: "Próximo mantenimiento",
      date: "18 nov",
      warning: "Por vencer",
      history: "4 intervenciones en el historial",
    },
  },
  en: {
    metadata: {
      title: "Property Management Platform | Steve Espinoza",
      description: "A platform for allocating expenses, issuing receipts, validating payments, and tracking building operations.",
    },
    back: "Back to projects",
    eyebrow: "Property management",
    title: "Close the month without rebuilding accounts from spreadsheets and receipts",
    subtitle: "Record consumption and expenses, allocate every amount across units, and track collections from the same history.",
    summary: "Every receipt retains the readings, evidence, and balances that explain how it was calculated.",
    demoLabel: "Illustrative view · sample data",
    dashboard: {
      overline: "November close",
      title: "Period overview",
      metrics: [["To allocate", "$ 12,480"], ["Collected", "79%"], ["Units pending", "04"]],
      flow: ["Consumption", "Receipts", "Payments"],
      records: [["Unit 301", "$ 428.50", "Approved"], ["Unit 402", "$ 391.20", "Reported"], ["Unit 504", "$ 447.80", "Pending"]],
    },
    billing: {
      eyebrow: "Monthly close",
      title: "From a shared expense to each unit's balance",
      body: "The costly problem appears when a supplier bill, meter readings, and previous debts are calculated separately. One wrong value is multiplied across every unit, forcing receipts to be rebuilt, claims to be answered, and the month to be reconciled again.",
      decision: "That is why the flow revolves around an accounting period: it records the expense with its evidence, calculates each consumption, and reviews outstanding balances before issuing receipts.",
    },
    billingDemo: {
      overline: "Record consumption",
      title: "Water · November 2026",
      totalLabel: "Amount to allocate",
      total: "$ 4,860.00",
      evidence: "Bill attached",
      headers: ["Unit", "Previous", "Current", "Usage"],
      rows: [["301", "128.420", "134.810", "6.390 m³"], ["402", "94.125", "99.870", "5.745 m³"], ["504", "151.600", "159.245", "7.645 m³"]],
      result: "32 receipts ready to generate",
      exports: "PDF / XLSX",
    },
    payments: {
      eyebrow: "One record, two responsibilities",
      title: "Owners and administrators see the same payment from different roles",
      body: "The owner reviews their statement, downloads the receipt, and attaches proof of payment. Administration compares the debt with the deposit and reviews the evidence before approving it.",
      decision: "A submitted voucher does not automatically become collected money: it is first reported and then goes through validation.",
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
      debt: "Debt",
      deposited: "Deposited",
      difference: "Difference",
      values: ["$ 408.50", "$ 408.50", "$ 0.00"],
      voucher: "Voucher available",
      approve: "Approve payment",
    },
    operations: {
      eyebrow: "Operational continuity",
      title: "Open work also has a date, evidence, and an owner",
      body: "An incident records where it happened, shows the evidence, and preserves its resolution. Maintenance projects the next date for every piece of equipment from its frequency and keeps the cost of every intervention in its history.",
    },
    operationsDemo: {
      incidents: "Incident inbox",
      incidentTitle: "Leak in common area",
      location: "Lobby · first floor",
      reported: "Reported today · 09:42",
      pending: "Pending",
      evidence: "Photographic evidence",
      resolve: "Mark as resolved",
      maintenance: "Maintenance calendar",
      equipment: "Water pump",
      provider: "Assigned technical provider",
      due: "Next maintenance",
      date: "Nov 18",
      warning: "Due soon",
      history: "4 interventions in history",
    },
  },
} as const;

type Copy = (typeof COPY)["es"] | (typeof COPY)["en"];

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
      <div className={styles.billingResult}><span><CheckCircle2 size={15} /> {copy.billingDemo.result}</span><em><FileSpreadsheet size={14} /> {copy.billingDemo.exports}</em></div>
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
          {[copy.paymentDemo.debt, copy.paymentDemo.deposited, copy.paymentDemo.difference].map((label, index) => <div key={label}><small>{label}</small><strong>{copy.paymentDemo.values[index]}</strong></div>)}
        </div>
        <div className={styles.voucherState}><Camera size={15} /> {copy.paymentDemo.voucher}</div>
        <button type="button" tabIndex={-1}><BadgeCheck size={16} /> {copy.paymentDemo.approve}</button>
      </div>
      <small className={styles.paymentHint}>{copy.demoLabel}</small>
    </div>
  );
}

function OperationsDemo({ copy }: { copy: Copy }) {
  return (
    <div className={styles.operationsDemo} aria-label={copy.demoLabel}>
      <div className={styles.incidentPanel}>
        <div className={styles.operationHeader}><span><AlertTriangle size={16} /> {copy.operationsDemo.incidents}</span><em>{copy.operationsDemo.pending}</em></div>
        <div className={styles.incidentBody}>
          <div className={styles.evidenceImage}><Camera size={26} /></div>
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
              <h1>{copy.title}</h1>
              <p className={styles.heroSubtitle}>{copy.subtitle}</p>
              <p className={styles.heroSummary}>{copy.summary}</p>
            </div>
            <ClosingDashboard copy={copy} />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`shell ${styles.storyGrid}`}>
          <div className={styles.storyCopy}>
            <span className={styles.eyebrow}>{copy.billing.eyebrow}</span>
            <h2>{copy.billing.title}</h2>
            <p>{copy.billing.body}</p>
            <p className={styles.decision}>{copy.billing.decision}</p>
          </div>
          <BillingDemo copy={copy} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTint}`}>
        <div className={`shell ${styles.storyGrid} ${styles.storyReverse}`}>
          <div className={styles.storyCopy}>
            <span className={styles.eyebrow}>{copy.payments.eyebrow}</span>
            <h2>{copy.payments.title}</h2>
            <p>{copy.payments.body}</p>
            <p className={styles.decision}>{copy.payments.decision}</p>
          </div>
          <PaymentDemo copy={copy} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={`shell ${styles.operationsLayout}`}>
          <div className={styles.operationsCopy}>
            <span className={styles.eyebrow}>{copy.operations.eyebrow}</span>
            <h2>{copy.operations.title}</h2>
            <p>{copy.operations.body}</p>
          </div>
          <OperationsDemo copy={copy} />
        </div>
      </section>
      <Footer dict={dict.footer} />
    </main>
  );
}
