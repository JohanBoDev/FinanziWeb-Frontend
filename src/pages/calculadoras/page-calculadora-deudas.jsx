import CalculadoraDeudas from "@/layouts/funcionalidadCalculadoras/calculadoraDeudas"
import AyudaCalculadoraDeudas from "@/layouts/infoCalculadoras/AyudaCalculadoraDeudas"
const PageCalculadoraAhorros = () => {
  return (
    <div className="bg-conversor bg-no-repeat bg-cover bg-center min-h-screen bg-fixed">
      <div className="">
        <CalculadoraDeudas />
      </div>
      <div className=" p-20 flex">
        < AyudaCalculadoraDeudas />
      </div>
    </div>

  )
}

export default PageCalculadoraAhorros