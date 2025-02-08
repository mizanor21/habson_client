"use client";
import React from "react";
import JobListings from "./JobListings";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo/logo.png";
import CareerDetailsLayout from "./layout";
import ButtonEffect from "@/components/Custom/Button";
import { useJobHeroData } from "@/components/Custom/DataFetch";
import HashLoader from "react-spinners/HashLoader";

const CareerDetails = () => {
  const { data, error, isLoading } = useJobHeroData();

  if (isLoading)
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <HashLoader color="#357eeb" />
      </div>
    );
  if (error) return <p>Error loading data</p>;

  const { summary, title, description, image } = data[0] || {};

  return (
    <div className="relative z-[110] font-sora bg-white rounded-b-[20px] lg:rounded-b-[50px]">
      <div
        className="py-12 bg-cover bg-center w-[100%] h-[80vh] bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex items-center gap-5 text-white font-sora text-[16px] px-[5%]">
          <Link target="_blank" href="/" className="px-4 py-1 mr-5">
            <Image
              src={logo}
              className="animate-bounce"
              width={200}
              height={200}
              alt="Habson Logo"
            />
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
            <p className="text-white font-bold text-center mb-2">{summary}</p>
            <h1 className="text-white font-bold text-4xl text-center mb-2">
              {title}
            </h1>
            <p className="text-center max-w-[900px] text-white text-justify">
              {description}
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
  );
};

CareerDetails.Layout = CareerDetailsLayout;
export default CareerDetails;
