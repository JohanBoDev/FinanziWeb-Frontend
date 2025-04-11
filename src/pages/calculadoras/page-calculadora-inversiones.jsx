import CalculadoraInversiones from "../../layouts/funcionalidadCalculadoras/calculadoraInversiones";
import AyudaCalculadoraInversiones from "../../layouts/infoCalculadoras/ayudaCalculadoraInversiones";
import FooterFinanzi from "@/components/Footer";
import CalculadorasNav from "../../components/CalculadorasNav";
import FondoDecorativo from "@/components/FondoDecorativo";

const PageCalculadoraInversiones = () => {
  return (
  <FondoDecorativo>
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
    </FondoDecorativo>  
  );
};

export default PageCalculadoraInversiones;
