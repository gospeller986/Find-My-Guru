"use client";

import { Divider, IconButton } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import React, { useEffect, useState } from "react";
import { UserProfile } from "@/interfaces/response/user-profile.response.interface";

interface IUserStepsProps {
  handleOpenUserForm: () => void;
  userProfile: UserProfile;
}

export const UserStepsCard = (props: IUserStepsProps) => {
  const { handleOpenUserForm, userProfile } = props;
  const [isProfileComplete, setIsProfileComplete] = useState<boolean>(false);

  useEffect(() => {
    if (
      userProfile &&
      userProfile?.name !== "" &&
      userProfile?.email !== "" &&
      userProfile?.role !== "" &&
      userProfile?.country !== "" &&
      userProfile?.state !== "" &&
      userProfile?.city !== ""
    ) {
      setIsProfileComplete(true);
    }
  }, [userProfile]);

  return (
    <div className="flex flex-col w-full bg-[rgb(239,236,227)] h-full p-4 rounded-2xl ">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold w-full justify-start">
            Make the page yours
          </h1>
          <h1 className="text-sm">Unlock the potential of your page</h1>
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
          <h1>Get Onboarded</h1>
        </div>
        <div className="flex flex-row p-4 gap-4 bg-yellow-900/10 rounded-xl ">
          {isProfileComplete ? (
            <>
              {" "}
              <TaskAltOutlinedIcon sx={{ color: "green" }} />
            </>
          ) : (
            <>
              <CircleOutlinedIcon />
            </>
          )}

          <h1>Complete Your Profile</h1>
        </div>
        <div className="flex flex-row p-4 gap-4 bg-yellow-900/10 rounded-xl ">
          <CircleOutlinedIcon />
          <h1>Interact with the Platform</h1>
        </div>
      </div>
    </div>
  );
};
