"use client";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../components/ui/glowing-effect";
import "../Styles/backgrounds.css";
import img from "../assets/img/gastos1.webp";
import img2 from "../assets/img/gastos2.webp";
import img4 from "../assets/img/gastos3.webp";
import img5 from "../assets/img/gastos5.webp";
import img6 from "../assets/img/gastos6.webp";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-3 xl:grid-rows-2 lg:gap-4 xl:max-h-[34rem]">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Registra tus Gastos"
        description="Añade tus gastos con categoría, monto y fecha en segundos."
        hasImage={true}
        imageUrl={img5}
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Consulta tu Historial"
        description="Filtra tus gastos por categoría, fecha o método de pago."
        hasImage={true}
        imageUrl={img2}
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Genera Reportes Inteligentes"
        description="Visualiza reportes semanales y mensuales de tus gastos."
        hasImage={true}
        imageUrl={img}
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Importa Gastos desde CSV"
        description="Carga múltiples gastos a la vez con archivos CSV."
        hasImage={true}
        imageUrl={img4}
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Gestiona tus Gastos"
        description="Edita o elimina gastos con un solo clic."
        hasImage={true}
        imageUrl={img6}
      />
    </ul>
  );
}


const GridItem = ({
  area,
  icon,
  title,
  description,
  hasImage,
  imageUrl,
}) => {
  return (
    <li className={`w-full min-h-[16rem] sm:min-h-[18rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div
          className={`relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-gray-600 p-6 backdrop-blur-xl dark:shadow-[0px_0px_50px_10px_#0a0a0a] md:p-8 transition-all duration-500 transform hover:scale-105 ${
            hasImage ? "bg-cover bg-center" : "bg-[#812d33b7]"
          }`}
          style={
            hasImage
              ? {
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.3)), url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : {}
          }
        >
          <div className="absolute top-4 left-4 w-fit rounded-lg border border-gray-500 bg-white/30 p-2 backdrop-blur-md shadow-2xl dark:bg-black/50 transition-all duration-300 hover:scale-110">
            {icon}
          </div>

          <div className="relative flex flex-1 flex-col justify-end gap-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-sans text-white drop-shadow-2xl transition-all duration-300">
              {title}
            </h3>
            <h2 className="text-sm sm:text-base md:text-lg font-sans text-gray-300 drop-shadow-lg leading-relaxed transition-all duration-300">
              {description}
            </h2>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GridItem;

