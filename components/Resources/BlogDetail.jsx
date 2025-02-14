import Link from "next/link";
import React from "react";

const BlogDetail = ({ data }) => {
  console.log(data.blog._id);
  const handleShareFB = () => {
    try {
      // Use the simpler sharer.php approach which is more reliable
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        `https://habson.vercel.app/blogs/${data.blog._id}`
      )}`;
      const width = 800;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;

      window.open(
        shareUrl,
        "facebook-share-dialog",
        `width=${width},height=${height},left=${left},top=${top},toolbar=0,status=0,menubar=0`
      );
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  const handleShareLinkedIn = () => {
    try {
      const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        `https://habson.vercel.app/blogs/${data.blog._id}`
      )}&title=${encodeURIComponent(data.blog.title)}`;
      const width = 800;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;

      window.open(
        shareUrl,
        "linkedin-share-dialog",
        `width=${width},height=${height},left=${left},top=${top},toolbar=0,status=0,menubar=0`
      );
    } catch (error) {
      console.error("Error sharing on LinkedIn:", error);
    }
  };
  const handleShareInstagram = () => {
    alert(
      "Instagram sharing is not supported directly. Copy the URL to share on Instagram."
    );
  };
  return (
    <div className="font-sora px-[5%]">
      <div className="lg:px-[10%]">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold pt-10 lg:pt-28 pb-5 text-[#0066B3]">
          {data.blog.title}
        </h1>

        <div>
          <div>
            <div className="md:flex justify-between py-8">
              <div>
                <p className="text-sm">October 25, 2023 • 3 minutes</p>
              </div>

              <div className="flex md:justify-between space-x-2 mt-5 md:mt-0">
                <button
                  onClick={handleShareLinkedIn}
                  target="_blank"
                  className="flex items-center justify-center text-black bg-[#F4F4F4] bg-transparent border border-[#F4F4F4] rounded-full w-7 h-7"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="19px"
                    height="19px"
                  >
                    {" "}
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                  </svg>
                </button>
                <button
                  onClick={handleShareInstagram}
                  target="_blank"
                  className="flex items-center justify-center text-gray-800 bg-gray-300 bg-transparent border border-gray-300 rounded-full w-7 h-7"
                >
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </button>
                <button
                  onClick={handleShareFB}
                  target="_blank"
                  className="flex items-center justify-center text-black bg-[#F4F4F4] bg-transparent border border-[#F4F4F4] rounded-full w-7 h-7"
                >
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <img
              src={data.blog.img}
              className="object-cover  w-full h-60 md:h-[660px] justify-center rounded-3xl "
            ></img>

            <div className="mt-14 lg:px-[10%] ">
              <ul className=" space-y-8 mb-8 text-[15px] font-[400]">
                <li>
                  Everyone knows who a{" "}
                  <i>
                    <b>noogler</b>
                  </i>{" "}
                  is. And if you don’t, reading this makes you want to google
                  it. Only a few companies have earned a coveted place in the
                  market, with professionals like you and I going ‘Man, I wanna
                  work here someday
                </li>
                <li>
                  <i>
                    <b>But, what did they do differently? </b>
                  </i>
                </li>
                <li>
                  No, not the paycheck, neither a work-from-home policy. It’s
                  the effort, they, as an organisation, have put into building a
                  reputation. Simply put - an employer brand.{" "}
                </li>
                <li>
                  Think of it as your organisation&apos;s personality, its vibe,
                  and its standing in the job market. It&apos;s the shaping of
                  your reputation as an employer. Your employer brand makes you
                  stand out in the crowd, like a peacock strutting its feathers
                  in a flock of pigeons.
                </li>
              </ul>

              <p className="text-2xl md:text-4xl lg:text-[38px] text-[#0066B3] font-bold py-5">
                Playing the employer branding game
              </p>
              <ul className=" space-y-8 mb-8 text-[15px] font-[400]">
                <li>
                  In this cut-throat world of business, where talent is the
                  ultimate currency, the concept of employer branding reigns
                  supreme. But it&apos;s not just about looking pretty;
                  it&apos;s about showcasing your culture, values, and USPs. And
                  if your question still is, “Will this be applicable to my
                  brand?” The answer, in 99% of cases, is a resounding yes.
                </li>
                <li>How we did it for our brands.</li>
                <li>
                  Let&apos;s rewind back a year for an illustrative case.
                  Consider professional services, like a law firm, where the
                  reputation often leans towards being conservative, with
                  intense work environments, characterised by strict dress
                  codes, and less-than-ideal working hours.
                </li>
              </ul>

              <p className=" text-2xl md:text-4xl text-[#0066B3] font-bold py-5">
                Our Innovative Approach to Pioneer Legal
              </p>
              <ul className=" space-y-8 mb-8">
                <ul className="space-y-8 text-[15px] font-[400]">
                  <li>
                    <h1 className="font-bold text-[15px] pb-5">Our Strategy</h1>
                    <p>
                      We embarked on transforming their perception with a robust
                      and imaginative employer branding strategy. We unveiled an
                      exclusive glimpse into the lives of Pioneer Legal&apos;s
                      employees. We highlighted details like their relaxed dress
                      code, vibrant work culture, promising career prospects in
                      the legal field, and their transparent and efficient
                      hiring processes.
                    </p>
                  </li>
                  <li>
                    <h1 className="font-bold text-[15px] pb-5">‍The Impact </h1>
                    <p>
                      These revelations came to life through elaborate LinkedIn
                      articles and Instagram posts, showcasing how this
                      wasn&apos;t just another law firm, but a place where
                      professional growth meets work-life balance. Our strategy
                      not only attracted but also retained some of the finest
                      legal talent in the industry, reshaping the mettle of
                      Pioneer Legal&apos;s workforce.
                    </p>
                  </li>
                </ul>
              </ul>
              <p className="text-[#0066B3] text-2xl md:text-4xl font-bold py-5">
                From India to the World: Amazon Global Selling
              </p>

              <ul className=" space-y-8 mb-8">
                <li>
                  If this example hasn&apos;t quite sealed the deal for you,
                  let&apos;s explore another one where we tackled a common
                  issue.
                </li>
                <ul className="space-y-8">
                  <li>
                    <h1 className="font-bold text-[15px] pb-5">The Problem</h1>
                    <p>
                      Many exporters were unaware of the valuable tools
                      available on the Amazon Global Selling platform.{" "}
                    </p>
                  </li>
                  <li>
                    <h1 className="font-bold text-[15px] ">Our Workaround</h1>
                  </li>
                  <ul className="space-y-8">
                    <li>
                      <p>
                        Our forward-thinking employer branding strategy was all
                        about illuminating pathways to success for exporters.
                        Every month, we rolled out high-energy campaigns, tying
                        them to exporter-related festivities, adding that extra
                        dose of excitement.{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        We fostered a vibrant learning community organising web
                        conferences and in-person meet and greets, where both
                        seasoned and new exporters could uncover the secrets of
                        AGS global platform.{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        To add a dash of inspiration, we suggested offerings
                        like mentorship opportunities with industry luminaries
                        and Indian venture capitalists through our prestigious
                        Propel Accelerator Program. Our mission? To propel
                        Indian businesses from local gems to global stars –
                        because, at Amazon Global Selling, we made dreams of
                        ‘From India to the World’ a reality.
                      </p>
                    </li>
                  </ul>
                </ul>
              </ul>
              <p className="text-[#0066B3] text-2xl md:text-4xl font-bold py-5">
                Making Hindustan Coca-Cola Beverages Great Again
              </p>

              <ul className=" space-y-8 mb-8">
                <ul className="space-y-8">
                  <li>
                    <h1 className="font-bold text-[15px] pb-5">The Problem </h1>
                    <p>
                      Despite their dynamic work culture, the appeal of HCCB as
                      an employer of choice was understated.
                    </p>
                  </li>
                  <li>
                    <h1 className="font-bold text-[15px] pb-5">
                      Our Strategy{" "}
                    </h1>
                    <p>
                      We formulated a concise employer branding strategy that
                      encapsulated HCCB&apos;s dynamic culture and THRIVE
                      philosophy. We ensured that these narratives spanned
                      across all echelons - from the corporate office to the
                      factory floor, offering a holistic picture of HCCB as an
                      employer.
                    </p>
                  </li>
                  <li>
                    The intentional placement of content and banners across the
                    website reinforces HCCB&apos;s employer brand, while also
                    creating a seamless user experience for potential employees.
                    The easy navigation and captivating content fostered a
                    deeper understanding and connection with HCCB&apos;s
                    employer brand.
                  </li>
                </ul>
              </ul>
              <p className="text-[#0066B3] text-2xl md:text-4xl font-bold py-5">
                Taking the leap
              </p>
              <ul className=" space-y-8 mb-8">
                <li>
                  Employer branding is no longer a luxury; it&apos;s a strategic
                  imperative. It&apos;s the difference between being just
                  another option or being the top choice.
                </li>
                <li>
                  If you&apos;re ready to step onto that stage and dazzle
                  potential talent, we’re here to help. We&apos;ve captained the
                  employer branding ship, and are eager to guide your company
                  towards becoming the dream workplace. The future is promising,
                  and we could be your ticket to centre stage!
                </li>
              </ul>

              <div>
                <h1 className="font-bold text-[24px]">Share this post </h1>
                <div className="flex justify-start space-x-2 mt-5">
                  <button
                    onClick={handleShareLinkedIn}
                    target="_blank"
                    className="flex items-center justify-center text-black bg-[#F4F4F4] bg-transparent border border-[#F4F4F4] rounded-full w-7 h-7"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="19px"
                      height="19px"
                    >
                      {" "}
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                    </svg>
                  </button>
                  <button
                    onClick={handleShareInstagram}
                    target="_blank"
                    className="flex items-center justify-center text-gray-800 bg-gray-300 bg-transparent border border-gray-300 rounded-full w-7 h-7"
                  >
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </button>
                  <button
                    onClick={handleShareFB}
                    target="_blank"
                    className="flex items-center justify-center text-black bg-[#F4F4F4] bg-transparent border border-[#F4F4F4] rounded-full w-7 h-7"
                  >
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
