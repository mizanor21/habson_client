"use client";
import React, { useEffect } from "react";
import { useBlogDetailsData } from "@/components/Custom/DataFetch";
import Image from "next/image";
import BlogDetail from "@/components/Resources/BlogDetail";
import { HashLoader } from "react-spinners";

const BlogDetails = ({ params }) => {
  const { id } = params; // Extract `id` from params
  const { data, error, isLoading } = useBlogDetailsData({ params: { id } }); // Fetch data using custom hook

  if (isLoading) {
    return (
      <div className="flex justify-center h-screen pt-10">
        <HashLoader color="#127acc" />
      </div>
    );
  }
  if (error) return <div>Error: Unable to fetch work details.</div>;

  return (
    <div className="relative z-[110] rounded-b-[20px] lg:rounded-b-[50px] pb-10 lg:pb-20 bg-white">
      <BlogDetail data={data} />
    </div>
  );
};

export default BlogDetails;
