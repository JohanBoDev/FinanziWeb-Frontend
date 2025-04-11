import SeccionFAQVideo from "@/components/SeccionFAQVideo";

const AyudaPresupuesto = () => {
  const preguntasPresupuestoMensual = [
    {
      pregunta: "¿Qué es el presupuesto mensual en Finanzi?",
      respuesta:
        "Es una herramienta que te permite planificar cómo distribuir tu ingreso mensual en diferentes categorías, como vivienda, alimentación, transporte, entretenimiento y más.",
    },
    {
      pregunta: "¿Necesito estar registrado para crear un presupuesto?",
      respuesta:
        "Si. Podrás crear y visualizar tus presupuestos registrandote. ",
    },
    {
      pregunta: "¿Qué pasa si el total asignado supera mi ingreso mensual?",
      respuesta:
        "Finanzi te mostrará una advertencia visual y no te permitirá guardar el presupuesto hasta que ajustes las cantidades para que no excedan tu ingreso.",
    },
    {
      pregunta: "¿Puedo asignar montos a las categorías libremente?",
      respuesta:
        "Sí. Puedes crear las categorías que necesites y asignar un monto a cada una según tus prioridades. También puedes agregar o eliminar categorías fácilmente.",
    },
    {
      pregunta: "¿Puedo editar o eliminar presupuestos guardados?",
      respuesta:
        "Sí. Desde tu dashboard puedes modificar cualquier presupuesto anterior o eliminarlo si ya no lo necesitas.",
    },
    {
      pregunta: "¿Finanzi me avisa si me paso del presupuesto en una categoría?",
      respuesta:
        "Sí. Si en algún momento los gastos reales superan el monto asignado en una categoría, Finanzi te muestra una advertencia para que ajustes tus finanzas.",
    },
    {
      pregunta: "¿Cuál es el objetivo del presupuesto mensual?",
      respuesta:
        "Ayudarte a tomar el control de tus finanzas personales, evitando el sobreendeudamiento y promoviendo el ahorro y la planificación mensual.",
    },
    {
      pregunta: "¿Puedo usar el presupuesto mensual para ahorrar?",
      respuesta:
        "Sí. Puedes asignar una categoría específica para el ahorro y establecer un monto mensual que deseas ahorrar.",
    },
    {
      pregunta: "¿Qué sucede si no gasto todo el presupuesto en una categoría?",
      respuesta:
        "El dinero no gastado puede ser ahorrado o redistribuido a otras categorías según tus necesidades.",
    }
  ];
  

  return (
    <SeccionFAQVideo
      tituloPrincipal="Ayuda para crear tu presupuesto mensual"
      tituloFAQ="Preguntas frecuentes sobre el presupuesto mensual"
      preguntas={preguntasPresupuestoMensual}
      tituloVideo="¿Cómo funciona el presupuesto mensual?"
      textoVideo="Aquí te explicamos cómo funciona el presupuesto mensual y cómo puedes utilizarlo para gestionar mejor tus finanzas."
      videoSrc="https://www.youtube.com/embed/40nEm-3zaAs?si=I4__z9I8LCPV3_fq"
    />
  );
}

export default AyudaPresupuesto;