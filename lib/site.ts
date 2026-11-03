export type IconName =
  | "globe"
  | "phone"
  | "spark"
  | "leaf"
  | "code"
  | "chart"
  | "check"
  | "arrow"
  | "arrowUpRight"
  | "whatsapp"
  | "mail"
  | "pin"
  | "clock"
  | "instagram"
  | "linkedin"
  | "facebook"
  | "menu"
  | "close"
  | "chevron"
  | "shield"
  | "layers"
  | "rocket"
  | "users"
  | "heart"
  | "quote"
  | "monitor"
  | "smartphone"
  | "cart"
  | "search"
  | "wrench"
  | "palette"
  | "sparkles";

export const site = {
  name: "WebCity",
  tagline: "Estudio digital iquiteño",
  shortDescription:
    "Estudio digital de Iquitos que diseña sitios web y aplicaciones móviles para empresas y emprendedores de la Amazonía.",
  description:
    "WebCity es un estudio digital de Iquitos, formado por cinco estudiantes de la FISI–UNAP. Diseñamos sitios web y aplicaciones móviles que ayudan a empresas y emprendedores amazónicos a digitalizarse y crecer.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "http://localhost:3000",
  locale: "es_PE",
  founded: "2025",
  email: "hola@webcity.pe",
  phoneDisplay: "+51 965 482 173",
  phoneHref: "+51965482173",
  whatsappNumber: "51965482173",
  address: "Calle Pevas 245, Iquitos, Loreto, Perú",
  addressShort: "Iquitos, Loreto — Perú",
  hours: "Lunes a viernes · 9:00 a 18:00 (GMT-5)",
  university: "Facultad de Ingeniería de Sistemas e Informática (FISI) — UNAP",
  coordinates: { lat: -3.7491, lng: -73.2538 },
  social: [
    { label: "Instagram", href: "https://instagram.com/webcity.pe", icon: "instagram" as IconName },
    { label: "LinkedIn", href: "https://linkedin.com/company/webcity-pe", icon: "linkedin" as IconName },
    { label: "Facebook", href: "https://facebook.com/webcity.pe", icon: "facebook" as IconName },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hola WebCity, quiero cotizar un proyecto digital para mi negocio.",
)}`;

export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Inicio", description: "Conoce WebCity" },
  { href: "/servicios", label: "Servicios", description: "Web, apps y acompañamiento" },
  { href: "/nosotros", label: "Nosotros", description: "El equipo detrás del estudio" },
  { href: "/portafolio", label: "Portafolio", description: "Proyectos y resultados" },
  { href: "/contacto", label: "Contacto", description: "Hablemos de tu idea" },
];

export type ServicePillar = {
  id: string;
  icon: IconName;
  eyebrow: string;
  title: string;
  summary: string;
  features: string[];
  deliverables: string[];
  cta: string;
  href: string;
};

export const servicePillars: ServicePillar[] = [
  {
    id: "web",
    icon: "monitor",
    eyebrow: "Presencia digital",
    title: "Sitios web que trabajan por tu negocio",
    summary:
      "Diseñamos y programamos páginas rápidas, claras y fáciles de administrar. Desde una landing page hasta una tienda virtual completa.",
    features: [
      "Landing pages y sitios corporativos",
      "Tiendas online con pagos y stock",
      "Catálogos y sistemas de reservas",
      "Optimización para Google (SEO local)",
    ],
    deliverables: [
      "Diseño a medida y adaptable a celulares",
      "Dominio, hosting y certificado SSL configurados",
      "Panel para editar textos, fotos y productos",
      "Capacitación grabada para tu equipo",
    ],
    cta: "Ver planes web",
    href: "/servicios#planes-web",
  },
  {
    id: "apps",
    icon: "smartphone",
    eyebrow: "Aplicaciones móviles",
    title: "Apps funcionales para Android e iOS",
    summary:
      "Convertimos procesos manuales en aplicaciones simples: pedidos, reservas, catálogos, membresías y atención a clientes.",
    features: [
      "Apps de pedidos y delivery",
      "Reservas y agenda de citas",
      "Catálogos con carrito y pagos",
      "Paneles de administración en tiempo real",
    ],
    deliverables: [
      "Una sola base de código con React Native",
      "Publicación en Play Store y App Store",
      "Notificaciones push y analítica",
      "Soporte durante los primeros 60 días",
    ],
    cta: "Explorar apps",
    href: "/servicios#apps",
  },
];

export type Plan = {
  name: string;
  badge?: string;
  price: string;
  priceNote: string;
  summary: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const webPlans: Plan[] = [
  {
    name: "Presencia",
    price: "S/ 1,200",
    priceNote: "pago único · desde",
    summary: "Para emprendedores que necesitan una primera página profesional y directa.",
    features: [
      "Landing page de una sección larga",
      "Diseño a medida y responsive",
      "Formulario conectado a tu correo",
      "Botón de WhatsApp y redes",
      "SEO on-page y Google Business",
      "Entrega en 2 a 3 semanas",
    ],
    cta: "Empezar con Presencia",
  },
  {
    name: "Crecimiento",
    badge: "Más elegido",
    price: "S/ 2,800",
    priceNote: "pago único · desde",
    summary: "Para negocios que quieren mostrar todo lo que hacen y aparecer en Google.",
    features: [
      "Sitio de 5 a 8 páginas",
      "Blog o catálogo administrable",
      "SEO técnico y local",
      "Google Analytics y Search Console",
      "Formularios y agenda de citas",
      "Soporte y ajustes por 30 días",
    ],
    highlighted: true,
    cta: "Quiero Crecimiento",
  },
  {
    name: "Tienda",
    price: "S/ 5,500",
    priceNote: "pago único · desde",
    summary: "Para vender en línea con pagos, inventario y una experiencia de compra cuidada.",
    features: [
      "E-commerce a medida o headless",
      "Pasarela de pagos (Culqi, Mercado Pago)",
      "Gestión de stock y pedidos",
      "Cálculo de envíos y cupones",
      "Panel de ventas y reportes",
      "Capacitación y soporte extendido",
    ],
    cta: "Cotizar mi tienda",
  },
];

export type AppUseCase = {
  icon: IconName;
  title: string;
  description: string;
};

export const appUseCases: AppUseCase[] = [
  {
    icon: "cart",
    title: "Pedidos y delivery",
    description: "Tu propio canal de ventas, sin comisiones de terceros ni pedidos perdidos en el chat.",
  },
  {
    icon: "clock",
    title: "Reservas y citas",
    description: "Agenda visible para tus clientes y recordatorios automáticos para reducir ausencias.",
  },
  {
    icon: "layers",
    title: "Catálogos y membresías",
    description: "Productos, servicios y planes en una app ordenada, rápida y siempre actualizada.",
  },
  {
    icon: "users",
    title: "Fidelización",
    description: "Puntos, cupones y avisos push para que tus clientes vuelvan a comprar.",
  },
];

export type Extra = {
  icon: IconName;
  title: string;
  description: string;
};

export const extras: Extra[] = [
  {
    icon: "palette",
    title: "Identidad visual",
    description: "Logo, colores y tipografías para que tu marca se vea coherente en todos lados.",
  },
  {
    icon: "search",
    title: "SEO local",
    description: "Optimización para búsquedas como “restaurante en Iquitos” y perfil de Google.",
  },
  {
    icon: "globe",
    title: "Dominio y hosting",
    description: "Configuramos todo y las cuentas quedan a tu nombre. Sin dependencias raras.",
  },
  {
    icon: "wrench",
    title: "Mantenimiento",
    description: "Actualizaciones, copias de seguridad y cambios mensuales desde S/ 120.",
  },
  {
    icon: "chart",
    title: "Analítica",
    description: "Medimos visitas, consultas y ventas para saber qué funciona y qué ajustar.",
  },
  {
    icon: "users",
    title: "Capacitación",
    description: "Sesiones prácticas para que tu equipo edite el sitio sin miedo a romperlo.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Escuchamos",
    description:
      "Una reunión para entender tu negocio, tus clientes y qué necesitas lograr. Si es presencial en Iquitos, mejor.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Propuesta visual y estructura de contenido. Ves cómo quedará antes de escribir una línea de código.",
  },
  {
    number: "03",
    title: "Construimos",
    description:
      "Desarrollo por etapas con avances cada semana. Probamos en celulares reales y cuidamos cada detalle.",
  },
  {
    number: "04",
    title: "Lanzamos",
    description:
      "Publicamos, capacitamos a tu equipo y medimos. Después seguimos cerca con soporte y mejoras.",
  },
];

export type ProjectCategory = "Web" | "App" | "Tienda";

export type Project = {
  slug: string;
  name: string;
  client: string;
  category: ProjectCategory;
  sector: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  theme: { from: string; to: string; accent: string };
  quote?: { text: string; author: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "amazonia-lodge",
    name: "Reservas directas para un lodge",
    client: "Amazonía Lodge",
    category: "Web",
    sector: "Turismo",
    year: "2026",
    summary:
      "Sitio bilingüe con disponibilidad, galería y reservas directas para un alojamiento junto al río.",
    challenge:
      "El lodge dependía de agencias y de mensajes sueltos por WhatsApp para llenar sus habitaciones.",
    solution:
      "Diseñamos una web bilingüe con paquetes, calendario de disponibilidad y solicitud de reserva que llega ordenada al correo del equipo.",
    metrics: [
      { value: "+42%", label: "reservas directas" },
      { value: "2.1 s", label: "tiempo de carga" },
      { value: "ES/EN", label: "dos idiomas" },
    ],
    tags: ["Next.js", "Reservas", "SEO"],
    theme: { from: "#0a2518", to: "#168a51", accent: "#9bf3ba" },
    quote: {
      text: "Antes las reservas vivían en el chat. Ahora entran ordenadas y sabemos cuántas habitaciones quedan.",
      author: "Rosa Huaymacari",
      role: "Administradora · Amazonía Lodge",
    },
  },
  {
    slug: "deli-selva",
    name: "Delivery propio para cocina local",
    client: "Deli Selva",
    category: "App",
    sector: "Gastronomía",
    year: "2026",
    summary:
      "App de pedidos con menú del día, seguimiento y panel de cocina para un restaurante de Iquitos.",
    challenge:
      "El restaurante perdía pedidos entre capturas de pantalla y pagos por Yape sin registro.",
    solution:
      "Una app Android/iOS con carrito, horarios de atención, transferencia de pedidos a cocina y aviso automático al cliente.",
    metrics: [
      { value: "+180", label: "pedidos al mes" },
      { value: "6 sem.", label: "de desarrollo" },
      { value: "4.7★", label: "en Play Store" },
    ],
    tags: ["React Native", "Pedidos", "Panel admin"],
    theme: { from: "#0b2118", to: "#236f51", accent: "#9cebd0" },
    quote: {
      text: "Ya no dependemos de una app de terceros que se queda con parte de la venta. Los pedidos son nuestros.",
      author: "Jorge Ruiz",
      role: "Cocina · Deli Selva",
    },
  },
  {
    slug: "botica-san-juan",
    name: "Catálogo y pedidos por WhatsApp",
    client: "Botica San Juan",
    category: "Tienda",
    sector: "Salud",
    year: "2025",
    summary:
      "Tienda con búsqueda de productos, stock visible y pedidos que llegan listos al WhatsApp de la botica.",
    challenge:
      "Atendían consultas de precio y stock uno por uno, con un inventario en cuadernos.",
    solution:
      "Montamos un catálogo administrable con búsqueda, categorías, control de stock y un carrito que arma el pedido en un solo mensaje.",
    metrics: [
      { value: "−65%", label: "tiempo de atención" },
      { value: "480", label: "productos cargados" },
      { value: "24/7", label: "catálogo disponible" },
    ],
    tags: ["E-commerce", "Stock", "WhatsApp"],
    theme: { from: "#0b1d24", to: "#237b7c", accent: "#9eece1" },
  },
  {
    slug: "rio-verde",
    name: "Web corporativa para una cooperativa",
    client: "Cooperativa Río Verde",
    category: "Web",
    sector: "Agroindustria",
    year: "2025",
    summary:
      "Sitio institucional con historia, certificaciones y formulario de contacto para productores amazónicos.",
    challenge:
      "La cooperativa necesitaba presentarse ante compradores nacionales con información confiable y actualizada.",
    solution:
      "Ordenamos su relato, creamos una biblioteca de documentos y un formulario de contacto que deriva cada consulta al área correcta.",
    metrics: [
      { value: "3×", label: "consultas comerciales" },
      { value: "100", label: "en accesibilidad" },
      { value: "0", label: "páginas caídas" },
    ],
    tags: ["Next.js", "Accesibilidad", "Contenido"],
    theme: { from: "#12241a", to: "#4a843f", accent: "#c8f0a5" },
  },
  {
    slug: "artesanias-belen",
    name: "Vitrina digital para artesanos",
    client: "Artesanías Belén",
    category: "Tienda",
    sector: "Artesanía",
    year: "2025",
    summary:
      "Tienda con historia de cada pieza, envío nacional y pagos en línea para un taller familiar.",
    challenge:
      "Sus piezas se vendían solo en ferias y a turistas que pasaban por el mercado.",
    solution:
      "Fotografiamos el taller, escribimos la historia de cada colección y armamos una tienda simple con pagos y envíos a todo el Perú.",
    metrics: [
      { value: "+26", label: "pedidos el primer mes" },
      { value: "9", label: "regiones atendidas" },
      { value: "100%", label: "trazabilidad local" },
    ],
    tags: ["Tienda", "Pagos", "Fotografía"],
    theme: { from: "#14241d", to: "#2c8060", accent: "#9aebc7" },
  },
  {
    slug: "clinica-manati",
    name: "Citas sin llamadas perdidas",
    client: "Clínica Manatí",
    category: "App",
    sector: "Salud",
    year: "2026",
    summary:
      "Agenda móvil para pacientes con recordatorios, historial básico y panel para recepción.",
    challenge:
      "La recepción agendaba por teléfono y las ausencias ocupaban cupos que nadie recuperaba.",
    solution:
      "App con especialidades, horarios disponibles, confirmación y recordatorio 24 horas antes; recepción ve todo en un panel.",
    metrics: [
      { value: "−38%", label: "citas perdidas" },
      { value: "1.2k", label: "citas gestionadas" },
      { value: "4.8★", label: "valoración" },
    ],
    tags: ["React Native", "Agenda", "Push"],
    theme: { from: "#0c2128", to: "#27828a", accent: "#a7f0e5" },
  },
];

export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  initials: string;
  accent: string;
};

export const team: TeamMember[] = [
  {
    name: "Camila Ríos Torres",
    role: "Dirección creativa y producto",
    focus: "Diseño de interfaz, investigación con usuarios y dirección de marca.",
    initials: "CR",
    accent: "#14b87d",
  },
  {
    name: "Diego Panduro Vela",
    role: "Desarrollo frontend",
    focus: "Next.js, accesibilidad y rendimiento en dispositivos de gama media.",
    initials: "DP",
    accent: "#22d3ee",
  },
  {
    name: "Alessandra Murayari Silva",
    role: "Desarrollo móvil",
    focus: "React Native, publicación en tiendas y experiencia offline.",
    initials: "AM",
    accent: "#84cc16",
  },
  {
    name: "Renzo Cárdenas Flores",
    role: "Backend e infraestructura",
    focus: "APIs, bases de datos, seguridad y despliegues automatizados.",
    initials: "RC",
    accent: "#0ea5e9",
  },
  {
    name: "Valeria Shapiama Ríos",
    role: "Estrategia digital y contenidos",
    focus: "SEO local, redacción, analítica y acompañamiento a clientes.",
    initials: "VS",
    accent: "#f59e0b",
  },
];

export type Value = {
  icon: IconName;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: "leaf",
    title: "Identidad local",
    description:
      "Diseñamos pensando en la Amazonía: su luz, su gente y la forma en que aquí se hace negocio.",
  },
  {
    icon: "shield",
    title: "Trabajo honesto",
    description:
      "Presupuestos claros, plazos reales y cero letra pequeña. Si algo no te conviene, te lo decimos.",
  },
  {
    icon: "code",
    title: "Excelencia técnica",
    description:
      "Código ordenado, sitios rápidos y accesibles. Lo que entregamos está pensado para durar.",
  },
  {
    icon: "users",
    title: "Cercanía",
    description:
      "Hablamos sin tecnicismos y acompañamos a tu equipo después del lanzamiento.",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "12+", label: "proyectos entregados" },
  { value: "9", label: "negocios locales digitalizados" },
  { value: "5", label: "especialistas en el equipo" },
  { value: "< 24 h", label: "para responderte" },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  project: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Pasamos de recibir reservas por WhatsApp a tenerlas ordenadas en una web propia. El equipo nos explicó todo con paciencia, en persona.",
    author: "Rosa Huaymacari",
    role: "Amazonía Lodge",
    project: "Web de reservas",
    initials: "RH",
  },
  {
    quote:
      "La app de delivery nos cambió la operación. Ahora la cocina ve los pedidos en pantalla y el cliente sabe cuándo llega.",
    author: "Jorge Ruiz",
    role: "Deli Selva",
    project: "App de pedidos",
    initials: "JR",
  },
  {
    quote:
      "Nos ayudaron a ordenar el catálogo y a aparecer en Google. Las consultas llegan mejor y respondemos en minutos.",
    author: "Milagros Vela",
    role: "Botica San Juan",
    project: "Tienda en línea",
    initials: "MV",
  },
];

export const clients = [
  "Amazonía Lodge",
  "Deli Selva",
  "Botica San Juan",
  "Río Verde",
  "Artesanías Belén",
  "Clínica Manatí",
  "Café Aripari",
  "Selva Fit",
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "¿Trabajan solo con negocios de Iquitos?",
    answer:
      "Nuestra base está en Iquitos y atendemos presencialmente en la ciudad. También trabajamos de forma remota con clientes de Loreto y del resto del Perú: las reuniones son por videollamada y todo el proceso queda documentado.",
  },
  {
    question: "¿Cuánto cuesta un sitio web?",
    answer:
      "Una landing page parte de S/ 1,200 y un sitio corporativo de S/ 2,800. El precio final depende de las secciones, integraciones y contenidos. Después de la primera reunión recibes una cotización cerrada, sin costos sorpresa.",
  },
  {
    question: "¿Cuánto demora un proyecto?",
    answer:
      "Una landing toma entre 2 y 3 semanas; un sitio corporativo, de 4 a 6; una tienda virtual, de 5 a 8; y una app móvil, de 6 a 10 semanas. Los plazos se confirman por escrito al inicio y dependen de la entrega de contenidos.",
  },
  {
    question: "¿El dominio y el hosting están incluidos?",
    answer:
      "Configuramos dominio, hosting y certificado de seguridad, y dejamos todas las cuentas a tu nombre. El primer año de hosting está incluido en los planes Crecimiento y Tienda. Así el proyecto es tuyo, no nuestro.",
  },
  {
    question: "¿Puedo pagar en partes?",
    answer:
      "Sí. El esquema habitual es 50% al inicio y 50% contra entrega. Para emprendedores que recién comienzan podemos dividir el pago en tres partes sin intereses.",
  },
  {
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer:
      "Sí. Todos los proyectos incluyen 30 días de soporte para ajustes. Luego puedes contratar un plan mensual desde S/ 120 con actualizaciones, copias de seguridad y horas de cambios.",
  },
  {
    question: "No tengo logo ni textos, ¿pueden ayudarme?",
    answer:
      "Claro. Podemos crear tu identidad visual básica, redactar los textos y guiarte con la fotografía de tu local o productos. La idea es que no necesites contratar a cinco proveedores distintos.",
  },
  {
    question: "¿Con qué tecnologías trabajan?",
    answer:
      "Principalmente Next.js y React para web, React Native para apps, y Node.js con PostgreSQL para el backend. Elegimos herramientas modernas, seguras y con buena documentación para que cualquier desarrollador pueda mantener el proyecto.",
  },
];

export type TimelineItem = { year: string; title: string; description: string };

export const timeline: TimelineItem[] = [
  {
    year: "2023",
    title: "Nos conocimos en la FISI",
    description:
      "Un curso de Ingeniería de Software nos puso en el mismo equipo. Descubrimos que trabajar juntos era más divertido que competir por la nota.",
  },
  {
    year: "2024",
    title: "Primeros proyectos reales",
    description:
      "Pasantías, trabajos para conocidos y una web para el negocio de una familia nos mostraron cuánto necesita la ciudad este tipo de servicio.",
  },
  {
    year: "2025",
    title: "Nace WebCity",
    description:
      "Formalizamos el estudio con una idea simple: hacer tecnología de calidad, explicada en sencillo y con precios justos para la Amazonía.",
  },
  {
    year: "2026",
    title: "Seguimos creciendo",
    description:
      "Hoy somos cinco especialistas, trabajamos con negocios de Iquitos y seguimos estudiando en la UNAP mientras construimos el estudio.",
  },
];

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "React Native",
  "Node.js",
  "PostgreSQL",
  "Tailwind",
  "Vercel",
];

export const projectCategories: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "Web",
  "App",
  "Tienda",
];
