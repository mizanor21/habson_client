"use client";

import React, { useState, useEffect } from "react";
import "./HoverText.css"; // Import the CSS file
import Define from "@/components/Home/Define/Define";

const Tooltip = () => {
  const [tooltipStyle, setTooltipStyle] = useState({
    left: "0px",
    top: "0px",
    display: "none",
  });

  const handleMouseEnter = (event) => {
    const tooltipX = event.clientX;
    const tooltipY = event.clientY;

    setTooltipStyle({
      left: `${tooltipX}px`,
      top: `${tooltipY}px`,
      display: "block",
    });
  };

  const handleMouseMove = (event) => {
    const tooltipX = event.clientX;
    const tooltipY = event.clientY;

    setTooltipStyle({
      left: `${tooltipX + 10}px`, // Add a little offset
      top: `${tooltipY + 10}px`, // Add a little offset
    });
  };

  const handleMouseLeave = () => {
    setTooltipStyle({ ...tooltipStyle, display: "none" });
  };

  return (
    <div
      className="tooltip-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1>JUst for text</h1>
      <div
        className="tooltip"
        style={{ position: "absolute", ...tooltipStyle }}
      >
        <div className="scrolling-text">hello</div>
      </div>
    </div>
  );
};

export default Tooltip;
