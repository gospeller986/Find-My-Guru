import React, { useState } from "react";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionData = [
    {
      title: "How does it work ?",
      content:
        "No BS, No catch , just search tutors around you and connect with them .",
    },
    {
      title: "How do we verify Tutors ?",
      content:
        "Tutors go through a series of background checks , by the documentation , and  a video  interview .",
    },
    {
      title: "Is the platform accountable for Home Tuition mishaps ?",
      content:
        "This is a platform just to connect students with tutors , we do not hold any responsibility for any mishaps , Kindly do your due diligence before choosing a tutor.",
    },
  ];

  const toggleItem = (index: number | null) => {
    setActiveIndex((prevIndex: number | null) =>
      prevIndex === index ? null : index
    );
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:px-40 md:gap-10 font-[family-name:var(--font-geist-sans)]">
      <div className="flex relative">
        <h1 className=" text-3xl text-center md:text-5xl font-bold ">
          Frequently Asked Questions
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute -top-8  md:-top-16 right-4 rotate-45"
        >
          <path
            d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
            fill="rgb(224,241,94)"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="_x32_"
          viewBox="0 0 512 512"
          className="md:absolute h-4 w-4 md:h-6 md:w-6 md:-top-8 md:-right-2 "
        >
          <style type="text/css"></style>
          <g>
            <path
              className="st0"
              fill="rgb(224,241,94)"
              d="M431.684,252.936c-40.578-32.779-150.62-185.32-171.561-247.398C258.899,1.913,257.845,0,255.988,0   c-1.832,0-2.894,1.913-4.11,5.538C230.92,67.616,120.894,220.157,80.308,252.936c-1.053,0.843-1.946,2.44-1.946,3.064   c0,0.624,0.893,2.222,1.946,3.057c40.586,32.778,150.612,185.319,171.57,247.406c1.216,3.624,2.278,5.537,4.11,5.537   c1.857,0,2.911-1.913,4.135-5.537c20.941-62.087,130.983-214.628,171.561-247.406c1.046-0.835,1.954-2.432,1.954-3.057   C433.638,255.376,432.73,253.778,431.684,252.936z"
            />
          </g>
        </svg>
      </div>

      <div className="w-full  mx-auto my-8">
        {accordionData.map((item, index) => (
          <div key={index} className="mb-4 border border-gray-200 rounded">
            {/* Accordion Header */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">{item.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="p-4 bg-white text-gray-700">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
