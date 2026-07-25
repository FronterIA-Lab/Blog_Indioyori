# Organización del sitio — IndioYori / Ghost

Sitio: https://indioyori.ghost.io · Admin: https://indioyori.ghost.io/ghost/

## Cómo está organizado el acceso

Tres capas. El sitio es usable **sin pagar**.

| Qué | Sin cuenta | Cuenta gratis | Círculo de pago |
|---|---|---|---|
| Leer notas, manifiesto, archivo, info de talleres | sí | sí | sí |
| Contacto seguro | sí | sí | sí |
| Comentar | — | sí | sí |
| Chat general (Matrix) | — | sí | sí |
| Chat exclusivo (Matrix) | — | — | sí |
| Recursos avanzados | — | — | sí |
| Talleres/cursos (pago único Stripe) | ver + pagar | ver + pagar | ver + pagar |
| Donar | botón en Membresía | botón en Membresía | botón en Membresía |

**Importante:** cuenta gratis ≠ círculo de pago.  
**Importante:** pagar un taller ≠ membresía mensual.

---

## 1. Sube el theme v1.2

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
| Hero subheading | `Talleres, archivo, podcast y comunidad desde territorio Anáhuac. Hablo de IA y sistemas RAG soberanos, geopolítica del conocimiento y decolonización.` |
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

### Secondary (filtros; si no los pones, el theme ya muestra Notas/Talleres/Podcast/Territorio)

| Label | URL |
|---|---|
| Notas | `/tag/nota/` |
| Talleres | `/tag/taller/` |
| Podcast | `/tag/podcast/` |
| Territorio | `/tag/territorio/` |

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
- **Excerpt:** `Cuenta gratis para comentar y chat general. El círculo de pago suma chat exclusivo y recursos avanzados. El sitio se lee sin pagar.`

**Cuerpo:**

```
## Tres formas de estar

**Sin cuenta** — lees todo lo publicado y te inscribes a talleres.

**Cuenta gratis** — comentas y entras al chat general. El sitio ya es funcional.

**Círculo de pago** — lo mismo, más chat exclusivo y materiales avanzados (RAG, datos, protocolos). Es opcional y asequible.

La inscripción a un taller o curso es un pago aparte (Stripe en cada producto). No sustituye la membresía ni al revés.
```

### En Ghost (Membership)
1. Settings → Membership → conecta **Stripe**
2. Deja el tier **Free** activo (cuenta gratis)
3. Crea un tier de pago: nombre `Círculo`, precio ej. **500 MXN / month**
4. Settings → Membership → **Comments** → Members (cuenta requerida; gratis vale)
5. En Matrix/Element: crea **dos salas**
   - General → pégala en `matrix_room_url`
   - Exclusiva (invitación / miembros de pago) → `matrix_paid_room_url`

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
