# Cambios finales — Soberanía Cognitiva (sin Imagen aún)

Sitio: https://indioyori.ghost.io · Theme **v1.4**  
Pendiente para después: galería **Tezcatlipoca Digital** (no va en este paquete).

---

## Mapa del sitio

| Destino | Rol |
|---|---|
| **Inicio** | Río de lo publicado + filtros Análisis / Video / Podcast / Territorio |
| **Archivo** | Biblioteca: notas & análisis, video, podcast, documentos |
| **Manifiesto** | Tesis |
| **Talleres** | Formación · pago único Stripe por producto |
| **Comunidad** | Chat general (cuenta gratis) + chat exclusivo (Círculo) |
| **Círculo** | Espacio de trabajo especializado · $350 MXN/mes |
| **Contacto** | Entrada verificada |

**Hero:** Archivo · Manifiesto · Talleres  
**Círculo** vive en el menú, no en el hero.

---

## Acceso

| | Sin cuenta | Cuenta gratis | Círculo $350 |
|---|---|---|---|
| Leer archivo, manifiesto, info de talleres | sí | sí | sí |
| Contacto | sí | sí | sí |
| Comentar | — | sí | sí |
| Chat general Matrix | — | sí | sí |
| Chat exclusivo + espacio de trabajo | — | — | sí |
| Talleres / cursos | pago por producto | pago por producto | pago por producto |
| Apoya el proyecto | botón opcional | botón opcional | botón opcional |

---

## 1. Subir theme v1.4

https://github.com/FronterIA-Lab/Blog_Indioyori/raw/cursor/ghost-diseno-contenido-5ed3/soberania-cognitiva.zip  

Design → Upload theme → **Activate**.

### Customize

| Campo | Valor |
|---|---|
| Sysbar prompt | `indioyori@anáhuac` |
| Sysbar tagline | `territorio Yoreme · Ódami · formación · crítica · comunidad` |
| Logo subtitle | `Soberanía Cognitiva` |
| Hero eyebrow | `investigador autónomo · CLACSO · yoreme · ódami` |
| Hero heading | `Soberanía cognitiva frente a la colonización de la gramática en los LLM.` |
| Hero subheading | `Análisis, video, podcast y documentos desde territorio Anáhuac. El archivo es libre.` |
| Show hero | ON |
| Matrix room url | URL del **chat general** |
| Matrix paid room url | URL del **chat exclusivo** (Círculo) |
| Matrix user | `@indioyori:matrix.org` |
| Donate url | Payment Link de **Apoya el proyecto** (cuando lo tengas) |
| Contact email | `indioyori@fronteria-lab.com` |
| Contact endpoint | vacío por ahora |

---

## 2. Navegación

### Primary

| Label | URL |
|---|---|
| Inicio | `/` |
| Archivo | `/archivo/` |
| Manifiesto | `/manifiesto/` |
| Talleres | `/talleres/` |
| Comunidad | `/comunidad/` |
| Círculo | `/membresia/` |
| Contacto | `/contacto/` |

### Secondary (filtros de portada)

| Label | URL |
|---|---|
| Análisis | `/tag/nota/` |
| Video | `/tag/video/` |
| Podcast | `/tag/podcast/` |
| Territorio | `/tag/territorio/` |

---

## 3. Páginas y plantillas

| Título en Ghost | Slug | Template |
|---|---|---|
| Manifiesto | `manifiesto` | **Manifiesto** |
| Talleres, libros y herramientas | `talleres` | **Talleres** |
| El archivo de lo improbable | `archivo` | **Archivo** |
| Comunidad | `comunidad` | **Comunidad** |
| Círculo | `membresia` | **Membresía** |
| Contacto | `contacto` | **Contacto** |

(Slug `membresia` se mantiene para no romper enlaces; el nombre visible es **Círculo**.)

---

## 4. Texto del Círculo (pegar en la página)

**Title:** `Círculo`  
**Excerpt:** `Espacio de trabajo especializado · $350 MXN al mes. El archivo sigue libre.`

**Cuerpo** (opcional; el theme ya muestra el bloque principal):

```
El archivo sigue libre. La membresía da acceso a un espacio de trabajo para quien necesita información más especializada: bases de arquitecturas RAG soberanas, análisis de datos con criterio, protocolos para organizar conocimiento y defensa del territorio, y marcos de geopolítica del conocimiento aplicados a proyectos reales.

Si defiendes activamente el territorio y no puedes pagar la membresía, escríbeme.

$350 MXN al mes.

Apoya el proyecto — si no entras al Círculo pero quieres sostener el trabajo con dinero.
```

### Membership en Ghost
1. Tier **Free** activo  
2. Tier de pago: nombre `Círculo`, **350 MXN / month**, Stripe  
3. Comments → **Members**  
4. Dos salas Matrix → `matrix_room_url` (general) y `matrix_paid_room_url` (exclusiva)

### Apoya el proyecto
Payment Link de Stripe → Customize → **Donate url** (el botón en el sitio dice **Apoya el proyecto**).

---

## 5. Talleres — ofertas actuales (pegar)

**Excerpt:** `Formación en vivo. Cada producto tiene su pago Stripe. El Círculo mensual es aparte.`

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

El programa central: marco teórico-operativo y entrega técnica. Para quien investiga, enseña o defiende territorio y necesita salir con criterio — y con sistema.

**Inicio:** 7 de agosto de 2026  
**~16 horas en vivo · cupo 20 · horario Ciudad de México**  
**$6,500 MXN** · pago completo

- Soberanía cognitiva aplicada a investigación, docencia e incidencia
- Arquitecturas RAG y búsqueda eficiente con citas a la fuente
- Construcción de tu propio sistema RAG soberano
- App de organización visual (incluida)

[Reservar mi lugar · $6,500 MXN](https://buy.stripe.com/TU_LINK_RAG)  
[Solicitar propuesta grupal / institucional](/contacto/)
```

---

## 6. Etiquetas de contenido

| Etiqueta | Dónde aparece |
|---|---|
| `nota` | Archivo → Notas & análisis · filtro Análisis |
| `video` | Archivo → Video · filtro Video |
| `podcast` | Archivo → Podcast · filtro Podcast |
| `pdf` | Archivo → Documentos |
| `territorio` | filtro Territorio |

---

## 7. Después (no ahora)

**Tezcatlipoca Digital** — galería de imágenes cyberpunk políticas, descarga libre, con o sin texto. Página propia cuando lo digas.
