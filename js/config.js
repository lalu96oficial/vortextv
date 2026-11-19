/*
  CONFIGURACIÓN DEL NEGOCIO
  Edita este archivo para cambiar nombre, contacto, precios y textos.
  Después ejecuta build.ps1 para regenerar index.html.
*/
window.SITE_CONFIG = {
  nombre: "VortexTV",
  slogan: "Todo lo que quieres ver, en un solo lugar.",
  // Número de WhatsApp con código de país, sin + ni espacios
  whatsapp: "34614467813",
  moneda: "€",
  url: "https://morvehtv.com/",

  // Mensajes predefinidos de WhatsApp.
  // Variables: {marca}, {plan}, {precio}, {dispositivo}, {pantallas}
  mensajes: {
    general: "Hola, quiero información sobre {marca}.",
    demo: "Hola, quiero solicitar una prueba gratuita de 24 horas de {marca}. ¿Me la podéis activar?",
    plan: "Hola, quiero contratar el plan {plan} de {marca} ({precio}). ¿Cómo puedo empezar?",
    dispositivo: "Hola, tengo {dispositivo} y quiero {pantallas} pantalla(s) con {marca}. ¿Cómo lo instalo?"
  },

  planes: [
    {
      nombre: "Anual",
      precio: 70,
      periodo: "año",
      destacado: true,
      // Ventajas redactadas a partir de lo indicado: revísalas y ajústalas
      features: ["+1.000 canales", "Películas y series", "Deportes en directo", "Soporte por WhatsApp"]
    }
  ],

  // Métodos de pago que se muestran junto a los planes
  pagos: ["Bizum", "PayPal", "Tarjeta"],

  faq: [
    { p: "¿Cómo activo el servicio?", r: "Escríbenos por WhatsApp, elige tu plan y en poco tiempo te enviamos los datos de acceso." },
    { p: "¿En qué dispositivos funciona?", r: "Smart TV, Android TV, Fire TV, móvil, tablet y PC mediante una app compatible o reproductor IPTV." },
    { p: "¿Necesito una conexión rápida?", r: "Recomendamos al menos 10 Mbps para HD y 25 Mbps para 4K." },
    { p: "¿Cuánto dura la suscripción?", r: "El plan anual cubre 12 meses desde la activación." },
    { p: "¿Qué formas de pago aceptáis?", r: "Bizum, PayPal y tarjeta. Te indicamos cómo pagar al contratar por WhatsApp." }
  ],

  // Opciones del selector de dispositivos
  dispositivos: [
    { id: "firetv", nombre: "Fire TV Stick", pasos: ["Enciende el Fire TV y conéctalo a internet.", "Instala la app que te enviaremos tras activar la prueba.", "Introduce los datos de acceso que te damos por WhatsApp."] },
    { id: "samsung", nombre: "Smart TV Samsung", pasos: ["Conecta el televisor a internet.", "Busca la app en la tienda del televisor y ábrela.", "Introduce los datos de acceso que te damos por WhatsApp."] },
    { id: "lg", nombre: "Smart TV LG", pasos: ["Conecta el televisor a internet.", "Busca la app en la tienda del televisor y ábrela.", "Introduce los datos de acceso que te damos por WhatsApp."] },
    { id: "androidtv", nombre: "Android TV / Google TV", pasos: ["Conecta el dispositivo a internet.", "Instala la app que te enviaremos tras activar la prueba.", "Introduce los datos de acceso que te damos por WhatsApp."] },
    { id: "movil", nombre: "Móvil iOS / Android", pasos: ["Descarga la app compatible con tu teléfono.", "Ábrela e introduce los datos de acceso.", "Empieza a ver tus canales y contenidos."] },
    { id: "pc", nombre: "PC / Mac", pasos: ["Abre un reproductor IPTV compatible en tu ordenador.", "Añade la lista que te enviaremos por WhatsApp.", "Empieza a ver tus canales y contenidos."] }
  ]
};
