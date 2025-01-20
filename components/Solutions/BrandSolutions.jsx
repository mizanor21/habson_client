"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import SolutionItems from "../Items/SolutionItems";

const BrandSolutions = ({ shortDescription, items, brand }) => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="px-[5%] xl:pt-5 md:pb-20 bg-white relative z-[110] rounded-b-[70px] font-sora">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 lg:mb-20">
        {/* Left Side */}
        <div>
          <h2 className="text-[24px] md:text-4xl lg:text-[48px] text-[#125b5c] font-bold mb-5 md:mb-10 transition duration-300 ease-in-out transform">
            Brand Solutions
          </h2>

          <p className="text-[16px] xl:text-[18px] font-normal text-gray-800 mb-5 transition duration-300 ease-in-out">
            {shortDescription}
          </p>

          <hr className="h-[3px] bg-gray-500 mb-5 max-w-[70px] md:max-w-[100px] lg:max-w-52" />
          <p className="font-semibold text-[18px] text-[#125b5c] mb-10 transition-opacity duration-300 ease-in-out">
            Proud to work with the biggest brands in Bangladesh & Abroad
          </p>

          {/* Brand Logos with Skeleton Loader */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 items-center mb-10 px-7 md:px-0">
            {brand?.map((sBrand) => (
              <div
                key={sBrand._id}
                className="overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg"
              >
                <Image
                  width={200}
                  height={200}
                  src={sBrand.logo}
                  alt={`sBrand ${sBrand.id}`}
                  className="h-20 object-contain saturate-0 hover:saturate-100 transition-all duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Accordion with Skeleton Loader */}
        <div className="space-y-4 md:max-h-[600px] overflow-y-auto scrollbar-none">
          {items?.map((item, index) => (
            <div key={item._id} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 text-[18px] lg:text-[16px] font-[700] text-[#125b5c] text-left transition duration-300 ease-in-out transform hover:text-[#0d4a4c]"
                onClick={() => toggle(index)}
              >
                {item.title}
                {open === index ? (
                  <FaChevronUp className="ml-2 text-gray-500" />
                ) : (
                  <FaChevronDown className="ml-2 text-gray-500" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-[max-height] text-[16px] lg:text-[14px] font-normal duration-1000 ease-in-out ${
                  open === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="py-2 text-gray-700 pb-7 transition-opacity duration-300 ease-in-out">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SolutionItems />
    </section>
  );
};

export default BrandSolutions;
