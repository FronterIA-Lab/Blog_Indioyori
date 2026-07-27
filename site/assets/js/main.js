/* =========================================================================
   Soberanía Cognitiva · Indioyori — interacciones del sitio
   Sin dependencias externas. Progresivo: si JS falla, el sitio sigue usable.
   ========================================================================= */
(function () {
  "use strict";

  /* ----- Menú móvil ----- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var mobile = document.querySelector("[data-mobile-nav]");
  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = mobile.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobile.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----- Filtro de la retícula por etiqueta (progresivo) ----- */
  var filterBtns = document.querySelectorAll("[data-filter]");
  var cards = document.querySelectorAll("[data-tags]");
  if (filterBtns.length && cards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        filterBtns.forEach(function (b) { b.classList.remove("current"); });
        btn.classList.add("current");
        cards.forEach(function (card) {
          var tags = card.getAttribute("data-tags") || "";
          var show = f === "all" || tags.split(" ").indexOf(f) !== -1;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ----- Validación del formulario de contacto ----- */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    var status = form.querySelector("[data-form-status]");
    var loadedAt = Date.now();

    var setInvalid = function (field, invalid) {
      var wrap = field.closest(".field");
      if (wrap) wrap.classList.toggle("invalid", invalid);
    };

    var emailOk = function (v) {
      // Validación razonable de correo (obligatorio para saber a quién responder)
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;

      // Honeypot anti-spam: campo oculto que un humano no llena.
      var hp = form.querySelector("[name='website']");
      if (hp && hp.value.trim() !== "") { return; /* bot: ignorar en silencio */ }

      // Tiempo mínimo: envíos casi instantáneos suelen ser bots.
      if (Date.now() - loadedAt < 2500) {
        showStatus("Espera un momento antes de enviar, por favor.", false);
        return;
      }

      var name = form.querySelector("[name='nombre']");
      var email = form.querySelector("[name='email']");
      var contacto = form.querySelector("[name='contacto']");
      var msg = form.querySelector("[name='mensaje']");
      var consent = form.querySelector("[name='consent']");

      if (name) { var v = name.value.trim().length >= 2; setInvalid(name, !v); ok = ok && v; }
      if (email) { var ve = emailOk(email.value); setInvalid(email, !ve); ok = ok && ve; }
      if (msg) { var vm = msg.value.trim().length >= 10; setInvalid(msg, !vm); ok = ok && vm; }
      if (consent && !consent.checked) {
        setInvalid(consent, true); ok = false;
      } else if (consent) { setInvalid(consent, false); }

      if (!ok) {
        showStatus("Revisa los campos marcados: el correo es obligatorio para poder responderte.", false);
        return;
      }

      // Nombre de referencia legible para saber a quién se responde.
      var ref = (name ? name.value.trim() : "contacto") + " · " + (email ? email.value.trim() : "");

      var endpoint = form.getAttribute("data-endpoint");
      if (!endpoint || endpoint.indexOf("TU_") === 0) {
        // Sin backend configurado aún: abrir el correo con los datos ya estructurados.
        var subject = encodeURIComponent("Contacto verificado · " + (name ? name.value.trim() : ""));
        var body = encodeURIComponent(
          "Nombre: " + (name ? name.value.trim() : "") + "\n" +
          "Correo: " + (email ? email.value.trim() : "") + "\n" +
          "Otro contacto: " + (contacto ? contacto.value.trim() : "") + "\n\n" +
          (msg ? msg.value.trim() : "")
        );
        window.location.href = "mailto:indioyori@fronteria-lab.com?subject=" + subject + "&body=" + body;
        showStatus("Abriendo tu correo para enviar el mensaje verificado…", true);
        return;
      }

      // Con backend (Formspree): envío seguro por fetch/Ajax.
      var data = new FormData(form);
      var motivo = form.querySelector("[name='motivo']");
      data.append("_ref", ref);
      data.append("_replyto", email ? email.value.trim() : "");
      data.append(
        "_subject",
        "Contacto verificado · " +
          (name ? name.value.trim() : "") +
          (motivo && motivo.value ? " · " + motivo.value : "")
      );
      showStatus("Enviando…", true);
      fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) {
          if (r.ok) {
            form.reset();
            showStatus("Recibido. Sé a quién responder y lo haré en cuanto esté disponible.", true);
          } else {
            showStatus("No se pudo enviar. Escríbeme directo a indioyori@fronteria-lab.com", false);
          }
        })
        .catch(function () {
          showStatus("Sin conexión. Escríbeme directo a indioyori@fronteria-lab.com", false);
        });
    });

    function showStatus(text, good) {
      if (!status) return;
      status.textContent = text;
      status.className = "form-status " + (good ? "ok" : "bad");
    }
  }

  /* ----- Año dinámico en el pie ----- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
