import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SeccionFAQVideo = ({
  tituloPrincipal,
  tituloFAQ,
  preguntas,
  tituloVideo,
  textoVideo,
  videoSrc,
}) => {
  const [activo, setActivo] = useState(null);

  const toggle = (index) => {
    setActivo((prev) => (prev === index ? null : index));
  };

  return (
<div className="w-full px-4 sm:px-6 md:px-12 py-10">
  <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-10 text-center ac-compacta tracking-wide">
    {tituloPrincipal}
  </h2>

  <div className="flex flex-col lg:flex-row gap-8 w-full">
    {/* Acordeón */}
    <section className="bg-black/20 p-5 sm:p-6 rounded-xl border border-white/20 w-full lg:w-1/2">
      <h3 className="text-2xl sm:text-3xl text-white font-semibold mb-4 text-center">
        {tituloFAQ}
      </h3>
      {preguntas.map((item, index) => (
        <div key={index} className="border-b border-white/10 py-3">
          <button
            className="w-full text-left text-white font-medium flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.pregunta}
            <span>{activo === index ? "−" : "+"}</span>
          </button>
          <AnimatePresence initial={false}>
            {activo === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p className="text-gray-300 mt-2 text-sm">{item.respuesta}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>

    {/* Video y explicación */}
    <section className="w-full lg:w-1/2 p-5 sm:px-4 text-white flex flex-col justify-center bg-black/20 rounded-xl border border-white/20">
      <h3 className="text-xl sm:text-3xl font-bold mb-4 text-center lg:text-left">
        {tituloVideo}
      </h3>
      <p className="text-gray-300 mb-6 text-center lg:text-left text-sm sm:text-base">
        {textoVideo}
      </p>

      <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/20 shadow-xl">
        <iframe
          src={videoSrc}
          title="Video explicativo"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </section>
  </div>
</div>

  );
};

export default SeccionFAQVideo;
