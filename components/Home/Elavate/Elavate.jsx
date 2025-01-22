"use client";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import React, { useEffect } from "react";

const Elevate = ({ data }) => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url("https://i.postimg.cc/5NVmLML6/cta-bg.png")`,
    backgroundSize: "cover", // Adjust based on your preference
    backgroundPosition: "center",
    height: "", // Adjust based on your preference
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".btn-posnawr");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", (e) => {
        let parentOffset = button.getBoundingClientRect();
        let relX = e.clientX - parentOffset.left;
        let relY = e.clientY - parentOffset.top;

        const span = button.querySelector("span");
        span.style.top = relY + "px";
        span.style.left = relX + "px";
      });

      button.addEventListener("mouseout", (e) => {
        let parentOffset = button.getBoundingClientRect();
        let relX = e.clientX - parentOffset.left;
        let relY = e.clientY - parentOffset.top;

        const span = button.querySelector("span");
        span.style.top = relY + "px";
        span.style.left = relX + "px";
      });
    });
  }, []);

  const handleMouseEnter = (e) => {
    const span = e.currentTarget.querySelector("span");
    span.style.width = "225%";
    span.style.height = "562.5px";
    span.style.transition = "width 0.8s ease, height 0.8s ease"; // Smooth expansion
  };

  const handleMouseLeave = (e) => {
    const span = e.currentTarget.querySelector("span");
    span.style.width = "0";
    span.style.height = "0";
    span.style.transition = "width 0.8s ease, height 0.8s ease"; // Smooth shrinking
  };
  return (
    <div className="hidden xl:block bg-white relative z-[110] pt-10 lg:pt-20 font-sora">
      <div className="lg:max-w-[1200px] lg:container lg:mx-auto px-[5%] md:px-0 lg:pt-12">
        <div
          style={styles}
          className="flex justify-center items-center min-h-60 lg:h-[30vh] rounded-lg md:rounded-badge"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center p-[5%]">
            {/* defineHeading text-2xl mx-3 md:mx-0 lg:text-[54px] font-bold lg:pr-5 mb-2 text-[#127acc] leading-[1.1] */}
            <h2 className="text-2xl md:text-4xl lg:text-[48px] font-medium text-white lg:pr-5 ">
              <p className="leading-[1.1]">{data?.title}</p>
            </h2>
            <div>
              <p className="text-white text-[20px] font-[400] ">
                {data?.shortDescription}
              </p>
              <div className="mt-5">
                <Link
                  href={
                    "https://www.google.com/maps/place/Living+Brands/@23.7843436,90.3953062,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c700426d1655:0x8a70d2c34d6aae47!8m2!3d23.7843436!4d90.3953062!16s%2Fg%2F11y5gz5c5_?entry=ttu"
                  }
                  target="_blank"
                >
                  <div
                    className="btn-posnawr max-w-[250px] relative flex justify-center items-center gap-2 rounded-full py-4 px-8 text-center text-lg text-[#115c5c] border-2 border-transparent hover:border-white bg-white hover:text-white z-[20] overflow-hidden transition-colors duration-300 ease-in-out"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span
                      className="absolute block bg-[#115c5c] rounded-full transition-all ease-in-out duration-700 z-0"
                      style={{
                        width: "0",
                        height: "0",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    ></span>
                    <span className="relative z-20 flex items-center gap-2">
                      <span className="text-sm">Book A Call</span>
                      <MdOutlineArrowRightAlt className="text-xl" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
