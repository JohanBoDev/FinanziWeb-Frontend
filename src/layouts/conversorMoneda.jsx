import React from "react";
import useCurrencyConverter from "../hooks/useCurrency";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const CurrencyConverter = () => {
  const {
    currencies,
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedAmount,
    exchangeRate,
    handleConvert
  } = useCurrencyConverter();

  // Formatear número con puntos
  const formatNumber = (number) => {
    return new Intl.NumberFormat("es-CO").format(number);
  };

  return (
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="max-w-lg mx-auto bg-black/30 backdrop-blur-lg text-white p-6 rounded-lg shadow-xl shadow-black mt-10 text-center border border-gray-700"
>
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6" >
    <input
      type="number"
      placeholder="Cantidad"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      min={0}
      className="p-3 text-lg w-full md:w-40 text-center bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white placeholder-gray-500"
    />
    <select
      value={fromCurrency}
      onChange={(e) => setFromCurrency(e.target.value)}
      className="p-3 text-lg w-full md:w-auto bg-black/50 border border-gray-700 rounded-md focus:outline-none text-white"
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>

    <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />

    <select
      value={toCurrency}
      onChange={(e) => setToCurrency(e.target.value)}
      className="p-3 text-lg w-full md:w-auto bg-black/50 border border-gray-700 rounded-md focus:outline-none text-white"
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  </div>

  <button
    onClick={handleConvert}
    className="mt-6 w-full md:w-auto px-6 py-3 bg-red-600 text-lg font-bold rounded-md hover:bg-red-700 transition duration-300 border border-gray-600"
  >
    Convertir
  </button>

  {convertedAmount && (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-6 text-xl font-semibold text-gray-400"
    >
      💰 {formatNumber(amount)} {fromCurrency} ={" "}
      <span className="font-bold text-white">
        {formatNumber(convertedAmount)} {toCurrency}
      </span>
      <br />
      <span className="text-gray-500">(Tasa: {exchangeRate})</span>
    </motion.p>
  )}
</motion.div>

  );
};

export default CurrencyConverter;
