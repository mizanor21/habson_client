"use client";
"use client";
import React, { useState } from "react";
import logo from "@/public/assets/logo/logoFooter.png";
import { HiLocationMarker } from "react-icons/hi";
import { RiCopyrightFill } from "react-icons/ri";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  // Scrolling animation keyframes
  const keyframes = `
    @keyframes scrollText {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  const scrollAnimation = {
    animation: "scrollText 5s linear infinite",
    whiteSpace: "nowrap",
    display: "inline-block",
  };

  const scrollAnimation1 = {
    animation: "scrollText 1s linear infinite",
    whiteSpace: "nowrap",
    display: "inline-block",
  };

  return (
    <div className="bg-[#127acc] sticky bottom-0 z-[105] font-sora pb-10">
      <style>{keyframes}</style>

      {/* Footer Image Section with Hover Visibility */}
      <Link
        href="/contact"
        className="relative group" // Group for hover-based control
        onMouseMove={handleMouseMove}
      >
        <footer className="footer p-10 items-center justify-center">
          {/* Floating Play Reel Animation - Visible only on hover */}
          <div
            className="w-44 h-10 absolute z-[999] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl rounded-full"
            style={{ top: position.y - 50, left: position.x - 90 }}
          >
            <div className="bg-[#127acc] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center">
              <p style={scrollAnimation}>Contact Us &nbsp; Contact Us</p>
              <p style={scrollAnimation1} className="opacity-60">
                Contact Us
              </p>
            </div>
          </div>
          <Image
            width={900}
            height={800}
            className="max-h-[300px] py-10 lg:py-16"
            src={logo}
            alt="Habson Communication Logo"
          />
        </footer>
      </Link>

      {/* Footer Links and Info */}
      <footer className="footer block lg:flex lg:justify-between border-t border-gray-400 px-5 py-4 text-white justify-center items-center">
        {/* Social Links */}
        <div className="flex justify-center items-center gap-3 text-3xl w-full rounded-full">
          <Link
            href="https://www.facebook.com/Habsonltd"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-blue-800"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/livingbrands.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-pink-500"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            href="https://www.youtube.com/@LivingBrandsBD/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-red-600"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.linkedin.com/company/habsonltd"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-blue-700"
          >
            <FaLinkedin />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center items-center text-[13px] gap-3 w-full pt-4 lg:pt-0">
          <Link href={"/we-works"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/works"}>Case Studies</Link>
          <Link href={"/blogs"}>Blog</Link>
          <Link href={"/privacy-policy"}>Privacy</Link>
        </div>

        <div className="flex justify-center lg:hidden items-center text-[13px] gap-3 w-full pt-4 lg:pt-0 pb-0">
          <p className="text-center">Proudly created in Bangladesh</p>
        </div>
        {/* Address */}
        <div className="mb-3 md:my-0 flex justify-center items-center gap-2 w-full px-5">
          <div className="text-center">
            <div className="flex justify-center gap-x-2">
              <Link
                href="https://www.google.com/maps/place/Living+Brands,+House+230+Road+16,+Dhaka+1212"
                target="_blank"
                className="flex items-start md:items-center gap-x-1 2xl:gap-x-2"
              >
                <HiLocationMarker className="hidden sm:block text-[33px] md:text-[26px] mb-1" />
                <p className="text-[12px] 2xl:text-[13px] mt-[5px] md:mt-0">
                  House - 230, Lane -16, Lake Road, Mohakhali DOHS, Dhaka -1206
                </p>
              </Link>
            </div>
            <div className="flex justify-center items-center lg:justify-end gap-x-1 2xl:gap-x-2">
              <RiCopyrightFill className="hidden sm:block text-[22px] m-[2px]" />
              <p className="text-[12px] 2xl:text-[13px] text-center">
                Copyright Habson Communication. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
