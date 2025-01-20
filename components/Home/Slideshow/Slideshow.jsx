"use client";
import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slideshow.css";
import Link from "next/link";
import Image from "next/image";

const Slideshow = ({ data }) => {
  // console.log(data);
  const [position, setPosition] = useState({ x: null, y: null });
  const sliderLeftRef = useRef(null);
  const sliderRightRef = useRef(null);
  const sliderRef = useRef(null); // Small device slider ref

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

  useEffect(() => {
    const handleMouseWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        // Scroll down
        sliderLeftRef.current.slickNext();
        sliderRightRef.current.slickPrev(); // Sync reverse slider
      }
      // else {
      //   // Scroll up
      //   sliderLeftRef.current.slickPrev();
      //   sliderRightRef.current.slickNext(); // Sync reverse slider
      // }
    };

    // Add event listener for mouse wheel
    window.addEventListener("wheel", handleMouseWheel);

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, []);

  const handleNextSlide = () => {
    sliderLeftRef.current.slickNext();
    sliderRightRef.current.slickPrev(); // Sync reverse slider
  };

  const handlePrevSlide = () => {
    sliderLeftRef.current.slickPrev();
    sliderRightRef.current.slickNext(); // Sync reverse slider
  };

  // Handler for the small device slider arrow
  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move to next slide
    } else {
      console.log("Slider reference is not available");
    }
  };

  // Handler for the small device slider arrow
  const handleClickMobile = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move to next slide
    } else {
      console.log("Slider reference is not available");
    }
  };

  const handleNextSlides = () => {
    if (sliderLeftRef.current && sliderRightRef.current) {
      console.log("Moving to next slide!");
      sliderLeftRef.current.slickNext(); // Move to the next slide on the left
      sliderRightRef.current.slickPrev(); // Move to the previous slide on the right
    } else {
      console.log("Slider refs are not available!");
    }
  };

  const handleClick = () => {
    handleNextSlides();
  };

  const settingsLeft = {
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
    dots: false,
    speed: 1000,
  };

  const settingsRight = {
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 950,
  };

  // Small device slider settings
  const smallSlider = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    rtl: true,
    pauseOnHover: false,
  };

  return (
    <div
      className="relative cursor-pointer overflow-hidden font-sora"
      onMouseMove={handleMouseMove}
    >
      <style>{keyframes}</style>

      <div
        className="w-44 h-10 absolute z-[120] border border-gray-700 rounded-full hidden lg:block"
        style={{ top: position.y - 50, left: position.x - 90 }}
      >
        <div className="bg-[#125b5c] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
          {/* Scrolling text with inline styles */}
          <Link href={""} className="" style={scrollAnimation}>
            View More View More
          </Link>
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="relative z-[110] h-screen w-screen overflow-hidden ">
          {/* Left Slideshow (Top-Down) */}
          <div className="absolute inset-0 z-10 slideshow slideshow-left mr-8">
            <Slider {...settingsLeft} ref={sliderLeftRef}>
              <div className="item h-screen">
                <div className="left-half">
                  <Image
                    width={500}
                    height={500}
                    src="https://i.postimg.cc/fyNKNTPF/OMG-1.png"
                    className=" w-full h-full"
                    alt="slide-1"
                  />
                </div>
              </div>

              <div className="item h-screen">
                <div className="left-half">
                  <img
                    src="https://i.postimg.cc/g2bv6z1C/4.jpg"
                    className=" w-full h-full"
                    alt="slide-2"
                  />
                </div>
              </div>
              <div className="item h-screen">
                <div className="left-half">
                  <img
                    src="https://i.postimg.cc/WzW1pVyH/chips.png"
                    className=" w-full h-full"
                    alt="slide-3"
                  />
                </div>
              </div>
              <div className="item h-screen">
                <div className="left-half">
                  <img
                    src="https://i.postimg.cc/B6VSW5xy/ad5.png"
                    className=" w-full h-full"
                    alt="slide-4"
                  />
                </div>
              </div>
            </Slider>

            {/* Left Side Button */}
          </div>
          {/* https://i.postimg.cc/D0xHwd2S/honey.png */}

          {/* Right Slideshow (Bottom-Up) */}
          <div className="absolute inset-0 z-10 slideshow slideshow-right right-0">
            <Slider {...settingsRight} ref={sliderRightRef}>
              <div className="item h-screen">
                <div className="right-half">
                  <img
                    src="https://i.postimg.cc/fyNKNTPF/OMG-1.png"
                    className=" w-full h-full"
                    alt="slide-4-reverse"
                  />
                </div>
              </div>
              <div className="item h-screen">
                <div className="right-half">
                  <img
                    src="https://i.postimg.cc/B6VSW5xy/ad5.png"
                    className=" w-full h-full"
                    alt="slide-1-reverse"
                  />
                </div>
              </div>
              <div className="item h-screen">
                <div className="right-half">
                  <img
                    src="https://i.postimg.cc/WzW1pVyH/chips.png"
                    className=" w-full h-full"
                    alt="slide-2-reverse"
                  />
                </div>
              </div>
              <div className="item h-screen">
                <div className="right-half">
                  <img
                    src="https://i.postimg.cc/g2bv6z1C/4.jpg"
                    className=" w-full h-full"
                    alt="slide-3-reverse"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="absolute bottom-32 left-10 z-[120] text-white max-w-[500px]">
          <h2 className="font-[600] text-[40px] leading-[1]">
            This is writeup section!
          </h2>
        </div>
        <button
          className="absolute bottom-10  left-10 z-[120] cursor-pointer"
          onClick={handleClick}
        >
          <BsArrowRight
            className="text-3xl lg:text-6xl text-[125b5c] bg-white p-3 rounded-full "
            // Trigger next slide
          />
        </button>
      </div>

      {/* Small device */}
      <div className="bg-white relative z-[110]">
        <div className="md:hidden">
          <Slider ref={sliderRef} {...smallSlider}>
            {/* <div className="relative item h-[450px]">
              <img
                src="https://i.postimg.cc/fyNKNTPF/OMG-1.png"
                className="h-full w-full object-cover"
                alt="slide-1"
              />
              <div className="absolute bottom-[100px] left-5 z-[120] text-white max-w-[300px]">
                <h2 className="font-[600] text-[22px] leading-[1]">
                  Lorem ipsum dolor, sit amet consectetur 1.
                </h2>
              </div>
            </div> */}

            <div className="relative item h-[450px]">
              <img
                src="https://i.postimg.cc/g2bv6z1C/4.jpg"
                className="h-full w-full object-cover"
                alt="slide-2"
              />
              <div className="absolute bottom-[100px] left-5 z-[120] text-white max-w-[300px]">
                <h2 className="font-[600] text-[22px] leading-[1]">
                  Lorem ipsum dolor, sit amet consectetur 2.
                </h2>
              </div>
            </div>

            <div className="relative item h-[450px]">
              <img
                src="https://i.postimg.cc/WzW1pVyH/chips.png"
                className="h-full w-full object-cover"
                alt="slide-3"
              />
              <div className="absolute bottom-[100px] left-5 z-[120] text-white max-w-[300px]">
                <h2 className="font-[600] text-[22px] leading-[1]">
                  Lorem ipsum dolor, sit amet consectetur 3.
                </h2>
              </div>
            </div>
            <div className="relative item h-[450px]">
              <img
                src="https://i.postimg.cc/RZ1w1rBN/6.png"
                className="h-full w-full object-cover"
                alt="slide-3"
              />
              <div className="absolute bottom-[100px] left-5 z-[120] text-white max-w-[300px]">
                <h2 className="font-[600] text-[22px] leading-[1]">
                  Lorem ipsum dolor, sit amet consectetur 4.
                </h2>
              </div>
            </div>
            <div className="relative item h-[450px]">
              <img
                src="https://i.postimg.cc/XvVdQ2jx/5.png"
                className="h-full w-full object-cover"
                alt="slide-3"
              />
              <div className="absolute bottom-[100px] left-5 z-[120] text-white max-w-[300px]">
                <h2 className="font-[600] text-[22px] leading-[1]">
                  Lorem ipsum dolor, sit amet consectetur 5.
                </h2>
              </div>
            </div>
          </Slider>

          <button
            className="absolute bottom-8 left-5 z-[120] cursor-pointer"
            onClick={handleClickMobile}
          >
            <BsArrowRight className="text-5xl text-[#125b5c] bg-white p-3 rounded-full " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
