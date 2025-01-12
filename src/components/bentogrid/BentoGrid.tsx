"use client";
import Image from "next/image";
import React from "react";
import teacherImg from "../../../public/teacher.webp";
import teacherImg1 from "../../../public/teacher1.jpg";
import child from "../../../public/child.jpg";
import teacherImg2 from "../../../public/teacher2.webp";
import teacherImg3 from "../../../public/teacher3.webp";
import { useIsMobile } from "@/hooks/useIsMobile";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

export const BentoGrid = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`flex ${isMobile ? "flex-col grid grid-cols-1" : "flex-row"} gap-6 font-[family-name:var(--font-geist-sans)] mb-10`}
    >
      {/* Card 1 */}
      <div
        className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center relative"
        style={{
          backgroundImage: `url(${teacherImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: isMobile ? "100%" : "600px",
          height: isMobile? "300px" : "400px",
        }}
      >
        <div className={` ${isMobile ? "text-sm font-semibold p-2 max-w-60 top-[60%] right-5" : " text-xl font-bold p-5 max-w-80 top-[30%] right-10"} text-black bg-white/50 backdrop-blur-sm  absolute   rounded-2xl `}>
          Learn anytime, anywhere with our online courses.
          <h1 className={`${isMobile ? "text-xl": "text-2xl"}  mt-4`}>Find My Guru</h1>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6 ">
        <div className="bg-[rgb(224,241,94)] h-[100%] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
          <div className="flex -space-x-2 mb-4">
            <Image
              src={teacherImg1}
              alt="Teacher 1"
              width={40}
              height={40}
              className="w-[3rem] h-[3rem] rounded-full"
            />
            <Image
              src={teacherImg2}
              alt="Teacher 2"
              width={40}
              height={40}
              className="w-[3rem] h-[3rem] rounded-full"
            />
            <Image
              src={teacherImg3}
              alt="Teacher 3"
              width={40}
              height={40}
              className="w-[3rem] h-[3rem] rounded-full"
            />
            <div className="w-[3rem] h-[3rem] bg-black text-white flex items-center justify-center rounded-full font-bold">
              400+
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <p className="text-3xl font-bold">Professional </p>
            <div className="h-10 w-10 bg-[rgb(255,52,2)] rounded-full flex justify-center items-center text-white">
              <TipsAndUpdatesIcon               style={{ transform: "rotate(-30deg)" }} />
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <svg
              fill="rgb(111,128,0)"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="100px"
              height="60px"
              viewBox="0 0 375.01 375.01"
            >
              <g>
                <g>
                  <path
                    d="M330.254,210.966c-56.916,1.224-110.16,25.704-167.076,28.764c-16.524,0.612-33.048-1.224-45.9-8.568
			c23.256-4.283,45.288-12.239,61.812-27.54c17.749-15.911,19.584-45.287,8.568-66.095c-10.404-19.584-36.72-20.196-55.08-15.3
			C89.125,132.63,59.75,184.65,84.229,221.369c-26.928,1.836-53.856,0-80.172,1.225c-5.508,0.611-5.508,8.567,0.612,8.567
			c26.928,1.836,59.364,4.284,91.188,2.448c1.836,1.225,3.672,3.061,5.508,4.284c64.872,45.288,159.732-11.628,229.5-13.464
			C338.821,223.817,338.821,210.354,330.254,210.966z M89.737,196.277c-6.732-25.091,15.3-46.511,35.496-56.916
			c20.196-10.404,48.96-10.404,55.692,15.912c7.956,30.6-18.36,48.959-43.452,56.916c-11.628,3.672-22.644,6.12-34.272,7.344
			C96.47,213.413,92.186,206.069,89.737,196.277z"
                  />
                  <path
                    d="M371.869,211.577c-8.567-5.508-16.523-11.016-24.479-16.523c-6.732-4.896-13.464-10.404-21.42-12.24
			c-6.12-1.836-12.24,7.344-6.732,11.627c6.732,4.896,14.076,9.18,20.809,13.464c4.896,3.061,9.792,6.732,14.075,9.792
			c-4.896,2.448-9.792,4.284-14.688,6.732c-3.672,1.836-7.956,3.672-11.628,5.508c-1.224,0.612-2.448,1.836-3.061,3.06
			c-1.836,2.448-0.611,1.225,0,0.612c-2.447,1.836-2.447,7.956,1.837,7.344l0,0c1.224,0.612,2.447,0.612,4.283,0.612
			c4.284-1.224,9.181-3.06,13.464-4.896c9.181-3.673,18.36-7.345,26.929-12.24C376.153,220.758,376.153,214.025,371.869,211.577z"
                  />
                </g>
              </g>
            </svg>
            <p className="text-3xl font-bold">Teachers</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[rgb(176,158,239)] h-[100%]  rounded-2xl shadow-md p-6 flex flex-col relative">
          <p
            className={` ${
              isMobile ? "text-3xl" : "max-w-[10vw] text-2xl"
            }  text-left font-bold z-10`}
          >
            Every child deserves the chance to learn
          </p>
          <div className="absolute top-5 right-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              style={{ transform: "rotate(-15deg)" }}
            >
              <path
                d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                fill="rgb(219,210,252)"
              />
            </svg>
          </div>
          <div className="absolute bottom-5 right-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="80px"
              viewBox="0 -2.5 160 160"
              fill="none"
            >
              <path
                d="M77.641 109.484C72.9009 109.484 65.9845 107.282 59.4934 103.692C55.9045 101.703 52.8079 99.087 50.9573 95.2983C50.3885 94.3292 50.0498 93.2424 49.9673 92.1217C49.9971 91.0383 50.0351 90.0267 51.0894 89.5737C51.6234 89.3877 52.1991 89.3564 52.7502 89.4832C53.3013 89.6101 53.8053 89.89 54.2042 90.2908C55.4807 91.5232 56.1747 93.4206 57.5453 94.4817C66.8574 101.695 77.1602 104.852 88.8085 101.248C94.2358 99.5683 98.0015 95.7554 100.849 90.9551C101.535 89.7978 102.028 88.3284 103.041 87.614C104.176 86.8143 106.105 86.0328 107.127 86.492C108.149 86.9511 108.975 88.9466 108.99 90.2786C109.005 91.7256 108.188 93.3061 107.389 94.619C101.248 104.714 92.1908 109.602 77.641 109.484Z"
                fill="rgb(219,210,252)"
              />
              <path
                d="M48.7689 46.7527C56.5141 46.5808 61.2223 49.154 65.1558 53.3597C65.8554 54.0913 66.4025 54.9547 66.7654 55.8997C67.6822 58.4559 65.8553 60.6607 63.2585 59.8447C61.3835 59.1397 59.6673 58.0693 58.2096 56.6954C54.6627 53.6259 50.8044 52.8098 46.2844 54.0463C39.6382 55.8644 34.3666 59.2137 31.658 65.8659C31.0412 67.38 30.0464 68.7838 28.0956 68.1371C26.0134 67.4471 25.7736 65.4705 26.4596 63.9388C27.8179 60.9072 29.2135 57.709 31.3655 55.253C36.3662 49.5493 43.2061 47.3906 48.7689 46.7527Z"
                fill="rgb(219,210,252)"
              />
              <path
                d="M128.999 55.286C128.647 55.7519 128.071 57.2802 127.103 57.5931C126.476 57.7121 125.831 57.6926 125.212 57.5359C124.594 57.3791 124.017 57.089 123.523 56.6858C122.394 55.6958 121.753 54.1234 120.986 52.7542C120.513 51.7836 119.747 50.9866 118.796 50.4761C117.844 49.9656 116.756 49.7676 115.686 49.9102C109.777 50.4194 104.475 52.115 100.66 57.1178C100.081 57.8775 98.0438 57.8937 97.6625 57.5449C96.8499 56.8001 96.0956 55.8521 96.382 54.9129C96.9428 53.2144 97.9063 51.677 99.1901 50.4316C104.299 45.4302 110.651 43.4299 117.672 43.6236C122.98 43.7671 128.8 49.51 128.999 55.286Z"
                fill="rgb(219,210,252)"
              />
              <path
                d="M44.2051 75.5854C45.3123 76.1089 46.525 77.6676 46.5751 78.8113C46.5179 79.5021 46.3007 80.1701 45.9409 80.7626C45.581 81.355 45.0884 81.8556 44.5017 82.2248C40.3135 84.37 35.7929 85.2273 31.1368 83.9441C29.4047 83.4701 27.7274 82.5953 27.5967 80.3804C27.4701 78.2352 28.8027 76.9533 30.5375 76.3114C33.0281 75.3904 42.4391 74.7505 44.2051 75.5854Z"
                fill="rgb(219,210,252)"
              />
              <path
                d="M120.918 78.5489C117.829 77.3348 117.058 74.0643 119.461 71.8148C120.841 70.5528 122.524 69.6701 124.347 69.253C126.265 68.8379 128.375 69.0864 130.374 69.3099C132.321 69.5279 134.129 70.2457 134.66 72.4776C134.962 73.4622 134.91 74.5213 134.513 75.4717C134.116 76.422 133.4 77.2037 132.488 77.6815C130.481 78.7595 122.457 79.1543 120.918 78.5489Z"
                fill="rgb(219,210,252)"
              />
              <path
                d="M3.27272 55.9748C-3.73711 83.5259 2.40121 107.831 21.5299 128.223C22.0283 128.75 22.5355 129.277 23.0434 129.785C33.3184 140.06 46.1171 146.404 56.2588 150.819C60.6115 152.719 82.9451 155.028 88.988 154.128C124.899 148.765 148.531 128.511 156.762 94.625C158.333 87.9873 159.116 81.1873 159.094 74.3661C159.132 58.2974 152.366 39.6163 138.414 25.6251C136.977 24.4373 135.546 23.2069 134.162 22.0145C131.16 19.4339 128.057 16.762 124.81 14.4834C100.013 -2.97008 74.2479 -3.06774 48.2339 6.1875C24.6807 14.5618 9.55529 31.3158 3.27272 55.9748ZM48.3341 14.4373C71.1594 4.95246 94.0612 3.27855 116.398 17.4844C120.482 20.0847 131.371 28.8849 133.085 30.2067L133.195 30.2879L133.286 30.3889C142 39.6299 151.978 56.5268 151.758 73.8963C151.686 81.3232 150.68 88.7115 148.766 95.8878C143.092 116.511 129.527 131.541 107.295 141.821C84.6956 152.642 52.2846 141.702 43.6611 136.01C34.1295 129.493 25.7895 121.386 19.0056 112.043C8.36622 96.9802 5.97929 75.3276 11.6958 55.5339C14.3715 46.3948 19.0474 37.9656 25.3844 30.8574C31.7214 23.7493 39.5608 18.1403 48.3341 14.4373Z"
                fill="rgb(219,210,252)"
              />
            </svg>
          </div>
          <div className="absolute bottom-2 left-[2.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                fill="rgb(219,210,252)"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div
        className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center relative"
        style={{
          backgroundImage: `url(${child.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: isMobile ? "100%" :"400px",
          height : isMobile ? "343px" :"400px",
        }}
      >
        <div className="  text-black bg-white p-5 absolute top-[70%]  rounded-2xl w-[90%] justify-between flex items-center ">
          <div className="flex flex-col text-left ">
            <h1 className="text-2xl font-bold">Math</h1>
            <h2>For Beginners</h2>
          </div>
          <div className="bg-[rgb(224,241,94)] h-10 w-10 rounded-full flex justify-center items-center">
            <ArrowForwardIcon />
          </div>
          <div>
            <h1 className="text-2xl font-bold">12 </h1>
            <h2>Weeks</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
