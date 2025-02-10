import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";

export const Stats = () => {
  return (
    <div className="flex flex-col w-full gap-10 md:px-40">
    <h1 className="text-5xl font-bold w-full text-center">Quick Stats</h1>
    <div
      className="w-full flex flex-col justify-center items-center
   h-auto bg-white rounded-2xl shadow-2xl p-4 gap-4"
    >
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col md:flex-row w-full gap-8">
          <div className="p-4 shadow-2xl rounded-2xl w-full flex justify-between items-center">
            <div>
              <h1 className="font-semibold">Total Students</h1>
              <h1>500</h1>
            </div>
            <PersonIcon />
          </div>{" "}
          <div className="p-4 shadow-2xl rounded-2xl w-full flex justify-between items-center ">
            <div>
              <h1 className="font-semibold">Total Teachers</h1>
              <h1>1800</h1>
            </div>
            <SchoolIcon />
          </div>{" "}
          <div className="p-4 shadow-2xl rounded-2xl w-full flex justify-between items-center">
            <div>
              <h1 className="font-semibold">Total Impressions</h1>
              <h1>950 +</h1>
            </div>
            <SwipeUpIcon />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-8">
          <div className="p-4 shadow-2xl rounded-2xl w-full flex justify-between items-center">
            <div>
              <h1 className="font-semibold">Total Students</h1>
              <h1>500</h1>
            </div>
            <PersonIcon />
          </div>{" "}
          <div className="p-4 shadow-2xl rounded-2xl w-full flex justify-between items-center ">
            <div>
              <h1 className="font-semibold">Total Teachers</h1>
              <h1>1800</h1>
            </div>
            <SchoolIcon />
          </div>{" "}
          <div className="p-4 shadow-2xl rounded-2xl w-full flex justify-between items-center">
            <div>
              <h1 className="font-semibold">Total Impressions</h1>
              <h1>950 +</h1>
            </div>
            <SwipeUpIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
