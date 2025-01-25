"use client";

import { ExpertCard } from "@/components/expertCard/ExpertCard";
import { COLORS } from "@/styles/color";
import { Grid2 } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Expert() {
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
  return (
    <div
      className="flex flex-col items-center px-4 md:px-[10vw]"
      style={{ minHeight: `${availableHeight}px` }}
    >
      <div className="flex flex-col md:mt-10 text-center ">
        <h1 className="text-5xl md:text-7xl  font-bold ">
          Stuck on a <span style={{ color: COLORS.NEON }}>Question ?</span>{" "}
        </h1>
        <p className="text-2xl md:text-3xl mt-6">
          Chat with AI Subject Experts
        </p>
      </div>
      <Grid2 container spacing={4} mt={4} justifyContent={"center"} >
        <ExpertCard />
        <ExpertCard />
        <ExpertCard />
        <ExpertCard />
      </Grid2>
    </div>
  );
}
