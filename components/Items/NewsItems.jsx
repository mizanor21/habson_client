"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const SkeletonLoader = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 md:gap-y-20">
    {[1, 2, 3].map((key) => (
      <div key={key} className="space-y-3">
        <div className="h-72 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl animate-pulse"></div>
        <div className="h-6 w-1/2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md animate-pulse"></div>
      </div>
    ))}
  </div>
);

const NewsItems = ({ data }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6; // Number of items per page
  const offset = currentPage * itemsPerPage;
  const currentItems = data ? data.slice(offset, offset + itemsPerPage) : [];
  const pageCount = Math.ceil((data ? data.length : 0) / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleMouseMove = (event, id) => {
    const offsetX = event.clientX;
    const offsetY = event.clientY;

    setPosition({ x: offsetX, y: offsetY });
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const scrollAnimation = {
    position: "absolute",
    whiteSpace: "nowrap",
    animation: "scroll 2s linear infinite",
  };

  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  if (!data) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 md:gap-y-20">
        {currentItems.map((item) => (
          <Link key={item._id} href={`works/${item._id}`}>
            <div
              className="relative"
              onMouseMove={(e) => handleMouseMove(e, item._id)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={item.img}
                alt=""
                width={600}
                height={100}
                className="rounded-xl"
              />
              <p className="text-[16px] font-[400] text-black mt-[8px]">
                {item.detailsTitle}
              </p>
              <style>{keyframes}</style>

              {hoveredId === item._id && (
                <div
                  className="w-36 h-10 fixed z-[100]"
                  style={{
                    top: `${position.y - 30}px`,
                    left: `${position.x}px`,
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="bg-[#0066B3] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
                    <p style={scrollAnimation}>View Case study</p>
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Component */}
      <div className="mt-10 flex justify-center">
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"flex space-x-4 items-center"}
          previousLinkClassName={
            "w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600  hover:bg-gradient-to-r hover:from-[#0066B3] hover:to-indigo-500 transition-all duration-300"
          }
          nextLinkClassName={
            "w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600  hover:bg-gradient-to-r hover:from-[#0066B3] hover:to-indigo-500 transition-all duration-300"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
          activeClassName={
            "text-white bg-gradient-to-r from-[#0066B3] to-indigo-500 rounded-full  shadow-md scale-110"
          }
          pageLinkClassName={
            "w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600  hover:bg-gradient-to-r hover:from-[#0066B3] hover:to-indigo-500 transition-all duration-300"
          }
        />
      </div>
    </div>
  );
};

export default NewsItems;
