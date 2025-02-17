"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Video = ({ data }) => {
  // console.log(data);
  const [position, setPosition] = useState({ x: null, y: null });
  const [isFirstVisit, setIsFirstVisit] = useState(true); // Track first visit
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5; // Set the initial starting point to 5 seconds
    }
  }, []);

  const [isScrolledUp, setIsScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect if the user has scrolled up and set the width to 100%
      if (window.scrollY > 50) {
        setIsScrolledUp(true);
      } else {
        setIsScrolledUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsFirstVisit(false); // Not the first visit
    } else {
      localStorage.setItem("hasVisited", "true"); // Mark as visited
    }
  }, []);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left, // Adjust based on parent div's left position
      y: event.clientY - rect.top, // Adjust based on parent div's top position
    });
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

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Play the video if paused
      } else {
        videoRef.current.pause(); // Pause the video if playing
      }
    }
  };

  return (
    <div className="relative z-[110] flex justify-center items-center bg-white">
      <div
        // className="relative bg-black z-[110] h-60 lg:h-screen overflow-hidden"
        className={`relative h-[210px] sm:h-[350px] md:h-[600px] lg:h-[700px] xl:h-screen overflow-hidden  transition-all duration-500 ease-in-out ${
          isScrolledUp ? "w-[100%]" : "w-[90%]"
        }`}
        onMouseMove={handleMouseMove}
      >
        <style>{keyframes}</style>

        <div
          className=" w-44 h-10 absolute z-[999] hidden md:flex border border-gray-700 rounded-full"
          style={{ top: position.y - 50, left: position.x - 90 }}
        >
          <div className="bg-[#0066B3]   text-white overflow-hidden w-full h-full rounded-full md:flex justify-center items-center relative">
            {/* Scrolling text with inline styles */}
            <Link href={""} className="" style={scrollAnimation}>
              Play Reel Play Reel
            </Link>
          </div>
        </div>
        <div className="transition-all duration-500 ease-in-out mx-auto">
          <video
            ref={videoRef}
            className="absolute h-[100%] top-0 left-0 w-full md:h-full object-cover"
            autoPlay
            playsInline
            loop
            preload="auto" // Preload video to reduce lag
            muted={isFirstVisit} // Muted only on the first visit
            onClick={handleVideoClick} // Toggle play/pause on click
          >
            <source src={data?.videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
