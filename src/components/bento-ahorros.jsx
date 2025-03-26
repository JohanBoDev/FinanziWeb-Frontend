import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    (<BentoGrid className="max-w-4xl mx-auto ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
      
          className={item.className}
          icon={item.icon} 
          action={item.action}  />
      ))}
    </BentoGrid>)
  );
}

const items = [
    {
        title: "Establece tu meta",
        description: "Define un objetivo de ahorro y un monto específico. Decide para qué estás ahorrando, ya sea un viaje, una emergencia o una compra importante. ",
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      }
      ,
    {
      title: "Crea un plan",
      description: "Elige un plazo y ajusta cuánto ahorrar periódicamente.",
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Haz seguimiento",
      description: "Monitorea tu progreso con indicadores y reportes claros.",
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Alcanza tu objetivo",
      description: "Recibe alertas y recomendaciones para completar tu meta.",
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      action: (
        <button className="mt-2 px-4 py-2 text-sm font-medium text-white bg-gray-500/50 rounded-md hover:bg-gray-500/60 hover:cursor-pointer transition">
          Probar ahora
        </button>
      ),
    },
  ];
  