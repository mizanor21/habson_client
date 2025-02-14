"use client";
import ButtonEffect from "@/components/Custom/Button";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Who_We_Are = ({ whoWeAreData }) => {
  // Destructuring `sections` from the first object in `whoWeAreData`
  const [{ title, sections }] = whoWeAreData;

  // Destructuring properties inside the `sections` array
  const [
    {
      button: { text: buttonText, link: buttonLink },
      shortVideo: { src: shortVideoSrc, alt: shortVideoAlt },
      longVideo: { src: longVideoSrc, alt: longVideoAlt },
      heading,
      text: descriptionText,
      _id: sectionId,
    },
  ] = sections;

  const [isFirstPlay, setIsFirstPlay] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5; // Set the initial starting point to 5 seconds
    }
  }, []);

  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.currentTime = 7; // Set the initial starting point to 5 seconds
    }
  }, []);
  // Function to toggle play/pause on click
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Play the video if paused
      } else {
        videoRef.current.pause(); // Pause the video if playing
      }
    }
  };

  // Function to handle video end event
  const handleVideoEnd = () => {
    if (isFirstPlay) {
      setIsFirstPlay(false); // Set flag that first play is done
      videoRef.current.muted = false; // Unmute the video
      videoRef.current.currentTime = 0; // Restart video from beginning
      videoRef.current.play(); // Play video with sound
    }
  };

  const [isFirstPlay1, setIsFirstPlay1] = useState(true);
  const videoRef1 = useRef(null);

  // Function to toggle play/pause on click
  const handleVideoClick1 = () => {
    if (videoRef.current) {
      if (videoRef1.current.paused) {
        videoRef1.current.play(); // Play the video if paused
      } else {
        videoRef1.current.pause(); // Pause the video if playing
      }
    }
  };

  // Function to handle video end event
  const handleVideoEnd1 = () => {
    if (isFirstPlay1) {
      setIsFirstPlay1(false); // Set flag that first play is done
      videoRef1.current.muted = false; // Unmute the video
      videoRef1.current.currentTime = 0; // Restart video from beginning
      videoRef1.current.play(); // Play video with sound
    }
  };
  return (
    <div className="bg-white relative z-[110] grid grid-cols-1 px-[5%] pb-10 lg:pb-20 font-sora rounded-b-[20px] lg:rounded-b-[40px]">
      <h1 className="text-3xl font-bold text-[#0066B3] py-[5%] lg:pt-[80px] lg:pb-[60px] md:text-3xl lg:text-[48px]">
        {title}
      </h1>
      <hr className="w-full text-black bg-gray-400 h-[2px]" />
      <div className="grid gap-5 mb-8 sm:grid-cols-1 md:grid-cols-2 mt-10 lg:mt-20">
        <div className="order-last md:order-first">
          <h1 className="text-2xl font-bold mt-1 md:text-3xl text-[#0066B3] mb-8">
            {heading}
          </h1>
          {descriptionText?.map((paragraph, index) => (
            <p key={index} className="text-[16px]">
              {paragraph}
            </p>
          ))}
          <br />
          <Link href={buttonLink}>
            <div className="max-w-md">
              <ButtonEffect>
                <span className="flex gap-2">
                  {buttonText} <MdOutlineArrowRightAlt className="text-xl" />
                </span>
              </ButtonEffect>
            </div>
          </Link>
        </div>
        <div className="order-first md:order-last flex justify-center items-center">
          <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] xl:h-[500px] relative z-[110]">
            <video
              ref={videoRef}
              className="absolute h-[100%] top-0 left-0 w-full md:h-full object-cover rounded-md"
              // autoPlay
              loop
              // muted={isFirstPlay} // Muted during the first play
              onClick={handleVideoClick} // Toggle play/pause on click
              onEnded={handleVideoEnd} // On first play end, restart with sound
            >
              <source
                src={shortVideoSrc}
                type="video/mp4"
                alt={shortVideoAlt}
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-screen relative z-[110]">
        <video
          ref={videoRef1}
          className="absolute h-[100%] top-0 left-0 w-full md:h-full object-cover rounded-md"
          // autoPlay
          loop
          // muted={isFirstPlay} // Muted during the first play
          onClick={handleVideoClick1} // Toggle play/pause on click
          onEnded={handleVideoEnd1} // On first play end, restart with sound
        >
          <source src={longVideoSrc} type="video/mp4" alt={longVideoAlt} />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Who_We_Are;
