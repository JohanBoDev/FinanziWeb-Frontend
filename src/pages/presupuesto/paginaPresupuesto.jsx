import { useState } from "react";
import FormularioPresupuesto from "@/components/presupuesto/FormularioPresupuesto";
import AyudaPresupuesto from "@/components/presupuesto/AyudaPresupuesto";
import ListaPresupuestos from "@/components/presupuesto/ListaPresupuestos";
import Header from "@/layouts/header.jsx";
import FooterFinanzi from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PaginaPresupuesto = () => {
  const [refrescar, setRefrescar] = useState(false);

  return (
    <>
    <Helmet>
  <title>Presupuesto Mensual - Finanzi</title>
  <meta name="description" content="Organiza tus ingresos y gastos mensuales por categorías. Controla tu dinero de forma inteligente con Finanzi." />
  <meta name="keywords" content="presupuesto mensual, gestión financiera, ingresos, gastos, finanzas personales, Finanzi" />
  <meta name="author" content="Finanzi" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href="https://finanzi-liart.vercel.app/presupuesto" />

  {/* Open Graph */}
  <meta property="og:title" content="Presupuesto Mensual - Finanzi" />
  <meta property="og:description" content="Establece tu presupuesto, controla tus gastos y mejora tus finanzas cada mes con Finanzi." />
  <meta property="og:image" content="https://finanzi-liart.vercel.app/img/logoFinanzi.png" />
  <meta property="og:url" content="https://finanzi-liart.vercel.app/presupuesto" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Finanzi" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Presupuesto Mensual - Finanzi" />
  <meta name="twitter:description" content="Gestiona tus ingresos y gastos con una herramienta simple y poderosa. ¡Haz crecer tu salud financiera con Finanzi!" />
  <meta name="twitter:image" content="https://finanzi-liart.vercel.app/img/logoFinanzi.png" />
</Helmet>

      <Header />
      <div className="relative bg-black bg-no-repeat bg-cover bg-center min-h-screen overflow-hidden">
        {/* Fondo decorativo con cuadrícula y halo */}
        <div className="absolute inset-0 z-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          {/* Halo radial */}
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] mx-auto rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
        </div>

        {/* Contenido principal */}
        <main className="relative z-10">
          <section
            aria-label="Gestión de presupuesto mensual"
            className="min-h-screen py-8 px-4 md:px-12 lg:px-24"
          >
            <h1 className="text-4xl text-white tracking-wider md:text-6xl font-bold mb-8 text-center">
              Presupuesto Mensual
            </h1>

            {/* Formulario */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="lg:col-span-2">
                <FormularioPresupuesto
                  onPresupuestoCreado={() => setRefrescar(!refrescar)}
                />
              </div>
            </div>

            {/* Lista */}
            <section
              aria-label="Presupuestos guardados"
              className="mt-12"
            >
              <h2 className="text-4xl font-semibold text-center text-white tracking-wider mb-4">
                Tus presupuestos guardados
              </h2>
              <ListaPresupuestos refrescar={refrescar} />
            </section>

            {/* Ayuda */}
            <section
              aria-label="Ayuda para uso del presupuesto"
              className="mt-12"
            >
              <AyudaPresupuesto />
            </section>
          </section>
        </main>

        <FooterFinanzi />
      </div>
    </>
  );
};

export default PaginaPresupuesto;
