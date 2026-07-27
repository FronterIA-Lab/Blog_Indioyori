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
      var wrap = field.closest(".field") || field.closest(".consent");
      if (wrap) wrap.classList.toggle("invalid", !!invalid);
    };
    var emailOk = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || "").trim()); };
    var showStatus = function (text) {
      if (!status) return;
      status.textContent = text;
    };
    var normalizeEndpoint = function (raw) {
      var u = String(raw || "").trim();
      if (!u) return "https://formspree.io/f/mjgnppap";
      var m = u.match(/formspree\.io\/(?:f|forms)\/([a-zA-Z0-9]+)/i);
      if (m) return "https://formspree.io/f/" + m[1];
      return u;
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var hp = form.querySelector("[name='_gotcha']");
      if (hp && hp.value.trim() !== "") return;

      if (Date.now() - loadedAt < 2500) {
        showStatus("Espera un momento antes de enviar, por favor.");
        return;
      }

      var ok = true;
      var name = form.querySelector("[name='name']");
      var email = form.querySelector("[name='email']");
      var contacto = form.querySelector("[name='contacto']");
      var motivo = form.querySelector("[name='motivo']");
      var msg = form.querySelector("[name='message']");
      var consent = form.querySelector("[name='consent']");

      if (name) { var v = name.value.trim().length >= 2; setInvalid(name, !v); ok = ok && v; }
      if (email) { var ve = emailOk(email.value); setInvalid(email, !ve); ok = ok && ve; }
      if (msg) { var vm = msg.value.trim().length >= 10; setInvalid(msg, !vm); ok = ok && vm; }
      if (consent) {
        setInvalid(consent, !consent.checked);
        ok = ok && consent.checked;
      }

      if (!ok) {
        showStatus("Revisa los campos marcados: el correo es obligatorio para poder responderte.");
        return;
      }

      var endpoint = normalizeEndpoint(form.getAttribute("data-endpoint") || form.getAttribute("action"));
      var mail = (form.getAttribute("data-email") || "indioyori@fronteria-lab.com").trim();
      var subjectLine =
        "Contacto verificado · " +
        (name ? name.value.trim() : "") +
        (motivo && motivo.value ? " · " + motivo.value : "");

      var payload = {
        name: name.value.trim(),
        email: email.value.trim(),
        contacto: contacto ? contacto.value.trim() : "",
        motivo: motivo ? motivo.value : "",
        message: msg.value.trim(),
        consent: consent && consent.checked ? "si" : "",
        _replyto: email.value.trim(),
        _subject: subjectLine
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
            showStatus("Recibido. Sé a quién responder y lo haré en cuanto esté disponible.");
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
          showStatus("Sin conexión. Escríbeme a " + mail);
        });
    });
  }
})();
