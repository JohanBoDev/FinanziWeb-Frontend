import CalculadoraDeudas from "@/layouts/funcionalidadCalculadoras/calculadoraDeudas";
import AyudaCalculadoraDeudas from "@/layouts/infoCalculadoras/AyudaCalculadoraDeudas";
import FooterFinanzi from "@/components/Footer";
import FondoDecorativo from "../../components/FondoDecorativo";
import CalculadorasNav from "../../components/CalculadorasNav";

const PageCalculadoraAhorros = () => {
  return (
    <FondoDecorativo>
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
    </FondoDecorativo>
  );
};

export default PageCalculadoraAhorros;
