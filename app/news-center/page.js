"use client";

import React, { useState, useEffect } from "react";
import { useItemsData } from "@/components/Custom/DataFetch";
import NewsItems from "@/components/Items/NewsItems";

const News = () => {
  // State for storing all data and filtered data
  const { data: allData, isLoading, error } = useItemsData();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Casestudy"); // Default to "Casestudy"

  // Effect to load all items initially or filter based on the default category
  useEffect(() => {
    if (allData) {
      if (selectedCategory === "All") {
        setFilteredData(allData); // Show all data
      } else {
        const filtered = allData.filter(
          (item) => item.category === selectedCategory
        );
        setFilteredData(filtered); // Filter based on default category
      }
    }
  }, [allData, selectedCategory]);

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredData(allData); // Show all data
    } else {
      const filtered = allData.filter((item) => item.category === category);
      setFilteredData(filtered); // Filter based on category
    }
  };

  if (isLoading) {
    return <div className="min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Failed to load data</div>;
  }

  return (
    <div className="bg-white relative z-[110] rounded-b-[40px] pb-10 lg:pb-20 font-sora">
      <div className=" pb-10">
        <h2 className="px-[5%] text-2xl text-center md:text-4xl xl:text-[42px] 2xl:text-[48px] leading-10 text-[#0066B3] font-bold py-8 lg:pt-[80px] xl:pb-[65px] 2xl:pb-[80px]">
          Habson In The News
        </h2>
        <div className="md:hidden">
          <div className="border-b border-gray-300" />
        </div>
        <div className="flex justify-center md:justify-end my-8 space-x-4 px-[10%] md:px-[5%]">
          <button
            onClick={() => handleCategoryChange("Casestudy")}
            className={`px-5 py-[10px] rounded-full text-[12px] lg:text-sm font-[400] lg:font-semibold transition-all duration-300 ${
              selectedCategory === "Casestudy"
                ? "bg-[#0066B3] text-white"
                : "border-2 border-[#0066B3] text-[#0066B3] hover:bg-[#0066B3] hover:text-white"
            }`}
          >
            Press Releases
          </button>
          <button
            onClick={() => handleCategoryChange("Daily Creativity")}
            className={`px-5 py-[10px] rounded-full text-[12px] lg:text-sm font-[400] lg:font-semibold transition-all duration-300 ${
              selectedCategory === "Daily Creativity"
                ? "bg-[#0066B3] text-white"
                : "border-2 border-[#0066B3] text-[#0066B3] hover:bg-[#0066B3] hover:text-white"
            }`}
          >
            Media Features
          </button>
        </div>

        <div className="hidden md:block md:px-[5%]">
          <div className="border-b border-gray-300" />
        </div>

        {/* Pass the filtered data to Items component */}
        <div className="pt-3 px-[10%] lg:px-[5%] mt-5">
          <NewsItems data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default News;
