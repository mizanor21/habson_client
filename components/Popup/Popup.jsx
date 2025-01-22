import Image from "next/image";
import Link from "next/link";
import React from "react";
import confetti from "@/public/assets/logo/confetti.gif";

const Popup = () => {
  return (
    <div className="font-sora flex justify-center items-center w-full absolute px-2 py-2">
      <Image src={confetti} width={30} alt="confetti"></Image>
      <p className="font-[400] text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] min-[1700px]:text-[18px]">
        &quot;Addikt is now part of the Habson Network.{" "}
        <Link href={"/news-center"} className="text-[#ed1c25]">
          Read More Here.
        </Link>
        &quot;
      </p>
    </div>
  );
};

export default Popup;
