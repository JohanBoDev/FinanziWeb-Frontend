import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import VANTA from "vanta/dist/vanta.fog.min"; // Asegura que importas el módulo correctamente

const AnimatedBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA({
          el: vantaRef.current,
          THREE, // IMPORTANTE: Pasar Three.js manualmente
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor: 0x303030,
          lowlightColor: 0x0a0a23,
          baseColor: 0x9e4b4b,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="h-screen w-full"></div>;
};

export default AnimatedBackground;
