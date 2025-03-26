import CalculadoraAhorros from "@/layouts/funcionalidadCalculadoras/calculadoraAhorros"
import PaginaAhorros from "@/layouts/infoCalculadoras/AyudaCalculadoraAhorros"
const PageCalculadoraAhorros = () => {
  return (
    <div className="bg-conversor bg-no-repeat bg-cover bg-center min-h-screen bg-fixed">
      <div className="">
        <CalculadoraAhorros />
      </div>
      <div className=" p-20 flex">
        < PaginaAhorros />
      </div>
    </div>

  )
}

export default PageCalculadoraAhorros