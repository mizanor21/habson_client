"use client";

import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const Partner = () => {
  const [partnershipData, setPartnershipData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [arrowPosition, setArrowPosition] = useState({
    left: -999,
    right: -999,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://habson-admin.vercel.app/api/partnership",
          {
            next: { revalidate: 10 },
          }
        );
        const data = await res.json();
        setPartnershipData(data || []);
      } catch (error) {
        console.error("Error fetching partnership data:", error);
        setPartnershipData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: isMobile ? 1 : 3,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: isMobile ? 1 : 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: isMobile ? 1 : 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const cursorPosition = clientX - left;
    const leftBoundary = width * 0.3;
    const rightBoundary = width * 0.7;

    if (cursorPosition < leftBoundary) {
      setArrowPosition({
        left: cursorPosition - 80,
        right: -999,
      });
    } else if (cursorPosition > rightBoundary) {
      setArrowPosition({
        left: -999,
        right: cursorPosition - 150,
      });
    } else {
      setArrowPosition({
        left: -999,
        right: -999,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setArrowPosition({ left: -999, right: -999 });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

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
          centerMode={!isMobile}
          containerClass="carousel-container"
          itemClass={`carousel-item ${
            isMobile ? "" : "carousel-item-padding-40-px"
          }`}
          customLeftArrow={
            <div
              className="hidden cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-0 bg-[#127acc] text-white lg:flex justify-center items-center text-xl w-12 h-12 lg:w-16 lg:h-16 rounded-full transition-transform duration-300"
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
              className="hidden cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-0 bg-[#127acc] text-white lg:flex justify-center items-center text-xl w-12 h-12 lg:w-16 lg:h-16 rounded-full transition-transform duration-300"
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
            <div
              key={index}
              className={`text-center ${
                isMobile ? "mr-2" : "px-4"
              } transition-all duration-300`}
            >
              <Image
                src={partner?.logo || "/placeholder.svg"}
                alt={`${partner?.name} Logo`}
                width={200}
                height={200}
                className="mx-auto mb-2 h-16 object-contain saturate-0 hover:saturate-100"
              />
              <h3 className="text-[20px] tracking-tighter font-bold text-black mb-2 mt-10">
                {partner?.name}
              </h3>
              <p
                className={`text-black text-[15px] font-[400] mb-2 ${
                  isMobile ? "opacity-75" : ""
                }`}
              >
                {partner?.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <style jsx global>{`
        .carousel-container {
          padding: 20px 0;
        }
        .carousel-item-padding-40-px {
          transition: all 0.3s ease;
        }
        .react-multi-carousel-track {
          display: flex;
          align-items: center;
        }
        .react-multi-carousel-item {
          opacity: 0.5;
        }
        .react-multi-carousel-item--active {
          opacity: 1;
        }
        @media (min-width: 1024px) {
          .react-multi-carousel-item {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Partner;
