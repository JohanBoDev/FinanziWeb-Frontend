import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://finanziweb-backend.onrender.com/api/currency";

const useCurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  // Obtener lista de monedas al montar el componente
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/currencies`);
        setCurrencies(response.data.currencies);
      } catch (error) {
        console.error("Error obteniendo monedas:", error);
      }
    };
    fetchCurrencies();
  }, []);

  // Función para convertir moneda
  const handleConvert = async () => {
    if (!amount) {
      alert("Por favor ingresa un monto válido.");
      return;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/convert`, {
        params: { amount, fromCurrency, toCurrency }
      });

      setConvertedAmount(response.data.convertedAmount);
      setExchangeRate(response.data.exchangeRate);
    } catch (error) {
      console.error("Error al convertir moneda:", error);
    }
  };

  return {
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
  };
};

export default useCurrencyConverter;
