# Soberanía Cognitiva — Theme de Ghost (v1.2)

**Sitio:** https://indioyori.ghost.io  
**Zip:** `soberania-cognitiva.zip` en la raíz del repo  
**Kit paso a paso:** [`CONTENIDO.md`](./CONTENIDO.md)

## Modelo de acceso

- **Público:** todo el conocimiento publicado, archivo, info de talleres, contacto.
- **Miembros:** comentarios.
- **Miembros de pago ($500 MXN/mes):** chat privado Matrix + recursos avanzados + botón Donar en `/membresia/`.
- **Talleres/cursos/libros:** pago único por Stripe (Payment Link) dentro de `/talleres/`.

## Plantillas de página

| Template en Ghost | Archivo |
|---|---|
| Manifiesto | `custom-manifiesto.hbs` |
| Talleres | `custom-talleres.hbs` |
| Archivo | `custom-archivo.hbs` |
| Comunidad | `custom-comunidad.hbs` |
| Membresía | `custom-membresia.hbs` |
| Contacto | `custom-contacto.hbs` |

## Navegación recomendada

Primary: Inicio · Manifiesto · Talleres · Archivo · Comunidad · Membresía · Contacto  
Secondary: Notas `/tag/nota/` · Talleres `/tag/taller/` · Podcast `/tag/podcast/` · Territorio `/tag/territorio/`

## Customize

| Ajuste | Uso |
|---|---|
| `matrix_room_url` | Sala **privada** (solo se muestra a miembros de pago) |
| `matrix_user` | `@indioyori:matrix.org` |
| `donate_url` | Payment Link de donación |
| `contact_email` / `contact_endpoint` | Formulario de contacto |

## Subir

Settings → Design → Upload theme → Activate `soberania-cognitiva.zip`.
