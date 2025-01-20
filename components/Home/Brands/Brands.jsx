import { cn } from "@/lib/utils";
import "./Brands.css";
import Image from "next/image";

const Brands = ({ body, data }) => {
  return (
    <div className="relative bg-white z-[110]">
      <div className="relative flex h-[300px] lg:h-[450px] w-full flex-col items-center justify-center overflow-hidden">
        {/* Continuous Marquee */}
        <div className="marquee-container">
          <div className="marquee-content">
            {[
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
              ...data?.reviews,
            ].map((review, index) => (
              <figure
                key={index}
                className={cn("relative cursor-pointer overflow-hidden")}
              >
                <div className="flex flex-row items-center gap-5"></div>
                <blockquote className="mt-2 text-sm">{body}</blockquote>
                <Image
                  className="h-12 w-auto object-cover saturate-0 hover:saturate-100"
                  width="200"
                  height="100"
                  alt="brand logo"
                  src={review?.imageURL}
                />
              </figure>
            ))}
          </div>
        </div>
        {/* Reverse Marquee */}
        <div className="marquee-container mt-10">
          <div className="marquee-content reverse">
            {[
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
              ...data?.partnerBrands,
            ].map((brand2, index) => (
              <figure
                key={index}
                className={cn("relative cursor-pointer overflow-hidden")}
              >
                <div className="flex flex-row items-center gap-5"></div>
                <blockquote className="mt-2 text-sm">{body}</blockquote>
                <Image
                  className="h-12 w-auto object-cover saturate-0 hover:saturate-100"
                  width="200"
                  height="100"
                  alt="Brand logo"
                  src={brand2?.logoURL}
                />
              </figure>
            ))}
          </div>
        </div>
        {/* Shadow Gradient on the sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background rounded-b-[20px] lg:rounded-b-[60px]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background rounded-b-[20px] lg:rounded-b-[60px]"></div>
      </div>
    </div>
  );
};

export default Brands;
