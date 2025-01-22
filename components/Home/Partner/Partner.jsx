"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Partner = () => {
  const [partnershipData, setPartnershipData] = useState([]);
  const [arrowPosition, setArrowPosition] = useState({
    left: -999,
    right: -999,
  });
  const [boundaryItems, setBoundaryItems] = useState({
    leftIndex: null,
    rightIndex: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://habson-admin.vercel.app/api/partnership",
        { next: { revalidate: 10 } }
      );
      const data = await res.json();
      setPartnershipData(data);
    };

    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();

    const cursorPosition = clientX - left;
    const leftBoundary = width * 0.3; // Left 30% area
    const rightBoundary = width * 0.7; // Right 30% area

    // Update arrow positions based on the cursor
    if (cursorPosition < leftBoundary) {
      setArrowPosition({
        left: cursorPosition - 80, // Place left arrow near cursor
        right: -999, // Hide right arrow
      });
      setBoundaryItems({ leftIndex: 0, rightIndex: null }); // Set left boundary
    } else if (cursorPosition > rightBoundary) {
      setArrowPosition({
        left: -999, // Hide left arrow
        right: cursorPosition - 150, // Place right arrow near cursor
      });
      setBoundaryItems({
        leftIndex: null,
        rightIndex: partnershipData.length - 1,
      }); // Set right boundary
    } else {
      setArrowPosition({
        left: -999, // Hide left arrow
        right: -999, // Hide right arrow
      });
      setBoundaryItems({ leftIndex: null, rightIndex: null }); // Reset boundaries
    }
  };

  const handleMouseLeave = () => {
    setArrowPosition({ left: -999, right: -999 }); // Hide both arrows on mouse leave
    setBoundaryItems({ leftIndex: null, rightIndex: null }); // Reset boundaries
  };

  return (
    <div
      className="bg-white py-20 lg:pb-32 relative z-[110] rounded-b-[20px] lg:rounded-b-[40px] font-sora"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-[5%] relative">
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          showDots={false}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          containerClass="carousel-container"
          itemClass="carousel-item"
          customLeftArrow={
            <div
              className={`hidden cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-0 bg-[#135c5c] text-white lg:flex justify-center items-center text-xl w-12 h-12 lg:w-16 lg:h-16 rounded-full transition-transform duration-300`}
              style={{
                left: `${arrowPosition.left}px`,
                transform: "translateX(-50%)",
              }}
            >
              <FaArrowLeftLong />
            </div>
          }
          customRightArrow={
            <div
              className={`hidden cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-0 bg-[#135c5c] text-white lg:flex justify-center items-center text-xl w-12 h-12 lg:w-16 lg:h-16 rounded-full transition-transform duration-300`}
              style={{
                left: `${arrowPosition.right}px`,
                transform: "translateX(50%)",
              }}
            >
              <FaArrowRightLong />
            </div>
          }
        >
          {partnershipData?.map((partner, index) => (
            <div key={index} className={`text-center mr-2`}>
              <img
                width={200}
                height={200}
                src={partner?.logo}
                alt={`${partner?.name} Logo`}
                className="mx-auto mb-2 h-16 object-contain saturate-0 hover:saturate-100"
              />
              <h3 className="text-[20px] tracking-tighter font-bold text-black mb-2 mt-10">
                {partner?.name}
              </h3>
              <p className="text-black opacity-75 text-[15px] font-[400] mb-2">
                {partner?.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Partner;
