# Organización del sitio — IndioYori / Ghost

Sitio: https://indioyori.ghost.io · Admin: https://indioyori.ghost.io/ghost/

## Organización del sitio (contenido primero)

| Destino | Para qué |
|---|---|
| **Inicio** | Río de lo último publicado + filtros Análisis / Video / Podcast / Territorio |
| **Archivo** | Biblioteca: notas & análisis, video, podcast, documentos históricos |
| **Manifiesto** | La tesis |
| **Talleres** | Formación de pago único (Stripe por producto) |
| **Comunidad** | Chat general (cuenta gratis) + exclusivo (pago) |
| **Membresía** | Círculo de instrumentos ($350 MXN/mes) — no paywall de contenido |
| **Contacto** | Correo verificado |

No hace falta una página aparte de “análisis”: viven en Archivo (etiqueta `nota`) y en el filtro de portada.

### Acceso (tres capas). El sitio es usable **sin pagar**.

| Qué | Sin cuenta | Cuenta gratis | Círculo $350/mes |
|---|---|---|---|
| Leer análisis, video, podcast, docs | sí | sí | sí |
| Contacto | sí | sí | sí |
| Comentar | — | sí | sí |
| Chat general | — | sí | sí |
| Chat exclusivo + instrumentos | — | — | sí |

La membresía **no es exclusividad de contenido ni club de fans**. Es un acto político: compartir instrumentos (RAG, datos, protocolos, territorio) con quien se une al proyecto.

---

## 1. Sube el theme v1.3

Descarga:  
https://github.com/FronterIA-Lab/Blog_Indioyori/raw/cursor/ghost-diseno-contenido-5ed3/soberania-cognitiva.zip

Settings → Design → Change theme → Upload → **Activate**.

### Customize (valores)

| Campo | Valor |
|---|---|
| Sysbar prompt | `indioyori@anáhuac` |
| Sysbar tagline | `territorio Yoreme · Ódami · formación · crítica · comunidad` |
| Logo subtitle | `Soberanía Cognitiva` |
| Hero eyebrow | `investigador autónomo · CLACSO · yoreme · ódami` |
| Hero heading | `Soberanía cognitiva frente a la colonización de la gramática en los LLM.` |
| Hero subheading | `Análisis, video, podcast y documentos desde territorio Anáhuac. El archivo es libre. La formación y los instrumentos del círculo son para quien quiere construir.` |
| Show hero | ON |
| Matrix room url | URL del **chat general** (cuenta gratis) |
| Matrix paid room url | URL del **chat exclusivo** (solo pago) |
| Matrix user | `@indioyori:matrix.org` |
| Donate url | tu Payment Link de donación (Stripe) cuando lo tengas |
| Contact email | `indioyori@fronteria-lab.com` |
| Contact endpoint | vacío por ahora |

---

## 2. Navegación Primary

| Label | URL |
|---|---|
| Inicio | `/` |
| Manifiesto | `/manifiesto/` |
| Talleres | `/talleres/` |
| Archivo | `/archivo/` |
| Comunidad | `/comunidad/` |
| Membresía | `/membresia/` |
| Contacto | `/contacto/` |

### Secondary (filtros de contenido en portada)

| Label | URL |
|---|---|
| Análisis | `/tag/nota/` |
| Video | `/tag/video/` |
| Podcast | `/tag/podcast/` |
| Territorio | `/tag/territorio/` |

### Hero (ya viene en el theme)
1. **El archivo de lo improbable** → `/archivo/`  
2. **Manifiesto** → `/manifiesto/`  
3. **Talleres** → `/talleres/`  

(Membresía queda en el menú, no compite en el hero.)

---

## 3. Páginas y plantillas

| Página | Slug | Template |
|---|---|---|
| Manifiesto | `manifiesto` | **Manifiesto** |
| Talleres, libros y herramientas | `talleres` | **Talleres** |
| El archivo de lo improbable | `archivo` | **Archivo** |
| Comunidad | `comunidad` | **Comunidad** |
| Membresía | `membresia` | **Membresía** |
| Contacto | `contacto` | **Contacto** |

En cada página: ⚙ → Template → elegir → Update.

---

## 4. Manifiesto — qué pegar

**Template:** Manifiesto (ya existe en v1.2).  
**Excerpt:** `Ninguna inteligencia artificial es neutral. Toda IA se entrena sobre una gramática, y esa gramática tiene dueños, geografía e historia.`

Cuerpo: el texto largo de soberanía cognitiva que ya tenías (secciones 1–5). No hace falta HTML especial: la plantilla le pone el diseño.

---

## 5. Membresía — qué pegar

Crea la página si no existe.

- **Title:** `Membresía`
- **Slug:** `membresia`
- **Template:** Membresía
- **Excerpt:** `No es exclusividad de contenido. Es un acto político: compartir instrumentos para RAG, análisis de datos y defensa del territorio. $350 MXN al mes.`

**Cuerpo:**

```
## Esto no es un club de fans

El archivo —análisis, video, podcast, documentos— sigue libre. La membresía es para quien quiere **hacer**: arquitecturas RAG, análisis de datos, protocolos de búsqueda, organización de la defensa del territorio.

Es conocimiento especializado por el que normalmente cobraría más. Lo pongo a $350 MXN/mes porque entiendo que quienes pagan se unen al proyecto, no compran un estatus.

**Sin cuenta** — lees todo.
**Cuenta gratis** — comentas + chat general.
**Círculo** — lo mismo + chat de instrumentos + herramientas avanzadas.
```

### En Ghost (Membership)
1. Settings → Membership → conecta **Stripe**
2. Tier **Free** activo
3. Tier de pago: nombre `Círculo de instrumentos`, **350 MXN / month**
4. Comments → Members
5. Matrix: sala general → `matrix_room_url` · sala exclusiva → `matrix_paid_room_url`

### Donar
Crea un Payment Link en Stripe (monto libre o fijo) y pégalo en Customize → `donate_url`.

---

## 6. Talleres — qué pegar (ofertas actuales)

- **Title:** `Talleres, libros y herramientas`
- **Slug:** `talleres`
- **Template:** Talleres
- **Excerpt:** `Formación en vivo y programas. Cada producto tiene su propio pago con Stripe. La membresía mensual es aparte.`

**Cuerpo** (cambia `TU_LINK_…` por tus Payment Links reales):

```
## Taller MCC · abierto

**Sábado 1 de agosto de 2026 · 17:00–20:00** (hora del centro de México)  
Sesión única en vivo · cupo 20 · pago completo · **$2,300 MXN**

Método de Calibración Contextual: usar IA sin ceder tu autoridad epistémica.

Interrumpe la gramática de optimización de los LLM: mapear exclusiones, sostener contradicciones y reposicionarte como quien produce y valida el conocimiento.

- Detectar certeza sin sustancia
- Mapear exclusiones y tensiones irreductibles
- Pedir marcos, no planes empaquetados
- Demo en vivo de TEKTRON

Las próximas fechas se publican cuando abre cada convocatoria. Ahora solo está abierta esta.

[Reservar mi lugar · $2,300 MXN](https://buy.stripe.com/TU_LINK_TALLER_MCC)

---

## Soberanía cognitiva y sistemas RAG

El programa central de esta formación: marco teórico-operativo y entrega técnica. Pensado para quien investiga, enseña o defiende territorio y necesita salir con criterio — y con sistema.

**Inicio:** 7 de agosto de 2026  
**~16 horas en vivo · cupo 20 · horario con referencia Ciudad de México**  
**$6,500 MXN** · pago completo

Para: investigadores · docentes · defensa del territorio · RAG propio · app visual incluida

Aprende a leer la gramática de los LLM, a recuperar conocimiento sobre tu corpus sin entregarlo a nubes ajenas, y a construir un sistema RAG soberano que te pertenece. Incluye, de regalo, una app de organización visual para tu flujo de trabajo.

- Soberanía cognitiva aplicada a investigación, docencia e incidencia
- Arquitecturas RAG y búsqueda eficiente con citas a la fuente
- Construcción de tu propio sistema RAG soberano
- App de organización visual (incluida)

[Reservar mi lugar · $6,500 MXN](https://buy.stripe.com/TU_LINK_RAG)  
[Solicitar propuesta grupal / institucional](/contacto/)

Tras el pago recibirás confirmación y el calendario de sesiones.
```

En el editor de Ghost, selecciona cada frase “Reservar mi lugar…” y conviértela en **Button** (tarjeta Botón) si quieres que se vea como botón grande.

---

## 7. Comunidad — qué pegar

- **Template:** Comunidad
- **Excerpt:** `El sitio es público. Comentar y el chat privado son para miembros.`

**Cuerpo:**

```
## Cómo participar

1. Lee y usa lo público sin cuenta.
2. Crea cuenta / membresía para **comentar**.
3. Membresía de pago ($500 MXN/mes) para el **chat privado** y recursos avanzados.

Más detalle en [Membresía](/membresia/).
```

---

## 8. Botones de la portada

Con el theme 1.2 la portada muestra tres botones: **Ver talleres · Manifiesto · Membresía**, y debajo los filtros (Todo / Notas / Talleres / Podcast / Territorio).

Si no los ves: recarga forzada (Ctrl+Shift+R) después de activar el theme nuevo.
