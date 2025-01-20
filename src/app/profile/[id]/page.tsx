"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { COLORS } from "@/styles/color";

type UserProfile = {
  name: string;
  email: string;
  role: string;
  country?: string;
  state?: string;
  city?: string;
};

export default function UserProfilePage() {
  const { id } = useParams(); // Extract the user ID from the URL
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

  if (loading) return <p>Loading...</p>;

  if (!userProfile) return <p>User not found</p>;

  return (
    <div
      className="flex flex-col md:flex-row items-center p-6"
      style={{ minHeight: `${availableHeight}px` }}
    >
      <div className="flex flex-col shadow-2xl rounded-2xl">
        <div
          className="h-[30vh] inset-0 bg-purple-500 "
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 60%, 0% 100%)",
            borderBottomLeftRadius : 4,
            borderBottomRightRadius : 10,
          }}
        ></div>
        <h1 className="text-3xl font-semibold">{userProfile.name}</h1>
        <p className="text-lg">Email: {userProfile.email}</p>
        <p className="text-lg">Role: {userProfile.role}</p>
        {userProfile.country && (
          <p className="text-lg">
            Location: {userProfile.city}, {userProfile.state},{" "}
            {userProfile.country}
          </p>
        )}
      </div>
    </div>
  );
}
