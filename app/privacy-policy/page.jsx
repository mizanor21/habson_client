import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-[5%] py-10 lg:py-20 md:pb-10 bg-white relative z-[110] rounded-b-[20px] lg:rounded-b-[40px] font-sora">
      {/* Title */}
      <h1 className="text-[#0066B3] text-3xl lg:text-[48px] font-bold text-center mb-10 lg:mb-32">
        Terms & Privacy Policy
      </h1>

      {/* Sections */}
      <div className="space-y-10 text-base lg:text-lg leading-relaxed">
        {/* Section 1 */}
        <div>
          <h2 className="text-[22px] font-[600]  mb-3 text-[#0066B3]">
            We are committed to protecting your privacy
          </h2>
          <p className="text-[16px]">
            We collect the minimum amount of information about you that is
            commensurate with providing you with a satisfactory service. This
            policy indicates the type of processes that may result in data being
            collected about you. Your use of this website gives us the right to
            collect that information.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-[22px] font-[600]  mb-3 text-[#0066B3]">
            Information Collected
          </h2>
          <p className="text-[16px]">
            We may collect any or all of the information that you give us
            depending on the type of transaction you enter into, including your
            name, address, telephone number, and email address, together with
            data about your use of the website. Other information that may be
            needed from time to time to process a request may also be collected
            as indicated on the website.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-[22px] font-[600]  mb-3 text-[#0066B3]">
            Information Use
          </h2>
          <p className="text-[16px]">
            We use the information collected primarily to process the task for
            which you visited the website. Data collected in the UK is held in
            accordance with the Data Protection Act. All reasonable precautions
            are taken to prevent unauthorized access to this information. This
            safeguard may require you to provide additional forms of identity
            should you wish to obtain information about your account details.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-[22px] font-[600]  mb-3 text-[#0066B3]">
            Cookies
          </h2>
          <p className="text-[16px]">
            Your Internet browser has the in-built facility for storing small
            files – “cookies” – that hold information which allows a website to
            recognize your account. Our website takes advantage of this facility
            to enhance your experience. You have the ability to prevent your
            computer from accepting cookies but, if you do, certain
            functionality on the website may be impaired.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-[22px] font-[600]  mb-3 text-[#0066B3]">
            Disclosing Information
          </h2>
          <p className="text-[16px]">
            We do not disclose any personal information obtained about you from
            this website to third parties unless you permit us to do so by
            ticking the relevant boxes in registration or competition forms. We
            may also use the information to keep in contact with you and inform
            you of developments associated with us. You will be given the
            opportunity to remove yourself from any mailing list or similar
            device.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-[22px] font-[600]  mb-3 text-[#0066B3]">
            Changes to this Policy
          </h2>
          <p className="text-[16px]">
            Any changes to our Privacy Policy will be placed here and will
            supersede this version of our policy. We will take reasonable steps
            to draw your attention to any changes in our policy. However, to be
            on the safe side, we suggest that you read this document each time
            you use the website to ensure that it still meets with your
            approval.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-[22px] font-[600]  mb-3 text-[#0066B3]">
            Contacting Us
          </h2>
          <p className="text-[16px]">
            If you have any questions about our Privacy Policy, or if you want
            to know what information we have collected about you, please email
            us at{" "}
            <a
              href="mailto:life@living-brands.co"
              className="text-blue-500 hover:underline"
            >
              life@living-brands.co
            </a>
            . You can also correct any factual errors in that information or
            require us to remove your details from any list under our control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
