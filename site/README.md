# Soberanía Cognitiva · Indioyori

Sitio web multipágina de **IndioYori** (yoreme y ódami · investigador autónomo · ingeniero RAG · académicx del CLACSO). Diseño limpio, político, técnico y tecnológico.

- **Diseño:** adaptado del tema *Yoffa* (retícula limpia y bordeada de tarjetas).
- **Tipografía:** **Space Mono** (no negociable), cargada desde Google Fonts.
- **Acento de color:** magenta `#c01862` tomado de la imaginería de las portadas, sobre la base neutra de Yoffa.
- **Sin frameworks ni build:** HTML + CSS + un archivo JS. Se abre directo en el navegador o se sube a cualquier hosting estático.

## Estructura

```
site/
├── index.html                     Inicio (hero + retícula de tarjetas)
├── manifiesto.html                Manifiesto: la tesis de la Soberanía Cognitiva
├── talleres.html                  Talleres, libros y herramientas (ventas con Stripe)
├── archivo.html                   El archivo de lo improbable (PDFs, notas, video, podcast)
├── comunidad.html                 Chat en vivo (Matrix), foro y suscripción
├── contacto.html                  Contacto verificado (correo obligatorio + anti-spam)
├── nota-soberania-cognitiva.html  Ejemplo de nota/lectura con video embebido
├── assets/
│   ├── css/styles.css             Sistema de diseño
│   ├── js/main.js                 Menú móvil, filtros y validación del formulario
│   └── img/                       Imágenes seleccionadas del archivo entregado
└── README.md
```

## Ver el sitio en local

Cualquier servidor estático funciona. Por ejemplo:

```bash
cd site
python3 -m http.server 8000
# abre http://localhost:8000
```

## Configuración (los pendientes marcados con ✏️ en el código)

### 1. Ventas — Stripe
En `talleres.html`, cada botón de compra apunta a un marcador `https://buy.stripe.com/TU_LINK_…`.
1. Crea tus **Payment Links** en el [Dashboard de Stripe](https://dashboard.stripe.com/payment-links).
2. Reemplaza cada `TU_LINK_…` por el enlace real.
3. Para entregar PDFs automáticamente tras el pago, activa el envío de archivo/confirmación en el propio Payment Link.

### 2. Chat en vivo — Matrix / Element
En `comunidad.html`, el iframe apunta a una sala de Matrix.
1. Crea una cuenta en [Element](https://app.element.io) (homeserver `matrix.org`).
2. Crea una sala pública, p. ej. `#soberania-cognitiva:matrix.org`.
3. Sustituye el ID de la sala en el `src` del iframe.
4. Foro asíncrono opcional con [cactus.chat](https://cactus.chat), Discourse o Flarum.

### 3. Contacto seguro
En `contacto.html`, el formulario usa `data-endpoint="TU_ENDPOINT_FORMULARIO"`.
- **Sin backend:** si dejas el marcador, el formulario abre el correo con los datos ya ordenados.
- **Con backend (recomendado):** crea un endpoint en [Formspree](https://formspree.io), [Basin](https://usebasin.com) o un [Cloudflare Worker](https://developers.cloudflare.com/pages/functions/) y pega su URL en `data-endpoint`.
- El formulario ya incluye: **correo obligatorio y validado**, **honeypot** anti-bots y **control de tiempo** de envío. Para mayor seguridad, añade reCAPTCHA o Cloudflare Turnstile.

### 4. Video y podcast
En `archivo.html` y `nota-soberania-cognitiva.html`:
- Las portadas de video enlazan a la plataforma (TikTok/YouTube). Cambia los `href`.
- Para reproducir dentro del sitio, reemplaza `VIDEO_ID` (YouTube) o `TU_SHOW_ID` (Spotify) en los iframes.

### 5. Redes y correo
Actualiza los `href` de redes en el pie de página y el correo `indioyori@fronteria-lab.com` si cambia.

## Publicar (hosting estático gratuito)

- **GitHub Pages:** sube la carpeta `site/` (o configúrala como raíz de publicación).
- **Netlify / Cloudflare Pages / Vercel:** arrastra la carpeta `site/` o conéctala al repo; sin comando de build.

## Créditos de contenido

Textos y ofertas provienen del blog original entregado (`Blog_Fuera_Cyber`); el lenguaje visual proviene del diseño de referencia (`Blog_Nuevo_Mono`, tema *Yoffa*), adaptado a la identidad de IndioYori. Imágenes: archivo entregado en `Imágenes.zip`.
