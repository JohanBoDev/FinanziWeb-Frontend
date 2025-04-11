import CalculadoraAhorros from "@/layouts/funcionalidadCalculadoras/calculadoraAhorros"
import PaginaAhorros from "@/layouts/infoCalculadoras/AyudaCalculadoraAhorros"
import FooterFinanzi from "@/components/Footer"
import FondoDecorativo from "@/components/FondoDecorativo";
import CalculadorasNav from "../../components/CalculadorasNav";
import { Helmet } from 'react-helmet-async';


const PageCalculadoraAhorros = () => {
  return (
    <>
      <Helmet>
        <title>Calculadora de Ahorros - Finanzi</title>
        <meta name="description" content="Calcula tus ahorros con interés compuesto usando Finanzi. Proyecta el crecimiento de tu dinero fácilmente." />
        <meta name="keywords" content="calculadora, ahorros, Finanzi" />
        <meta name="author" content="Finanzi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://finanzi-liart.vercel.app/calculadora-ahorros" />
        <meta property="og:title" content="Calculadora de Ahorros - Finanzi" />
        <meta property="og:description" content="Calculadora de Ahorros - Finanzi" />
        <meta property="og:image" content="https://finanzi-liart.vercel.app/img/logoFinanzi.png" />
        <meta property="og:url" content="https://finanzi-liart.vercel.app/calculadora-ahorros" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Finanzi" />
        </Helmet>

    <FondoDecorativo>

      <main> 
      <CalculadorasNav />
        <section aria-label="Calculadora de Ahorros">
          <div>
          
            <CalculadoraAhorros />
          </div>
        </section>

        <section aria-label="Información sobre ahorros">
          <div className="p-5 flex">
            <PaginaAhorros />
          </div>
        </section>
      </main>
    
      <FooterFinanzi />
    </FondoDecorativo >
    </>
    

  )
}

export default PageCalculadoraAhorros