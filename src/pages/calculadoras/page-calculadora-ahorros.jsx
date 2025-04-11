import CalculadoraAhorros from "@/layouts/funcionalidadCalculadoras/calculadoraAhorros"
import PaginaAhorros from "@/layouts/infoCalculadoras/AyudaCalculadoraAhorros"
import FooterFinanzi from "@/components/Footer"
import FondoDecorativo from "@/components/FondoDecorativo";
import CalculadorasNav from "../../components/CalculadorasNav";

const PageCalculadoraAhorros = () => {
  return (
    <>
    
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