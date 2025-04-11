import CalculadoraHipoteca from "../../layouts/funcionalidadCalculadoras/calculadoraHipoteca";
import AyudaCalculadoraHipoteca from "../../layouts/infoCalculadoras/AyudaCalculadoraHipotecas";
import FooterFinanzi from "@/components/Footer";
import FondoDecorativo from "../../components/FondoDecorativo";
import CalculadorasNav from "../../components/CalculadorasNav";
import { Helmet } from "react-helmet-async";

const PageCalculadoraHipoteca = () => {
  return (

    <><Helmet>
      <title>Calculadora de Hipotecas - Finanzi</title>
      <meta name="description" content="Calcula tu cuota mensual, intereses pagados y costo total de tu préstamo hipotecario con Finanzi. Simulación clara y precisa." />
      <meta name="keywords" content="calculadora de hipotecas, préstamo hipotecario, cuota mensual, intereses, Finanzi" />
      <meta name="author" content="Finanzi" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://finanzi-liart.vercel.app/calculadora-hipoteca" />

      {/* Open Graph */}
      <meta property="og:title" content="Calculadora de Hipotecas - Finanzi" />
      <meta property="og:description" content="Simula el pago mensual de tu hipoteca y conoce el costo total del préstamo con Finanzi." />
      <meta property="og:image" content="https://finanzi-liart.vercel.app/img/logoFinanzi.png" />
      <meta property="og:url" content="https://finanzi-liart.vercel.app/calculadora-hipoteca" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Finanzi" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Calculadora de Hipotecas - Finanzi" />
      <meta name="twitter:description" content="Calcula tu cuota hipotecaria mensual y el total pagado a largo plazo. Herramienta esencial en Finanzi." />
      <meta name="twitter:image" content="https://finanzi-liart.vercel.app/img/logoFinanzi.png" />
    </Helmet><FondoDecorativo>
        <div className=" bg-no-repeat bg-cover bg-center min-h-screen bg-fixed">
          <main>
            <section aria-label="Calculadora de Hipoteca">
              <div>
                <CalculadorasNav />

                <CalculadoraHipoteca />
              </div>
            </section>

            <section aria-label="Ayuda para cálculo de hipotecas">
              <div className="p-5 flex">
                <AyudaCalculadoraHipoteca />
              </div>
            </section>
          </main>

          <FooterFinanzi />
        </div>
      </FondoDecorativo></>
  );
};

export default PageCalculadoraHipoteca;
