## Cómo correr el proyecto

### Requisitos previos

- Node.js 18.17 o superior
- pnpm 8 o superior (`npm install -g pnpm`)

### Instalación

```bash
pnpm install
```

### Desarrollo

```bash
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### Build de producción

```bash
pnpm build
pnpm start
```

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx              # Layout raíz con metadata global
│   ├── page.tsx                # Home – listado de artículos (página 1)
│   ├── not-found.tsx           # Página 404
│   ├── robots.ts               # Genera robots.txt dinámicamente
│   ├── sitemap.ts              # Genera sitemap.xml dinámicamente
│   ├── [page]/
│   │   └── page.tsx            # Paginación SEO-friendly (/2, /3…)
│   └── articulos/
│       └── [slug]/
│           └── page.tsx        # Detalle de artículo con generateMetadata
├── components/
│   ├── ArticleCard.tsx         # Tarjeta de artículo con next/image
│   └── Pagination.tsx          # Navegación entre páginas con links semánticos
└── data/
    └── articles.ts             # Mock data de artículos
```

## Decisiones técnicas

### Next.js 14 con App Router

Se eligió el App Router (introducido en Next.js 13) sobre el Pages Router porque:

- Todos los componentes son **Server Components por defecto**, lo que garantiza que el HTML se genera en el servidor sin configuración adicional.
- La API de `generateMetadata` permite definir metadata dinámica por página de forma co-ubicada con el componente.
- El layout anidado simplifica la estructura del sitio sin repetir código.

### React 18

Se optó por React 18 por su compatibilidad estable con Next.js 14 y el soporte de Concurrent Features que el runtime de Next.js aprovecha internamente para el streaming de Server Components.

### TypeScript

Uso de TypeScript para tipar los datos de artículos (`interface Article`) y las props de los componentes, reduciendo errores en tiempo de desarrollo y mejorando la mantenibilidad.

### Tailwind CSS

Framework CSS utilitario para estilos. Permite escribir UI consistente sin saltar entre archivos CSS, con purge automático en producción para un bundle mínimo.

### Mock data local

Los artículos se almacenan en `src/data/articles.ts` como un array tipado. Esta decisión permite:

- Cero latencia en desarrollo (no hay llamadas a API externas)
- Generación estática de todas las páginas en build time
- Fácil extensión hacia una API o CMS real en el futuro

## Estrategia de rendering (SSR)

Las tres páginas usan **Server-Side Rendering (SSR)**: el HTML se genera en el servidor en cada request antes de enviarse al cliente. Google recibe contenido completo e indexable desde el primer request sin necesidad de ejecutar JavaScript.

### Home (`/`)

Server Component puro. Next.js renderiza el listado de artículos (página 1) en el servidor en cada visita. No hay `"use client"` ni estado del cliente involucrado.

### Paginación (`/[page]`)

Server Component dinámico que recibe el número de página como parámetro de ruta. Genera su propia metadata con `generateMetadata` (título y canonical por página) y devuelve 404 para páginas fuera de rango.

### Detalle de artículo (`/articulos/[slug]`)

Server Component dinámico. Al no usar `generateStaticParams`, Next.js renderiza la página en el servidor en cada request. `generateMetadata` también se ejecuta en el servidor, generando los tags `<title>` y `<meta>` específicos del artículo antes de enviar el HTML.

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  return {
    title: article.title,
    description: article.description,
  }
}
```

### Por qué no Client-Side Rendering

Un SPA que renderiza en el cliente entrega HTML vacío al crawler. Google puede ejecutar JavaScript, pero el proceso es más lento y menos confiable que recibir HTML completo. Para un sitio de contenido donde el SEO es crítico, SSR es la única opción correcta.

## Consideraciones SEO

### Metadata dinámica

Cada página define su propio `title` y `description` usando la API de metadata de Next.js. La página de detalle usa `generateMetadata` para generar metadata basada en el contenido del artículo:

### Open Graph y Twitter Cards

Todas las páginas incluyen tags de Open Graph y Twitter Cards para mejorar el aspecto al compartir en redes sociales, lo que indirectamente mejora el CTR desde búsquedas.

### HTML semántico

- Un único `<h1>` por página
- Jerarquía correcta de encabezados (`h1` → `h2` → `h3`)
- Uso de `<article>`, `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`
- Elemento `<time>` con atributo `dateTime` para fechas
- `<nav aria-label>` para navegación accesible

### Datos estructurados (JSON-LD)

- **Home**: schema `Blog` de schema.org
- **Detalle**: schema `Article` con autor, fecha y publisher
- **Breadcrumbs**: schema `BreadcrumbList` en páginas de detalle

### robots.txt y sitemap.xml

Generados dinámicamente por Next.js en `/robots.txt` y `/sitemap.xml`. El sitemap incluye todas las URLs con `lastModified` y `priority` correctos para guiar el rastreo de Google.

### Accesibilidad

- Imágenes con `alt` descriptivo en todos los casos
- Links con `aria-label` cuando el texto visible no es suficiente
- Contraste de colores dentro de los estándares WCAG AA
- Navegación accesible por teclado
