"use client";
import { useItemsData } from "@/components/Custom/DataFetch";
import Link from "next/link";
import React, { useState } from "react";

const TrendingItems = () => {
  const { data, error, isLoading } = useItemsData();

  // Filter data to include only trending items
  const trendingItems = data ? data.filter((item) => item.isTrending) : [];

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

  const scrollAnimation1 = {
    position: "absolute",
    whiteSpace: "nowrap",
    animation: "scroll 1s linear infinite",
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-1">
      {trendingItems.map((item) => (
        <div
          key={item._id} // Use item._id as the key
          onMouseMove={(e) => handleMouseMove(e, item._id)}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 lg:gap-20 font-sora group relative hover:opacity-100 peer transition-opacity duration-500"
        >
          <Link href={`works/${item._id}`} className="md:col-span-2 cursor-pointer">
            <p className="border border-black rounded-full px-3 inline-block my-2">
              {item.category} {/* Use item.category */}
            </p>
            <div className="lg:grid grid-cols-4 justify-between items-center">
              <h3 className="font-[600] lg:font-[700] text-[14px] lg:text-[18px] py-2 md:py-10 col-span-3">
                {item.detailsTitle} {/* Use item.title */}
              </h3>
              <small className="text-end hidden lg:flex">
                {new Date(item.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </small>
            </div>
            <div className=" border-b border-black">{/* <hr /> */}</div>
          </Link>
          <style>{keyframes}</style>

          {hoveredId === item._id && (
            <div
              className="w-44 h-10 fixed z-[100]"
              style={{
                top: `${position.y - 30}px`,
                left: `${position.x}px`,
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-[#0066B3] text-sm text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
                <sm style={scrollAnimation}>View Trending Story</sm>
                <sm style={scrollAnimation1}>View Trending Story</sm>
              </div>
            </div>
          )}
          <div className="md:col-span-1 h-full flex justify-center items-center">
            <img
              src={item.img}
              alt={item.title}
              className="rounded lg:w-[450px] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000"
            />
          </div>
        </div>
      ))}

      {/* Opacity logic for other items */}
      <style jsx>{`
        .space-y-1:hover > .peer:not(:hover) {
          opacity: 0.5;
          transition: opacity 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default TrendingItems;