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
    var setInvalid = function (field, invalid) {
      var wrap = field.closest(".field");
      if (wrap) wrap.classList.toggle("invalid", !!invalid);
    };
    var emailOk = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || "").trim()); };
    var showStatus = function (text) {
      if (!status) return;
      status.textContent = text;
    };
    var normalizeEndpoint = function (raw) {
      var u = String(raw || "").trim();
      if (!u) return "";
      // Si pegaron la URL del panel, intenta /f/xxxxx
      var m = u.match(/formspree\.io\/(?:f|forms)\/([a-zA-Z0-9]+)/i);
      if (m) return "https://formspree.io/f/" + m[1];
      return u;
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var hp = form.querySelector("[name='_gotcha']");
      if (hp && hp.value.trim() !== "") return;

      var ok = true;
      var name = form.querySelector("[name='name']");
      var email = form.querySelector("[name='email']");
      var msg = form.querySelector("[name='message']");

      if (name) { var v = name.value.trim().length >= 2; setInvalid(name, !v); ok = ok && v; }
      if (email) { var ve = emailOk(email.value); setInvalid(email, !ve); ok = ok && ve; }
      if (msg) { var vm = msg.value.trim().length >= 5; setInvalid(msg, !vm); ok = ok && vm; }

      if (!ok) { showStatus("Revisa nombre, correo y mensaje."); return; }

      var endpoint = normalizeEndpoint(form.getAttribute("data-endpoint") || form.getAttribute("action"));
      var mail = (form.getAttribute("data-email") || "indioyori@fronteria-lab.com").trim();

      if (!endpoint) {
        var subject = encodeURIComponent("Contacto · " + (name ? name.value.trim() : ""));
        var body = encodeURIComponent(
          "Nombre: " + (name ? name.value.trim() : "") + "\n" +
          "Correo: " + (email ? email.value.trim() : "") + "\n\n" +
          (msg ? msg.value.trim() : "")
        );
        window.location.href = "mailto:" + mail + "?subject=" + subject + "&body=" + body;
        showStatus("Abriendo tu correo…");
        return;
      }

      var data = new FormData(form);
      showStatus("Enviando…");
      fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (body) {
            return { ok: r.ok, status: r.status, body: body };
          });
        })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            showStatus("Listo. Te respondo a ese correo.");
            return;
          }
          var err = (res.body && (res.body.error || res.body.message)) || "";
          if (res.status === 403 || /activate|confirm|verify/i.test(err)) {
            showStatus("Formspree pide activar el correo: revisa tu bandeja (y spam) y confirma el formulario.");
          } else if (res.status === 422) {
            showStatus("Formspree rechazó el envío. Revisa que el Contact endpoint sea https://formspree.io/f/xxxxx");
          } else {
            showStatus("No se pudo enviar (" + res.status + "). Escríbeme a " + mail + (err ? " · " + err : ""));
          }
        })
        .catch(function () {
          showStatus("Sin conexión o el enlace de Formspree está mal. Escríbeme a " + mail);
        });
    });
  }
})();
