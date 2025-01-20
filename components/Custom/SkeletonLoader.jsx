import React from "react";

const SkeletonLoader = ({
  height = "h-6",
  width = "w-full",
  rounded = "rounded-md",
}) => {
  return (
    <div
      className={`${height} ${width} bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer ${rounded} shadow-sm`}
    ></div>
  );
};

export default SkeletonLoader;
