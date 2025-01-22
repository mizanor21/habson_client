import React, { useEffect, useState } from "react";
import TimeImg from "@/public/assets/logo/star.png";
import Image from "next/image";
import "./TimeSchbang.css";

const TimeSchbang = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const items = Array.from({ length: 200 }, (_, i) => i);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThresholdHide = window.innerHeight * 0.1;
      const scrollThresholdShow = window.innerHeight * 0.1;

      if (
        currentScrollY > scrollThresholdHide &&
        currentScrollY > lastScrollY
      ) {
        // Scrolled down past 90% and still scrolling down
        setIsVisible(false);
      } else if (
        currentScrollY < scrollThresholdShow ||
        currentScrollY < lastScrollY
      ) {
        // Scrolled up past 50% or scrolling upwards
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-5 pb-1 pt-0 lg:pt-10 animate-marquee">
          {items.map((_, index) => (
            <React.Fragment key={index}>
              <Image
                src={TimeImg}
                alt="star images"
                className="w-10 animate-spin"
              />
              <h1
                className="font-sans"
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  color: "transparent",
                  WebkitTextStroke: "1px #127acc",
                }}
              >
                IT&apos;S TIME TO CREATE A LIVING BRANDS
              </h1>
            </React.Fragment>
          ))}
          {/* Duplicate content for continuous effect */}
          {items.map((_, index) => (
            <React.Fragment key={index}>
              <Image
                src={TimeImg}
                alt="star images"
                className="w-8 2xl:w-10 animate-spin"
              />
              <h1
                className="font-sans"
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  color: "transparent",
                  WebkitTextStroke: "1px #127acc",
                }}
              >
                IT&apos;S TIME TO CREATE A LIVING BRANDS
              </h1>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSchbang;
