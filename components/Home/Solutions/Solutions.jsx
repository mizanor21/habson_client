"use client";
import React, { useEffect, useState, useRef } from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import "./solutions.css";
import Link from "next/link";

const Card = ({ section, index }) => {
  return (
    <div className="flex bg-white relative group font-sora overflow-hidden">
      <div
        key={index}
        className={`hover-container ${section?.id} h-screen border-r-2 hover:text-white group`}
      >
        <div className="text-center solutionCard w-[410px] min-[1000px]:w-[420px] min-[1400px]:w-[440px] 2xl:w-[580px] h-full flex items-center justify-center">
          <div className="px-5 lg:px-16">
            <h3 className="sectionTitle">{section?.title}</h3>
            <div className="transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0">
              <p className="text-[16px] font-[500] leading-[22px] text-gray-50 ">
                {section?.content}
              </p>
              <div className="flex justify-center pt-5 lg:pt-14">
                <HiMiniArrowLongRight className="xl:w-20 arrowIcon xl:h-20 text-2xl lg:text-[40px] carousel-p text-[#0066B3] p-3  bg-white rounded-full group-hover:border-2 border-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Solutions = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const animationFrameRef = useRef(null);

  const totalCards = data?.solutions?.length;
  const cardWidth = 1300;
  const cardMargin = 8;
  const totalWidth = (cardWidth + cardMargin) * totalCards;

  const handleMouseMove = (e) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const { clientX } = e;
      const screenWidth = window.innerWidth;
      const progress = (0.38 * clientX) / screenWidth;

      // Calculate the max scroll to stop when the last card is fully visible
      const maxScroll = Math.min(
        0,
        screenWidth - totalWidth + (cardWidth + cardMargin) * 0.1
      );

      // Calculate the new offset and clamp it
      const newOffset = Math.max(maxScroll, progress * maxScroll);

      setOffset(newOffset);
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="overflow-hidden h-screen relative z-[110] bg-white hidden md:block">
        <div
          className="flex transition-all duration-300 ease-out"
          style={{
            transform: `translateX(${offset}px)`,
            width: `${totalWidth}px`,
          }}
        >
          {data?.solutions?.map((section, index) => (
            <Link href={`${section?.path}`} key={index}>
              <Card section={section} />
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile */}
      <div className="bg-white md:hidden font-sora ">
        <div className="bg-white relative z-[110]">
          {data?.solutions?.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={`hover-container ${section?.id} hover:text-white group pt-3`}
            >
              <Link href={`${section?.path}`}>
                <div className="h-full md:flex items-center justify-center border-b border-black">
                  <div className="px-[5%]">
                    <h3 className="text-xl font-[600] text-black group-hover:text-white transition-colors duration-300 mb-7 mt-2">
                      {section?.title}
                    </h3>
                    <p className="text-[14px] font-[500]">{section?.content}</p>
                    <HiMiniArrowLongRight className="text-[40px] my-5 bg-[#0066B3] p-2 rounded-full text-white" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Solutions;