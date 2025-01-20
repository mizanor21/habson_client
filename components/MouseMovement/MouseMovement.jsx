"use client";
import React, { useState } from "react";

const MouseMovement = () => {
  const [position, setPosition] = useState({ x: null, y: null });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const scrollAnimation = {
    position: "absolute",
    whiteSpace: "nowrap",
    animation: "scroll 5s linear infinite",
  };

  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(150%);
      }
      100% {
        transform: translateX(-150%);
      }
    }
  `;

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-full cursor-pointer "
    >
      {/* Inline keyframes */}
      <style>{keyframes}</style>

      <div
        className="w-36 h-10 absolute z-[110]"
        style={{ top: position.y - 37, left: position.x - 72 }}
      >
        <div className="bg-black text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
          {/* Scrolling text with inline styles */}
          <p style={scrollAnimation}>View Case</p>
        </div>
      </div>
    </div>
  );
};

export default MouseMovement;
