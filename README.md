# Presencia Local · Biblioteca de plantillas

Este repositorio contiene seis aplicaciones independientes creadas con [Vue 3](https://vuejs.org/) y [Vite](https://vitejs.dev/):

- Cinco plantillas listas para adaptar a negocios locales concretos.
- Una web comercial para presentar tu servicio de creación y mantenimiento de sitios web por suscripción.

Cada proyecto funciona de forma autónoma para que puedas desplegarlo o personalizarlo según las necesidades de cada cliente.

## Estructura

```
.
├─ servicio-web/                # Landing comercial de tu servicio
└─ templates/
   ├─ taller-mecanico/          # Plantilla para taller mecánico
   ├─ peluqueria/               # Plantilla para peluquería
   ├─ restaurante/              # Plantilla para restaurante
   ├─ clinica-fisioterapia/     # Plantilla para clínica de fisioterapia
   └─ floristeria/              # Plantilla para floristería
```

Cada carpeta contiene un proyecto Vite con las carpetas `src/assets`, `src/data`, `src/theme` y `src/components` (cuando son necesarias).

## Requisitos previos

- Node.js >= 18
- npm (o pnpm / yarn si lo prefieres)

Instala las dependencias dentro de cada proyecto con `npm install` y ejecuta el servidor de desarrollo con `npm run dev`.

```bash
cd templates/taller-mecanico
npm install
npm run dev
```

Repite el proceso en el proyecto que quieras visualizar. Cada servidor se abre en un puerto distinto (Vite te lo indicará por consola).

## Personalización rápida de cada plantilla

Todas las plantillas comparten la misma filosofía:

| Elemento | Archivo a modificar | Descripción |
|----------|--------------------|-------------|
| Colores y tipografía | `src/theme/theme.ts` | Define un objeto con las variables CSS (`--color-primary`, `--color-accent`, etc.). Cambia aquí la gama de colores o la familia tipográfica y se aplicará a todo el sitio. |
| Textos, servicios, CTA | `src/data/businessInfo.ts` | Contiene la información del negocio: hero, servicios, diferenciales, testimonios y datos de contacto. Ajusta los textos a cada cliente en un único fichero. |
| Logo | `src/assets/logo.svg` (o reemplázalo por `logo.png`) | Sustituye el archivo por el logotipo del negocio. Se mostrará automáticamente en el hero y el footer gracias a la referencia dinámica que hace Vue. |

> **Consejo:** si quieres usar un PNG en vez del SVG de ejemplo, mantén el nombre (`logo.png` o `logo.svg`) y la ruta `src/assets/` para que el componente lo cargue sin cambios adicionales.

### Secciones incluidas en todas las plantillas

- Hero con llamada a la acción principal y secundaria.
- Listado de servicios adaptado a cada sector.
- Bloque de diferenciales para reforzar la propuesta de valor.
- Testimonios o reseñas reales.
- Llamada a la acción final enlazada al teléfono (usa `tel:+34...`).
- Footer con datos de contacto básicos.

La maquetación está pensada para ser responsive desde móviles hasta escritorio. Puedes ampliar el diseño creando componentes Vue adicionales dentro de `src/components` si lo necesitas.

## Web comercial (`servicio-web`)

La landing "Presencia Local" explica tu propuesta de valor y presenta los tres planes de suscripción:

- **Plan Esencial:** alta de 150 € + 29 €/mes.
- **Plan Plus:** alta de 250 € + 49 €/mes.
- **Plan Premium:** alta de 350 € + 79 €/mes.

Esta aplicación usa [Pinia](https://pinia.vuejs.org/) (`src/stores/planStore.ts`) para gestionar el plan seleccionado y resaltar la tarjeta correspondiente al pasar el ratón. Los datos de planes y plantillas se encuentran en `src/data/plans.ts` y `src/data/templates.ts`.

### Cómo lanzar la landing

```bash
cd servicio-web
npm install
npm run dev
```

### Personalización

- **Tema visual:** edita `src/theme/theme.ts` para cambiar colores o tipografía de toda la landing.
- **Planes y precios:** ajusta `src/data/plans.ts`. Puedes añadir o quitar características sin tocar la maquetación.
- **Plantillas mostradas:** `src/data/templates.ts` contiene el listado que aparece en la sección "Plantillas". Cambia la descripción o sustituye `demoPath` por la URL pública donde publiques cada demo.
- **Datos de contacto:** modifica el bloque final dentro de `src/App.vue` con tu email, teléfono o enlaces reales.

## Flujo recomendado para ofrecer el servicio

1. **Demostración rápida:** ejecuta cualquier plantilla con `npm run dev` para mostrar al cliente un ejemplo funcional.
2. **Recogida de contenidos:** utiliza `src/data/businessInfo.ts` como checklist de la información que necesitas (servicios, testimonios, horarios...).
3. **Personalización visual:** adapta la paleta y tipografía en `src/theme/theme.ts`. Si el cliente tiene colores corporativos, conviértelos a formato HEX y sustitúyelos.
4. **Logo y fotografías:** coloca el logotipo en `src/assets/logo.svg` y añade imágenes adicionales en `src/assets/`. Sustituye las rutas en `App.vue` si decides usar galerías.
5. **Entrega y mantenimiento:** tras la publicación, anota las modificaciones mensuales realizadas por plan para justificar la suscripción (por ejemplo, nuevas secciones, promociones, campañas puntuales).
6. **Upselling:** cuando el negocio crezca, ofréceles migrar al plan siguiente. El store de Pinia en la landing ya resalta el plan seleccionado para ayudarte en la conversación.

## Despliegue

Cada aplicación puede desplegarse por separado en Vercel, Netlify, Render u otro proveedor estático:

1. Construye el proyecto deseado con `npm run build`.
2. Sube el contenido de `dist/` al servicio de hosting de tu elección.
3. Configura el dominio del cliente y apunta el DNS al proveedor.

> Para mantener el modelo de suscripción, deja activo el repositorio y realiza las actualizaciones directamente en la rama del cliente, publicando de nuevo tras cada cambio mensual.

## Próximos pasos sugeridos

- Crear componentes reutilizables (por ejemplo, `ServiceCard.vue`) para acelerar futuras plantillas.
- Añadir un formulario real en la landing usando un servicio como Formspree o Netlify Forms.
- Automatizar la sincronización del logo: podrías incluir un script que convierta automáticamente SVG o PNG a los tamaños necesarios.

---

Si necesitas soporte adicional o quieres ampliar las plantillas con nuevas funcionalidades (blog, reservas online, catálogos interactivos), puedes seguir extendiendo estos proyectos gracias a la estructura modular de Vue 3.
