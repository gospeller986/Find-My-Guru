"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { stringAvatar } from "@/lib/utils";
import { Button, Chip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import { Loader } from "@/components/loader/Loader";

type UserProfile = {
  name: string;
  email: string;
  role: string;
  country?: string;
  state?: string;
  city?: string;
};

export default function UserProfilePage() {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [availableHeight, setAvailableHeight] = useState<number>(0);
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const footer = document.querySelector(".footer");

    if (navbar && footer) {
      const navbarHeight = navbar.getBoundingClientRect().height;
      const footerHeight = footer.getBoundingClientRect().height;
      const availableHeight = window.innerHeight - navbarHeight - footerHeight;

      setAvailableHeight(availableHeight);
    }

    // Add event listener for resizing the window
    const handleResize = () => {
      const navbarHeight = navbar?.getBoundingClientRect().height || 0;
      const footerHeight = footer?.getBoundingClientRect().height || 0;
      setAvailableHeight(window.innerHeight - navbarHeight - footerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUserProfile(data);
        } else {
          console.error("Failed to fetch user profile");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUserProfile();
  }, [id]);

  if (loading)
    return (
      <>
        <Loader />
      </>
    );

  if (!userProfile) return <p>User not found</p>;

  return (
    <div
      className="flex flex-col items-center px-8 md:px-[20vh] gap-4 md:gap-20 mb-10 md:mt-10 "
      style={{ minHeight: `${availableHeight}px` }}
    >
      <div className="flex w-full justify-start">
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi There
          <span className="wave">👋🏻</span> ,
          <span className="text-[rgb(224,241,94)]">{userProfile.name}</span>{" "}
        </h1>
      </div>
      
      <div className="flex flex-col shadow-2xl rounded-2xl  w-full md:w-[30%] h-auto">
        <div
          className="h-[20vh] relative inset-0 bg-black p-4 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:24px_24px]
          [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 60%, 0% 100%)",
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <div
            className="bg-white h-[8vh] w-[8vh] rounded-full flex 
            justify-center items-center text-center text-xl"
            {...stringAvatar(userProfile.name)}
          />
        </div>
        <div className="flex flex-col p-4 gap-2">
          <h1 className="text-2xl font-semibold">{userProfile.name}</h1>
          <div className="flex gap-4">
            <Chip label="Email" />
            <Chip
              variant="outlined"
              color="primary"
              label={userProfile?.email}
            />
          </div>
          {userProfile?.role && (
            <div className="flex gap-4">
              <Chip label="Role" />
              <Chip
                variant="outlined"
                color="success"
                label={userProfile?.role}
              />
            </div>
          )}

          {userProfile.country && (
            <>
              <Chip label="Location" />
              <div className="flex flex-row gap-2">
                <Chip
                  variant="outlined"
                  color="success"
                  label={userProfile?.city}
                />
                <Chip
                  variant="outlined"
                  color="success"
                  label={userProfile.state}
                />
                <Chip
                  variant="outlined"
                  color="success"
                  label={userProfile.country}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div
          className="w-full flex flex-col justify-center items-center
       h-auto bg-white rounded-2xl shadow-2xl p-4 gap-4"
        >
          <h1 className="text-3xl font-bold">Quick Stats</h1>
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
    </div>
  );
}
