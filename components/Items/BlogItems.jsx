"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BlogItems = ({ data }) => {
  const [hoveredId, setHoveredId] = useState(null); // To track the hovered card
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event, id) => {
    // Get the mouse position relative to the viewport
    const offsetX = event.clientX;
    const offsetY = event.clientY;

    setPosition({
      x: offsetX,
      y: offsetY,
    });

    setHoveredId(id); // Show the View Case div when hovering
  };

  const handleMouseLeave = () => {
    // Hide the small div when the mouse leaves the blue div
    setHoveredId(null);
  };

  const scrollAnimation = {
    position: "absolute",
    whiteSpace: "nowrap",
    animation: "scroll 3s linear infinite",
  };

  const scrollAnimation2 = {
    position: "absolute",
    // whiteSpace: "nowrap",
    animation: "scroll .6s linear infinite",
  };

  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-0 gap-7 gap-y-5 lg:gap-y-20 pb-10">
      {data.map((item) => (
        <Link
          className="relative"
          onMouseMove={(e) => handleMouseMove(e, item.id)}
          onMouseLeave={handleMouseLeave}
          key={item.id}
          //   href="/blog-details"
          href={`blogs/${item._id}`}
        >
          <div>
            <Image
              src={item.img}
              alt=""
              width={600}
              height={400}
              className="rounded-xl"
            />
            <p className="text-[16px] font-[400] mt-2">{item.detailsTitle}</p>
            <style>{keyframes}</style>

            {hoveredId === item.id && ( // Show the small div only if hoveredId matches the card id
              <div
                className="w-44 h-10 fixed z-[100]"
                style={{
                  top: `${position.y}px`,
                  left: `${position.x}px`,
                  pointerEvents: "none",
                  transform: "translate(-50%, -50%)", // Center under the mouse
                }}
              >
                <div className="bg-[#127acc] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
                  <p style={scrollAnimation}>Read now Read now</p>
                  <p style={scrollAnimation2} className="opacity-60">
                    Read now
                  </p>
                </div>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogItems;
