"use client";

import { BentoGrid } from "@/components/bentogrid/BentoGrid";
import { Faq } from "@/components/faqs/Faq";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { Subjects } from "@/components/subjects/Subjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={`px-4 md:px-[10vw]`}>
        <div
          className={`flex flex-col mb-[40vh] md:mb-0 md:flex-row
         h-[80vh] w-[100%]  `}
        >
          <div
            className={`flex flex-col justify-center w-[100%] p-10" md:w-[50%]
            gap-8`}
          >
            <h1
              className={`text-5xl md:text-7xl
           font-extrabold  font-[family-name:var(--font-geist-sans)] `}
            >
              Find Your Perfect<br></br>{" "}
              <span className="text-[rgb(224,241,94)]"> Tutor</span>
            </h1>
            <p
              className={`text-base md:text-xl
              max-w-[650px] font-[family-name:var(--font-geist-sans)]`}
            >
              Connect with expert tutors in your area, access comprehensive
              study materials, and ace your exams with personalized learning
              support.
            </p>
            <div
              className={`flex gap-8 flex-col w-[100%] md:flex-row
            `}
            >
              <button className="text-white bg-black px-4 py-2 rounded-lg">
                Find a Tutor
              </button>
              <button className=" border border-black px-4 py-2 rounded-lg">
                Browse Resources
              </button>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center  items-center w-[100%] p-10 md:w-[50%] md:min-h-[80vh] gap-8`}
          >
            <div className=" relative w-full max-w-lg ">
              <div
                className={` absolute top-20 left-20 md:top-0 md:-left-4
              w-72 h-72 md:h-[22rem] md:w-[22rem] bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animmation-delay-2000`}
              />
              <div
                className={`absolute -top-10 right-20 md:top-0 md:-right-4
                w-72 h-72  md:h-[22rem] md:w-[22rem] bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animmation-delay-2000`}
              />
              <div
                className={`absolute -bottom-20 left-20 w-72 h-72  md:h-[22rem] md:w-[22rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob`}
              />
              <div
                className={`bg-[white]/40 backdrop-blur-0-[20px] z-10 w-[100%]  absolute   p-4 max-h-fit md:-top-40 md:p-10 
                border-white border rounded-lg `}
              >
                <h1 className="text-3xl font-bold font-[family-name:var(--font-geist-sans)]">
                  Quick Stats
                </h1>
                <div className="mt-5 flex flex-col gap-10 text-center">
                  <div className="flex flex-row justify-evenly gap-10">
                    <div>
                      <h2 className="text-3xl font-[family-name:var(--font-geist-sans)]">
                        500+
                      </h2>
                      <p className="text-sm font-[family-name:var(--font-geist-sans)]">
                        Expert Tutors
                      </p>
                    </div>
                    <div>
                      <h2 className="text-3xl font-[family-name:var(--font-geist-sans)]">
                        100+
                      </h2>
                      <p className="text-sm font-[family-name:var(--font-geist-sans)]">
                        Subjects
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-evenly gap-10">
                    <div>
                      <h2 className="text-3xl font-[family-name:var(--font-geist-sans)]">
                        1000+
                      </h2>
                      <p className="text-sm font-[family-name:var(--font-geist-sans)]">
                        {" "}
                        Happy Students
                      </p>
                    </div>
                    <div>
                      <h2 className="text-3xl font-[family-name:var(--font-geist-sans)]">
                        5000+
                      </h2>
                      <p className="text-sm font-[family-name:var(--font-geist-sans)]">
                        Reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BentoGrid />
        <Subjects />
        <Faq />
      </div>
      <Footer />
    </>
  );
}
