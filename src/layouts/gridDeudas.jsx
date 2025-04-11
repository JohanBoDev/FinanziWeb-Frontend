import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ArrowRight, Calculator, BarChart, LineChart, CheckCircle } from "lucide-react";

export const DebtManagementSection = () => {
  return (
    <div className="px-4 py-12 text-white">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1 }}
        className="mx-auto xl:max-w-6xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 auto-rows-auto gap-4"
      >
        <DebtCalculationBlock />
        <AvalancheMethodBlock />
        <SnowballMethodBlock />
        <BenefitsBlock />
        <ActionBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, children }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.9, y: 40, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className={twMerge(
        "flex flex-col justify-between rounded-lg border border-zinc-700 bg-zinc-800/40 backdrop-blur-lg p-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-zinc-600/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const DebtCalculationBlock = () => (
  <Block className="xl:col-span-2 xl:row-span-3">
    <div className="flex items-center gap-2 flex-col text-center xl:text-left xl:items-start">      <Calculator className="w-10 h-10" />
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center xl:text-left">
        Cálculo de Deudas</h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center xl:text-left mt-3">

        Los pagos de una deuda dependen del monto del préstamo, la tasa de interés anual y el plazo de pago. Una estrategia adecuada puede minimizar su impacto financiero.
      </p>
    </div>

  </Block>
);

const AvalancheMethodBlock = () => (
  <Block className="xl:col-span-2 xl:row-span-3 xl:col-start-3">
    <div className="flex items-center gap-2 flex-col text-center xl:text-left xl:items-start">
      <BarChart className="w-10 h-10" />
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center xl:text-left">
        Método Avalancha</h2> <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center xl:text-left mt-3">

        Este método prioriza el pago de la deuda con mayor tasa de interés, reduciendo el costo total a largo plazo y acelerando la liquidación financiera.
      </p>
    </div>

  </Block>
);

const SnowballMethodBlock = () => (
  <Block className="xl:col-span-2 xl:row-span-3 xl:col-start-5">
    <div className="flex items-center gap-2 flex-col text-center xl:text-left xl:items-start">
      <LineChart className="w-10 h-10" />
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center xl:text-left">
        Método Bola de Nieve</h2>    <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center xl:text-left mt-3">

        Se centra en pagar primero las deudas más pequeñas, generando motivación y un sentido de progreso. Ideal para crear disciplina financiera.
      </p>
    </div>

  </Block>
);

const BenefitsBlock = () => (
  <Block className="xl:col-span-4 xl:row-span-3 xl:row-start-4">
    <div className="flex items-center gap-2 flex-col text-center xl:text-left xl:items-start">
      <CheckCircle className="w-10 h-10 text-white" />
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center xl:text-left">
        Beneficios de un Plan de Pago</h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center xl:text-left mt-3">
        La planificación financiera ayuda a reducir el estrés, mejorar el historial crediticio y optimizar los ingresos, garantizando estabilidad a largo plazo.
      </p>
    </div>

  </Block>
);

const ActionBlock = () => (
  <Block className="xl:col-span-2 xl:row-span-3 xl:col-start-5 xl:row-start-4 flex items-center justify-center">
    <div className="flex items-center gap-2 flex-col text-center xl:text-left xl:items-start">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center xl:text-left">
        ¿Listo para optimizar tus pagos?
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center xl:text-left mt-3">
        Descubre cuál método se adapta mejor a ti y comienza a reducir tus deudas ahora.
      </p>
      <a
        href="#"
        className="mt-4 inline-flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600"
      >
        Gestionar deudas ahora <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </Block>
);

export default DebtManagementSection;
