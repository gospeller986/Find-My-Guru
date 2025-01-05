"use client";
import React, { useState } from "react";
import { Links } from "../links/Links";
import { useIsMobile } from "@/hooks/useIsMobile";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className= {` items-center py-4 ${isMobile ? "px-4" : "px-[10vw]"}`}
      >
        {isMobile && (
          <button
            onClick={toggleDrawer}
            className="text-2xl text-black  rounded ml-4 "
            style={{ position: "absolute", left: "10px" }}
          >
            ☰
          </button>
        )}
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

        {!isMobile && (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Links href="/tutor-onboarding" label="Become a Tutor" />
            <Links href="/explore" label="Explore Tutors" />
            <Links href="/subject-expert" label="Subject Experts" />
            <button className="text-white bg-black px-4 py-2 font-[family-name:var(--font-geist-sans)]">
              <Links href="/dashboard" label="Sign In" />
            </button>
          </div>
        )}
      </div>

      {isMobile && isDrawerOpen && (
        <>
          <div
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
              <Links href="" label="Become a Tutor" />
              <Links href="" label="Explore Tutors" />
              <Links href="" label="Subject Experts" />
              <button className="text-white bg-black px-4 py-2 font-[family-name:var(--font-geist-sans)]">
                Sign In
              </button>
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

      <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-500 to-transparent " />
    </>
  );
};
