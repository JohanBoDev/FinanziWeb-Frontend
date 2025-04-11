import CalculadoraDeudas from "@/layouts/funcionalidadCalculadoras/calculadoraDeudas";
import AyudaCalculadoraDeudas from "@/layouts/infoCalculadoras/AyudaCalculadoraDeudas";
import FooterFinanzi from "@/components/Footer";
import FondoDecorativo from "../../components/FondoDecorativo";
import CalculadorasNav from "../../components/CalculadorasNav";
import { Helmet } from "react-helmet-async";

const PageCalculadoraAhorros = () => {
  return (

    <><Helmet>
      <title>Calculadora de Deudas - Finanzi</title>
      <meta name="description" content="Calcula el tiempo para pagar tu deuda y los intereses totales. Usa estrategias como avalancha o bola de nieve con Finanzi." />
      <meta name="keywords" content="calculadora de deudas, pago de préstamos, intereses, estrategia avalancha, bola de nieve, Finanzi" />
      <meta name="author" content="Finanzi" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://finanzi-liart.vercel.app/calculadora-deudas" />

      {/* Open Graph (Facebook, LinkedIn, etc) */}
      <meta property="og:title" content="Calculadora de Deudas - Finanzi" />
      <meta property="og:description" content="Calcula cuánto pagarás en total y qué estrategia de pago te conviene más. Usa Finanzi para tomar mejores decisiones financieras." />
      <meta property="og:image" content="https://finanzi-liart.vercel.app/img/logoFinanzi.png" />
      <meta property="og:url" content="https://finanzi-liart.vercel.app/calculadora-deudas" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Finanzi" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Calculadora de Deudas - Finanzi" />
      <meta name="twitter:description" content="Simula tus pagos mensuales y descubre cuánto interés pagarás con Finanzi." />
      <meta name="twitter:image" content="https://finanzi-liart.vercel.app/img/logoFinanzi.png" />
    </Helmet><FondoDecorativo>
        <main>
          <section aria-label="Calculadora de Deudas">
            <div>
              <CalculadorasNav />

              <CalculadoraDeudas />
            </div>
          </section>

          <section aria-label="Información y ayuda sobre cálculo de deudas">
            <div className="p-5 flex">
              <AyudaCalculadoraDeudas />
            </div>
          </section>
        </main>

        <FooterFinanzi />
      </FondoDecorativo></>
  );
};

export default PageCalculadoraAhorros;
