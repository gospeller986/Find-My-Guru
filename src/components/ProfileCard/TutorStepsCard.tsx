import { Divider, IconButton } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import React from "react";

interface IUserStepsProps {
  handleOpenUserForm: () => void;
}

export const TutorStepsCard = (props: IUserStepsProps) => {
  const { handleOpenUserForm } = props;

  return (
    <div className="flex flex-col w-full bg-[rgb(239,236,227)] h-full p-4 rounded-2xl ">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold w-full justify-start">
            Become a Tutor
          </h1>
          <h1 className="text-sm">Unleash the power of being an expert</h1>
        </div>
        <IconButton onClick={handleOpenUserForm}>
          <div className="h-10 w-10 bg-red-600 rounded-full flex justify-center items-center text-white ">
            <AutoFixHighIcon />
          </div>
        </IconButton>
      </div>
      <Divider sx={{ mt: 2 }} />
      <div className="flex flex-col justify-evenly h-full">
        <div className="flex flex-row p-4 gap-4 bg-yellow-900/10 rounded-xl ">
          <TaskAltOutlinedIcon sx={{ color: "green" }} />
          <h1>Create your Tutor Profile</h1>
        </div>
        <div className="flex flex-row p-4 gap-4 bg-yellow-900/10 rounded-xl ">
          <>
            <CircleOutlinedIcon />
          </>
          <h1>Add your availability</h1>
        </div>
        <div className="flex flex-row p-4 gap-4 bg-yellow-900/10 rounded-xl ">
          <CircleOutlinedIcon />
          <h1>Create your Services</h1>
        </div>
      </div>
    </div>
  );
};
