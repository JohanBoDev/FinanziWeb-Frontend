import SeccionFAQVideo from "@/components/SeccionFAQVideo";

const preguntas = [
  {
    pregunta: "¿Qué es la calculadora de ahorros?",
    respuesta:
      "Es una herramienta que te permite estimar cuánto dinero podrías tener en el futuro si ahorras regularmente, teniendo en cuenta una tasa de interés anual compuesta.",
  },
  {
    pregunta: "¿Qué significa 'Frecuencia de capitalización'?",
    respuesta:
      "Es la cantidad de veces por año que se aplican los intereses a tus ahorros. Cuanto más frecuente, mayor es el crecimiento por el efecto del interés compuesto.",
  },
  {
    pregunta: "¿Qué representa la tasa de interés anual?",
    respuesta:
      "Es el porcentaje que tu dinero gana en un año. Se usa para calcular cuánto crecen tus ahorros con el tiempo.",
  },
  {
    pregunta: "¿Qué pasa si dejo la tasa de interés en 0?",
    respuesta:
      "La calculadora asumirá que solo estás ahorrando sin generar intereses, por lo que el resultado será la suma de tu monto inicial más los aportes mensuales.",
  },
  {
    pregunta: "¿Cómo se calcula el interés compuesto?",
    respuesta:
      "Se aplica interés sobre el capital y también sobre los intereses ya ganados, lo que genera un crecimiento exponencial con el tiempo.",
  },
  {
    pregunta: "¿La calculadora tiene en cuenta la inflación?",
    respuesta:
      "No. Esta calculadora asume valores constantes. Puedes ajustar la tasa de interés manualmente si quieres tener una proyección más realista.",
  },
  {
    pregunta: "¿Qué significa el resultado final?",
    respuesta:
      "Es el valor total que tendrías al final del período, incluyendo tus aportes y los intereses generados.",
  },
  {
    pregunta: "¿Qué navegador o dispositivo debo usar?",
    respuesta:
      "Puedes usar cualquier navegador moderno desde tu celular, tablet o computador. Finanzi es completamente responsive.",
  },
];

const PaginaAhorros = () => {
  return (
    <SeccionFAQVideo
      tituloPrincipal="Resuelve tus dudas y comienza a ahorrar"
      tituloFAQ="Preguntas Frecuentes sobre la Calculadora de Ahorros"
      preguntas={preguntas}
      tituloVideo="Cómo usar"
      textoVideo="Aprende a llenar los campos y descubre cuánto puedes ahorrar en pocos pasos."
      videoSrc="https://www.youtube.com/embed/ujzL-E2HwZQ?si=1fRAnju22KV43HhW"
    />
  );
};

export default PaginaAhorros;