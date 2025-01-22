"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ImGoogle } from "react-icons/im";

const Awards = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <>
      <section
        ref={targetRef}
        className="hidden md:block bg-white relative z-[110] rounded-b-[50px] h-[300vh]   py-20"
      >
        <h2 className="text-2xl md:text-4xl text-[#127acc] font-bold text-center">
          Our Valuable Awards
        </h2>
        <div className="sticky top-0 flex  items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>

      {/* mobile device */}
      <div className="md:hidden bg-white relative z-[110] px-[5%] py-10">
        {cards.map((item) => (
          <div key={""} id={item.id}>
            <Image
              width={200}
              height={200}
              className="w-full h-[400px] mt-5 rounded"
              src={item.imageUrl}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative bg-white w-[500px] overflow-hidden  hover:-translate-y-5 duration-300 border mt-10"
    >
      <div>
        <Image
          width={700}
          height={700}
          className="w-full h-[700px] object-cover"
          src={card.imageUrl}
          alt={card.title}
        />
      </div>
    </div>
  );
};

export default Awards;

const cards = [
  {
    id: 1,
    imageUrl:
      "https://i.postimg.cc/P5XY7rvD/Whats-App-Image-2024-09-17-at-13-19-50.jpg", // Replace with the correct image URL or import
    title: "Client's Business Wins, We Win.",
    description:
      "Fundamentally, we will always be a services-first company that ensures our clients’ businesses fit their definition of success. As Schbangers, we must deliver the whole Schbang by pushing ourselves and those around us to work in the best interests of our partners",
  },
  {
    id: 2,
    imageUrl:
      "https://i.postimg.cc/G3DF8f14/Whats-App-Image-2024-09-17-at-13-19-51.jpg",
    title: "Our Word is our Bond.",
    description: `We work in fast and complex environments where we deal with multiple stakeholders to deliver speed, agility, and results to our clients. It is integral to hold ourselves accountable for our promises and strive to deliver on those promises without fail.`,
  },
  {
    id: 3,
    imageUrl:
      "https://i.postimg.cc/15ZppK9J/Whats-App-Image-2024-09-17-at-13-19-51-2.jpg",
    title: "Creativity is Sacred, Aesthetics are God.",
    description: `We create path-breaking work that challenges the status quo and positively impacts our clients’ businesses. We make sure how we communicate, and design helps our brand stand out.
  .`,
  },
  {
    id: 4,
    imageUrl:
      "https://i.postimg.cc/Dyd15b0F/Whats-App-Image-2024-09-17-at-13-19-51-1.jpg",
    title: "Partnerships with Win-Win Attitude.",
    description: `We view all our stakeholders as equal partners and approach all partnerships with a win-win attitude to ensure both parties succeed.`,
  },
];
