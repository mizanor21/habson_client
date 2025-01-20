import React from "react";
import TrendingItems from "./TrendingItems";

const Trending = () => {
  return (
    <div className="relative z-[110] px-[5%] mb:py-10 lg:pb-20 bg-white">
      <h2 className="font-sora font-[700] text-[30px] pb-8">Trending Now</h2>
      <TrendingItems />
    </div>
  );
};

export default Trending;
