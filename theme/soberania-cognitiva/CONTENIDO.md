# Kit de contenido — Ghost (`indioyori.ghost.io`)

Copia y pega esto en el admin: `https://indioyori.ghost.io/ghost/`

---

## 0. Ajustes generales (Settings)

| Campo | Valor |
|---|---|
| Site title | `IndioYori` |
| Site description | `Soberanía cognitiva frente a la colonización de la gramática en los LLM. Talleres, archivo, podcast y comunidad.` |
| Accent color | `#111111` |
| Language / locale | `es` |
| Publication icon / logo | (opcional; si no subes logo, el theme escribe **IndioYori**) |
| TikTok / Facebook / X | tus URLs reales en Settings → Social accounts |

**Design → Customize (theme):**

| Ajuste | Valor |
|---|---|
| `matrix_room_url` | `https://app.element.io/#/room/%23Soberania_Cognitiva:matrix.org` |
| `matrix_user` | `@indioyori:matrix.org` |
| `contact_email` | `indioyori@fronteria-lab.com` |
| `contact_endpoint` | (vacío por ahora, o URL Formspree/Basin) |
| `hero_image` | sube tu retrato |

**Membership → Comments:** Enable comments (All members o Paid, como prefieras).

---

## 1. Navegación

### Primary (ya la tienes)
| Label | URL |
|---|---|
| Inicio | `/` |
| Manifiesto | `/manifiesto/` |
| Talleres | `/talleres/` |
| Archivo | `/archivo/` |
| Comunidad | `/comunidad/` |
| Contacto | `/contacto/` |

### Secondary (filtros de portada — **no** pongas “Todo”, ya viene fijo)
| Label | URL |
|---|---|
| Notas | `/tag/nota/` |
| Talleres | `/tag/taller/` |
| Podcast | `/tag/podcast/` |
| Territorio | `/tag/territorio/` |

Crea también las etiquetas: `nota`, `taller`, `podcast`, `territorio`, `video`, `pdf`.

---

## 2. Páginas

En cada una: **Pages → New page** → slug → ⚙ Template → Publish.

### Manifiesto
- **Title:** `Manifiesto`
- **Slug:** `manifiesto`
- **Template:** Default
- **Excerpt:** `Ninguna inteligencia artificial es neutral. Toda IA se entrena sobre una gramática, y esa gramática tiene dueños, geografía e historia.`

Cuerpo (pega en el editor):

```
Ninguna inteligencia artificial es neutral. Toda IA se entrena sobre una gramática, y esa gramática tiene dueños, geografía e historia. La **Soberanía Cognitiva** es el derecho de un pueblo y de una persona a pensar con criterio propio frente a la colonización de esa gramática.

Soy **IndioYori**: yoreme y ódami, académicx del CLACSO, investigador autónomo e ingeniero RAG. Trabajo en la frontera entre la inteligencia artificial y la defensa del territorio. Desde el Anáhuac construyo sistemas y palabras que no le entreguen la autoridad epistémica a nadie.

## 1. La gramática de los LLM es un territorio en disputa

Los grandes modelos de lenguaje no «saben»: optimizan. Aprenden a predecir la siguiente palabra según los patrones dominantes del corpus con el que fueron entrenados. Ese corpus está escrito, en su enorme mayoría, en la lengua, la métrica y la cosmovisión del norte global. Cuando consumimos IA sin criterio, adoptamos esa gramática como si fuera el mundo. No lo es.

> La colonización ya no llega solo por la espada o por la escuela. Llega por el autocompletado.

Mi gramática fue robada, y la que me impusieron sigue en proceso de crecimiento. Todos los días se aprende. Por eso el problema no es técnico: es político, geopolítico y profundamente íntimo.

## 2. RAG soberano: datos que no salen del perímetro

La respuesta no es rechazar la tecnología, sino poseerla. Diseño arquitecturas de **Recuperación Aumentada por Generación (RAG)** que corren en hardware propio —nodos edge, laptops, mini-PCs— para que el conocimiento de una comunidad, un despacho o un gobierno local no viaje a servidores ajenos.

- **Nodo edge soberano.** RAG sobre tu propio corpus, sin renta obligatoria ni vigilancia. Propiedad total.
- **Asistente de documentos privado.** Pregúntale a tus archivos sin que salgan de tu perímetro.
- **Abstención antes que alucinación.** Un sistema soberano sabe cuándo callar: mejor decir «no sé» que inventar con autoridad.

## 3. Método de Calibración Contextual (MCC)

El MCC es la práctica con la que enseño a consumir IA sin ceder la autoridad epistémica. No es un truco de prompts: es una disciplina de criterio.

- Reconocer la **colonialidad** de la herramienta y su gramática de optimización.
- Los cuatro movimientos del MCC para mantener el criterio propio.
- El «Árbol de Espejos» y el derecho a la abstención frente a la respuesta segura pero falsa.

Lo enseño en el [Taller MCC](/talleres/) y lo dejo, en su forma esencial, como herramienta gratuita.

## 4. Feminismo, decolonización y geopolítica del conocimiento

La soberanía cognitiva no se entiende sin el feminismo ni sin la crítica decolonial. Quién produce el conocimiento, en qué lengua, para quién y contra quién: esas preguntas son el corazón de mi trabajo. La IA que hoy se presenta como universal reproduce jerarquías muy viejas con una interfaz muy nueva.

## 5. Lo que sostengo

- El criterio no es un algoritmo. La pantalla no debe pensar por ti.
- La tecnología soberana es formación y voz pública, no vigilancia ni SaaS extractivo.
- El territorio —físico y cognitivo— se defiende con comunidad, no con miedo.

**Quién ejecuta, escribe, analiza, lucha**  
IndioYori — investigador autónomo, ingeniero RAG, académicx del GT EPICC–CLACSO. Yoreme y ódami. Territorio Anáhuac.
```

### Talleres
- **Title:** `Talleres, libros y herramientas`
- **Slug:** `talleres`
- **Template:** Talleres
- **Excerpt:** `La palanca es formación corta y entregable. También dejo herramientas gratuitas. Las arquitecturas RAG comerciales viven en fronteria-lab.com.`

Cuerpo (ofertas; cambia los `buy.stripe.com` cuando tengas Payment Links):

```
## Tres ofertas. Nada más por ahora.

**Taller MCC** · 2.5 h · en vivo · cupo 20  
Método de Calibración Contextual + demo de TEKTRON. Cómo consumir IA sin ceder la autoridad epistémica.  
$1,200 MXN · early $900  

[Apartar lugar](https://buy.stripe.com/TU_LINK_TALLER_MCC)

**Charla** · 1.5–2 h · grupo o institución  
Feminismo y colonialidad, gramática de los LLM, soberanía cognitiva, geopolítica del conocimiento.  
$8,000–$15,000 MXN · por evento  

[Cotizar charla](/contacto/)

**Curso cohort** · 4 sesiones × 2 h · 3 semanas  
Colonización de la gramática: teoría + práctica.  
$2,800 MXN · early $2,200  

[Lista de espera](/contacto/)

## Calendario julio — octubre 2026

| Fecha | Oferta | Estado |
|---|---|---|
| 22 jul | Taller MCC #1 | Abierto |
| ago | Taller MCC #2 · Charlas a pedido | Programar |
| 1–7 sep | Curso cohort | Lista de espera |
| sep–oct | Diagnóstico de soberanía | Post-taller |

## Libros

**La colonización de la gramática** · eBook PDF · $220 MXN  
[Comprar eBook](https://buy.stripe.com/TU_LINK_EBOOK_GRAMATICA)

**Método de Calibración Contextual** · cuaderno práctico PDF  
[Ver en Archivo](/archivo/)
```

### Archivo
- **Title:** `El archivo de lo improbable`
- **Slug:** `archivo`
- **Template:** Archivo
- **Excerpt:** `PDFs, notas, video y podcast. Lo improbable se archiva aquí.`

Cuerpo (corto; los bloques se llenan solos con etiquetas):

```
Notas, video, podcast y PDFs. Etiqueta cada publicación con `nota`, `video`, `podcast` o `pdf` y aparece sola en su bloque.
```

### Comunidad
- **Title:** `Comunidad`
- **Slug:** `comunidad`
- **Template:** Comunidad
- **Excerpt:** `Un lugar para dejar mensajes y que respondan al momento. Chat en vivo con Matrix. Sin Zoom como dependencia, sin vigilancia.`

Cuerpo:

```
## Foro asíncrono

En cada publicación puedes comentar (membresía Ghost). Para lo que no cabe en un chat rápido: hilos, dudas de los talleres, propuestas de colaboración y defensa del territorio.

- Comentarios de miembros en cada nota.
- Chat en vivo arriba: sala `#Soberania_Cognitiva:matrix.org`.
- Mi usuario Matrix: `@indioyori:matrix.org`.
```

### Contacto
- **Title:** `Contacto`
- **Slug:** `contacto`
- **Template:** Contacto
- **Excerpt:** `Me han llegado mensajes anónimos y raros. Por eso pido un correo o contacto real: por aquí pueden llegar clientes, colaboraciones y grupos de defensa del territorio.`

Cuerpo (opcional; el formulario ya está en la plantilla):

```
Escribe con nombre y correo. Respondo cuando haya algo concreto que atender: talleres, charlas, colaboraciones, territorio.
```

---

## 3. Primera publicación de prueba

1. **Posts → New post**
2. Título: `Soberanía cognitiva: por qué la gramática de los LLM no es neutral`
3. Etiquetas: `nota`, `territorio`
4. Feature image + un párrafo
5. Publish

Debería aparecer en Inicio, en el filtro **Notas**, y en Archivo → Notas.

---

## 4. Matrix (resumen)

| Qué | Valor |
|---|---|
| Sala | `#Soberania_Cognitiva:matrix.org` |
| Tu usuario | `@indioyori:matrix.org` |
| URL del theme | `https://app.element.io/#/room/%23Soberania_Cognitiva:matrix.org` |

Entra a Element con `@indioyori:matrix.org`, únete/modera la sala, y deja el iframe apuntando a esa URL.
