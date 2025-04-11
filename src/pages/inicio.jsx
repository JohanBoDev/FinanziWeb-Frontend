import Home from "@/pages/informacion/home";
import Calculadoras from "@/pages/informacion/info-calculadoras";
import PresupuestoMensual from "@/pages/informacion/info-presupuesto-mensual";
import Ahorro from "@/pages/informacion/info-gestion-deudas";
import MetasAhorro from "@/pages/informacion/info-metas-ahorro";
import Gastos from "@/pages/informacion/info-gastos";
import Conversor from "@/pages/conversorMoneda";
import FooterFinanzi from "../components/Footer";
import FondoDecorativo from "../components/FondoDecorativo";
import { Helmet } from "react-helmet-async";

const Inicio = () => {
    return (
        <>
            <Helmet>
                <title>Finanzi - Tu Plataforma de Finanzas Personales</title>
                <meta name="description" content="Bienvenido a Finanzi, la herramienta integral para gestionar ahorros, deudas, inversiones, presupuestos y más. ¡Empieza a planificar tu futuro financiero hoy!" />
                <meta name="keywords" content="Finanzi, finanzas personales, ahorro, deuda, presupuesto, inversiones, amortización, control financiero" />
                <meta name="author" content="Finanzi" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://finanzi-liart.vercel.app/" />

                {/* Open Graph */}
                <meta property="og:title" content="Finanzi - Tu Plataforma de Finanzas Personales" />
                <meta property="og:description" content="Gestiona tus finanzas con Finanzi. Calculadoras financieras, presupuestos, metas de ahorro y más en una sola plataforma." />
                <meta property="og:image" content="https://finanzi-liart.vercel.app/img/og_finanzi.jpg" />
                <meta property="og:url" content="https://finanzi-liart.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Finanzi" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Finanzi - Tu Plataforma de Finanzas Personales" />
                <meta name="twitter:description" content="Ahorra, invierte y controla tu dinero con Finanzi. Herramientas financieras simples y efectivas." />
                <meta name="twitter:image" content="https://finanzi-liart.vercel.app/img/og_finanzi.jpg" />
            </Helmet>

            <FondoDecorativo>
                <Home />
                <Conversor />
                <Calculadoras />
                <MetasAhorro />
                <Ahorro />
                <PresupuestoMensual />
                <Gastos />
                <FooterFinanzi />
            </FondoDecorativo>
        </>
    );
}

export default Inicio;