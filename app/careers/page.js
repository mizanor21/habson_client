import CareerLastVideo from "@/components/Career/CareerLastVideo";
import CareerSection from "@/components/Career/CareerSection";
import VideoSection from "@/components/Career/VideoSection";
import ColorPalette from "@/components/ColorPalette/ColorPalatte";

const Career = () => {
  return (
    <div className="relative bg-white z-[110] rounded-b-[20px] lg:rounded-b-[60px]">
      <div className="px-[5%] ">
        <CareerSection></CareerSection>
        <VideoSection></VideoSection>
        <div className="2xl:text-center font-sora py-[20px] md:pt-[45px] 2xl:py-[70]">
          <h1 className="text-[#125b5c] text-[24px] font-[600] mt-0 lg:mt-10">
            Have you got what it takes to #CreateALivingBrands?
          </h1>
          <p className="text-[#125b5c] font-[600] 2xl:font-[400] text-[24px] 2xl:text-[19px] mt-2">
            Check out our core principles. If they align with your values, do
            apply..
          </p>
        </div>
        <ColorPalette />
        <CareerLastVideo></CareerLastVideo>
      </div>
    </div>
  );
};

export default Career;
