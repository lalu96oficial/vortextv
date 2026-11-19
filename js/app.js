(function () {
  const C = window.SITE_CONFIG;
  const $ = (sel) => document.querySelector(sel);
  const fmt = new Intl.NumberFormat("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // ----- Utilidades -----
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  }

  // Rellena las variables {marca}, {plan}, {precio}... de una plantilla
  function rellenar(plantilla, vars) {
    return Object.keys(vars).reduce(
      (texto, clave) => texto.replace(new RegExp("\\{" + clave + "\\}", "g"), vars[clave]),
      plantilla
    );
  }

  // Enlace de WhatsApp con un mensaje predefinido
  function waUrl(plantilla, vars) {
    const texto = rellenar(plantilla, Object.assign({ marca: C.nombre }, vars || {}));
    return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(texto);
  }

  // ----- Textos generales y WhatsApp -----
  $("#logo").innerHTML = C.nombre.replace(/TV$/, "").trim() + "<span>TV</span>";
  $("#heroSlogan").textContent = C.slogan;
  $("#footerNombre").textContent = "© " + new Date().getFullYear() + " " + C.nombre + ". Todos los derechos reservados.";

  $("#waDemoHero").href = waUrl(C.mensajes.demo);
  $("#waBtn").href = waUrl(C.mensajes.general);
  $("#waFloat").href = waUrl(C.mensajes.general);

  // ----- Planes -----
  const principal = C.planes.find((p) => p.destacado) || C.planes[0];

  $("#pricing").innerHTML = C.planes.map((p) => `
      <div class="plan ${p.destacado ? "destacado" : ""}">
        ${p.destacado ? '<span class="ribbon">Más elegido</span>' : ""}
        <h3>${escapeHtml(p.nombre)}</h3>
        <div class="price">${fmt.format(p.precio)} ${escapeHtml(C.moneda)}<small> / ${escapeHtml(p.periodo)}</small></div>
        <ul>${p.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>
      </div>`).join("");

  if (principal) {
    const precio = fmt.format(principal.precio) + " " + C.moneda;
    $("#waPlanes").innerHTML = `
      <a class="btn-wa" href="${waUrl(C.mensajes.plan, { plan: principal.nombre, precio: precio })}" target="_blank" rel="noopener">
        Contratar por WhatsApp
        <small>Plan ${escapeHtml(principal.nombre)} · ${escapeHtml(precio)}</small>
      </a>
      <a class="btn btn-primary" href="${waUrl(C.mensajes.demo)}" target="_blank" rel="noopener">Solicitar demo 24h</a>`;
  }

  $("#pagos").innerHTML = '<span class="pagos-label">Métodos de pago:</span>' +
    C.pagos.map((m) => `<span class="pago-tag">${escapeHtml(m)}</span>`).join("");

  // ----- Selector de dispositivos -----
  const opciones = $("#dispositivoOpciones");
  const pasos = $("#pasos");
  const pantallas = $("#pantallas");
  const waDisp = $("#waDispositivo");
  let seleccionado = C.dispositivos[0];

  function renderDispositivo() {
    opciones.querySelectorAll("button").forEach((b) => {
      const activo = b.dataset.id === seleccionado.id;
      b.classList.toggle("active", activo);
      b.setAttribute("aria-pressed", String(activo));
    });
    pasos.innerHTML = "<h3>Pasos rápidos: " + escapeHtml(seleccionado.nombre) + "</h3><ol>" +
      seleccionado.pasos.map((s) => `<li>${escapeHtml(s)}</li>`).join("") + "</ol>";
    waDisp.href = waUrl(C.mensajes.dispositivo, {
      dispositivo: seleccionado.nombre,
      pantallas: pantallas.value
    });
  }

  opciones.innerHTML = C.dispositivos.map((d) =>
    `<button type="button" class="chip-btn" data-id="${escapeHtml(d.id)}">${escapeHtml(d.nombre)}</button>`
  ).join("");

  opciones.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-id]");
    if (!btn) return;
    seleccionado = C.dispositivos.find((d) => d.id === btn.dataset.id) || seleccionado;
    renderDispositivo();
  });
  pantallas.addEventListener("change", renderDispositivo);
  renderDispositivo();

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
})();
