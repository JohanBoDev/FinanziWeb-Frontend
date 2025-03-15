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
        className="mx-auto grid max-w-6xl grid-cols-6 grid-rows-5 gap-4"
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
  <Block className="col-span-2 row-span-3">
    <div className="flex items-center gap-2 flex-col">
      <Calculator className="w-10 h-10" />
      <h2 className="text-lg font-semibold">Cálculo de Deudas</h2>
      <p className="mt-3 text-lg text-gray-300">
      Los pagos de una deuda dependen del monto del préstamo, la tasa de interés anual y el plazo de pago. Una estrategia adecuada puede minimizar su impacto financiero.
    </p>
    </div>

  </Block>
);

const AvalancheMethodBlock = () => (
  <Block className="col-span-2 row-span-3 col-start-3">
    <div className="flex items-center gap-2 flex-col">
      <BarChart className="w-10 h-10" />
      <h2 className="text-lg font-semibold">Método Avalancha</h2>  <p className="mt-3 text-lg text-gray-300">
      Este método prioriza el pago de la deuda con mayor tasa de interés, reduciendo el costo total a largo plazo y acelerando la liquidación financiera.
    </p>
    </div>
  
  </Block>
);

const SnowballMethodBlock = () => (
  <Block className="col-span-2 row-span-3 col-start-5">
    <div className="flex items-center gap-2 flex-col">
      <LineChart className="w-10 h-10" />
      <h2 className="text-lg font-semibold">Método Bola de Nieve</h2>    <p className="text-lg text-gray-300">
      Se centra en pagar primero las deudas más pequeñas, generando motivación y un sentido de progreso. Ideal para crear disciplina financiera.
    </p>
    </div>

  </Block>
);

const BenefitsBlock = () => (
  <Block className="col-span-4 row-span-3 row-start-4">
    <div className="flex items-center gap-2 flex-col">
      <CheckCircle className="w-10 h-10 text-white" />
      <h2 className="text-lg font-semibold">Beneficios de un Plan de Pago</h2>
         <p className="text-xl text-gray-300">
      La planificación financiera ayuda a reducir el estrés, mejorar el historial crediticio y optimizar los ingresos, garantizando estabilidad a largo plazo.
    </p>
    </div>
 
  </Block>
);

const ActionBlock = () => (
  <Block className="col-span-2 row-span-3 col-start-5 row-start-4 flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-lg font-semibold text-gray-300">
        ¿Listo para optimizar tus pagos?
      </h2>
      <p className="mt-2 text-sm text-white">
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
