import Home from "@/pages/informacion/home";
import Calculadoras from "@/pages/informacion/info-calculadoras";
import PresupuestoMensual from "@/pages/informacion/info-presupuesto-mensual";
import Ahorro from "@/pages/informacion/info-gestion-deudas";
import MetasAhorro from "@/pages/informacion/info-metas-ahorro";
import Gastos from "@/pages/informacion/info-gastos";
import Conversor from "@/pages/conversorMoneda";

const Inicio = () => {
    return (
        <>
        <Home />
        <Conversor />
        <Calculadoras />
         <MetasAhorro />
        <Ahorro />  
        <PresupuestoMensual />
        <Gastos />
        </>
    );
    }

export default Inicio;