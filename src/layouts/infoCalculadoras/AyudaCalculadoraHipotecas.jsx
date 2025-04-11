import SeccionFAQVideo from "@/components/SeccionFAQVideo";

const preguntasHipoteca = [
  {
    pregunta: "¿Qué es una calculadora de hipotecas?",
    respuesta:
      "Es una herramienta que te permite estimar el valor del pago mensual de un préstamo hipotecario, así como el costo total del préstamo y los intereses pagados.",
  },
  {
    pregunta: "¿Qué datos necesito ingresar?",
    respuesta:
      "Debes ingresar el valor del préstamo, la tasa de interés anual (en porcentaje) y el plazo del préstamo en años.",
  },
  {
    pregunta: "¿Qué hace la calculadora con esos datos?",
    respuesta:
      "Calcula el pago mensual utilizando la fórmula de amortización estándar. También muestra el total a pagar y el total de intereses durante el plazo del préstamo.",
  },
  {
    pregunta: "¿Los pagos mensuales incluyen impuestos o seguros?",
    respuesta:
      "No. Esta calculadora solo estima el pago del préstamo basado en capital e intereses. No incluye seguros, impuestos ni gastos administrativos.",
  },
  {
    pregunta: "¿Puedo guardar mis cálculos de hipoteca?",
    respuesta:
      "Sí. Si estás autenticado en Finanzi, puedes marcar la opción 'Guardar cálculo' y almacenar los resultados en tu cuenta.",
  },
  {
    pregunta: "¿La calculadora es exacta?",
    respuesta:
      "Los resultados son estimaciones basadas en los valores que ingreses. Para información exacta, consulta con una entidad financiera.",
  },
  {
    pregunta: "¿Cuál es el objetivo de esta calculadora?",
    respuesta:
      "Ayudarte a planificar mejor tu presupuesto y tomar decisiones más informadas sobre créditos hipotecarios.",
  },
];

const AyudaCalculadoraHipoteca = () => {
  return (
    <SeccionFAQVideo
      tituloPrincipal="Entiende tu hipoteca y toma mejores decisiones"
      tituloFAQ="Preguntas Frecuentes sobre la Calculadora de Hipotecas"
      preguntas={preguntasHipoteca}
      tituloVideo="Cómo usar"
      textoVideo="Aprende a usar esta herramienta y descubre cuánto pagarías por tu crédito hipotecario."
      videoSrc="https://www.youtube.com/embed/YK0T2EyZtxE" // Puedes cambiarlo si tienes otro
    />
  );
};

export default AyudaCalculadoraHipoteca;
