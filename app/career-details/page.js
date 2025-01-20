"use client";
import React from "react";
import "./careerdetails.css";
import JobListings from "./JobListings";
import ButtonEffect from "../button/page";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo/logo.png";
import CareerDetailsLayout from "./layout";
const CareerDetails = () => {
  return (
    <main>
      <div className="relative z-[110] font-sora bg-white rounded-b-[20px] lg:rounded-b-[50px] ">
        <div className="career-details py-12">
          <div className="flex items-center gap-5 text-white font-sora text-[16px] px-[5%]">
            <Link target="_blank" href="/" className="bg-white px-4 py-1 mr-5">
              <Image
                src={logo}
                className="w-12 "
                width={200}
                height={200}
                alt="Living Brands Logo"
              ></Image>
            </Link>
            <Link href="/career-details" className="text-[16px] font-[500]">
              HOME
            </Link>
            <Link
              href="#job"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                const jobSection = document.getElementById("job");
                if (jobSection) {
                  jobSection.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the job section
                }
              }}
              className="text-[16px] font-[500]"
            >
              JOBS
            </Link>
          </div>
          <div className="flex mx-auto h-full justify-center items-center px-[5%]">
            <div>
              <p className="text-white font-bold text-center mb-2">
                Discover Your Dream Job
              </p>
              <h1 className="text-white font-bold text-4xl text-center mb-2">
                More Than Just a Job, We’re a Community
              </h1>
              <p className="text-center max-w-[900px] text-white text-justify">
                We understand that finding a fulfilling career can be
                challenging. Our mission is to simplify this process and offer a
                workplace you&apos;ll enjoy coming to. Explore our job openings
                to start your journey.
              </p>
              <div className="flex justify-center mt-5">
                <a
                  href="#job"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default anchor behavior
                    const jobSection = document.getElementById("job");
                    if (jobSection) {
                      jobSection.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the job section
                    }
                  }}
                >
                  <ButtonEffect id="job">View Openings</ButtonEffect>
                </a>
              </div>
            </div>
          </div>
        </div>
        <JobListings />
      </div>
    </main>
  );
};

CareerDetails.Layout = CareerDetailsLayout;
export default CareerDetails;
