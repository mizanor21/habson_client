import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ButtonEffect from "@/components/Custom/Button";

const CareerSection = () => {
  return (
    <div className="bg-white py-10 lg:py-20 font-sora">
      <h1 className="text-3xl md:text-2xl lg:text-[48px] font-bold text-[#0066B3] mb-5">
        Career
      </h1>
      <p className="text-[16px] lg:text-[18px] font-[400] text-black mb-8">
        Connecting the world to the extraordinary stories and ideas from
        Bangladesh.
      </p>
      <Link target="_black" href="/career-details">
        <div className="max-w-[223px] 2xl:max-w-[400px]">
          <ButtonEffect>
            <span className="flex gap-2">
              See All Openings
              <MdOutlineArrowRightAlt className="text-xl" />
            </span>
          </ButtonEffect>
        </div>
      </Link>
    </div>
  );
};

export default CareerSection;
