/*
  CONFIGURACIÓN DEL NEGOCIO
  Edita este archivo para cambiar nombre, contacto, precios y catálogo.
  No hace falta tocar el HTML ni el CSS.
*/
window.SITE_CONFIG = {
  nombre: "VortexTV",
  slogan: "Todo lo que quieres ver, en un solo lugar.",
  // Número de WhatsApp con código de país, sin + ni espacios
  whatsapp: "34614467813",
  moneda: "€",

  // Mensaje que se envía por WhatsApp al pulsar "Contratar".
  // Variables disponibles: {marca}, {plan}, {precio}
  whatsappPlantilla: "Hola, quiero contratar el plan {plan} de {marca} ({precio}). ¿Cómo puedo empezar?",

  // Mensaje del botón "Solicitar demo 24h". Variables: {marca}, {plan}
  whatsappDemoPlantilla: "Hola, quiero solicitar una demo de 24 horas de {marca} (plan {plan}). ¿Me la podéis activar?",

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

  faq: [
    { p: "¿Cómo activo el servicio?", r: "Escríbenos por WhatsApp, elige tu plan y en poco tiempo te enviamos los datos de acceso." },
    { p: "¿En qué dispositivos funciona?", r: "Smart TV, Android TV, Fire TV, móvil, tablet y PC mediante una app compatible o reproductor IPTV." },
    { p: "¿Necesito una conexión rápida?", r: "Recomendamos al menos 10 Mbps para HD y 25 Mbps para 4K." },
    { p: "¿Cuánto dura la suscripción?", r: "El plan anual cubre 12 meses desde la activación." },
    { p: "¿Qué formas de pago aceptáis?", r: "Los métodos que te indiquemos al contratar por WhatsApp." }
  ]
};
