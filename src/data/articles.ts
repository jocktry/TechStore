export interface Article {
  id: number
  title: string
  slug: string
  description: string
  content: string
  author: string
  date: string
  category: string
  imageUrl: string
  imageAlt: string
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'iPhone 17 Pro vs Samsung Galaxy S25 Ultra: la batalla del año',
    slug: 'iphone-17-pro-vs-samsung-galaxy-s25-ultra',
    description:
      'Comparamos los flagships más esperados de 2026: cámaras con IA generativa, chips de nueva generación y autonomía mejorada. ¿Cuál conviene más?',
    content: `
## El año de la IA en el bolsillo

2026 consolidó lo que 2024 prometió: la inteligencia artificial dejó de ser una función extra para convertirse en el núcleo de la experiencia mobile. Tanto Apple como Samsung apostaron fuerte en sus modelos insignia.

## iPhone 17 Pro

Apple presentó el iPhone 17 Pro con el chip A19 Pro y una cámara periscópica de 5x en todos los modelos Pro, eliminando la diferencia entre Pro y Pro Max en términos ópticos.

### Lo mejor del iPhone 17 Pro
- Chip A19 Pro con NPU de nueva generación para IA en dispositivo
- Cámara principal de 48MP con apertura variable f/1.5–f/2.8
- Pantalla ProMotion de 120Hz con brillo pico de 3000 nits
- Apple Intelligence integrado con procesamiento completamente local
- Seis años de actualizaciones garantizados

## Samsung Galaxy S25 Ultra

Samsung rediseñó el S25 Ultra con un cuerpo más ergonómico, eliminando los bordes cuadrados del S24. El S Pen ahora incluye haptics y reconocimiento de gestures en el aire.

### Lo mejor del Galaxy S25 Ultra
- Snapdragon 8 Elite con Galaxy AI de segunda generación
- Zoom óptico 10x con estabilización óptica de cuatro ejes
- Pantalla de 6.9" con frecuencia de refresco adaptativa de 1 a 144Hz
- Batería de 5500mAh con carga rápida de 65W y carga inversa de 15W
- S Pen con latencia de 2.3ms

## ¿Cuál elegir?

Si priorizás privacidad y el procesamiento de IA completamente offline, el iPhone 17 Pro es difícil de superar. Si querés el mejor zoom del mercado y la flexibilidad del S Pen, el Galaxy S25 Ultra justifica cada peso.
    `.trim(),
    author: 'Martín Rodríguez',
    date: '2026-05-15',
    category: 'Smartphones',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    imageAlt: 'Dos smartphones flagship sobre superficie minimalista',
  },
  {
    id: 2,
    title: 'AirPods Pro 3 vs Sony WH-1000XM6: ¿cuáles dominan en 2026?',
    slug: 'airpods-pro-3-vs-sony-xm6-2026',
    description:
      'La tercera generación de AirPods Pro se enfrenta al nuevo Sony XM6. Cancelación de ruido, calidad de audio y autonomía bajo la lupa.',
    content: `
## Auriculares premium: la competencia se intensifica

El mercado de auriculares con cancelación activa de ruido alcanzó su madurez. En 2026, la diferencia entre los mejores modelos está en los detalles: calidad de llamadas con IA, personalización del perfil sonoro y duración de batería.

## AirPods Pro 3

Apple rediseñó los AirPods Pro 3 con un chip H3 que procesa audio 60.000 veces por segundo. La gran novedad es el modo Hearing Aid, que convierte los AirPods en audífonos certificados por la FDA.

### Cancelación de ruido
El H3 adapta la cancelación en tiempo real según el movimiento de la cabeza y el ambiente. En metro y avión, el resultado es prácticamente silencio total.

### Salud auditiva
- Prueba auditiva integrada con reporte clínico exportable
- Protección auditiva adaptativa en ambientes ruidosos
- Historial de exposición al sonido semanal

### Batería
- AirPods solos: 7 horas con ANC activo
- Con estuche: hasta 36 horas
- Carga rápida: 5 minutos = 1.5 horas de uso

## Sony WH-1000XM6

Sony mejoró el XM5 en los dos puntos que más se le criticaban: el plegado y la llamada. El XM6 vuelve al diseño plegable y estrena micrófonos con IA para aislar la voz en ambientes ruidosos.

### Cancelación de ruido
Doce micrófonos y tres procesadores dedicados. En vuelos transatlánticos, el XM6 sigue siendo la referencia absoluta del mercado.

### Calidad de audio
Soporte para LDAC y el nuevo LC3plus, el códec de alta resolución de baja latencia adoptado por Android 15. Para audiófilos, la diferencia es audible.

### Comodidad
Almohadillas de memory foam con recubrimiento de tejido transpirable. 252g distribuidos uniformemente para sesiones de 10 horas sin fatiga.

## Veredicto

Usuarios de iPhone que cuidan su salud auditiva: AirPods Pro 3. Usuarios multiplataforma o audiófilos que priorizan la calidad sonora: Sony WH-1000XM6.
    `.trim(),
    author: 'Valentina Cruz',
    date: '2026-04-28',
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    imageAlt: 'Auriculares premium sobre superficie oscura',
  },
  {
    id: 3,
    title: 'Apple Watch Ultra 3 vs Galaxy Watch Ultra 2: wearables extremos',
    slug: 'apple-watch-ultra-3-vs-galaxy-watch-ultra-2',
    description:
      'Comparamos los smartwatches más resistentes de 2026: GPS de doble frecuencia, sensores de salud avanzados y autonomía de días.',
    content: `
## Smartwatches para los que lo exigen todo

En 2026, la línea Ultra de Apple y Samsung redefinió lo que un reloj inteligente puede hacer. Más allá de contar pasos, estos dispositivos monitorean glucosa, presión arterial y funcionan como dispositivos de emergencia en zonas sin cobertura.

## Apple Watch Ultra 3

El Ultra 3 mantiene el titanio de aeroespacial y agrega un sensor de glucosa no invasivo, la característica más esperada de los últimos años. También incorpora satellite messaging independiente del iPhone.

### Salud y sensores
- Monitoreo de glucosa en sangre sin punción (aprobado FDA)
- ECG de grado médico con detección de fibrilación auricular
- Temperatura corporal continua durante el sueño
- Detección de apnea del sueño con seguimiento de fases

### Outdoor y emergencias
- GPS de doble frecuencia L1 + L5 con precisión de 30cm
- Mensajes vía satélite sin iPhone ni Wi-Fi
- Resistencia al agua hasta 100m (EN 13319)
- Batería: hasta 72 horas en modo normal, 36 horas con GPS activo

## Samsung Galaxy Watch Ultra 2

Samsung respondió con sensores de bioimpedancia de cuarta generación y una pantalla Micro-LED que duplica el brillo del modelo anterior sin consumir más batería.

### Salud y sensores
- Presión arterial con calibración automática (sin manguito)
- Glucosa en sangre no invasiva (en mercados seleccionados)
- Composición corporal: grasa, músculo, hidratación
- VO2 Max con recomendaciones de entrenamiento personalizadas

### Autonomía
- Hasta 60 horas en uso normal
- Hasta 30 horas con GPS activo
- Carga rápida: 0 a 100% en 45 minutos

## Conclusión

Para usuarios de iPhone y deportistas extremos, el Ultra 3 es el mejor smartwatch del mundo. Para usuarios Android que priorizan salud cardiovascular y autonomía, el Galaxy Watch Ultra 2 ofrece más por menos.
    `.trim(),
    author: 'Diego Fernández',
    date: '2026-04-10',
    category: 'Wearables',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    imageAlt: 'Smartwatch resistente con pantalla encendida',
  },
  {
    id: 4,
    title: 'iPad Pro M5 2026: ¿puede reemplazar tu laptop definitivamente?',
    slug: 'ipad-pro-m5-2026-review',
    description:
      'Review completa del iPad Pro con chip M5: Final Cut Pro nativo, soporte para hasta 32GB de RAM y el nuevo Magic Keyboard con trackpad háptico.',
    content: `
## El iPad más potente de la historia

El iPad Pro 2026 con chip M5 llega con una promesa concreta: ser la primera tablet que puede reemplazar una laptop para la mayoría de los flujos de trabajo creativos. ¿Lo logra?

## Chip M5: salto generacional real

El M5 introduce un Neural Engine de 60 TOPS, 40% más rápido que el M4. Para edición de video, esto se traduce en renderizado de timelines 8K ProRes en tiempo real sin thermal throttling.

### Configuraciones de RAM
- Modelo base: 16GB RAM
- Modelo Pro: 24GB RAM
- Modelo Max (nuevo): 32GB RAM

Con 32GB, el iPad Pro puede mantener abiertos Lightroom, Final Cut Pro y un navegador con 40 pestañas sin pestañear.

## iPadOS 19: el cambio que faltaba

Apple finalmente introdujo ventanas flotantes redimensionables y soporte para múltiples usuarios. El Stage Manager de iPadOS 19 permite hasta seis apps simultáneas con memoria gestionada de forma independiente.

### Nuevas capacidades profesionales
- Terminal nativo con acceso completo al sistema de archivos
- Soporte para entornos Python y Node.js directamente en la app
- Xcode para iPad (versión completa, no simplificada)

## Magic Keyboard con trackpad háptico

El nuevo Magic Keyboard reemplaza el trackpad mecánico por uno háptico similar al de los MacBook Pro. La respuesta táctil es indistinguible del clic físico y funciona incluso con el iPad apagado.

## ¿Reemplaza a una laptop?

Para ilustradores, fotógrafos, editores de video y desarrolladores iOS: sí, en 2026 el iPad Pro M5 es una laptop válida. Para desarrollo backend, ciencia de datos o gaming: todavía no.
    `.trim(),
    author: 'Lucía Morales',
    date: '2026-03-22',
    category: 'Tablets',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
    imageAlt: 'iPad Pro con Magic Keyboard sobre escritorio',
  },
  {
    id: 5,
    title: 'Los mejores teclados mecánicos para programadores en 2026',
    slug: 'mejores-teclados-mecanicos-programadores-2026',
    description:
      'Comparamos los teclados mecánicos más valorados por developers en 2026: switches de nueva generación, conectividad 2.4GHz sin lag y diseños ergonómicos.',
    content: `
## Por qué los programadores siguen eligiendo mecánicos

En 2026, los teclados mecánicos evolucionaron hacia switches silenciosos de alta precisión y conectividades inalámbricas sin latencia perceptible. La adopción del trabajo remoto consolidó el mercado premium.

## Los switches en 2026

Los switches magnéticos Hall Effect ganaron terreno por su durabilidad (100 millones de pulsaciones) y la posibilidad de ajustar el punto de actuación por software.

### Tipos más populares entre developers
- **Hall Effect (ej: Gateron Magnetic Jade)**: actuación ajustable de 0.2mm a 4mm, sin desgaste mecánico
- **Táctiles silenciosos (ej: Boba U4)**: bump táctil sin ruido, ideal para oficinas y videollamadas
- **Lineales lubricados (ej: Gateron Yellow Pro)**: suavidad extrema para escritura rápida

## Keychron Q3 Max

La evolución del Q3 Pro con switches Hall Effect opcionales y Bluetooth 5.3 de baja latencia (1ms). Sigue siendo el favorito entre developers por su customización sin límites vía QMK/VIA.

### Especificaciones
- Layout: TKL (87 teclas)
- Conectividad: Bluetooth 5.3, 2.4GHz, USB-C
- Gasket mount para reducción de ruido
- Precio: aproximadamente $220 USD

## NuPhy Field75

El teclado 75% más vendido de 2026. Perfil bajo con switches Hall Effect propios de NuPhy, batería de 8000mAh y pantalla OLED integrada para macros y estado de conexión.

## Recomendación por perfil

- **Home office silencioso**: Keychron Q3 Max con Boba U4
- **Mejor relación precio-calidad**: Keychron V3 (~$95)
- **Portabilidad máxima**: NuPhy Field75 (~$160)
- **Gaming + código**: Wooting 60HE con switches analógicos
    `.trim(),
    author: 'Tomás Aguirre',
    date: '2026-03-05',
    category: 'Periféricos',
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    imageAlt: 'Teclado mecánico premium con retroiluminación sobre escritorio',
  },
  {
    id: 6,
    title: 'Hogar inteligente en 2026: Matter 1.3 lo cambió todo',
    slug: 'hogar-inteligente-matter-2026',
    description:
      'Con Matter 1.3 como estándar universal, armar un hogar inteligente nunca fue tan simple. Guía actualizada para empezar sin gastar de más.',
    content: `
## Matter 1.3: el estándar que unificó todo

En 2026, el protocolo Matter alcanzó la versión 1.3 con soporte para cámaras, electrodomésticos y sensores de energía. Esto significa que un dispositivo con el logo Matter funciona con Alexa, Google Home, Apple HomeKit y Samsung SmartThings sin configuración extra.

## Ya no importa el ecosistema

La gran barrera del hogar inteligente era elegir un ecosistema y quedar atado a él. Con Matter 1.3, esa decisión dejó de ser crítica. Podés mezclar marcas libremente.

### Dispositivos Matter 1.3 recomendados para empezar

**Iluminación**: Philips Hue Gradient (Matter nativo desde fábrica)
**Enchufes inteligentes**: Eve Energy con medición de consumo en tiempo real
**Sensores de puerta/ventana**: Aqara Door Sensor P2

## Por dónde empezar en 2026

### 1. Hub central (opcional pero recomendado)
Con Matter, el hub es opcional. Pero un Apple HomePod mini (~$99) o un Google Nest Hub 2 (~$89) mejoran la velocidad de respuesta y permiten automatizaciones locales sin internet.

### 2. Iluminación inteligente
Seguí siendo el punto de entrada más accesible. Los bulbos Matter de TP-Link Tapo rondan los $12 USD y se configuran en 3 minutos.

### 3. Seguridad
Las cámaras Matter 1.3 ahora pueden compartir video entre plataformas. La cámara Eufy S3 Pro es compatible con HomeKit Secure Video, Google Home y Alexa simultáneamente.

## Home Assistant en 2026

Para el control total sin nubes, Home Assistant OS 12 es más accesible que nunca con una interfaz renovada y detección automática de dispositivos Matter en la red local.

## Errores a evitar

- Comprar dispositivos Zigbee/Z-Wave sin verificar compatibilidad Matter
- No actualizar el firmware del router (Matter usa IPv6)
- Comprar todo junto: empezar con iluminación y un hub es suficiente el primer mes
    `.trim(),
    author: 'Sofía Blanco',
    date: '2026-02-18',
    category: 'Hogar Inteligente',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    imageAlt: 'Dispositivos de hogar inteligente conectados en red',
  },
  {
    id: 7,
    title: 'MacBook Pro M5 vs Dell XPS 15: laptops premium en 2026',
    slug: 'macbook-pro-m5-vs-dell-xps-15-2026',
    description:
      'Comparamos las dos laptops más deseadas del año: rendimiento bajo carga sostenida, pantallas de referencia y autonomía real en uso diario.',
    content: `
## El mercado de laptops premium en 2026

El chip M5 de Apple y los procesadores Intel Core Ultra 200H redefinen lo que se puede esperar de una laptop en 2026. La competencia es más pareja que nunca, pero las diferencias siguen siendo importantes.

## MacBook Pro M5 14"

Apple lanzó el MacBook Pro con M5 manteniendo el diseño del modelo anterior pero con mejoras internas significativas: hasta 64GB de RAM unificada y una GPU de 40 núcleos en la versión Max.

### Rendimiento
El M5 Pro completa renders en Cinema 4D un 35% más rápido que el M4 Pro. Sin ventilador audible incluso bajo carga sostenida de 20 minutos.

### Autonomía real
- Navegación y código: 18 horas
- Edición de video 4K: 9 horas
- Carga rápida: 0 a 50% en 30 minutos con cargador de 140W

### Pantalla
Liquid Retina XDR de 3024×1964 con ProMotion adaptativo. 1000 nits típicos, 1600 nits en HDR. Referencia en el mercado.

## Dell XPS 15 (2026)

Dell renovó el XPS 15 con el Intel Core Ultra 9 275H y una pantalla OLED de 3.5K con tasa de refresco de 120Hz. Por primera vez, el XPS 15 es genuinamente competitivo en autonomía.

### Rendimiento
Con GPU NVIDIA RTX 4070 dedicada, el XPS 15 supera al MacBook Pro en gaming y en workloads que aprovechan CUDA (renderizado 3D con Blender, por ejemplo).

### Autonomía real
- Navegación y código: 10 horas
- Edición de video 4K: 5 horas
- Con GPU dedicada activa: 3.5 horas

### Pantalla
OLED 3456×2160 con cobertura DCI-P3 del 100%. Negros perfectos y colores más vibrantes que el Liquid Retina XDR.

## ¿Cuál elegir?

Para desarrollo, diseño y productividad sin gaming: MacBook Pro M5. Para gaming ocasional, renderizado 3D con CUDA o si Windows es obligatorio: Dell XPS 15.
    `.trim(),
    author: 'Martín Rodríguez',
    date: '2026-02-05',
    category: 'Laptops',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    imageAlt: 'Laptop premium abierta sobre escritorio de madera',
  },
  {
    id: 8,
    title: 'Los mejores monitores para trabajar desde casa en 2026',
    slug: 'mejores-monitores-home-office-2026',
    description:
      'Guía completa de monitores para home office: resolución 4K, paneles OLED, conectividad USB-C con carga y ergonomía para jornadas largas.',
    content: `
## Invertir en un buen monitor: el mejor upgrade de productividad

En 2026, el precio de los paneles OLED de 27" bajó lo suficiente para competir directamente con los IPS premium. Si pasás más de seis horas frente a la pantalla, un buen monitor marca la diferencia.

## LG UltraFine OLED Pro 27"

El monitor favorito de diseñadores y desarrolladores en 2026. Panel OLED de 3840×2160 con tasa de refresco de 120Hz, cobertura DCI-P3 del 99% y brillo pico de 1000 nits.

### Conectividad
- Thunderbolt 4 con carga de 96W al laptop
- HDMI 2.1 para consolas a 4K/120Hz
- USB-A ×3 y USB-C ×1 integrados (hub incorporado)

### Para quién es
Diseñadores gráficos, fotógrafos y editores de video que necesitan precisión de color certificada. El precio (~$1200 USD) se justifica si el color es crítico en tu trabajo.

## Samsung ViewFinity S9 5K

La alternativa para usuarios de Mac que quieren una experiencia similar al Studio Display pero con mejor relación precio-calidad. Panel IPS de 5120×2880 con integración nativa con macOS.

### Características destacadas
- Cámara 4K integrada con Center Stage (seguimiento automático)
- Altavoces de 4 drivers con soporte Spatial Audio
- USB-C con carga de 90W
- Precio: ~$900 USD

## Dell UltraSharp U2725D: la opción racional

Para quienes no necesitan OLED ni 5K, el Dell UltraSharp 27" 4K sigue siendo la referencia en paneles IPS. Cobertura sRGB del 100%, calibración de fábrica y garantía de pixel perfecto.

- Precio: ~$500 USD
- Panel IPS de 3840×2160 a 60Hz
- USB-C con 90W de carga

## Recomendación por presupuesto

- **Menos de $500**: Dell UltraSharp U2725D
- **$500–$900**: Samsung ViewFinity S9 (si usás Mac)
- **Más de $900**: LG UltraFine OLED Pro 27"
    `.trim(),
    author: 'Valentina Cruz',
    date: '2026-01-20',
    category: 'Periféricos',
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    imageAlt: 'Monitor 4K sobre escritorio de home office',
  },
  {
    id: 9,
    title: 'DJI Mini 5 Pro: el mejor dron para principiantes en 2026',
    slug: 'dji-mini-5-pro-review-2026',
    description:
      'Review del DJI Mini 5 Pro: menos de 250g, cámara de 1 pulgada, evitación de obstáculos en todas direcciones y 45 minutos de vuelo.',
    content: `
## Por qué el límite de 250g importa

En la mayoría de los países, los drones de menos de 250g tienen regulaciones de vuelo más flexibles: no requieren registro obligatorio y pueden volar en más zonas. El DJI Mini 5 Pro mantiene ese límite con un hardware que antes era impensable en ese peso.

## Cámara: el gran salto

El Mini 5 Pro equipa un sensor de 1 pulgada, el mismo tamaño que usaba el Mavic 3 hace dos años. En condiciones de poca luz, la diferencia respecto al Mini 4 Pro es notable.

### Especificaciones de imagen
- Foto: 50MP con apertura f/1.7
- Video: 4K/120fps o 5.1K/60fps en H.265
- Rango dinámico: 12.8 stops (modo D-Log M)
- Estabilización: gimbal de 3 ejes + EIS digital

## Autonomía y conectividad

- Tiempo de vuelo: hasta 45 minutos por batería
- Transmisión O4+: video en tiempo real a 1080p/60fps hasta 20km
- Detección de obstáculos en las seis direcciones (novedad respecto al Mini 4 Pro)

## QuickShots y modos automáticos

Para principiantes, los QuickShots permiten obtener tomas cinematográficas con un toque: Dronie, Helix, Rocket, Boomerang y el nuevo Spotlight 360 que orbita un sujeto en movimiento.

## ¿Para quién es?

- Viajeros que no quieren lidiar con regulaciones complejas
- Creadores de contenido que buscan calidad de cámara profesional en formato compacto
- Principiantes que quieren aprender a volar sin arriesgar un equipo caro

## Conclusión

A $799 USD, el DJI Mini 5 Pro es el dron más completo en su categoría de peso. La cámara de 1 pulgada lo eleva por encima de cualquier competidor directo.
    `.trim(),
    author: 'Diego Fernández',
    date: '2026-01-08',
    category: 'Drones',
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
    imageAlt: 'Dron compacto volando sobre paisaje natural',
  },
  {
    id: 10,
    title: 'PS5 Pro vs Xbox Series X Refresh: consolas en 2026',
    slug: 'ps5-pro-vs-xbox-series-x-refresh-2026',
    description:
      'Comparamos la PS5 Pro con el Xbox Series X Refresh: ray tracing nativo a 4K/60fps, tiempos de carga y el estado actual de los exclusivos.',
    content: `
## El gaming en consolas alcanzó su madurez

En 2026, tanto Sony como Microsoft lanzaron versiones actualizadas de sus consolas insignia. No son generaciones nuevas, sino saltos de rendimiento que habilitan 4K nativo con ray tracing sin sacrificar 60fps.

## PS5 Pro

Sony lanzó la PS5 Pro con una GPU un 45% más potente que la PS5 original y el nuevo sistema PSSR (PlayStation Spectral Super Resolution), su versión del DLSS que genera imágenes 4K a partir de renders internos de menor resolución.

### Rendimiento
- 4K/60fps con ray tracing en la mayoría de los títulos actuales
- 8K/30fps en títulos optimizados (pocos, pero existen)
- Tiempos de carga: prácticamente idénticos a PS5 (el SSD ya era muy rápido)

### Exclusivos destacados en 2026
- Gran Turismo 8 con simulación de física renovada
- Horizon: Zero Dawn III en mundo abierto sin tiempos de carga
- Spider-Man 3 con trazado de rayos en tiempo real completo

## Xbox Series X Refresh

Microsoft actualizó el Series X con más RAM (20GB vs 16GB) y soporte para almacenamiento NVMe externo estándar, eliminando la dependencia de las tarjetas propietarias de expansión.

### Game Pass en 2026
El gran diferencial de Xbox sigue siendo Game Pass Ultimate: más de 400 juegos incluidos, con todos los títulos first-party desde el día uno. En 2026, el catálogo incluye los juegos de Activision Blizzard.

### Rendimiento
- 4K/60fps nativo sin upscaling en la mayoría de los títulos
- Auto HDR mejorado con detección de escena por IA
- FPS Boost para más de 100 títulos de generaciones anteriores

## ¿Cuál elegir?

Si priorizás los exclusivos y la experiencia de juego más pulida: PS5 Pro. Si preferís la flexibilidad del Game Pass y jugar también en PC: Xbox Series X Refresh.
    `.trim(),
    author: 'Tomás Aguirre',
    date: '2025-12-15',
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&q=80',
    imageAlt: 'Consola de videojuegos con control inalámbrico',
  },
]

export const ARTICLES_PER_PAGE = 5

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug)
}

export function getTotalPages(): number {
  return Math.ceil(articles.length / ARTICLES_PER_PAGE)
}

export function getPaginatedArticles(page: number): Article[] {
  const start = (page - 1) * ARTICLES_PER_PAGE
  return articles.slice(start, start + ARTICLES_PER_PAGE)
}
