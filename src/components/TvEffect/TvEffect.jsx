import { useState, useEffect } from 'react';

export default function CrtTvEffect() {
  const [scanlines, setScanlines] = useState([]);
  const [staticEffect, setStaticEffect] = useState([]);
  
  // Generar líneas de escaneo
  useEffect(() => {
    const lines = [];
    for (let i = 0; i < 100; i++) {
      lines.push(<div key={`scanline-${i}`} className="w-full h-px bg-black opacity-10" />);
    }
    setScanlines(lines);
    
    // Generar efecto de estática
    const staticDots = [];
    for (let i = 0; i < 100; i++) {
      const randomTop = Math.floor(Math.random() * 100);
      const randomLeft = Math.floor(Math.random() * 100);
      const randomSize = Math.floor(Math.random() * 3) + 1;
      const randomOpacity = Math.random() * 0.2;
      
      staticDots.push(
        <div 
          key={`static-${i}`} 
          className={`absolute bg-white rounded-full`}
          style={{
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
            width: `${randomSize}px`,
            height: `${randomSize}px`,
            opacity: randomOpacity
          }}
        />
      );
    }
    setStaticEffect(staticDots);
    
    // Refrescar el efecto de estática periódicamente
    const interval = setInterval(() => {
      const newDots = [];
      for (let i = 0; i < 100; i++) {
        const randomTop = Math.floor(Math.random() * 100);
        const randomLeft = Math.floor(Math.random() * 100);
        const randomSize = Math.floor(Math.random() * 3) + 1;
        const randomOpacity = Math.random() * 0.2;
        
        newDots.push(
          <div 
            key={`static-${i}`} 
            className={`absolute bg-white rounded-full`}
            style={{
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              opacity: randomOpacity
            }}
          />
        );
      }
      setStaticEffect(newDots);
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-50">
      {/* Efecto de curvatura CRT */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.6) 100%)',
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)',
          zIndex: 3
        }}
      />
      
      {/* Líneas de escaneo que suben */}
      <div 
        className="absolute inset-0 w-full h-full flex flex-col justify-between opacity-30"
        style={{
          animation: 'scanlines 8s linear infinite',
          zIndex: 1
        }}
      >
        {scanlines}
      </div>
      
      {/* Efecto de parpadeo/flicker */}
      <div 
        className="absolute inset-0 w-full h-full bg-white opacity-0"
        style={{
          animation: 'flicker 0.15s infinite',
          zIndex: 2
        }}
      />
      
      {/* Efecto de estática */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {staticEffect}
      </div>
      
      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes scanlines {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        
        @keyframes flicker {
          0% {
            opacity: 0;
          }
          5% {
            opacity: 0.02;
          }
          10% {
            opacity: 0;
          }
          15% {
            opacity: 0.05;
          }
          20% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          51% {
            opacity: 0.03;
          }
          52% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}