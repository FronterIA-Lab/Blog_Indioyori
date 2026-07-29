/* Soberanía Cognitiva · theme de Ghost — interacciones (sin dependencias) */
(function () {
  "use strict";

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

  var form = document.querySelector("[data-contact-form]");
  if (form) {
    var status = form.querySelector("[data-form-status]");
    var loadedAt = Date.now();
    var setInvalid = function (field, invalid) {
      var wrap = field.closest(".field");
      if (wrap) wrap.classList.toggle("invalid", invalid);
    };
    var emailOk = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); };
    var showStatus = function (text, good) {
      if (!status) return;
      status.textContent = text;
      status.style.color = good ? "#111" : "#111";
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var hp = form.querySelector("[name='website']");
      if (hp && hp.value.trim() !== "") { return; }
      if (Date.now() - loadedAt < 2500) { showStatus("Espera un momento antes de enviar, por favor.", false); return; }

      var ok = true;
      var name = form.querySelector("[name='nombre']");
      var email = form.querySelector("[name='email']");
      var contacto = form.querySelector("[name='contacto']");
      var msg = form.querySelector("[name='mensaje']");
      var consent = form.querySelector("[name='consent']");

      if (name) { var v = name.value.trim().length >= 2; setInvalid(name, !v); ok = ok && v; }
      if (email) { var ve = emailOk(email.value); setInvalid(email, !ve); ok = ok && ve; }
      if (msg) { var vm = msg.value.trim().length >= 10; setInvalid(msg, !vm); ok = ok && vm; }
      if (consent && !consent.checked) { setInvalid(consent, true); ok = false; } else if (consent) { setInvalid(consent, false); }

      if (!ok) { showStatus("Revisa los campos marcados: el correo es obligatorio para poder responderte.", false); return; }

      var endpoint = form.getAttribute("data-endpoint");
      var mail = form.getAttribute("data-email") || "indioyori@fronteria-lab.com";

      if (!endpoint || endpoint.trim() === "") {
        var subject = encodeURIComponent("Contacto verificado · " + (name ? name.value.trim() : ""));
        var body = encodeURIComponent(
          "Nombre: " + (name ? name.value.trim() : "") + "\n" +
          "Correo: " + (email ? email.value.trim() : "") + "\n" +
          "Otro contacto: " + (contacto ? contacto.value.trim() : "") + "\n\n" +
          (msg ? msg.value.trim() : "")
        );
        window.location.href = "mailto:" + mail + "?subject=" + subject + "&body=" + body;
        showStatus("Abriendo tu correo para enviar el mensaje verificado…", true);
        return;
      }

      var data = new FormData(form);
      showStatus("Enviando…", true);
      fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) {
          if (r.ok) { form.reset(); showStatus("Recibido. Sé a quién responder y lo haré en cuanto esté disponible.", true); }
          else { showStatus("No se pudo enviar. Escríbeme directo a " + mail, false); }
        })
        .catch(function () { showStatus("Sin conexión. Escríbeme directo a " + mail, false); });
    });
  }
})();
