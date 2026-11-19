(function () {
  const C = window.SITE_CONFIG;
  const $ = (sel) => document.querySelector(sel);

  // ----- Textos generales -----
  $("#logo").innerHTML = C.nombre.replace(/TV$/, "").trim() + "<span>TV</span>";
  $("#heroTitulo").textContent = "Canales en vivo, películas y series";
  $("#heroSlogan").textContent = C.slogan;
  $("#footerNombre").textContent = "© " + new Date().getFullYear() + " " + C.nombre + ". Todos los derechos reservados.";
  document.title = "IPTV y VOD | " + C.nombre;

  const wa = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent("Hola, quiero información sobre " + C.nombre);
  $("#waBtn").href = wa;
  $("#mailBtn").href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Información " + C.nombre);

  // ----- Planes -----
  const fmt = new Intl.NumberFormat("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Enlace de WhatsApp con la plantilla personalizada del config.js
  function waLink(p) {
    const texto = C.whatsappPlantilla
      .replace(/\{marca\}/g, C.nombre)
      .replace(/\{plan\}/g, p.nombre)
      .replace(/\{precio\}/g, fmt.format(p.precio) + " " + C.moneda);
    return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(texto);
  }

  // Enlace de WhatsApp para pedir una demo de 24 horas
  function demoLink(p) {
    const texto = C.whatsappDemoPlantilla
      .replace(/\{marca\}/g, C.nombre)
      .replace(/\{plan\}/g, p.nombre);
    return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(texto);
  }

  // Botón grande: usa el plan destacado, o el primero si no hay ninguno
  const principal = C.planes.find((p) => p.destacado) || C.planes[0];
  if (principal) {
    $("#waPlanes").innerHTML = `
      <a class="btn-wa" href="${waLink(principal)}" target="_blank" rel="noopener">
        Contratar por WhatsApp
        <small>Plan ${escapeHtml(principal.nombre)} · ${fmt.format(principal.precio)} ${escapeHtml(C.moneda)}</small>
      </a>
      <a class="btn btn-primary" href="${demoLink(principal)}" target="_blank" rel="noopener">Solicitar demo 24h</a>`;
  }

  $("#pricing").innerHTML = C.planes.map((p) => {
    return `
      <div class="plan ${p.destacado ? "destacado" : ""}">
        ${p.destacado ? '<span class="ribbon">Más elegido</span>' : ""}
        <h3>${escapeHtml(p.nombre)}</h3>
        <div class="price">${fmt.format(p.precio)} ${C.moneda}<small> / ${escapeHtml(p.periodo)}</small></div>
        <ul>${p.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>      </div>`;
  }).join("");

  // ----- FAQ -----
  $("#faqList").innerHTML = C.faq.map((f) => `
    <details>
      <summary>${escapeHtml(f.p)}</summary>
      <p>${escapeHtml(f.r)}</p>
    </details>`).join("");

  // ----- Menú móvil -----
  const toggle = $("#menuToggle");
  const nav = $("#nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  }
})();
