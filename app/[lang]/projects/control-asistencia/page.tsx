import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconifyIcon } from "@iconify/react";
import reactLogo from "@iconify-icons/logos/react";
import webpackLogo from "@iconify-icons/logos/webpack";
import flaskLogo from "@iconify-icons/logos/flask";
import gunicornLogo from "@iconify-icons/logos/gunicorn";
import postgresqlLogo from "@iconify-icons/logos/postgresql";
import pythonLogo from "@iconify-icons/logos/python";
import jwtLogo from "@iconify-icons/logos/jwt-icon";
import awsS3Logo from "@iconify-icons/logos/aws-s3";
import excelIcon from "@iconify-icons/vscode-icons/file-type-excel";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  CheckCircle2,
  Clock3,
  FileSpreadsheet,
  Fingerprint,
  MapPin,
  Search,
  Sparkles,
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
      title: "Plataforma de Control de Asistencia | Steve Espinoza",
      description: "Registra jornadas, aplica reglas de asistencia y revisa incidencias desde un solo lugar.",
    },
    back: "Volver a proyectos",
    eyebrow: "Control de asistencia",
    subtitle: "Registra entradas y salidas, valida ubicación o evidencia y revisa incidencias desde un solo panel.",
    summary: "Horarios, sedes y reglas se adaptan a la operación sin perder el historial que explica cada resultado.",
    demoLabel: "Vista ilustrativa · datos de ejemplo",
    heroMetrics: [["Asistencia", "94%"], ["Jornada promedio", "08:24"], ["Incidencias", "03"]],
    workflow: {
      eyebrow: "Así funciona",
      body: "El sistema conecta cada marcación con la persona, el horario y la evidencia que le corresponde.",
      steps: [
        ["Busca a la persona", "Carga su jornada, sede y reglas antes de registrar el evento."],
        ["Registra la marcación", "Valida hora, ubicación y evidencia según la política configurada."],
        ["Revisa el resultado", "Muestra puntualidad, tardanzas y tiempo adicional listos para consultar o exportar."],
      ],
    },
    product: {
      captureLabel: "Registro diario",
      captureTitle: "Marca rápido. Conserva el contexto.",
      captureBody: "La pantalla pide solo lo necesario y deja cada evento vinculado a su horario, ubicación y evidencia.",
      capturePoints: ["Horario asignado a la vista", "Ubicación o evidencia cuando se requiere", "Prevención de registros duplicados", "Confirmación inmediata de la marcación"],
      reportLabel: "Seguimiento",
      reportTitle: "Entiende el resultado sin volver a preguntar qué pasó",
      reportBody: "Cada jornada reúne entrada, salida, estado y excepciones para que supervisión pueda revisar el detalle antes del cierre.",
      reportPoints: ["Historial por persona y jornada", "Tardanzas y tiempo adicional visibles", "Evidencia disponible para revisión", "Exportación sin perder el detalle"],
    },
    technology: {
      eyebrow: "Estructura técnica",
      body: "Cada capa cumple una función concreta: registrar la jornada, validar las reglas, conservar los eventos y proteger las evidencias.",
      items: [
        ["React + Webpack", "Frontend", "Construye paneles, formularios y reportes; Create React App organiza el empaquetado y la entrega del cliente."],
        ["Flask + Gunicorn", "API REST", "Expone módulos mediante blueprints y ejecuta la aplicación WSGI con un servidor preparado para producción."],
        ["PostgreSQL + SQLAlchemy", "Datos", "Conserva marcaciones, horarios, sedes y roles; Alembic y Flask-Migrate versionan el esquema."],
        ["JWT + Werkzeug", "Seguridad", "Flask-JWT-Extended protege las rutas y Werkzeug genera y verifica los hashes de contraseña."],
        ["Amazon S3 + Pillow", "Evidencias", "Boto3 guarda imágenes privadas; Pillow valida, corrige y comprime cada evidencia a WebP."],
        ["XlsxWriter + OpenPyXL", "Reportes", "XlsxWriter genera planillas de asistencia y OpenPyXL valida su estructura en las pruebas automatizadas."],
      ],
    },
    ui: {
      dashboard: "Panel de asistencia", today: "Resumen de hoy", trend: "Tendencia semanal", recent: "Actividad reciente", checkin: "Registrar asistencia", employee: "Trabajador", schedule: "Jornada", location: "Ubicación validada", evidence: "Evidencia lista", confirm: "Confirmar entrada", report: "Reporte de jornadas", punctual: "Puntual", late: "Tardanza", overtime: "Tiempo adicional",
    },
  },
  en: {
    metadata: {
      title: "Attendance Management Platform | Steve Espinoza",
      description: "Record shifts, apply attendance rules, and review incidents from one place.",
    },
    back: "Back to projects",
    eyebrow: "Attendance management",
    subtitle: "Record check-ins and check-outs, validate location or evidence, and review incidents from one dashboard.",
    summary: "Schedules, locations, and rules adapt to the operation without losing the history that explains each result.",
    demoLabel: "Illustrative view · sample data",
    heroMetrics: [["Attendance", "94%"], ["Average shift", "08:24"], ["Incidents", "03"]],
    workflow: {
      eyebrow: "How it works",
      body: "The system connects every event to the person, schedule, and evidence that belong to it.",
      steps: [
        ["Find the person", "Load their shift, location, and rules before recording the event."],
        ["Record the event", "Validate time, location, and evidence according to the configured policy."],
        ["Review the result", "See on-time arrivals, lateness, and additional time ready to review or export."],
      ],
    },
    product: {
      captureLabel: "Daily check-in",
      captureTitle: "Record quickly. Keep the context.",
      captureBody: "The screen asks only for what is needed and links every event to its schedule, location, and evidence.",
      capturePoints: ["Assigned schedule in view", "Location or evidence when required", "Duplicate event prevention", "Immediate event confirmation"],
      reportLabel: "Tracking",
      reportTitle: "Understand the result without asking what happened again",
      reportBody: "Each shift brings together check-in, check-out, status, and exceptions so supervisors can review the detail before closing.",
      reportPoints: ["History by person and shift", "Lateness and additional time visible", "Evidence available for review", "Export without losing detail"],
    },
    technology: {
      eyebrow: "Technical structure",
      body: "Each layer has a clear role: record shifts, validate rules, preserve events, and protect evidence.",
      items: [
        ["React + Webpack", "Frontend", "Builds dashboards, forms, and reports; Create React App handles client bundling and delivery."],
        ["Flask + Gunicorn", "REST API", "Exposes modular blueprints and runs the WSGI application with a production-ready server."],
        ["PostgreSQL + SQLAlchemy", "Data", "Stores attendance events, schedules, sites, and roles; Alembic and Flask-Migrate version the schema."],
        ["JWT + Werkzeug", "Security", "Flask-JWT-Extended protects routes, while Werkzeug creates and verifies password hashes."],
        ["Amazon S3 + Pillow", "Evidence", "Boto3 stores private images; Pillow validates, corrects, and compresses each file to WebP."],
        ["XlsxWriter + OpenPyXL", "Reports", "XlsxWriter generates attendance workbooks and OpenPyXL validates their structure in automated tests."],
      ],
    },
    ui: {
      dashboard: "Attendance dashboard", today: "Today’s summary", trend: "Weekly trend", recent: "Recent activity", checkin: "Record attendance", employee: "Employee", schedule: "Shift", location: "Location verified", evidence: "Evidence ready", confirm: "Confirm check-in", report: "Shift report", punctual: "On time", late: "Late", overtime: "Additional time",
    },
  },
} as const;

const WORKFLOW_ICONS: LucideIcon[] = [Search, Fingerprint, FileSpreadsheet];
const TECHNOLOGY_ICONS: IconifyIcon[][] = [
  [reactLogo, webpackLogo],
  [flaskLogo, gunicornLogo],
  [postgresqlLogo, pythonLogo],
  [jwtLogo],
  [awsS3Logo],
  [excelIcon],
];

function DemoDashboard({ copy }: { copy: (typeof COPY)["es"] | (typeof COPY)["en"] }) {
  return (
    <div className={styles.demoShell}>
      <div className={styles.demoTopbar}>
        <div><span className={styles.demoOverline}>{copy.ui.today}</span><strong>{copy.ui.dashboard}</strong></div>
        <span className={styles.demoAvatar}>SE</span>
      </div>
      <div className={styles.demoMetrics}>
        {copy.heroMetrics.map(([label, value], index) => (
          <div className={styles.demoMetric} key={label}><span className={styles[`metricDot${index + 1}`]} /><small>{label}</small><strong>{value}</strong></div>
        ))}
      </div>
      <div className={styles.demoDashboardGrid}>
        <div className={styles.demoChart}><div className={styles.demoPanelTitle}>{copy.ui.trend}</div><div className={styles.demoBars}>{[42, 68, 54, 82, 64, 90, 74].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div></div>
        <div className={styles.demoActivity}>
          <div className={styles.demoPanelTitle}>{copy.ui.recent}</div>
          {[copy.ui.punctual, copy.ui.late, copy.ui.overtime].map((label, index) => (
            <div className={styles.demoActivityRow} key={label}><span className={styles.demoPerson}>{String.fromCharCode(65 + index)}</span><span><strong>{label}</strong><small>08:{index === 0 ? "01" : index === 1 ? "17" : "42"}</small></span><CheckCircle2 size={15} /></div>
          ))}
        </div>
      </div>
      <div className={styles.demoCaption}><Sparkles size={13} /> {copy.demoLabel}</div>
    </div>
  );
}

function CheckInDemo({ copy }: { copy: (typeof COPY)["es"] | (typeof COPY)["en"] }) {
  return (
    <div className={styles.checkinDemo} aria-label={copy.demoLabel}>
      <div className={styles.checkinHeader}><span><Fingerprint size={20} /></span><div><small>{copy.ui.today}</small><strong>{copy.ui.checkin}</strong></div></div>
      <label>{copy.ui.employee}<span className={styles.fakeInput}><Search size={15} /> Andrea M.</span></label>
      <label>{copy.ui.schedule}<span className={styles.fakeInput}><Clock3 size={15} /> 08:00 — 17:30</span></label>
      <div className={styles.validationGrid}><span><MapPin size={16} /> {copy.ui.location}</span><span><Camera size={16} /> {copy.ui.evidence}</span></div>
      <button type="button" tabIndex={-1}><Check size={17} /> {copy.ui.confirm}</button>
      <small className={styles.demoHint}>{copy.demoLabel}</small>
    </div>
  );
}

function ReportDemo({ copy }: { copy: (typeof COPY)["es"] | (typeof COPY)["en"] }) {
  const rows = [copy.ui.punctual, copy.ui.late, copy.ui.overtime, copy.ui.punctual];
  return (
    <div className={styles.reportDemo} aria-label={copy.demoLabel}>
      <div className={styles.reportHeader}><div><small>{copy.ui.today}</small><strong>{copy.ui.report}</strong></div><span><FileSpreadsheet size={15} /> XLSX</span></div>
      <div className={styles.reportFilters}><span>01—07</span><span>{copy.ui.schedule}</span><span>Todos</span></div>
      <div className={styles.reportTable}>
        {rows.map((status, index) => <div key={`${status}-${index}`}><span className={styles.demoPerson}>{String.fromCharCode(77 + index)}</span><span><strong>Persona {index + 1}</strong><small>08:0{index} — 17:{20 + index}</small></span><em data-state={index === 1 ? "late" : index === 2 ? "extra" : "ok"}>{status}</em></div>)}
      </div>
      <small className={styles.demoHint}>{copy.demoLabel}</small>
    </div>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return lang === "en" ? COPY.en.metadata : COPY.es.metadata;
}

export default async function AttendanceCaseStudy({ params }: PageProps) {
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
              <span className={styles.eyebrow}>{copy.eyebrow}</span><p className={styles.heroSubtitle}>{copy.subtitle}</p><p className={styles.heroSummary}>{copy.summary}</p>
            </div>
            <DemoDashboard copy={copy} />
          </div>
        </div>
      </section>

      <section className={styles.section} id="como-funciona">
        <div className="shell">
          <div className={styles.centerHeading}><span className={styles.eyebrow}>{copy.workflow.eyebrow}</span><p>{copy.workflow.body}</p></div>
          <div className={`${styles.flowGrid} ${styles.workflowGrid}`}>
            {copy.workflow.steps.map(([title, description], index) => { const Icon = WORKFLOW_ICONS[index]; return <article key={title}><span className={styles.stepNumber}>0{index + 1}</span><div className={styles.iconBox}><Icon size={22} /></div><h3>{title}</h3><p>{description}</p>{index < copy.workflow.steps.length - 1 && <ArrowRight className={styles.flowArrow} size={20} />}</article>; })}
          </div>
          <div className={styles.showcaseRow}><div className={styles.showcaseCopy}><span className={styles.showcaseIndex}>{copy.product.captureLabel}</span><h3>{copy.product.captureTitle}</h3><p>{copy.product.captureBody}</p><ul>{copy.product.capturePoints.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul></div><CheckInDemo copy={copy} /></div>
          <div className={`${styles.showcaseRow} ${styles.showcaseReverse}`}><div className={styles.showcaseCopy}><span className={styles.showcaseIndex}>{copy.product.reportLabel}</span><h3>{copy.product.reportTitle}</h3><p>{copy.product.reportBody}</p><ul>{copy.product.reportPoints.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul></div><ReportDemo copy={copy} /></div>
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
