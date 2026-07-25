# Guía simple — Ghost IndioYori (theme v1.5.5)

Sitio: https://indioyori.ghost.io  

Nombres claros en español. Sin renombres raros.  
Pendiente para después: **Tezcatlipoca Digital** (imágenes).

---

## Páginas del menú

| Label | URL | Template |
|---|---|---|
| Inicio | `/` | (portada) |
| Archivo | `/archivo/` | Archivo |
| Manifiesto | `/manifiesto/` | Manifiesto |
| **Membresía** | `/membresia/` | **Membresía** |
| Talleres | `/talleres/` | Talleres |
| Comunidad | `/comunidad/` | Comunidad |
| Contacto | `/contacto/` | Contacto |

**Contacto siempre visible** en el theme (botón arriba + pie). Además, en Ghost:

1. **Pages** → New page → título `Contacto` → slug `contacto` → template **Contacto** → Publish  
2. (Opcional) **Settings → Navigation** → Add: Label `Contacto` · URL `/contacto/` → Save  
3. Probar: `https://indioyori.ghost.io/contacto/`

**Membresía va antes que Talleres** en el menú. Además aparece arriba dentro de `/talleres/`.

### Si Membresía da error
1. **Pages → New page** (si no existe): título `Membresía`, slug exacto `membresia`, template **Membresía**, Publish.  
2. El botón de pago abre Stripe. Si Stripe marca error: en [Dashboard Stripe → Payment Links](https://dashboard.stripe.com/payment-links) verifica que el link esté activo (modo Live, no Test).  
3. Navigation: `Membresía` → `/membresia/` (no `#/portal/...` si usas Stripe directo).

**Hero:** Archivo · Manifiesto · Talleres  

**Secondary (filtros):** Análisis `/tag/nota/` · Video `/tag/video/` · Podcast `/tag/podcast/` · Territorio `/tag/territorio/`

---

## Acceso

| | Sin cuenta | Cuenta gratis | Membresía $350 |
|---|---|---|---|
| Leer lo publicado (archivo, manifiesto, info de talleres) | sí | sí | sí |
| Comentar | — | sí | sí |
| Chat general | — | sí | sí |
| Material especializado + sala de trabajo | — | — | sí |

**Lógica:** lo publicado no tiene costo. La membresía no es exclusividad VIP: suma herramientas y conocimiento especializado que no se publica en el archivo. Quien no paga no pierde acceso a lo publicado.

---

## Tiers de Ghost (Settings → Membership)

### Gratis
**Descripción:** Todo lo publicado en el sitio se consulta sin pagar. La cuenta es opcional: sirve para comentar y unirte al chat general.

Beneficios:
- Archivo completo: notas, videos, podcasts y documentos
- Manifiesto e información de talleres sin muro de pago
- Cuenta opcional para comentar y chat general
- Nada de lo publicado exige membresía

### Membresía · $350 MXN/mes
**Descripción:** Añade herramientas y conocimiento especializado que no publico en el archivo. No es un acceso VIP: es una capa de trabajo. Si no la tomas, tu acceso a lo publicado no se reduce.

Beneficios:
- Todo el acceso libre
- Material especializado que no va al archivo público
- Especialización en análisis de datos con criterio
- Bases y protocolos de arquitecturas RAG soberanas
- Protocolos para conocimiento y defensa del territorio
- Marcos de geopolítica del conocimiento para proyectos
- Sala de trabajo en Matrix

---

## Texto de Membresía (en el theme)

> Lo publicado no tiene costo.  
> Todo lo del Archivo se consulta sin pagar. La membresía no convierte ese conocimiento en privilegio.  
> Lo que aporta es una capa de trabajo: herramientas y conocimiento especializado que no publico en el sitio.  
> Si no te interesa o no puedes pagarla, tu acceso a lo publicado no se reduce.  
> Si defiendes activamente el territorio y no puedes pagar, escríbeme.  
> **$350 MXN al mes.**  
> **Apoya el proyecto** (botón aparte).

En Ghost: página título **Membresía**, slug `membresia`, template **Membresía**.

---

## Tags

| Tag | Dónde aparece |
|---|---|
| `taller` | Página **Talleres** (MCC, RAG, etc.) |
| `nota` | Archivo → Notas & análisis |
| `video` | Archivo → Video |
| `podcast` | Archivo → Podcast |
| `pdf` | Archivo → Documentos |
| `territorio` | Filtro Territorio |

Para un taller: **Post** → texto + botón Stripe → tag **`taller`** → Publish.

## Precios (escala)

| Oferta | Precio | Lógica |
|---|---|---|
| Acceso a lo publicado | $0 | Sin muro |
| Membresía | **$350 MXN/mes** | Capa de trabajo especializada (no VIP) |
| Taller MCC | **$2,900 MXN** | Taller intensivo / referente (no “taller de prompts”) |
| Programa RAG soberano | **$6,500 MXN** | ~16 h, cohort; ~2.2× el MCC por profundidad y duración |
| Apoya el proyecto | lo que quieras | Donación aparte |

**Programa RAG — cómo debe quedar el post**
- Título: **Sistemas RAG de borde y soberanía algorítmica**
- Precio fijo: **$6,500 MXN** (pago único)
- Inicio: **31 de julio de 2026**
- Duración: **~16 horas en vivo** · cupo **20** · horario CDMX
- Tag: `taller`
- Excerpt: `~16 h en vivo para diseñar e implementar un RAG soberano en perímetro propio. Inicia 31 jul 2026 · cupo 20 · $6,500 MXN.`
- En el cuerpo: precio + fechas + a quién va + qué incluye (sistema propio + app visual) + botón Stripe.

## Archivo / Manifiesto (Ghost)

- **Archivo:** si ves instrucciones internas en la página, ábrela en Pages → borra todo el texto del editor → Update. El theme ya arma las secciones.
- **Manifiesto:** página slug `manifiesto`, template **Manifiesto**. El texto ya viene en el theme (`custom-manifiesto.hbs`); deja el editor vacío y se muestra solo. Si pegas texto en el editor, ese texto reemplaza el default. Copia de respaldo: `site/manifiesto.html`.

## Chat Matrix (Comunidad)

1. Pages → página `Comunidad`, slug `comunidad`, template **Comunidad**, Publish.  
2. Menú → `Comunidad` → `/comunidad/`.  
3. Design → Customize → **Matrix room url** (default: sala `#Soberania_Cognitiva:matrix.org`).  
4. En la página verás el botón **Abrir chat en Element**. Element a menudo no carga dentro del iframe; el botón es el camino fiable.  
5. Sala de membresía (opcional): **Matrix paid room url**.

## Membresía (Stripe)

Customize → **Membership stripe url** (ya trae por defecto):  
`https://buy.stripe.com/3cI5kD0Z1d1Z9t91Iedby08`

## Theme

Descarga:  
https://github.com/FronterIA-Lab/Blog_Indioyori/raw/cursor/ghost-diseno-contenido-5ed3/soberania-cognitiva.zip  

Design → Upload → Activate.

**Contacto (gratis · sin Formspree):**

Opción A — Namecheap (recomendado si ya pagas hosting):
1. Sube `hosting/contacto.php` a tu hosting (cPanel → File Manager), p. ej. `https://fronteria-lab.com/contacto.php`
2. Edita `$TO` en el PHP si tu correo no es `indioyori@fronteria-lab.com`
3. Ghost → Design → Customize → **Contact endpoint** = esa URL → Save
4. Prueba el formulario. Si Namecheap bloquea `mail()`, en cPanel activa “Email Routing” / usa un correo del dominio.

Opción B — sin nada:
- Deja **Contact endpoint** vacío. Solo funciona `mailto` (abre el correo del visitante).

**Formspree activo (IndioYori):**  
`https://formspree.io/f/mjgnppap`  
→ Design → Customize → **Contact endpoint**  

Si sale error **403 / reCAPTCHA**: Formspree → form `mjgnppap` → **Settings** → desactiva **reCAPTCHA** → Save. (El theme envía por AJAX; con reCAPTCHA activo Formspree lo bloquea.)
