# WebCity

Sitio web del estudio digital **WebCity** (Iquitos, Loreto — Perú). Diseño y desarrollo de páginas web y aplicaciones móviles para negocios y emprendedores de la Amazonía. Proyecto creado por cinco estudiantes de la **FISI–UNAP**.

Sitio multipágina en español, con identidad visual verde/turquesa, diseño responsive, SEO y formulario de contacto funcional.

---

## Stack

| Pieza | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + TypeScript estricto |
| Estilos | CSS propio con design system (`app/globals.css`) |
| Tipografías | Sora + Manrope vía `next/font/google` |
| Formulario | Route Handler `POST /api/contacto` + Resend (opcional) |

No usa Tailwind ni librerías de componentes: los estilos viven en un único sistema de tokens y componentes en `app/globals.css`.

---

## Requisitos

- Node.js **20.9 o superior**
- npm 10+

## Instalación

```bash
cd webcity
npm install
```

## Comandos

```bash
npm run dev        # servidor de desarrollo en http://localhost:3000
npm run build      # build de producción
npm start          # sirve el build (http://localhost:3000)
npm run typecheck  # verificación de TypeScript sin emitir
```

> El proyecto está aislado en la carpeta `webcity/`. Si abres la carpeta superior, ejecuta los comandos dentro de `webcity`.

---

## Estructura

```
webcity/
├─ app/
│  ├─ layout.tsx              # fuentes, metadata global, JSON-LD, header/footer
│  ├─ page.tsx                # Inicio
│  ├─ servicios/page.tsx      # Servicios, planes, apps, extras, FAQ
│  ├─ nosotros/page.tsx       # Historia, valores, equipo, timeline
│  ├─ portafolio/page.tsx     # Caso destacado, filtros, testimonios
│  ├─ contacto/page.tsx       # Datos de contacto + formulario
│  ├─ api/contacto/route.ts   # Endpoint del formulario
│  ├─ globals.css             # Design system completo
│  ├─ error.tsx               # Error boundary
│  ├─ not-found.tsx           # Página 404
│  ├─ icon.svg                # Favicon
│  ├─ manifest.ts             # Web app manifest
│  ├─ robots.ts               # robots.txt
│  └─ sitemap.ts              # sitemap.xml
├─ components/                # Header, footer, logo, hero, tarjetas, formulario…
├─ lib/
│  ├─ site.ts                 # TODO el contenido editable del sitio
│  ├─ validation.ts           # Esquema compartido del formulario
│  └─ rate-limit.ts           # Límite de envíos en memoria
├─ public/
│  └─ opengraph-image.png     # Imagen para redes sociales (1200 × 630)
├─ .env.example
└─ next.config.ts             # Cabeceras de seguridad + raíz de Turbopack
```

Casi todo el texto y los datos (planes, proyectos, equipo, FAQ, contacto) están centralizados en **`lib/site.ts`**.

---

## Variables de entorno

Copia `.env.example` a `.env.local` y ajusta los valores:

```bash
cp .env.example .env.local
```

| Variable | Obligatoria | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recomendada | URL pública sin barra final. Se usa en SEO, sitemap, canonical y JSON-LD. Por defecto `http://localhost:3000`. |
| `RESEND_API_KEY` | No | Si existe, los mensajes se envían por correo con Resend. |
| `CONTACT_TO_EMAIL` | No | Destinatario de las consultas (por defecto `hola@webcity.pe`). |
| `CONTACT_FROM_EMAIL` | No | Remitente verificado en Resend (dominio validado). |

### Cómo funciona el formulario

1. Validación en el navegador y de nuevo en el servidor (`lib/validation.ts`).
2. Campo trampa antispam (`website`): si viene completo, se descarta en silencio.
3. Límite de envíos por IP en memoria (adecuado para una instancia; si despliegas varias, usa un almacén compartido como Upstash Redis).
4. **Con `RESEND_API_KEY`**: envía el correo y además guarda una copia local.
5. **Sin `RESEND_API_KEY`**: guarda el mensaje en `.data/contactos.jsonl` y lo registra en consola. Útil en desarrollo.

> En Vercel el sistema de archivos es efímero y de solo lectura salvo `/tmp`: configura Resend para producción; el respaldo JSONL es para desarrollo o servidores propios.

---

## Despliegue en Vercel

1. Sube el proyecto a un repositorio (GitHub/GitLab/Bitbucket).
2. En Vercel, **Add New → Project** e importa el repositorio.
3. Si el repo contiene la carpeta superior, configura **Root Directory = `webcity`**.
4. Framework preset: **Next.js** (se detecta automáticamente). Build: `npm run build`.
5. Agrega las variables de entorno (`NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, etc.).
6. Deploy y luego conecta el dominio final en **Settings → Domains**.

Checklist antes de publicar:

- [ ] Reemplazar los datos de contacto y redes en `lib/site.ts`.
- [ ] Sustituir nombre, roles y fotos/iniciales del equipo por los reales.
- [ ] Reemplazar proyectos, testimonios y métricas de demostración.
- [ ] Cambiar el logo provisional.
- [ ] Definir `NEXT_PUBLIC_SITE_URL` con el dominio real.
- [ ] Verificar el dominio en Resend y probar el formulario en producción.
- [ ] Añadir el sitio a Google Search Console y enviar `sitemap.xml`.

---

## Contenido de demostración (importante)

Los proyectos del portafolio, los nombres de clientes, las métricas y los testimonios son **ejemplos ficticios** creados para mostrar el diseño. La página de portafolio lo indica de forma visible. **Deben reemplazarse por casos reales antes de lanzar el sitio.**

El equipo actual en `lib/site.ts` usa nombres de ejemplo; actualízalos con los integrantes reales.

---

## Logo provisional

El logo vive en dos lugares y es intercambiable:

- `components/logo.tsx` — marca vectorial usada en el header y el footer.
- `app/icon.svg` — favicon.
- `public/opengraph-image.png` — tarjeta social de 1200 × 630.

Para reemplazarlo, sustituye esos archivos manteniendo el nombre y las proporciones (el header espera un isotipo cuadrado + wordmark). Si cambias los colores, ajusta los tokens al inicio de `app/globals.css`.

---

## Accesibilidad y rendimiento

- HTML semántico, un solo `h1` por página y jerarquía de encabezados.
- Enlace «Saltar al contenido», foco visible y navegación por teclado.
- Soporte de `prefers-reduced-motion` y fallback sin JavaScript para las animaciones de aparición.
- Imágenes y tipografías optimizadas; páginas estáticas salvo el endpoint del formulario.
- Metadatos por página, Open Graph, Twitter Card, `sitemap.xml`, `robots.txt`, manifest y datos estructurados (`ProfessionalService`, `FAQPage`).

---

## Licencia y créditos

Contenido y marca WebCity © 2026. Fotografías e ilustraciones: recursos propios o de demostración, según se indique. Revisa las licencias antes de reutilizar material de terceros.
