import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const usePresupuesto = () => {
  const [income, setIncome] = useState("");
  const [month, setMonth] = useState("");
  const [categories, setCategories] = useState([
    { category: "", allocatedAmount: "" }
  ]);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (index, field, value) => {
    const updated = [...categories];
    updated[index][field] = field === "allocatedAmount" ? parseFloat(value) || "" : value;
    setCategories(updated);
  };

  const addCategory = () => {
    setCategories([...categories, { category: "", allocatedAmount: "" }]);
  };

  const removeCategory = (index) => {
    if (categories.length > 1) {
      const updated = categories.filter((_, i) => i !== index);
      setCategories(updated);
    }
  };

  const totalAsignado = categories.reduce(
    (acc, curr) => acc + (parseFloat(curr.allocatedAmount) || 0),
    0
  );

  const crearPresupuesto = async () => {
    if (!income || !month) {
      return toast.error("Por favor completa el ingreso y el mes.");
    }

    if (totalAsignado > parseFloat(income)) {
      return toast.error("La suma de categorías supera el ingreso.");
    }

    const token = localStorage.getItem("token");

    const data = {
      month,
      income: parseFloat(income),
      categoryAllocations: categories.map(cat => ({
        category: cat.category,
        allocatedAmount: parseFloat(cat.allocatedAmount) || 0
      }))
    };

    try {
      setLoading(true);
      const response = await axios.post("https://finanziweb-backend.onrender.com/api/budgets", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success("✅ Presupuesto creado exitosamente");
      // Reset opcional:
      setIncome("");
      setMonth("");
      setCategories([{ category: "", allocatedAmount: "" }]);
    } catch (error) {
      console.error(error);
      toast.error("Error al crear el presupuesto");
    } finally {
      setLoading(false);
    }
  };

  return {
    income,
    setIncome,
    month,
    setMonth,
    categories,
    handleCategoryChange,
    addCategory,
    removeCategory,
    totalAsignado,
    crearPresupuesto,
    loading
  };
};

export default usePresupuesto;
