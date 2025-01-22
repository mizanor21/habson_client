// import Items from "@/components/Items/Items";
"use client";
import React from "react";
import { useBlogsData } from "@/components/Custom/DataFetch";
import BlogItems from "@/components/Items/BlogItems";

const Blogs = () => {
  const { data, isLoading, error } = useBlogsData();

  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 md:gap-y-20">
      {[1, 2, 3].map((key) => (
        <div key={key} className="space-y-3">
          {/* Image skeleton */}
          <div className="h-72 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl animate-pulse"></div>

          {/* Subtitle skeleton */}
          <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md animate-pulse"></div>
        </div>
      ))}
    </div>
  );
  if (isLoading) {
    return (
      <div className="px-[5%] py-10 xl:py-20 relative z-[110] bg-white rounded-b-[20px] lg:rounded-b-[40px]">
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="font-sora px-[5%] bg-white relative z-[110] rounded-b-[20px] lg:rounded-b-[40px] py-2 lg:pb-10 xl:pb-14 2xl:pb-20">
      <h1 className="text-2xl lg:text-[48px] font-bold text-[#127acc] text-center mb-10 lg:my-20">
        Blogs
      </h1>
      <BlogItems data={data} />
    </div>
  );
};

export default Blogs;
