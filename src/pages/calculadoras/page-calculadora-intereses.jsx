import CalculadoraIntereses from "@/layouts/funcionalidadCalculadoras/calculadoraIntereses";
import AyudaCalculadoraIntereses from "@/layouts/infoCalculadoras/AyudaCalculadoraIntereses";
import FooterFinanzi from "@/components/Footer";
import FondoDecorativo from "@/components/FondoDecorativo";
import CalculadorasNav from "../../components/CalculadorasNav";

const PageCalculadoraIntereses = () => {
  return (
    <FondoDecorativo>
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
    </FondoDecorativo>
  );
};

export default PageCalculadoraIntereses;
