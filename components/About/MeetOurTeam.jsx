"use client";
import Image from "next/image";
import { useState } from "react";

const MeetOurTeam = ({ teamsData }) => {
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
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 py-10 lg:py-16">
        {teamsData.map((team) => (
          <div
            key={team._id}
            onMouseMove={(e) => handleMouseMove(e, team._id)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              width={400}
              height={600}
              className=" rounded-2xl hover:scale-105 transition duration-300 max-h-[400px] 2xl:max-h-[500px] object-cover"
              src={team?.image}
              alt={team?.name}
            />
            <style>{keyframes}</style>

            {hoveredId === team._id && ( // Show the small div only if hoveredId matches the card id
              <div
                className="w-44 h-10 fixed z-[100] hidden lg:flex"
                style={{
                  top: `${position.y}px`,
                  left: `${position.x}px`,
                  pointerEvents: "none",
                  transform: "translate(-50%, -50%)", // Center under the mouse
                }}
              >
                <div className="bg-[#0066B3] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
                  <small style={scrollAnimation}>
                    {team?.name} {team?.name}
                  </small>
                  <small style={scrollAnimation2} className="opacity-60">
                    {team?.name}
                  </small>
                </div>
              </div>
            )}
            <div className="lg:mt-5">
              <h2 className="text-[14px] lg:text-[24px] font-[600] mt-2">
                {team?.name}
              </h2>
              <h4 className="text-[12px] lg:text-[14px] font-[400]">
                {team?.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
