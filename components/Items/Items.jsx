"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SkeletonLoader = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 md:gap-y-20">
    {[1, 2, 3].map((key) => (
      <div key={key} className="space-y-3">
        {/* Image skeleton */}
        <div className="h-72 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl animate-pulse"></div>

        {/* Title skeleton */}
        <div className="h-6 w-1/2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md animate-pulse"></div>

        {/* Subtitle skeleton */}
        <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md animate-pulse"></div>
      </div>
    ))}
  </div>
);

const Items = ({ data }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event, id) => {
    const offsetX = event.clientX;
    const offsetY = event.clientY;

    setPosition({ x: offsetX, y: offsetY });
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const scrollAnimation = {
    position: "absolute",
    whiteSpace: "nowrap",
    animation: "scroll 2s linear infinite",
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

  if (!data) {
    return <SkeletonLoader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 2xl:gap-y-20">
      {data.map((item) => (
        <Link key={item._id} href={`works/${item._id}`}>
          <div
            className="relative"
            onMouseMove={(e) => handleMouseMove(e, item._id)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={item.img}
              alt=""
              width={600}
              height={100}
              className="rounded-xl"
            />
            <h2 className="text-[14px] lg:text-[16px] font-[700] mt-2">
              {item.title}
            </h2>
            <p className="text-[14px] font-[400] min-[1440px]:text-[16px] 2xl:text-[22px] mt-1">
              {item.detailsTitle}
            </p>
            <style>{keyframes}</style>

            {hoveredId === item._id && (
              <div
                className="w-36 h-10 fixed z-[100]"
                style={{
                  top: `${position.y - 30}px`,
                  left: `${position.x}px`,
                  pointerEvents: "none",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="bg-[#0066B3] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
                  <p style={scrollAnimation}>View Case study</p>
                </div>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Items;
