import CalculadoraHipoteca from "../../layouts/funcionalidadCalculadoras/calculadoraHipoteca";
import AyudaCalculadoraHipoteca from "../../layouts/infoCalculadoras/AyudaCalculadoraHipotecas";
import FooterFinanzi from "@/components/Footer";
import FondoDecorativo from "../../components/fondoDecorativo";
import CalculadorasNav from "../../components/CalculadorasNav";

const PageCalculadoraHipoteca = () => {
  return (
    <FondoDecorativo>
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
    </FondoDecorativo>
  );
};

export default PageCalculadoraHipoteca;
