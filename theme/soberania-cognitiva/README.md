# Soberanía Cognitiva — Theme de Ghost

Theme para **IndioYori**. Diseño limpio en **blanco y negro** (el color lo ponen tus imágenes) y tipografía **Space Mono**. Pensado para **Ghost Pro**.

## 1. Subir el theme a Ghost

**Opción A — Subir el .zip (la más sencilla):**
1. Descarga `soberania-cognitiva.zip` (está en la raíz del repositorio).
2. En tu Ghost: **Settings → Design & branding → Change theme → Upload theme**.
3. Sube el `.zip` y pulsa **Activate**.

**Opción B — Publicación automática desde GitHub (opcional):**
Usa la GitHub Action oficial `TryGhost/action-deploy-theme` para que cada cambio se publique solo. Requiere crear una *Custom Integration* en Ghost y guardar `GHOST_ADMIN_API_URL` y `GHOST_ADMIN_API_KEY` como *secrets* en GitHub. (Puedo dejártela lista si la quieres.)

## 2. Crear las páginas (una sola vez)

En Ghost, **Pages → New page** y crea estas páginas. En cada una, abre los **ajustes** (rueda dentada arriba a la derecha) → **Template** y elige la plantilla indicada:

| Página (título) | Slug (URL) | Template a elegir |
|---|---|---|
| Manifiesto | `manifiesto` | *Default* (página normal) |
| Talleres | `talleres` | **Talleres** |
| Archivo | `archivo` | **Archivo** |
| Comunidad | `comunidad` | **Comunidad** |
| Contacto | `contacto` | **Contacto** |

> El texto de cada página lo escribes tú en el editor de Ghost. La plantilla solo pone el diseño alrededor.

## 3. Menú de navegación

**Settings → Navigation** y agrega los enlaces (Ghost los muestra en la cabecera):
`Inicio → /` · `Manifiesto → /manifiesto/` · `Talleres → /talleres/` · `Archivo → /archivo/` · `Comunidad → /comunidad/` · `Contacto → /contacto/`

La **navegación secundaria** de Ghost se usa como barra de filtros en la portada (p. ej. enlaces a etiquetas: `/tag/nota/`, `/tag/podcast/`).

## 4. El Archivo se llena solo con etiquetas

La página **Archivo** arma sus bloques automáticamente según la **etiqueta** de cada publicación:

- `nota` → bloque **Notas & posts**
- `video` → bloque **Video** (la portada lleva a la publicación con el video embebido)
- `podcast` → bloque **Podcast**
- `pdf` → bloque **PDFs & documentos**

Solo etiqueta tus posts con esas palabras. La **imagen de portada** (feature image) de cada post es la que se ve en las tarjetas.

## 5. Ajustes del theme (colores y textos rápidos)

En **Settings → Design & branding → (tu theme) → Customize** puedes editar sin tocar código:

- **sysbar_prompt / sysbar_tagline** — la barra tipo terminal de arriba.
- **logo_subtitle** — el subtítulo bajo el nombre.
- **hero_eyebrow / hero_heading / hero_subheading / hero_image** — el bloque grande de la portada.
- **show_hero** — mostrar u ocultar la portada grande.
- **matrix_room_url** — la sala de chat en vivo (Element/Matrix) de la página Comunidad.
- **contact_endpoint** — URL de tu formulario (Formspree/Basin/Worker). Si lo dejas vacío, el formulario abre el correo.
- **contact_email** — tu correo de contacto.

## 6. Vender (Stripe) y comunidad

- **Cobros:** se configuran en **Settings → Membership** (Ghost conecta Stripe de forma nativa). Crea tus **Tiers** (niveles) y aparecerán solos en la página **Talleres**. Para pagos únicos (un libro, un lugar en un taller) puedes usar botones con Payment Links de Stripe dentro del contenido.
- **Foro / comentarios:** activa **Settings → Comments** para que los miembros conversen en cada publicación.
- **Chat en vivo:** se muestra vía Matrix en la página Comunidad (ajuste `matrix_room_url`).

## 7. Imágenes incluidas

En `assets/img/` van las imágenes seleccionadas de tu archivo, disponibles como respaldo (por ejemplo, el retrato del hero). Puedes reemplazarlas subiendo las tuyas desde Ghost.
