"use client";
import { useRef, useEffect, useState } from "react";
import arrowIcon from "@/public/assets/define/about-arrow.png";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import "./Define.css";
import ButtonEffect from "@/components/Custom/Button";
import FlipText from "@/components/magicui/flip-text";

const Define = ({ data }) => {
  const [angle, setAngle] = useState(0);
  const arrowRef = useRef(null); // Use useRef to access the arrow element

  // Function to calculate the angle between arrow and mouse
  const calculateAngle = (event) => {
    const arrow = arrowRef.current; // Access the DOM element using ref
    if (!arrow) return; // Check if the arrow element exists

    const rect = arrow.getBoundingClientRect();
    const arrowCenterX = rect.left + rect.width / 2;
    const arrowCenterY = rect.top + rect.height / 2;

    const deltaX = event.clientX - arrowCenterX;
    const deltaY = event.clientY - arrowCenterY;

    // Calculate the angle in radians and convert to degrees
    const rad = Math.atan2(deltaY, deltaX);
    const deg = (rad * 180) / Math.PI;
    setAngle(deg);
  };

  useEffect(() => {
    window.addEventListener("mousemove", calculateAngle);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("mousemove", calculateAngle);
    };
  }, []);

  return (
    <div className="font-sora py-10 lg:py-[8%] bg-white relative z-[110]">
      <div className="flex px-[5%] bgDefine">
        <div className="md:mx-3">
          <div className="flex justify-center items-center rounded-badge">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="col-span-1">
                <h2 className="text-[30px] md:text-[25px] lg:text-[30px] xl:text-[40px] 2xl:text-[54px] font-bold lg:pr-5 mb-2 text-[#0066B3] leading-[1.1]">
                  {data?.heading}
                </h2>
                <div className="hidden lg:flex mt-5">
                  <div className="relative h-auto flex items-center">
                    <div
                      id="arrow-container"
                      ref={arrowRef} // Assign the ref to the arrow container
                      className="bg-no-repeat flex justify-start items-center"
                    >
                      <div
                        className="w-[150px] xl:w-[195px] 2xl:w-[265px] transform origin-center"
                        style={{ transform: `rotate(${angle + 90}deg)` }}
                      >
                        <Image
                          width={300}
                          height={400}
                          src={arrowIcon}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 pb-5">
                <div className="text-[24px] lg:text-[30px] font-bold text-[#0066B3] leading-[30px] lg:leading-[42px]">
                  <div className="hidden md:block">
                    <FlipText word={data?.title} />
                  </div>
                  <p className="md:hidden">{data?.title}</p>
                </div>
                <div className="my-10 md:my-0 lg:py-14 text-black opacity-50 text-[16px] font-[600] leading-[25px] lg:leading-[30px]">
                  <div className="hidden md:block">
                    <FlipText word={data?.shortDescription} />
                  </div>
                  <p className="md:hidden">{data?.shortDescription} </p>
                </div>
                <div className="max-w-[280px] lg:max-w-[291px]">
                  <Link href="/careers">
                    <ButtonEffect>
                      <span className="flex gap-2">
                        Discover Our Culture
                        <MdOutlineArrowRightAlt className="text-xl" />
                      </span>
                    </ButtonEffect>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Define;
