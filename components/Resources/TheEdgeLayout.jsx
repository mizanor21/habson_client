import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ButtonEffect from "@/components/Custom/Button";

const TheEdgeLayout = ({ data }) => {
  return (
    <div className="px-[5%] bg-white relative z-[110] py-10 lg:py-20 rounded-b-[20px] lg:rounded-b-[40px] text-black">
      <div className=" mb-10 font-sora">
        <>
          <h1 className="text-[24px] md:text-4xl lg:text-[48px] text-[#127acc] font-bold mb-8">
            Welcome to the Edge!
          </h1>
          <p className="text-[16px] lg:text-[18px] ">
            As creatives by nature, we love to push the boundaries of what we
            can create, experimenting with technology and art, uncover insights
            and build exciting new resources that help us take our work to the
            next level. We’re now opening up our experiments to you so we can
            all #Living Brands’ together.
            <br />
            <br />
            Check them out below and let us know your thoughts on our socials!
          </p>
        </>
      </div>

      <div className="font-sora">
        {data.map((edge, i) => (
          <div
            key={edge._id || i}
            className={`grid md:grid-cols-2 gap-10 bg-white rounded-lg mb-10 transition-all duration-300 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div
              className={`flex flex-col justify-center ${
                i % 2 === 0 ? "order-1" : "md:order-2"
              }`}
            >
              <h1 className="text-2xl font-bold mt-1 md:text-3Xl lg:text-[48px] text-[#127acc] mb-5 leading-[1.1]">
                {edge.title}
              </h1>
              {edge.description.map((desc, idx) => (
                <p key={idx} className="text-[15px] mb-4">
                  {desc}
                </p>
              ))}
              <div className="max-w-[330px] lg:max-w-[380px] mt-10">
                <Link href={edge.buttonLink}>
                  <ButtonEffect>
                    <span className="flex gap-2">
                      Access Living Brand&apos;s Glossary
                      <MdOutlineArrowRightAlt className="text-xl" />
                    </span>
                  </ButtonEffect>
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div
              className={`flex justify-center items-center ${
                i % 2 === 0 ? "order-2" : "order-1"
              }`}
            >
              <img
                src={edge.image}
                alt="Edge Image"
                className="rounded-lg w-full max-w-xs md:max-w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheEdgeLayout;
