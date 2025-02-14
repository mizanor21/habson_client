"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TimeSchbang from "../TimeSchbang/TimeSchbang";
import ButtonEffect from "@/components/Custom/Button";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";

const Hero = ({ data }) => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Toggle sticky class based on scroll position
      if (scrollY > viewportHeight * 0.9) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky
          ? "translate-y-0 opacity-100"
          : "-translate-y-5 opacity-0 pointer-events-none"
      } transition-all duration-200 ease-in-out sticky top-[90px] lg:top-[80px] z-[110] bg-white font-sora`}
    >
      <div className="lg:container lg:mx-auto px-[5%] py-[1.5%]">
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-10 lg:max-w-2xl lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <h2 className="mb-6 text-3xl lg:text-[3.5rem] font-[700] tracking-tight leading-[1.2] text-[#0066B3]">
                  {data?.title}
                </h2>
                <p className="text-[16px] lg:text-[20px] my-[44px] font-[400] md:mt-0">
                  {data?.shortDescription}
                </p>
              </div>
              <div className="mt-2 lg:mt-5 max-w-52 ">
                <Link
                  href="https://maps.app.goo.gl/XhtQxU7ZBwkmkmbz8"
                  target="_blank"
                  className="max-w-md"
                >
                  <ButtonEffect>
                    <span className="flex gap-2">
                      Let&apos;s Talk{" "}
                      <MdOutlineArrowRightAlt className="text-xl" />
                    </span>
                  </ButtonEffect>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                width={400}
                height={300}
                className="hidden md:block w-[360px]"
                src={data?.image}
                alt="Living banner"
              />
            </div>
          </div>
        </div>
      </div>
      <TimeSchbang />
    </div>
  );
};

export default Hero;
