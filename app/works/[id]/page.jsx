"use client";
import React, { useEffect } from "react";
import { useItemDetailsData } from "@/components/Custom/DataFetch";
import Image from "next/image";
import { HashLoader } from "react-spinners";

const WorkDetails = ({ params }) => {
  const { id } = params; // Extract `id` from params
  const { data, error, isLoading } = useItemDetailsData({ params: { id } }); // Fetch data using custom hook
  console.log(data);
  if (isLoading) {
    return (
      <div className="flex justify-center h-screen pt-10">
        <HashLoader color="#127acc" />
      </div>
    );
  }
  if (error) return <div>Error: Unable to fetch work details.</div>;

  // Destructure the fetched data
  const { title, detailsTitle, img, services, serviceDetails, videoIframeURL } =
    data.work;

  return (
    <div className="flex flex-col px-4 lg:px-[100px] font-sora bg-white relative z-[120] rounded-b-[20px] lg:rounded-b-[40px]">
      {/* Header Section */}
      <div className="w-full flex flex-col gap-3 text-[#127acc] justify-start mt-16">
        <p className="text-[19px]">Case study</p>
        <h1 className="font-bold text-[24px] lg:text-[48px]">{title}</h1>
        {/* <p className="text-lg text-gray-600">{detailsTitle}</p> */}
      </div>

      {/* Image Section */}
      <div className="lg:my-20 mt-10 lg:mt-20 mb-10 lg:mb-20 ">
        <Image
          width={800}
          height={600}
          className="h-full w-full rounded-3xl rounded-tr-3xl object-cover"
          src={img}
          alt={title}
          placeholder="blur"
          blurDataURL={img}
        />
      </div>

      {/* Services and Details Section */}
      <div className="flex flex-col lg:flex-row justify-between mb-20">
        {/* Services List */}
        <div className="w-full lg:w-[30%] flex flex-col gap-10 lg:mb-0 mb-5">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-[20px] xl:text-[30px] text-[#127acc]">
              Services
            </h1>
            <ul className="list-none space-y-4 text-[15px]">
              {services.map((service) => (
                <li key={service._id} className="cursor-pointer">
                  {service.serviceName}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Details */}
        <div className="w-full lg:w-[70%]">
          <small className="text-[15px] leading-snug">{serviceDetails}</small>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-20 video-container w-full h-[300px] lg:h-screen">
        <iframe
          className="w-full h-full"
          src={videoIframeURL}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WorkDetails;
