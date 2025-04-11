import SeccionFAQVideo from "@/components/SeccionFAQVideo";

const preguntasInversiones = [
    {
        pregunta: "¿Qué es una calculadora de inversiones?",
        respuesta:
        "Es una herramienta que te ayuda a estimar el rendimiento de tus inversiones a lo largo del tiempo, considerando diferentes tasas de interés y períodos.",
    },
    {
        pregunta: "¿Qué información necesito ingresar?",
        respuesta:
        "Debes ingresar el monto inicial de la inversión, la tasa de interés anual (en decimal, por ejemplo 0.07 para 7%), el período en años y la frecuencia de capitalización (anual, semestral, trimestral o mensual).",
    },
    {
        pregunta: "¿Qué hace la calculadora con estos datos?",
        respuesta:
        "Calcula el monto final que obtendrás al finalizar el período, teniendo en cuenta la capitalización de los intereses según la frecuencia que elijas.",
    },
    {
        pregunta: "¿Qué es la capitalización compuesta?",
        respuesta:
        "Es el proceso mediante el cual los intereses generados se suman al capital inicial, generando así nuevos intereses en cada período.",
    },
    {
        pregunta: "¿Puedo guardar mis cálculos?",
        respuesta:
        "Sí. Si inicias sesión en Finanzi, puedes marcar la opción 'Guardar cálculo' para almacenar el resultado en tu cuenta y consultarlo más adelante.",
    },
    {
        pregunta: "¿Cómo se calcula el rendimiento total?",
        respuesta:
        "Se resta el monto inicial al monto final obtenido. La diferencia representa las ganancias generadas por la inversión durante el período.",
    },
    {
        pregunta: "¿Los resultados son exactos?",
        respuesta:
        "Los resultados son aproximados y dependen de los valores que ingreses. No se consideran factores externos como inflación o cambios en las tasas de interés.",
    },
    ];

    const AyudaCalculadoraInversiones = () => {
        return (
            <SeccionFAQVideo
                tituloPrincipal="Domina tus inversiones y haz crecer tu dinero"
                tituloFAQ="Preguntas Frecuentes sobre la Calculadora de Inversiones"
                preguntas={preguntasInversiones}
                tituloVideo="Cómo usar"
                textoVideo="Aprende a usar la calculadora paso a paso y entiende cómo funciona la capitalización compuesta."
                videoSrc="https://www.youtube.com/embed/xz0ZVqze_pM?si=WjpkRjssxGjGNWFf"
            />
        );
    }

    export default AyudaCalculadoraInversiones;