import CalculadoraIntereses from "@/layouts/funcionalidadCalculadoras/calculadoraIntereses"
import AyudaCalculadoraIntereses from "@/layouts/infoCalculadoras/AyudaCalculadoraIntereses"
const PageCalculadoraIntereses = () => {
  return (
    <div className="bg-conversor bg-no-repeat bg-cover bg-center min-h-screen bg-fixed">
      <div className="">
        <CalculadoraIntereses />
      </div>
      <div className=" p-20 flex">
        <  AyudaCalculadoraIntereses/>
      </div>
    </div>

  )
}

export default PageCalculadoraIntereses;