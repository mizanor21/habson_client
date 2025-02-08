"use client";

import React, { useState, useEffect } from "react";
import ButtonEffect from "@/components/Custom/Button";
import { useItemsData } from "@/components/Custom/DataFetch";
import Items from "@/components/Items/Items";
import { HashLoader } from "react-spinners";

const Works = () => {
  // State for storing all data and filtered data
  const { data: allData, isLoading, error } = useItemsData();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Effect to load all items initially
  useEffect(() => {
    if (allData) {
      setFilteredData(allData);
    }
  }, [allData]);

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
    return (
      <div className="flex justify-center h-screen pt-10">
        <HashLoader color="#127acc" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Failed to load data</div>;
  }

  return (
    <div className="bg-white relative z-[110] rounded-b-[40px] pb-10 lg:pb-20 font-sora">
      <div className="px-[5%] pb-10">
        <h2 className="text-2xl md:text-4xl lg:text-[48px] leading-10 text-[#127acc] font-bold pt-5 md:pt-10 pb-8 lg:pt-[80px] lg:pb-[70px]">
          Explore Our Latest Work
        </h2>
        <hr />
        <div className="md:flex justify-end my-5 space-y-1 md:space-y-0">
          <div className="grid grid-cols-2 md:block justify-center items-center space-x-3 mr-5 md:mr-0">
            <button onClick={() => handleCategoryChange("Casestudy")}>
              <ButtonEffect>
                <p className="text-[10px] sm:text-[14px]">Case Study</p>
              </ButtonEffect>
            </button>
            <div className="text-black border border-black md:hidden " />
          </div>
          <span
            className="divider divider-horizontal divider-start divider-neutral"
            style={{ marginLeft: 3, marginRight: 3 }}
          ></span>
          <div className="grid grid-cols-2 md:block justify-center items-center space-x-3 mr-5 md:mr-0">
            <button onClick={() => handleCategoryChange("Daily Creativity")}>
              <ButtonEffect>
                <p className="text-[10px] sm:text-[14px]">Daily Creativity</p>
              </ButtonEffect>
            </button>
          </div>
        </div>

        {/* Pass the filtered data to Items component */}
        <Items data={filteredData} />
      </div>
    </div>
  );
};

export default Works;
