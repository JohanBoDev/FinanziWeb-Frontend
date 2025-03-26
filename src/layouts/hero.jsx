import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Hero = () => {
  const { isAuthenticated } = useAuth();
  const { user } = useAuth();
  return (
    <section className="w-1/2 p-8 flex flex-col items-center justify-center gap-y-5 flex-grow">
      <h2 className="text-4xl text-white font-semibold tracking-wider ">
        Domina tus Finanzas con Inteligencia
      </h2>
      <div>
        <h1 className="text-9xl text-red-500 tracking-wider text-glow">FINANZI</h1>
        <h1 className="text-9xl text-red-500 tracking-wider text-glow text-center">WEB</h1>
      </div>
      <h2 className="text-4xl text-gray-200 text-center font-semibold tracking-wide">
        La plataforma que te ayuda a <br /> ahorrar, pagar deudas e invertir <br /> mejor.
      </h2>
      {
        isAuthenticated ? (
          <button className="mt-6 px-8 py-4 text-white text-xl font-bold rounded-full flex items-center gap-3 bg-[#FB3943] hover:scale-105 transition-all glow-button">
            Bienvenido {user.name}
          </button>
        ) : (
          <Link to="registrar" className="mt-6 px-8 py-4 text-white text-xl font-bold rounded-full flex items-center gap-3 bg-[#FB3943] hover:scale-105 transition-all glow-button">
            Crea tu Cuenta
          </Link>
        )
      }

    </section>
  )
}

export default Hero;