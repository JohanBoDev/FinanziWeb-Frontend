import SeccionFAQVideo from "@/components/SeccionFAQVideo";

export const preguntasDeuda = [
    {
      pregunta: "¿Qué es una calculadora de deudas?",
      respuesta:
        "Es una herramienta que te permite estimar cuánto tiempo te tomará pagar una deuda y cuánto interés pagarás en total, en función del monto, la tasa de interés y el pago mensual.",
    },
    {
      pregunta: "¿Qué información necesito ingresar?",
      respuesta:
        "Debes ingresar el monto total de la deuda, la tasa de interés anual (en decimal, por ejemplo 0.12 para 12%) y el pago mensual que puedes realizar.",
    },
    {
      pregunta: "¿Qué hace la calculadora con estos datos?",
      respuesta:
        "Calcula el número total de pagos mensuales necesarios para liquidar la deuda y el total de intereses que pagarás durante ese tiempo.",
    },
    {
      pregunta: "¿Qué significa 'tasa de interés anual'?",
      respuesta:
        "Es el porcentaje que el prestamista te cobra cada año sobre el monto que debes. Por ejemplo, una tasa del 12% significa que pagarás un 12% anual adicional al monto prestado.",
    },
    {
      pregunta: "¿Qué pasa si ingreso un pago mensual muy bajo?",
      respuesta:
        "Si el pago mensual no cubre al menos los intereses generados cada mes, la deuda nunca podrá pagarse. En ese caso, la calculadora mostrará un error.",
    },
    {
      pregunta: "¿Puedo guardar mis cálculos?",
      respuesta:
        "Sí. Si inicias sesión en Finanzi, puedes marcar la opción de 'Guardar cálculo' para almacenarlo en tu historial y consultarlo más tarde.",
    },
    {
      pregunta: "¿Cómo se calcula el interés total?",
      respuesta:
        "Se calcula multiplicando el número de pagos por el pago mensual y restando el monto original de la deuda. El resultado es el total de intereses pagados.",
    },
    {
      pregunta: "¿Los resultados son exactos?",
      respuesta:
        "Los resultados son aproximados y dependen de los valores que ingreses. La calculadora supone pagos constantes y no considera comisiones ni pagos adelantados.",
    },
  ];

const AyudaCalculadoraDeudas = () => {
    return (
        <SeccionFAQVideo
        tituloPrincipal="Resuelve tus dudas y mejora tu salud financiera"
        tituloFAQ="Preguntas Frecuentes sobre la Calculadora de Deudas"
        preguntas={preguntasDeuda}
        tituloVideo="Cómo usar"
        textoVideo="Aprende a llenar los campos y descubre cuánto tiempo te tomará pagar tus deudas."
        videoSrc="https://www.youtube.com/embed/gJP2JJ5JTSo?si=oRICGGtgw3dQBazy"
        />
    );
    }

export default AyudaCalculadoraDeudas;