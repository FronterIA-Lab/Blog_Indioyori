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

      var payload = {
        name: name.value.trim(),
        email: email.value.trim(),
        message: msg.value.trim(),
        _replyto: email.value.trim(),
        _subject: "Contacto · IndioYori"
      };
      showStatus("Enviando…");
      fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
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
          var err = "";
          if (res.body) {
            err = res.body.error || res.body.message || "";
            if (!err && res.body.errors) {
              if (Array.isArray(res.body.errors)) {
                err = res.body.errors.map(function (e) {
                  return (e.field ? e.field + ": " : "") + (e.message || e);
                }).join(" · ");
              } else if (typeof res.body.errors === "object") {
                err = Object.keys(res.body.errors).map(function (k) {
                  return k + ": " + res.body.errors[k];
                }).join(" · ");
              }
            }
          }
          if (res.status === 403 && /reCAPTCHA|AJAX|custom key/i.test(err)) {
            showStatus("Formspree: desactiva reCAPTCHA en Settings del form.");
          } else if (/dominio|domain|not allowed|unauthorized|origen|origin/i.test(err)) {
            showStatus("Formspree: agrega este dominio en Allowed domains → " + window.location.hostname);
          } else {
            showStatus("No se pudo enviar (" + res.status + ")" + (err ? ": " + err : "") + ". Escríbeme a " + mail);
          }
        })
        .catch(function () {
          showStatus("Sin conexión o el endpoint de contacto está mal. Escríbeme a " + mail);
        });
    });
  }
})();
