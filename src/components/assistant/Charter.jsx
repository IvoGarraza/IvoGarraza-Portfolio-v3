"use client";

import React, { useRef, useEffect, useState } from "react";

const Charter = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });

  const targets = [
    { x: 100, y: 150, width: 150, height: 50, text: "Sobre mí" },
    { x: 400, y: 300, width: 150, height: 50, text: "Proyectos" },
    { x: 700, y: 500, width: 150, height: 50, text: "Contacto" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const assistant = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: 50,
      color: "blue",
      faceDirection: "neutral",
    };

    const drawAssistant = () => {
      ctx.beginPath();
      ctx.arc(assistant.x, assistant.y, assistant.size, 0, Math.PI * 2);
      ctx.fillStyle = assistant.color;
      ctx.fill();
      ctx.closePath();

      // Dibujar ojos
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(assistant.x - 15, assistant.y - 10, 10, 0, Math.PI * 2); // Ojo izquierdo
      ctx.arc(assistant.x + 15, assistant.y - 10, 10, 0, Math.PI * 2); // Ojo derecho
      ctx.fill();

      // Pupilas (mueven según la dirección)
      ctx.beginPath();
      ctx.fillStyle = "black";
      const offsetX = assistant.faceDirection === "left" ? -3 : assistant.faceDirection === "right" ? 3 : 0;
      ctx.arc(assistant.x - 15 + offsetX, assistant.y - 10, 5, 0, Math.PI * 2);
      ctx.arc(assistant.x + 15 + offsetX, assistant.y - 10, 5, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawTargets = () => {
      ctx.fillStyle = "gray";
      targets.forEach((target) => {
        ctx.fillRect(target.x, target.y, target.width, target.height);
      });
    };

    const updateAssistant = () => {
      const dx = mousePos.x - assistant.x;
      const dy = mousePos.y - assistant.y;

      assistant.x += dx * 0.05;
      assistant.y += dy * 0.05;

      if (dx < -10) assistant.faceDirection = "left";
      else if (dx > 10) assistant.faceDirection = "right";
      else assistant.faceDirection = "neutral";
    };

    const checkHover = () => {
      let hovered = false;
      targets.forEach((target) => {
        if (
          mousePos.x > target.x &&
          mousePos.x < target.x + target.width &&
          mousePos.y > target.y &&
          mousePos.y < target.y + target.height
        ) {
          setTooltip({ visible: true, text: target.text, x: mousePos.x, y: mousePos.y });
          hovered = true;
        }
      });

      if (!hovered) setTooltip({ visible: false, text: "", x: 0, y: 0 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawTargets();
      drawAssistant();
      updateAssistant();
      checkHover();
      requestAnimationFrame(animate);
    };

    animate();
  }, [mousePos]);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className="fix w-full h-screen" /* style={{ position: "absolute", width: "100vw", height: "100vh" }} */>
      <canvas ref={canvasRef} /* style={{ display: "block" }} */></canvas>
      {tooltip.visible && (
        <div
          style={{
            position: "absolute",
            top: tooltip.y + 15,
            left: tooltip.x + 15,
            background: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            pointerEvents: "none",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default Charter;
