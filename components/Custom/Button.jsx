import React from "react";

const Button = ({ children }) => {
  return (
    <button className="flex justify-center items-center gap-2 rounded-full font-[Inter] text-sm  bg-[#125b5c] text-white hover:bg-white hover:text-black ease-in-out duration-500 px-12 py-4 border">
      {children}
    </button>
  );
};

export default Button;
