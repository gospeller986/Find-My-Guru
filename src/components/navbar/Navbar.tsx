"use client";

import React, { useState, useEffect } from "react";
import { Links } from "../links/Links";
import { useIsMobile } from "@/hooks/useIsMobile";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Avatar, Button, Divider, IconButton } from "@mui/material";
import { stringAvatar } from "@/lib/utils";

export const Navbar = () => {
  const isMobile = useIsMobile();
  const { user, logout, setUser } = useAuth();
  const router = useRouter();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    logout();
    router.push("/");
    setUser(null);
  };

  console.log(user);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className={`navbar items-center py-4  px-4 md:px-[10vw] `}
      >
        <button
          onClick={toggleDrawer}
          className="text-2xl text-black rounded ml-4 block md:hidden "
          style={{ position: "absolute", left: "10px" }}
        >
          ☰
        </button>

        <div
          style={{
            margin: isMobile ? "0 auto" : "0",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h3 className="font-[family-name:var(--font-geist-sans)] text-3xl font-semibold">
            <Links href="/" label="Find My Guru" />
          </h3>
        </div>

        <div
          className="hidden md:flex"
          style={{
            textAlign: "center",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Links href="/tutor-onboarding" label="Become a Tutor" />
          <Links href="/explore" label="Explore Tutors" />
          <Links href="/subject-expert" label="Subject Experts" />
          {user ? (
            <div className="relative">
              <IconButton
                onClick={toggleDropdown}
                className="rounded-full bg-gray-300 "
              >
                <Avatar {...stringAvatar(user?.name)}></Avatar>
              </IconButton>
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48"
                  style={{ zIndex: 100 }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      textDecoration: "none",
                      color: "black",
                    }}
                    fullWidth
                    onClick={() => router.push(`/profile/${user?.id}`)}
                  >
                    Profile
                  </Button>
                  <Divider />
                  <Button
                    onClick={handleLogout}
                    fullWidth
                    className="block w-full text-left px-4 py-2 text-red-500"
                    sx={{
                      textTransform: "none",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <button className="text-white bg-black px-4 py-2 font-[family-name:var(--font-geist-sans)] rounded-lg">
              <Links href="/auth/signin" label="Sign In" />
            </button>
          )}
        </div>
      </div>

      {isDrawerOpen && (
        <>
          <div
            className="block md:hidden"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "70%",
              height: "100%",
              backgroundColor: "#fff",
              boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              zIndex: 1000,
            }}
          >
            <div className="flex flex-1 justify-end">
              <button
                onClick={toggleDrawer}
                className="text-2xl text-gray p-2 mb-4"
              >
                <CloseIcon />
              </button>
            </div>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Links href="/tutor-onboarding" label="Become a Tutor" />
              <Links href="/explore" label="Explore Tutors" />
              <Links href="/subject-expert" label="Subject Experts" />
              {user ? (
                <div className="flex flex-col gap-2">
                  <Links href="/profile" label="Profile" />
                  <button
                    onClick={handleLogout}
                    className="text-white bg-red-500 px-4 py-2"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Links href="/auth/signin" label="Sign In" />
              )}
            </nav>
          </div>

          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
            onClick={toggleDrawer}
          />
        </>
      )}
    </>
  );
};
