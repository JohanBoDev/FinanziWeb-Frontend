import CalculadoraIntereses from "@/layouts/funcionalidadCalculadoras/calculadoraIntereses";
import AyudaCalculadoraIntereses from "@/layouts/infoCalculadoras/AyudaCalculadoraIntereses";
import FooterFinanzi from "@/components/Footer";
import FondoDecorativo from "@/components/FondoDecorativo";
import CalculadorasNav from "../../components/CalculadorasNav";
import { Helmet } from "react-helmet-async";

const PageCalculadoraIntereses = () => {
  return (
      
    <><Helmet>
      <title>Calculadora de Intereses - Finanzi</title>
      <meta name="description" content="Calcula intereses simples o compuestos sobre préstamos o inversiones. Herramienta clara y rápida de Finanzi para tus finanzas." />
      <meta name="keywords" content="calculadora de intereses, interés simple, interés compuesto, finanzas, Finanzi" />
      <meta name="author" content="Finanzi" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://finanzi-liart.vercel.app/calculadora-intereses" />

      {/* Open Graph */}
      <meta property="og:title" content="Calculadora de Intereses - Finanzi" />
      <meta property="og:description" content="Simula tus intereses ganados o pagados con interés simple o compuesto. Ideal para decisiones financieras informadas." />
      <meta property="og:image" content="https://finanzi-liart.vercel.app/img/logoFinanzi.png" />
      <meta property="og:url" content="https://finanzi-liart.vercel.app/calculadora-intereses" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Finanzi" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Calculadora de Intereses - Finanzi" />
      <meta name="twitter:description" content="Calcula el interés simple o compuesto de forma precisa con Finanzi. Ideal para préstamos o inversiones." />
      <meta name="twitter:image" content="https://finanzi-liart.vercel.app/img/logoFinanzi.png" />
    </Helmet><FondoDecorativo>
        <div className=" bg-no-repeat bg-cover bg-center min-h-screen bg-fixed">
          <main>
            <section aria-label="Calculadora de Intereses">
              <div>
                <CalculadorasNav />

                <CalculadoraIntereses />
              </div>
            </section>

            <section aria-label="Ayuda para cálculo de intereses">
              <div className="p-5 flex">
                <AyudaCalculadoraIntereses />
              </div>
            </section>
          </main>

          <FooterFinanzi />
        </div>
      </FondoDecorativo></>
  );
};

export default PageCalculadoraIntereses;
