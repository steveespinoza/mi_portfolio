import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconifyIcon } from "@iconify/react";
import nextjsLogo from "@iconify-icons/logos/nextjs-icon";
import reactLogo from "@iconify-icons/logos/react";
import typescriptLogo from "@iconify-icons/logos/typescript-icon";
import supabaseLogo from "@iconify-icons/logos/supabase-icon";
import postgresqlLogo from "@iconify-icons/logos/postgresql";
import awsS3Logo from "@iconify-icons/logos/aws-s3";
import tailwindLogo from "@iconify-icons/logos/tailwindcss-icon";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Paperclip,
  Search,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/dictionaries";
import styles from "./page.module.css";

type Locale = "es" | "en";
type PageProps = { params: Promise<{ lang: string }> };

const COPY = {
  es: {
    metadata: {
      title: "Seguimiento de proyectos | Steve Espinoza",
      description: "Caso de estudio de un sistema para asignar, seguir y reportar actividades de equipos de trabajo.",
    },
    back: "Volver a proyectos",
    demoLabel: "Vista ilustrativa · datos de ejemplo",
    eyebrow: "Gestión de proyectos",
    subtitle: "Un sistema de seguimiento para responsables y coordinadores de equipo.",
    summary: "Centraliza asignaciones, avances y entregables para que cada actividad pueda revisarse desde su creación hasta el reporte final.",
    workflow: {
      eyebrow: "De la asignación al cierre",
      body: "Un flujo único conecta la planificación diaria con la supervisión del equipo.",
      steps: [
        ["Programa", "Define proyecto, prioridad, área y fecha límite."],
        ["Asigna", "Delega la actividad al coordinador responsable."],
        ["Colabora", "Reúne subtareas, comentarios y entregables."],
        ["Supervisa", "Revisa plazos, alertas y reportes por periodo."],
      ],
    },
    activity: {
      label: "01 · Trazabilidad",
      title: "Cada actividad conserva su historia",
      body: "El detalle reúne el contexto operativo y la conversación del equipo sin dispersarlos entre mensajes y archivos separados.",
      points: [
        "Objetivo, proyecto, área y responsable en una sola vista.",
        "Subtareas, comentarios y archivos privados vinculados.",
        "Ampliaciones de plazo e historial de cambios auditables.",
      ],
    },
    visibility: {
      label: "02 · Visibilidad",
      title: "Del plazo al reporte",
      body: "Calendario, notificaciones y reportes convierten el seguimiento diario en información útil para decidir y rendir cuentas.",
      points: [
        "Vistas por día, semana o mes con alertas de vencimiento.",
        "Reportes por coordinador y periodo listos para imprimir.",
        "Avance calculado desde subtareas y entregables reales.",
      ],
    },
    security: {
      label: "Operación segura",
      body: "Cada rol ve lo necesario: el responsable supervisa al equipo y cada coordinador trabaja sobre sus actividades asignadas.",
      points: ["Acceso aislado por equipo", "Archivos privados", "Avisos en tiempo real"],
    },
    technology: {
      eyebrow: "Estructura técnica",
      body: "La solución separa interfaz, lógica, datos, seguridad y archivos para mantener una operación ágil y controlada.",
      items: [
        ["Next.js + React", "Aplicación", "Renderiza las vistas y acciones del servidor, mientras React mantiene tableros y formularios interactivos."],
        ["TypeScript", "Código confiable", "Tipa usuarios, actividades y respuestas para reducir errores entre la interfaz y el servidor."],
        ["Supabase Auth + Realtime", "Acceso y sincronización", "Gestiona sesiones con SSR y comunica cambios del tablero y notificaciones en tiempo real."],
        ["PostgreSQL + RLS", "Datos y permisos", "Guarda actividades e historial; las políticas RLS y funciones SQL aíslan cada equipo y rol."],
        ["Amazon S3", "Archivos privados", "Almacena avatares y adjuntos mediante cargas directas y enlaces temporales firmados."],
        ["Tailwind CSS", "Interfaz", "Organiza el sistema visual y facilita que paneles, formularios y reportes respondan a cada pantalla."],
      ],
    },
    demo: {
      system: "Seguimiento de tareas",
      search: "Buscar actividad o proyecto",
      pending: "Pendiente",
      progress: "En proceso",
      finished: "Finalizada",
      tasks: [
        ["Validar entregables", "Proyecto Lumina", "Alta"],
        ["Revisar presupuesto", "Proyecto Apolo", "Media"],
        ["Cerrar observaciones", "Proyecto Lumina", "Urgente"],
        ["Entregar informe", "Proyecto Apolo", "Lista"],
      ],
      detailTitle: "Validar entregables del proyecto",
      objective: "Objetivo",
      objectiveText: "Revisar observaciones antes de emitir la versión coordinada.",
      subtasks: "Subtareas",
      progressLabel: "3 de 4 completadas",
      deadline: "Fecha límite",
      coordinator: "Coordinador",
      attachment: "Entregable_rev_04.pdf",
      comment: "Se actualizaron las observaciones de estructuras.",
      calendar: "Calendario consolidado",
      week: "Semana 21–25 oct",
      report: "Reporte de actividades",
      reportRows: ["Validación de entregables", "Revisión de presupuesto", "Informe de cierre"],
      supervisor: "Responsable",
      supervised: "Coordinador",
    },
  },
  en: {
    metadata: {
      title: "Project tracking | Steve Espinoza",
      description: "Case study of a system for assigning, tracking, and reporting team activities.",
    },
    back: "Back to projects",
    demoLabel: "Illustrative view · sample data",
    eyebrow: "Project management",
    subtitle: "A tracking system for team leads and coordinators.",
    summary: "It brings assignments, progress, and deliverables together so every activity can be reviewed from creation through the final report.",
    workflow: {
      eyebrow: "From assignment to completion",
      body: "One workflow connects daily planning with team oversight.",
      steps: [
        ["Schedule", "Define project, priority, area, and deadline."],
        ["Assign", "Delegate the activity to its coordinator."],
        ["Collaborate", "Bring subtasks, comments, and files together."],
        ["Oversee", "Review deadlines, alerts, and period reports."],
      ],
    },
    activity: {
      label: "01 · Traceability",
      title: "Every activity keeps its history",
      body: "The detail view holds operational context and team conversation together instead of scattering them across messages and files.",
      points: [
        "Objective, project, area, and owner in one view.",
        "Linked subtasks, comments, and private files.",
        "Auditable deadline extensions and status history.",
      ],
    },
    visibility: {
      label: "02 · Visibility",
      title: "From deadline to report",
      body: "Calendar, notifications, and reports turn daily tracking into useful information for decisions and accountability.",
      points: [
        "Day, week, and month views with deadline alerts.",
        "Printable reports by coordinator and period.",
        "Progress calculated from actual subtasks and deliverables.",
      ],
    },
    security: {
      label: "Secure operations",
      body: "Each role sees what it needs: leads oversee the team while coordinators work on their assigned activities.",
      points: ["Team-isolated access", "Private files", "Real-time alerts"],
    },
    technology: {
      eyebrow: "Technical structure",
      body: "The solution separates interface, logic, data, security, and files to keep operations fast and controlled.",
      items: [
        ["Next.js + React", "Application", "Renders views and server actions, while React keeps boards and forms interactive."],
        ["TypeScript", "Reliable code", "Types users, activities, and responses to reduce errors between the interface and server."],
        ["Supabase Auth + Realtime", "Access and synchronization", "Manages SSR sessions and broadcasts board changes and notifications in real time."],
        ["PostgreSQL + RLS", "Data and permissions", "Stores activities and history; RLS policies and SQL functions isolate each team and role."],
        ["Amazon S3", "Private files", "Stores avatars and attachments through direct uploads and temporary signed links."],
        ["Tailwind CSS", "Interface", "Structures the visual system and keeps dashboards, forms, and reports responsive."],
      ],
    },
    demo: {
      system: "Task tracking",
      search: "Search activity or project",
      pending: "Pending",
      progress: "In progress",
      finished: "Completed",
      tasks: [
        ["Validate deliverables", "Lumina Project", "High"],
        ["Review budget", "Apolo Project", "Medium"],
        ["Close observations", "Lumina Project", "Urgent"],
        ["Deliver report", "Apolo Project", "Ready"],
      ],
      detailTitle: "Validate project deliverables",
      objective: "Objective",
      objectiveText: "Review observations before issuing the coordinated version.",
      subtasks: "Subtasks",
      progressLabel: "3 of 4 completed",
      deadline: "Deadline",
      coordinator: "Coordinator",
      attachment: "Deliverable_rev_04.pdf",
      comment: "Structural observations were updated.",
      calendar: "Consolidated calendar",
      week: "Week of Oct 21–25",
      report: "Activity report",
      reportRows: ["Deliverable validation", "Budget review", "Closing report"],
      supervisor: "Lead",
      supervised: "Coordinator",
    },
  },
};

const STEP_ICONS = [CalendarDays, UserRound, MessageSquare, LayoutDashboard];
const TECHNOLOGY_ICONS: IconifyIcon[][] = [
  [nextjsLogo, reactLogo],
  [typescriptLogo],
  [supabaseLogo],
  [postgresqlLogo],
  [awsS3Logo],
  [tailwindLogo],
];

function KanbanDemo({ copy }: { copy: (typeof COPY)["es"] }) {
  const columns = [copy.demo.pending, copy.demo.progress, copy.demo.finished];
  const groupedTasks = [[copy.demo.tasks[0]], [copy.demo.tasks[1], copy.demo.tasks[2]], [copy.demo.tasks[3]]];

  return (
    <div className={styles.kanbanDemo} aria-hidden="true">
      <div className={styles.demoSidebar}>
        <span className={styles.demoMark}>ST</span>
        {[LayoutDashboard, CalendarDays, UsersRound, FileText].map((Icon, index) => (
          <span key={index} data-active={index === 0}><Icon size={14} /></span>
        ))}
      </div>
      <div className={styles.boardSurface}>
        <header className={styles.demoHeader}>
          <div><small>{copy.demo.system}</small><strong>{copy.workflow.eyebrow}</strong></div>
          <span><Bell size={15} /></span>
        </header>
        <div className={styles.demoSearch}><Search size={13} /><span>{copy.demo.search}</span></div>
        <div className={styles.kanbanColumns}>
          {columns.map((column, columnIndex) => (
            <section key={column}>
              <header><span>{column}</span><em>{groupedTasks[columnIndex].length}</em></header>
              {groupedTasks[columnIndex].map(([title, project, priority], taskIndex) => (
                <article key={title}>
                  <small data-priority={columnIndex === 1 && taskIndex === 1 ? "urgent" : "normal"}>{priority}</small>
                  <strong>{title}</strong>
                  <span>{project}</span>
                  <footer><i>{columnIndex === 0 ? "24 OCT" : columnIndex === 1 ? "22 OCT" : "18 OCT"}</i><b>AR</b></footer>
                </article>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActivityDemo({ copy }: { copy: (typeof COPY)["es"] }) {
  return (
    <div className={styles.activityDemo} aria-hidden="true">
      <header className={styles.activityHeader}>
        <div><span>{copy.demo.system}</span><strong>{copy.demo.detailTitle}</strong></div>
        <em>ALTA</em>
      </header>
      <div className={styles.activityLayout}>
        <div className={styles.activityMain}>
          <section className={styles.objectiveBox}><small>{copy.demo.objective}</small><p>{copy.demo.objectiveText}</p></section>
          <section className={styles.subtaskBox}>
            <header><strong>{copy.demo.subtasks}</strong><span>{copy.demo.progressLabel}</span></header>
            {[true, true, true, false].map((complete, index) => (
              <div key={index}><CheckCircle2 size={14} data-complete={complete} /><span style={{ width: `${82 - index * 9}%` }} /></div>
            ))}
          </section>
          <div className={styles.activityFeed}>
            <span><Paperclip size={13} /><b>{copy.demo.attachment}</b></span>
            <span><MessageSquare size={13} /><b>{copy.demo.comment}</b></span>
          </div>
        </div>
        <aside className={styles.activityAside}>
          <small>{copy.demo.coordinator}</small><div><b>AR</b><strong>Andrea R.</strong></div>
          <hr />
          <small>{copy.demo.deadline}</small><strong><Clock3 size={13} /> 24 OCT 2026</strong>
          <hr />
          <span><ShieldCheck size={14} /> Historial activo</span>
        </aside>
      </div>
    </div>
  );
}

function VisibilityDemo({ copy }: { copy: (typeof COPY)["es"] }) {
  return (
    <div className={styles.visibilityDemo} aria-hidden="true">
      <section className={styles.calendarPanel}>
        <header><div><CalendarDays size={16} /><strong>{copy.demo.calendar}</strong></div><span>{copy.demo.week}</span></header>
        <div className={styles.calendarDays}>
          {["LUN", "MAR", "MIÉ", "JUE", "VIE"].map((day, index) => (
            <div key={day} data-today={index === 2}><small>{day}</small><strong>{21 + index}</strong>{index !== 3 && <i />}</div>
          ))}
        </div>
      </section>
      <section className={styles.reportPanel}>
        <header><div><FileText size={16} /><strong>{copy.demo.report}</strong></div><span>PDF</span></header>
        <div className={styles.reportHead}><span>ACTIVIDAD</span><span>AVANCE</span><span>ESTADO</span></div>
        {copy.demo.reportRows.map((row, index) => (
          <div className={styles.reportRow} key={row}><strong>{row}</strong><span>{index === 0 ? "75%" : index === 1 ? "50%" : "100%"}</span><em data-done={index === 2}>{index === 2 ? "OK" : "ACTIVA"}</em></div>
        ))}
      </section>
    </div>
  );
}

function RoleDemo({ copy }: { copy: (typeof COPY)["es"] }) {
  return (
    <div className={styles.roleDemo} aria-hidden="true">
      <div><span><UsersRound size={18} /></span><strong>{copy.demo.supervisor}</strong><small>Equipo · tablero · reportes</small></div>
      <ArrowRight size={18} />
      <div><span><UserRound size={18} /></span><strong>{copy.demo.supervised}</strong><small>Actividades · archivos · avances</small></div>
    </div>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return lang === "en" ? COPY.en.metadata : COPY.es.metadata;
}

export default async function ArchitectureTrackingPage({ params }: PageProps) {
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
            <figure className={styles.demoFigure}>
              <KanbanDemo copy={copy} />
              <figcaption className={styles.demoCaption}>{copy.demoLabel}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.centerHeading}><span className={styles.eyebrow}>{copy.workflow.eyebrow}</span><p>{copy.workflow.body}</p></div>
          <div className={styles.flowGrid}>
            {copy.workflow.steps.map(([title, description], index) => {
              const Icon = STEP_ICONS[index];
              return (
                <article key={title}>
                  <span className={styles.stepNumber}>0{index + 1}</span>
                  <div className={styles.iconBox}><Icon size={21} /></div>
                  <h2>{title}</h2><p>{description}</p>
                  {index < copy.workflow.steps.length - 1 && <ArrowRight className={styles.flowArrow} size={20} />}
                </article>
              );
            })}
          </div>

          <div className={styles.showcaseRow}>
            <div className={styles.showcaseCopy}><span className={styles.showcaseIndex}>{copy.activity.label}</span><h2>{copy.activity.title}</h2><p>{copy.activity.body}</p><ul>{copy.activity.points.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul></div>
            <figure className={styles.demoFigure}>
              <ActivityDemo copy={copy} />
              <figcaption className={styles.demoCaption}>{copy.demoLabel}</figcaption>
            </figure>
          </div>

          <div className={`${styles.showcaseRow} ${styles.showcaseReverse}`}>
            <div className={styles.showcaseCopy}><span className={styles.showcaseIndex}>{copy.visibility.label}</span><h2>{copy.visibility.title}</h2><p>{copy.visibility.body}</p><ul>{copy.visibility.points.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul></div>
            <figure className={styles.demoFigure}>
              <VisibilityDemo copy={copy} />
              <figcaption className={styles.demoCaption}>{copy.demoLabel}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTint}`}>
        <div className={`shell ${styles.securityLayout}`}>
          <div className={styles.securityCopy}><span className={styles.eyebrow}>{copy.security.label}</span><p>{copy.security.body}</p><ul>{copy.security.points.map((point) => <li key={point}><ShieldCheck size={15} /> {point}</li>)}</ul></div>
          <figure className={styles.demoFigure}>
            <RoleDemo copy={copy} />
            <figcaption className={styles.demoCaption}>{copy.demoLabel}</figcaption>
          </figure>
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
