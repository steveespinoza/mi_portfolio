import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Building2,
  Check,
  ClipboardCheck,
  FileSpreadsheet,
  MapPin,
  PackageCheck,
  PackagePlus,
  Search,
  Send,
  Sparkles,
  Warehouse,
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
      title: "Kardex de Inventario | Steve Espinoza",
      description: "Plataforma para controlar existencias, movimientos, costos y requerimientos en múltiples ubicaciones.",
    },
    back: "Volver a proyectos",
    eyebrow: "Gestión de inventario",
    subtitle: "Registra compras y consumos, consulta el stock de cada ubicación y traslada materiales sin perder su historial ni su costo.",
    summary: "El sistema responde tres preguntas antes de comprar o mover un material: qué hay, dónde está y cuánto vale.",
    demoLabel: "Vista ilustrativa · datos de ejemplo",
    dashboard: {
      overline: "Inventario consolidado",
      title: "Resumen operativo",
      metrics: [["Valor del stock", "S/ 184,620"], ["Entradas del mes", "S/ 42,380"], ["Productos disponibles", "328"]],
      tableTitle: "Existencias por producto",
      headers: ["Producto", "Ubicación", "Stock", "Valor"],
      rows: [["Cemento Portland", "Almacén Norte", "148 UND", "S/ 4,736"], ["Acero corrugado", "Sede Centro", "82 UND", "S/ 9,184"], ["Cable eléctrico", "Almacén Sur", "36 RLL", "S/ 3,420"]],
    },
    movements: {
      eyebrow: "Movimientos conectados",
      body: "Cada operación actualiza stock, costo e historial: la entrada, el consumo y el traslado forman parte del mismo registro; no hay que reconciliar información entre hojas separadas.",
      steps: [["Registra el ingreso", "Guarda proveedor, comprobante, productos, cantidades y costos en una sola operación."], ["Controla el movimiento", "Valida la disponibilidad antes de consumir o trasladar material entre ubicaciones."], ["Revisa el resultado", "Consulta existencias, valorización y movimientos mediante filtros y reportes exportables."]],
      entryLabel: "Entrada de materiales",
      entryTitle: "Una compra completa, sin repetir la cabecera por cada producto",
      entryBody: "La información del proveedor y del comprobante se registra una vez. Cada producto conserva su cantidad, unidad, costo y subtotal.",
      entryPoints: ["Varios productos en una misma entrada", "Subtotal calculado por material", "Total de compra actualizado al instante", "Factura o guía vinculada al movimiento"],
      locatorLabel: "Stock por ubicación",
      locatorTitle: "Encuentra el material antes de volver a comprarlo",
      locatorBody: "El buscador muestra la distribución real del producto y permite preparar un traslado desde la ubicación que sí tiene disponibilidad.",
      locatorPoints: ["Consulta global por código o nombre", "Cantidad disponible en cada ubicación", "Origen y destino visibles", "Traslado registrado como salida y entrada"],
    },
    entryDemo: {
      overline: "Nueva entrada",
      title: "Compra de materiales",
      supplier: "Proveedor",
      supplierValue: "Distribuidora Central",
      document: "Factura",
      documentValue: "F001-2841",
      items: "Materiales",
      total: "Total de compra",
      totalValue: "S/ 6,842.00",
      rows: [["Cemento Portland", "120 UND", "S/ 3,840"], ["Acero corrugado", "40 UND", "S/ 2,520"], ["Guantes de seguridad", "24 PAR", "S/ 482"]],
      action: "Registrar entrada",
    },
    locatorDemo: {
      overline: "Stock general",
      title: "Localizar material",
      search: "Acero corrugado",
      rows: [["Almacén Norte", "64 UND", "Disponible"], ["Sede Centro", "18 UND", "Stock bajo"], ["Almacén Sur", "0 UND", "Sin stock"]],
      transfer: "Preparar traslado",
      note: "Origen y destino se actualizan dentro de la misma operación.",
    },
    requests: {
      eyebrow: "Requerimientos",
      body: "El personal solicita materiales con una fecha requerida. La bandeja calcula la urgencia, conserva el estado y permite revisar cada ítem antes de atenderlo.",
      points: ["Urgencia calculada según la fecha requerida", "Estados visibles para quien solicita", "Revisión y ajuste antes de atender", "Documentos disponibles en PDF y Excel", "Permisos separados por rol y ubicación"],
      flow: ["Solicitud", "Prioridad", "Revisión", "Atención"],
    },
    requestDemo: {
      overline: "Bandeja de requerimientos",
      title: "Solicitudes de materiales",
      tabs: ["Nuevos 3", "En revisión 2", "Historial"],
      headers: ["Solicitud", "Fecha requerida", "Urgencia", "Estado"],
      rows: [["REQ-0048 · 6 materiales", "12 nov", "Alta", "Pendiente"], ["REQ-0047 · 3 materiales", "15 nov", "Media", "En revisión"], ["REQ-0043 · 8 materiales", "18 nov", "Baja", "Atendido"]],
      export: "PDF / XLSX",
    },
  },
  en: {
    metadata: {
      title: "Inventory Kardex | Steve Espinoza",
      description: "A platform for tracking stock, movements, costs, and material requests across multiple locations.",
    },
    back: "Back to projects",
    eyebrow: "Inventory management",
    subtitle: "Record purchases and consumption, check stock at every location, and move materials without losing their history or cost.",
    summary: "The system answers three questions before a material is purchased or moved: what is available, where it is, and what it is worth.",
    demoLabel: "Illustrative view · sample data",
    dashboard: {
      overline: "Consolidated inventory",
      title: "Operations overview",
      metrics: [["Stock value", "$ 184,620"], ["Monthly entries", "$ 42,380"], ["Available products", "328"]],
      tableTitle: "Stock by product",
      headers: ["Product", "Location", "Stock", "Value"],
      rows: [["Portland cement", "North warehouse", "148 UNIT", "$ 4,736"], ["Reinforcing steel", "Central site", "82 UNIT", "$ 9,184"], ["Electrical cable", "South warehouse", "36 ROLL", "$ 3,420"]],
    },
    movements: {
      eyebrow: "Connected movements",
      body: "Every operation updates stock, cost, and history: entries, consumption, and transfers belong to the same record, so information does not need to be reconciled across separate spreadsheets.",
      steps: [["Record the entry", "Save the supplier, document, products, quantities, and costs in one operation."], ["Control the movement", "Validate availability before consuming or moving material between locations."], ["Review the result", "Check stock, valuation, and movements through filters and exportable reports."]],
      entryLabel: "Material entry",
      entryTitle: "A complete purchase without repeating its header for every product",
      entryBody: "Supplier and document data are entered once. Every product retains its quantity, unit, cost, and subtotal.",
      entryPoints: ["Multiple products in one entry", "Subtotal calculated per material", "Purchase total updated instantly", "Invoice or delivery note linked to the movement"],
      locatorLabel: "Stock by location",
      locatorTitle: "Find the material before buying it again",
      locatorBody: "The search shows the product's real distribution and helps prepare a transfer from the location that has availability.",
      locatorPoints: ["Global search by code or name", "Available quantity at every location", "Visible origin and destination", "Transfer recorded as both an exit and an entry"],
    },
    entryDemo: {
      overline: "New entry",
      title: "Material purchase",
      supplier: "Supplier",
      supplierValue: "Central Distributor",
      document: "Invoice",
      documentValue: "F001-2841",
      items: "Materials",
      total: "Purchase total",
      totalValue: "$ 6,842.00",
      rows: [["Portland cement", "120 UNIT", "$ 3,840"], ["Reinforcing steel", "40 UNIT", "$ 2,520"], ["Safety gloves", "24 PAIR", "$ 482"]],
      action: "Record entry",
    },
    locatorDemo: {
      overline: "Global stock",
      title: "Locate material",
      search: "Reinforcing steel",
      rows: [["North warehouse", "64 UNIT", "Available"], ["Central site", "18 UNIT", "Low stock"], ["South warehouse", "0 UNIT", "Out of stock"]],
      transfer: "Prepare transfer",
      note: "Origin and destination are updated within the same operation.",
    },
    requests: {
      eyebrow: "Material requests",
      body: "Staff request materials with a required date. The inbox calculates urgency, preserves status, and supports item review before fulfillment.",
      points: ["Urgency calculated from the required date", "Statuses visible to the requester", "Review and adjustment before fulfillment", "Documents available in PDF and Excel", "Permissions separated by role and location"],
      flow: ["Request", "Priority", "Review", "Fulfillment"],
    },
    requestDemo: {
      overline: "Request inbox",
      title: "Material requests",
      tabs: ["New 3", "In review 2", "History"],
      headers: ["Request", "Required date", "Urgency", "Status"],
      rows: [["REQ-0048 · 6 materials", "Nov 12", "High", "Pending"], ["REQ-0047 · 3 materials", "Nov 15", "Medium", "In review"], ["REQ-0043 · 8 materials", "Nov 18", "Low", "Fulfilled"]],
      export: "PDF / XLSX",
    },
  },
} as const;

const STEP_ICONS: LucideIcon[] = [PackagePlus, Warehouse, FileSpreadsheet];

type Copy = (typeof COPY)["es"] | (typeof COPY)["en"];

function InventoryDashboard({ copy }: { copy: Copy }) {
  return (
    <div className={styles.dashboardDemo} aria-label={copy.demoLabel}>
      <div className={styles.demoHeader}>
        <div><small>{copy.dashboard.overline}</small><strong>{copy.dashboard.title}</strong></div>
        <span><Boxes size={20} /></span>
      </div>
      <div className={styles.metricGrid}>
        {copy.dashboard.metrics.map(([label, value], index) => <div className={styles.metric} key={label}><i data-color={index} /><small>{label}</small><strong>{value}</strong></div>)}
      </div>
      <div className={styles.inventoryPanel}>
        <div className={styles.panelTitle}><span>{copy.dashboard.tableTitle}</span><Search size={15} /></div>
        <div className={styles.inventoryTable}>
          <div className={styles.tableHead}>{copy.dashboard.headers.map((header) => <span key={header}>{header}</span>)}</div>
          {copy.dashboard.rows.map((row, index) => <div className={styles.tableRow} key={row[0]}>{row.map((cell, cellIndex) => <span key={cell}>{cellIndex === 0 && <i>{String.fromCharCode(65 + index)}</i>}{cell}</span>)}</div>)}
        </div>
      </div>
      <div className={styles.demoCaption}><Sparkles size={13} /> {copy.demoLabel}</div>
    </div>
  );
}

function EntryDemo({ copy }: { copy: Copy }) {
  return (
    <div className={styles.entryDemo} aria-label={copy.demoLabel}>
      <div className={styles.demoHeader}><div><small>{copy.entryDemo.overline}</small><strong>{copy.entryDemo.title}</strong></div><span><PackagePlus size={20} /></span></div>
      <div className={styles.formSummary}><div><small>{copy.entryDemo.supplier}</small><strong>{copy.entryDemo.supplierValue}</strong></div><div><small>{copy.entryDemo.document}</small><strong>{copy.entryDemo.documentValue}</strong></div></div>
      <div className={styles.entryItems}><small>{copy.entryDemo.items}</small>{copy.entryDemo.rows.map(([name, quantity, subtotal]) => <div key={name}><span>{name}</span><em>{quantity}</em><strong>{subtotal}</strong></div>)}</div>
      <div className={styles.entryTotal}><span>{copy.entryDemo.total}<strong>{copy.entryDemo.totalValue}</strong></span><button type="button" tabIndex={-1}><Check size={16} /> {copy.entryDemo.action}</button></div>
      <small className={styles.demoHint}>{copy.demoLabel}</small>
    </div>
  );
}

function LocatorDemo({ copy }: { copy: Copy }) {
  return (
    <div className={styles.locatorDemo} aria-label={copy.demoLabel}>
      <div className={styles.demoHeader}><div><small>{copy.locatorDemo.overline}</small><strong>{copy.locatorDemo.title}</strong></div><span><MapPin size={20} /></span></div>
      <div className={styles.searchField}><Search size={16} /><span>{copy.locatorDemo.search}</span></div>
      <div className={styles.locationList}>{copy.locatorDemo.rows.map(([location, stock, state], index) => <div key={location}><span className={styles.locationIcon}>{index === 1 ? <Building2 size={16} /> : <Warehouse size={16} />}</span><span><strong>{location}</strong><small>{state}</small></span><em>{stock}</em></div>)}</div>
      <button className={styles.transferButton} type="button" tabIndex={-1}><Send size={16} /> {copy.locatorDemo.transfer}</button>
      <p className={styles.atomicNote}><PackageCheck size={15} /> {copy.locatorDemo.note}</p>
      <small className={styles.demoHint}>{copy.demoLabel}</small>
    </div>
  );
}

function RequestDemo({ copy }: { copy: Copy }) {
  return (
    <div className={styles.requestDemo} aria-label={copy.demoLabel}>
      <div className={styles.demoHeader}><div><small>{copy.requestDemo.overline}</small><strong>{copy.requestDemo.title}</strong></div><span className={styles.exportBadge}><FileSpreadsheet size={15} /> {copy.requestDemo.export}</span></div>
      <div className={styles.requestTabs}>{copy.requestDemo.tabs.map((tab, index) => <span data-active={index === 0} key={tab}>{tab}</span>)}</div>
      <div className={styles.requestTable}>
        <div className={styles.requestHead}>{copy.requestDemo.headers.map((header) => <span key={header}>{header}</span>)}</div>
        {copy.requestDemo.rows.map((row, index) => <div className={styles.requestRow} key={row[0]}>{row.map((cell, cellIndex) => <span data-urgency={cellIndex === 2 ? index : undefined} data-status={cellIndex === 3 ? index : undefined} key={cell}>{cell}</span>)}</div>)}
      </div>
      <small className={styles.demoHint}>{copy.demoLabel}</small>
    </div>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return lang === "en" ? COPY.en.metadata : COPY.es.metadata;
}

export default async function InventoryKardexPage({ params }: PageProps) {
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
            <div className={styles.heroCopy}><span className={styles.eyebrow}>{copy.eyebrow}</span><p className={styles.heroSubtitle}>{copy.subtitle}</p><p className={styles.heroSummary}>{copy.summary}</p></div>
            <InventoryDashboard copy={copy} />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.centerHeading}><span className={styles.eyebrow}>{copy.movements.eyebrow}</span><p>{copy.movements.body}</p></div>
          <div className={styles.flowGrid}>{copy.movements.steps.map(([title, description], index) => { const Icon = STEP_ICONS[index]; return <article key={title}><span className={styles.stepNumber}>0{index + 1}</span><div className={styles.iconBox}><Icon size={22} /></div><h3>{title}</h3><p>{description}</p>{index < copy.movements.steps.length - 1 && <ArrowRight className={styles.flowArrow} size={20} />}</article>; })}</div>
          <div className={styles.showcaseRow}><div className={styles.showcaseCopy}><span className={styles.showcaseIndex}>{copy.movements.entryLabel}</span><h3>{copy.movements.entryTitle}</h3><p>{copy.movements.entryBody}</p><ul>{copy.movements.entryPoints.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul></div><EntryDemo copy={copy} /></div>
          <div className={`${styles.showcaseRow} ${styles.showcaseReverse}`}><div className={styles.showcaseCopy}><span className={styles.showcaseIndex}>{copy.movements.locatorLabel}</span><h3>{copy.movements.locatorTitle}</h3><p>{copy.movements.locatorBody}</p><ul>{copy.movements.locatorPoints.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul></div><LocatorDemo copy={copy} /></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTint}`}>
        <div className={`shell ${styles.requestLayout}`}>
          <div className={styles.requestCopy}><span className={styles.eyebrow}>{copy.requests.eyebrow}</span><p>{copy.requests.body}</p><div className={styles.requestFlow}>{copy.requests.flow.map((step, index) => <span key={step}>{step}{index < copy.requests.flow.length - 1 && <ArrowRight size={14} />}</span>)}</div><ul>{copy.requests.points.map((point) => <li key={point}><ClipboardCheck size={16} /> {point}</li>)}</ul></div>
          <RequestDemo copy={copy} />
        </div>
      </section>
      <Footer dict={dict.footer} />
    </main>
  );
}
