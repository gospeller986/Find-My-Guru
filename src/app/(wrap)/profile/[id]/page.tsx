"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader } from "@/components/loader/Loader";
import { UserForm } from "@/components/forms/UserForm";
import { UserProfile } from "@/interfaces/response/user-profile.response.interface";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { UserStepsCard } from "@/components/ProfileCard/UserStepsCard";
import { TutorStepsCard } from "@/components/ProfileCard/TutorStepsCard";
import { Stats } from "@/components/Stats/Stats";
import { Help } from "@/components/Help/Help";

export default function UserProfilePage() {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [availableHeight, setAvailableHeight] = useState<number>(0);
  const [openUserForm, setOpenUserForm] = useState<boolean>(false);

  const handleOpenUserForm = () => {
    setOpenUserForm(true);
  };

  const handleCloseUserForm = () => {
    setOpenUserForm(false);
    fetchUserProfile();
  };

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

  useEffect(() => {
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
      <div className="flex w-full justify-start md:px-40 ">
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi There
          <span className="wave">👋🏻</span> ,
          <span className="text-[rgb(224,241,94)]">{userProfile.name}</span>{" "}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-8 md:px-40 ">
        <ProfileCard userProfile={userProfile} />
        <div className="flex flex-row shadow-2xl rounded-2xl w-full gap-4 p-4">
          <UserStepsCard handleOpenUserForm={handleOpenUserForm} userProfile={userProfile}  />
          <TutorStepsCard handleOpenUserForm={handleOpenUserForm}/>
        </div>
      </div>
      <Help/>
      <UserForm
        userId={id as string}
        open={openUserForm}
        handleClose={handleCloseUserForm}
      />
    </div>
  );
}
