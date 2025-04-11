import CalculadoraInversiones from "../../layouts/funcionalidadCalculadoras/calculadoraInversiones";
import AyudaCalculadoraInversiones from "../../layouts/infoCalculadoras/ayudaCalculadoraInversiones";
import FooterFinanzi from "@/components/Footer";
import CalculadorasNav from "@/components/CalculadorasNav";
import FondoDecorativo from "@/components/FondoDecorativo";
import { Helmet } from "react-helmet-async";


const PageCalculadoraInversiones = () => {
  return (

    <><Helmet>
      <title>Calculadora de Inversiones - Finanzi</title>
      <meta name="description" content="Proyecta el crecimiento de tu inversión con aportes mensuales e interés compuesto. Simula tus ganancias futuras con Finanzi." />
      <meta name="keywords" content="calculadora de inversiones, interés compuesto, aportes mensuales, proyección financiera, Finanzi" />
      <meta name="author" content="Finanzi" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://finanzi-liart.vercel.app/calculadora-inversiones" />

      {/* Open Graph */}
      <meta property="og:title" content="Calculadora de Inversiones - Finanzi" />
      <meta property="og:description" content="Calcula cuánto crecerá tu inversión con el tiempo. Finanzi te ayuda a tomar decisiones financieras inteligentes." />
      <meta property="og:image" content="https://finanzi-liart.vercel.app/img/logoFinanzi.png" />
      <meta property="og:url" content="https://finanzi-liart.vercel.app/calculadora-inversiones" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Finanzi" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Calculadora de Inversiones - Finanzi" />
      <meta name="twitter:description" content="Descubre el valor futuro de tus inversiones y las ganancias totales esperadas con Finanzi." />
      <meta name="twitter:image" content="https://finanzi-liart.vercel.app/img/logoFinanzi.png" />
    </Helmet><FondoDecorativo>
        <main>
          <section aria-label="Calculadora de Inversiones">
            <div>
              <CalculadorasNav />

              <CalculadoraInversiones />
            </div>
          </section>

          <section aria-label="Ayuda para cálculo de inversiones">
            <div className="p-5 flex">
              <AyudaCalculadoraInversiones />
            </div>
          </section>
        </main>

        <FooterFinanzi />
      </FondoDecorativo></>  
  );
};

export default PageCalculadoraInversiones;
