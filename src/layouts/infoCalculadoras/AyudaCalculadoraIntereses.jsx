import SeccionFAQVideo from "@/components/SeccionFAQVideo";

export const preguntasIntereses = [
    {
      pregunta: "¿Qué es una calculadora de intereses?",
      respuesta:
        "Es una herramienta que te permite calcular cuánto ganarás o pagarás por un capital inicial durante un período de tiempo, según una tasa de interés simple o compuesta.",
    },
    {
      pregunta: "¿Qué información necesito ingresar?",
      respuesta:
        "Debes ingresar el capital inicial, la tasa de interés anual (en decimal, por ejemplo 0.07 para 7%), el tiempo en años y el tipo de interés (simple o compuesto).",
    },
    {
      pregunta: "¿Qué hace la calculadora con estos datos?",
      respuesta:
        "Calcula el monto final y las ganancias obtenidas (interés ganado) al finalizar el período, según el tipo de interés que elijas.",
    },
    {
      pregunta: "¿Qué es el interés simple?",
      respuesta:
        "Es un tipo de interés que se calcula solo sobre el capital inicial, sin reinvertir los intereses ganados. Es una forma lineal de crecimiento.",
    },
    {
      pregunta: "¿Qué es el interés compuesto?",
      respuesta:
        "Es un tipo de interés donde las ganancias se reinvierten, generando intereses sobre los intereses previos. Esto permite un crecimiento exponencial del capital.",
    },
    {
      pregunta: "¿Puedo guardar mis cálculos?",
      respuesta:
        "Sí. Si inicias sesión en Finanzi, puedes marcar la opción 'Guardar cálculo' para almacenar el resultado en tu cuenta y consultarlo más adelante.",
    },
    {
      pregunta: "¿Cómo se calcula el interés ganado?",
      respuesta:
        "Se resta el capital inicial al monto final obtenido. La diferencia representa las ganancias generadas por los intereses durante el período.",
    },
    {
      pregunta: "¿Los resultados son exactos?",
      respuesta:
        "Los resultados son aproximados y dependen de los valores que ingreses. No se consideran factores externos como inflación, impuestos o cambios en la tasa de interés.",
    },
  ];

const AyudaCalculadoraIntereses = () => {
    return (
        <SeccionFAQVideo
        tituloPrincipal="Domina los intereses y toma mejores decisiones financieras"
        tituloFAQ="Preguntas Frecuentes sobre la Calculadora de Intereses"
        preguntas={preguntasIntereses}
        tituloVideo="Cómo usar"
        textoVideo="Aprende a usar la calculadora paso a paso y entiende cómo funciona el interés simple y compuesto."
        videoSrc="https://www.youtube.com/embed/xz0ZVqze_pM?si=WjpkRjssxGjGNWFf"
        />
    );
    }

export default AyudaCalculadoraIntereses;