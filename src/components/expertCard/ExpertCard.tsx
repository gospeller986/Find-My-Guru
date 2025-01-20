"use client";

import React from "react";
import teacherImg1 from "../../../public/teacher1.jpg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button, IconButton, Tooltip } from "@mui/material";

export const ExpertCard = () => {
  return (
    <div className="flex flex-col p-4 shadow-2xl rounded-2xl">
      <div
        className="rounded-xl "
        style={{
          backgroundImage: `url(${teacherImg1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: 250,
          width: 250,
          position: "relative",
        }}
      >
        <IconButton
          style={{ position: "absolute" }}
          className="top-0 right-0 bg-white"
        >
          <Tooltip title={"Prompt"}>
            <InfoOutlinedIcon className="text-white " />
          </Tooltip>
        </IconButton>
        <div className="w-full flex justify-center">
          <h1
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-white to-gray-300"
            style={{ position: "absolute", bottom: "1rem" }}
          >
            Science
          </h1>
        </div>
      </div>
      <div className=" flex flex-row justify-between mt-4">
        <h2 className="text-2xl w-full font-semibold">Atharva</h2>
        <button
          className={`w-full bg-black p-2 rounded-xl text-white font-semibold`}
        >
          Resolve Doubts
        </button>
      </div>
    </div>
  );
};
