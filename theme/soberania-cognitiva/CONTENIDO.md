# Guía simple — Ghost IndioYori (theme v1.5.0)

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
| Leer el archivo y el sitio | sí | sí | sí |
| Comentar | — | sí | sí |
| Chat general | — | sí | sí |
| Chat exclusivo + espacio de trabajo | — | — | sí |

---

## Texto de Membresía (el que ya lleva el theme)

> El archivo sigue libre.  
> La membresía da acceso a un espacio de trabajo para quien necesita información más especializada: bases de arquitecturas RAG soberanas, análisis de datos con criterio, protocolos para organizar conocimiento y defensa del territorio, y marcos de geopolítica del conocimiento aplicados a proyectos reales.  
> Si defiendes activamente el territorio y no puedes pagar la membresía, escríbeme.  
> **$350 MXN al mes.**  
> **Apoya el proyecto** (botón aparte, si no tomas membresía pero quieres aportar dinero).

En Ghost: página título **Membresía**, slug `membresia`, template **Membresía**.  
Membership: tier Free + tier **Membresía · 350 MXN/mes**.

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

## Membresía (Stripe)

Customize → **Membership stripe url** (ya trae por defecto):  
`https://buy.stripe.com/3cI5kD0Z1d1Z9t91Iedby08`

## Theme

Descarga:  
https://github.com/FronterIA-Lab/Blog_Indioyori/raw/cursor/ghost-diseno-contenido-5ed3/soberania-cognitiva.zip  

Design → Upload → Activate.

**Contacto:** en la página de Ghost, borra cualquier nota tuya del editor (instrucciones internas). El theme ya no muestra tips de configuración al público.
