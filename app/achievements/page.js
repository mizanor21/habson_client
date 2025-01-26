import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import ButtonEffect from "@/components/Custom/Button";

const Achievement = async () => {
  const res = await fetch("https://habson-admin.vercel.app/api/achievements", {
    next: { revalidate: 10 },
  });
  const awards = await res.json();

  return (
    <div className="bg-white relative z-[110] py-10 lg:py-20 font-sora rounded-b-[20px] lg:rounded-b-[40px]">
      {awards.map((award, index) => (
        <div
          key={award._id}
          className="grid gap-8 mb-20 px-[5%] lg:px-[10%] lg:gap-20 md:grid-cols-2"
        >
          {/* Image Part */}
          <div
            className={`flex justify-center items-center ${
              index % 2 === 0 ? "md:order-2" : "md:order-1"
            }`}
          >
            {award.image ? (
              <Image
                width={900}
                height={600}
                src={award.image}
                alt={award.title}
                className="rounded-lg max-h-[900px]"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                No Image Available
              </div>
            )}
          </div>
          {/* Content Part */}
          <div
            className={`flex flex-col justify-center ${
              index % 2 === 0 ? "order-1" : "order-2"
            }`}
          >
            <h1
              className="text-2xl font-bold mt-1 md:text-3xl lg:text-[48px] text-[#127acc] mb-8"
              style={{ lineHeight: "1.03" }}
            >
              {award.title}
            </h1>
            {award.description &&
              award.description.map((paragraph, i) => (
                <p key={i} className="text-[18px] mb-2 leading-relaxed">
                  {paragraph}
                </p>
              ))}

            <Link href={award?.link}>
              <div className="max-w-sm mt-8">
                <ButtonEffect>
                  <span className="flex gap-2 items-center">
                    Access Habson Bots
                    <MdOutlineArrowRightAlt className="text-xl" />
                  </span>
                </ButtonEffect>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
