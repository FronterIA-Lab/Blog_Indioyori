# Contacto en Namecheap (gratis)

Ghost no envía correos. Este PHP sí, desde el hosting que ya pagas.

1. Sube `contacto.php` a la raíz del sitio en cPanel (o a una carpeta pública).
2. URL resultante, ejemplo: `https://fronteria-lab.com/contacto.php`
3. En Ghost → Design → Customize → **Contact endpoint** pega esa URL.
4. Guarda y prueba `/contacto/`.

Si no llega el mail: revisa spam; en Namecheap asegúrate de tener un correo del dominio o que `mail()` esté permitido en el plan de hosting.
