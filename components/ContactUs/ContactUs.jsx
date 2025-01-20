import React from "react";
import ContactUsRightPart from "./ContactUsRightPart";
import ContactUsImg from "./ContactUsImg";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-52 md:px-[5%] lg:pl-[5%]">
      {/* Image Part */}
      <div className="order-1 md:order-2">
        <ContactUsImg />
      </div>

      {/* Right Part */}
      <div className="order-2 md:order-1 px-[5%] md:px-0">
        <ContactUsRightPart />
      </div>
    </div>
  );
};

export default ContactUs;
