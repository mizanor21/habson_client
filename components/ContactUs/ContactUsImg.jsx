"use client";
import Image from "next/image";
import React from "react";

const ContactUsImg = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://i.postimg.cc/nhyVhZXh/Whats-App-Image-2024-09-22-at-16-57-08.jpg",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/2SwxW0gd/contact2.png",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/Bv7cYXSX/contact3.png",
    },
  ];

  return (
    <div>
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`w-full mx-auto ${index !== 0 ? "hidden md:block" : ""}`}
        >
          <Image
            src={card.image}
            alt=""
            width={400}
            height={500}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ContactUsImg;
