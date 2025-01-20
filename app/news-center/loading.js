import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="relative z-[110]">
      <Image
        src="/loading/loading.gif"
        width={100}
        height={100}
        className="w-screen h-screen"
        alt="loading..."
      ></Image>
    </div>
  );
};

export default loading;
