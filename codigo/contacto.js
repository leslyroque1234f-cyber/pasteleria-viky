document.getElementById("btnEnviar").addEventListener("click", function() {
  // Número de contacto de Pastelería Vicky
  const telefono = "59164295859";

  // Obtenemos lo que escribió el cliente
  const nombre = document.getElementById("nombre").value.trim();
  const asunto = document.getElementById("asunto").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validación sencilla si algún campo está vacío
  if (!nombre || !asunto || !mensaje) {
    alert("Por favor, completa todos los campos antes de enviar.");
    return;
  }

  // Redacción natural, cálida y fluida
  const texto = `Hola, soy ${nombre}. Les escribo por el asunto: "${asunto}". ` +
                `Quería comentarles lo siguiente: ${mensaje}`;

  // Codificamos el texto para la URL de WhatsApp
  const mensajeCodificado = encodeURIComponent(texto);

  // Abrimos WhatsApp de forma directa
  window.open(`https://wa.me/${telefono}?text=${mensajeCodificado}`, '_blank');
});