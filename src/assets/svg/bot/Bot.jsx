import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Bot = () => {
  const svgRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ojoIzquierdo, setOjoIzquierdo] = useState({ x: 0, y: 0 });
  const [ojoDerecho, setOjoDerecho] = useState({ x: 0, y: 0 });
  const [boca, setBoca] = useState({ x: 0, y: 0, scale: 1 });

  // Posiciones iniciales de los centros de los elementos
  const ojoIzquierdoCentro = { x: 576.67, y: 777.69 };
  const ojoDerechoCentro = { x: 1651.6, y: 777.69 };
  const bocaCentro = { x: 1115.1, y: 1062.66 };

  const sensibilidad = 0.05; // Para ojos
  const sensibilidadBoca = 0.02; // Menor sensibilidad para la boca
  const movimientoMaximo = 30; // Para ojos
  const movimientoMaximoBoca = 15; // Menor movimiento para la boca

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (svgRef.current) {
        const svgRect = svgRef.current.getBoundingClientRect();

        // Posición del mouse relativa al SVG
        const relativeX = event.clientX - svgRect.left;
        const relativeY = event.clientY - svgRect.top;

        // Factor de escala para ajustar coordenadas del viewBox al tamaño real del SVG
        const scaleX = 2191.84 / svgRect.width;
        const scaleY = 1552.52 / svgRect.height;

        // Coordenadas del mouse en el sistema de coordenadas del SVG
        const svgX = relativeX * scaleX;
        const svgY = relativeY * scaleY;

        setMousePosition({ x: svgX, y: svgY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Calcular desplazamientos para los ojos
    const deltaXIzquierdo = mousePosition.x - ojoIzquierdoCentro.x;
    const deltaYIzquierdo = mousePosition.y - ojoIzquierdoCentro.y;
    const deltaXDerecho = mousePosition.x - ojoDerechoCentro.x;
    const deltaYDerecho = mousePosition.y - ojoDerechoCentro.y;

    // Calcular desplazamiento para la boca
    const deltaXBoca = mousePosition.x - bocaCentro.x;
    const deltaYBoca = mousePosition.y - bocaCentro.y;

    // Calcular la distancia del mouse a la boca para efectos adicionales
    const distanciaBoca = Math.sqrt(
      deltaXBoca * deltaXBoca + deltaYBoca * deltaYBoca
    );

    // Limitar el movimiento y aplicar sensibilidad para los ojos
    const movXIzquierdo = Math.min(
      movimientoMaximo,
      Math.max(-movimientoMaximo, deltaXIzquierdo * sensibilidad)
    );
    const movYIzquierdo = Math.min(
      movimientoMaximo,
      Math.max(-movimientoMaximo, deltaYIzquierdo * sensibilidad)
    );
    const movXDerecho = Math.min(
      movimientoMaximo,
      Math.max(-movimientoMaximo, deltaXDerecho * sensibilidad)
    );
    const movYDerecho = Math.min(
      movimientoMaximo,
      Math.max(-movimientoMaximo, deltaYDerecho * sensibilidad)
    );

    // Limitar el movimiento y aplicar sensibilidad para la boca
    const movXBoca = Math.min(
      movimientoMaximoBoca,
      Math.max(-movimientoMaximoBoca, deltaXBoca * sensibilidadBoca)
    );
    const movYBoca = Math.min(
      movimientoMaximoBoca,
      Math.max(-movimientoMaximoBoca, deltaYBoca * sensibilidadBoca)
    );

    // Calcular escala de la boca basada en la posición vertical del mouse
    // Si el mouse está abajo, la boca se abre más (escala vertical mayor)
    const escalaBaseBoca = 1;
    const escalaMaximaBoca = 1.3;
    const factorEscalaBoca = Math.max(
      escalaBaseBoca,
      escalaBaseBoca +
        (deltaYBoca > 0
          ? Math.min(deltaYBoca * 0.0005, escalaMaximaBoca - escalaBaseBoca)
          : 0)
    );

    setOjoIzquierdo({ x: movXIzquierdo, y: movYIzquierdo });
    setOjoDerecho({ x: movXDerecho, y: movYDerecho });
    setBoca({
      x: movXBoca,
      y: movYBoca,
      scale: factorEscalaBoca,
    });
  }, [mousePosition]);

  const blinkAnimation = {
    scaleY: [1, 0.1, 1],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatDelay: 3,
      repeatType: "reverse",
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2191.84 1552.52"
      className="w-52 h-44 absolute left-4"
      ref={svgRef}
    >
      <defs>
        <radialGradient
          id="Degradado_sin_nombre_2"
          cx={122.41}
          cy={1382.35}
          r={1.94}
          gradientTransform="matrix(75.63 0 0 -75.63 -8680.52 105263.15)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9bdee7" />
          <stop offset={1} stopColor="#70d0da" />
        </radialGradient>
        <radialGradient
          xlinkHref="#Degradado_sin_nombre_2"
          id="Degradado_sin_nombre_2-2"
          cx={129.3}
          cy={1382.35}
          r={1.94}
          gradientTransform="matrix(75.63 0 0 -75.63 -8126.57 105263.15)"
        />
      </defs>
      <path xmlns="http://www.w3.org/2000/svg" class="cls-2 __web-inspector-hide-shortcut__" d="M591,519.33V563.9s78.86,13.72,171.43,85.72S832.73,857.9,832.73,857.9s-3.43,153.43-57.43,271.72-108,163.71-108,163.71-121.28,142.29-348,88.29S23.16,1016.48,23.16,1016.48-54,756.76,73.3,651.33c69.43-55.28,119.58-72,172.29-84.85,1.29-6.43-2.57-47.15-2.57-47.15Z"/>
      {/* Cuerpo del robot */}
      <path
        d="M958.7 1.22C657.43 12.63 432.88 44.61 295.78 95.6 115.28 162.7 11.51 282.36 1 435.34.1 449.43-.35 606.21.32 784l1.35 323.19 6 27.28c29.08 131.29 90.81 209.8 210.69 268 76.94 37.35 80.52 38.91 129.72 51.44 439.94 113.84 885.91 129.27 1306.16 45.62 85.44-17 205.55-48.31 266.61-69.33 141.12-48.76 235.73-158.13 265-307.31 4.92-24.15 4.92-29.07 5.82-263.91.67-248.71-1.57-388.94-7.16-431.21-1.79-13.2-6-34.67-9.17-47.87-31.54-131.06-134-223.21-331.69-297.91C1735 40.81 1578 16.88 1327.73 3.23 1271.82.32 1021.32-1.24 958.7 1.22Z"
        fill="#c1c1c1"
      />

      {/* Parte interior del robot */}
      <path
        d="M961.72 231.62c-4.25.22-33.54 1.79-64.86 3.13-178.7 7.83-325.64 25.5-439.49 52.56-93.48 22.37-151.19 48.31-219.4 98.63-50.55 37.35-90.81 105.35-101.54 171.55-1.35 8.72-2.24 108.25-2.24 265 0 242 .22 252.07 4.47 273.09 17.89 88.57 54.13 146.72 117 189 26.16 17.45 60.61 35.56 84.76 44.73 7.83 2.91 23.71 9.62 35.34 14.76s24.83 10.29 29.08 11.19 21.91 4.92 39.14 8.72c81.63 18.34 104.22 22.81 172.21 34.67 26.62 4.69 89 13.86 114.07 17 11.18 1.35 31.76 4 45.85 5.82 35.56 4.47 114.51 11.18 172.21 14.76 63.52 3.8 254.53 3.8 317.6 0 154.1-9.62 296.79-29.07 427.19-58.6 11.63-2.68 24.82-5.59 29.07-6.71 41.6-8.94 99.53-25.49 130.84-37.35 45.85-17.44 99.75-54.35 130.62-89.46 34.89-39.81 61.73-96.4 71.57-151.42 3.13-17.44 3.35-448.66.22-491.82-2.23-30-9.84-71.8-16.33-89.91-32.65-89-107.35-149.85-250.94-204.2-103.78-39.37-221.64-58.38-447.32-72.24-37.59-2.23-358.76-4.91-379.12-2.9Z"
        fill="#09252e"
      />

      {/* Ojos animados */}
      <motion.path
        d="M748.86 777.69c0 95.08-77.09 47.79-172.19 47.79s-172.18 47.29-172.18-47.79a172.19 172.19 0 0 1 344.37 0"
        fill="url(#Degradado_sin_nombre_2)"
        animate={{
          x: ojoIzquierdo.x,
          y: ojoIzquierdo.y,
          ...blinkAnimation,
        }}
        style={{ originX: 1, originY: 1 }}
      />

      <motion.path
        d="M1823.79 777.69c0 95.08-77.08 47.79-172.19 47.79s-172.18 47.29-172.18-47.79a172.19 172.19 0 0 1 344.37 0"
        fill="url(#Degradado_sin_nombre_2-2)"
        animate={{
          x: ojoDerecho.x,
          y: ojoDerecho.y,
          ...blinkAnimation,
        }}
        style={{ originX: 1, originY: 1 }}
      />

      {/* Boca animada */}
      <motion.path
        d="M1252.92 1062.66a137.83 137.83 0 1 1-275.65 0A19.7 19.7 0 0 1 997 1043h236.28a19.71 19.71 0 0 1 19.68 19.69"
        fill="#70d0da"
        animate={{
          x: boca.x,
          y: boca.y,
          scaleY: boca.scale,
        }}
        style={{ originX: 1, originY: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />

    </motion.svg>
  );
};

export default Bot;
