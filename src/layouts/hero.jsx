const Hero = () => {
    return (
        <section className="w-1/2 p-8 flex flex-col items-center justify-center gap-y-5 flex-grow">
        <h2 className="text-4xl text-white font-semibold tracking-wider ">
          Domina tus Finanzas con Inteligencia
        </h2>
       <div>
        <h1 className="text-9xl text-red-500 tracking-wider text-glow">FINANZI</h1>
        <h1 className="text-9xl text-red-500 tracking-wider text-glow text-center">WEB</h1>
        </div>
        <h2 className="text-4xl text-gray-200 text-center font-semibold tracking-wide shadow-md">
          La plataforma que te ayuda a <br /> ahorrar, pagar deudas e invertir <br /> mejor.
        </h2>
        <button className="mt-6 px-8 py-4 text-white text-xl font-bold rounded-full flex items-center gap-3 bg-[#FB3943] hover:scale-105 transition-all glow-button">
          Crea tu Cuenta
        </button>
      </section>
    )
}

export default Hero;