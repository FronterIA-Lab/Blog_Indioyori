# Soberanía Cognitiva — Theme de Ghost

Theme para **IndioYori**. Diseño limpio en **blanco y negro** (el color lo ponen tus imágenes) y tipografía **Space Mono**. Pensado para **Ghost Pro**.

Sitio actual: **https://indioyori.ghost.io**  
Admin: **https://indioyori.ghost.io/ghost/**

Textos listos para pegar: ver [`CONTENIDO.md`](./CONTENIDO.md).

## 1. Subir el theme a Ghost

1. Descarga `soberania-cognitiva.zip` (raíz del repositorio).
2. En Ghost: **Settings → Design & branding → Change theme → Upload theme**.
3. Sube el `.zip` y pulsa **Activate**.
4. Accent color: `#111111`.

## 2. Crear las páginas (una sola vez)

**Pages → New page**. En cada una: ⚙ → **Slug** + **Template** → Publish.

| Página (título) | Slug | Template |
|---|---|---|
| Manifiesto | `manifiesto` | *Default* |
| Talleres | `talleres` | **Talleres** |
| Archivo | `archivo` | **Archivo** |
| Comunidad | `comunidad` | **Comunidad** |
| Contacto | `contacto` | **Contacto** |

## 3. Menú de navegación

**Settings → Navigation**

**Primary**

| Label | URL |
|---|---|
| Inicio | `/` |
| Manifiesto | `/manifiesto/` |
| Talleres | `/talleres/` |
| Archivo | `/archivo/` |
| Comunidad | `/comunidad/` |
| Contacto | `/contacto/` |

**Secondary** (filtros de portada — **no** agregues “Todo”, ya viene en el theme)

| Label | URL |
|---|---|
| Notas | `/tag/nota/` |
| Talleres | `/tag/taller/` |
| Podcast | `/tag/podcast/` |
| Territorio | `/tag/territorio/` |

## 4. Archivo = etiquetas

| Etiqueta | Bloque en Archivo |
|---|---|
| `nota` | Notas & posts |
| `video` | Video |
| `podcast` | Podcast |
| `pdf` | PDFs & documentos |

## 5. Customize del theme

**Settings → Design → Customize**

| Ajuste | Para qué |
|---|---|
| `sysbar_prompt` / `sysbar_tagline` | Barra tipo terminal |
| `logo_subtitle` | Subtítulo bajo IndioYori |
| `hero_*` / `show_hero` | Portada |
| `matrix_room_url` | Iframe de la sala en vivo |
| `matrix_user` | Tu handle Matrix (aparece en Comunidad) |
| `contact_email` / `contact_endpoint` | Contacto seguro |

**Valores Matrix actuales**

- Sala: `#Soberania_Cognitiva:matrix.org`
- Usuario: `@indioyori:matrix.org`
- `matrix_room_url`: `https://app.element.io/#/room/%23Soberania_Cognitiva:matrix.org`

## 6. Comentarios (= foro) y Stripe

- **Foro:** Settings → Membership → **Enable comments**. Luego cada post los tiene por defecto; puedes apagarlos por publicación en ⚙.
- **Cobros:** Settings → Membership (Stripe nativo) + Payment Links en el contenido de Talleres.

## 7. Dominio personalizado (cuando Namecheap limpie el DNS)

Objetivo: `indioyori.fronteria-lab.com` → Ghost.

Hay una **NS huérfana** del subdominio (`dns1/dns2.namecheaphosting.com`) que bloquea el CNAME. Si no la ves en Advanced DNS, pide a soporte Namecheap que la borre y deje solo:

`indioyori` **CNAME** → el target que muestre Ghost (hoy el sitio vive en `indioyori.ghost.io`).

Mientras tanto, publica y diseña en `indioyori.ghost.io` sin problema.
