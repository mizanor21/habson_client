import Image from "next/image";
import React from "react";

const OurPartnerships = () => {
  const cardData = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 1",
      description: "This is a description for the first card.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 2",
      description: "This is a description for the second card.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 3",
      description: "This is a description for the third card.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 4",
      description: "This is a description for the third card.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 5",
      description: "This is a description for the third card.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 3",
      description: "This is a description for the third card.",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150",
      headline: "Card Title 3",
      description: "This is a description for the third card.",
    },
  ];
  return (
    <div className="flex flex-col px-4 lg:px-[100px]">
      {/* Header Section */}
      <div className="py-8 md:py-[30px] lg:py-[70px] xl:py-[100px] mb-6">
        <h1 className="text-3xl lg:text-6xl font-bold text-center lg:text-left">
          Proudly Collaborating With The Most Cutting-Edge Platforms In The
          Industry
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mb-6">
        {cardData.map(({ id, image, headline, description }) => (
          <div
            key={id}
            className="flex flex-col justify-center items-center max-w-sm mx-auto overflow-hidden"
          >
            <Image
              width={200}
              height={200}
              className="w-[50%] h-28 object-cover"
              src={image}
              alt={headline}
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold mb-2">{headline}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartnerships;
