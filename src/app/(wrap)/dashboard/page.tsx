"use client";

import { Stats } from "@/components/Stats/Stats";
import { Switch } from "@/components/switch/Switch";
import React, { useEffect, useState } from "react";

const DashBoard = () => {
  const [availableHeight, setAvailableHeight] = useState<number>(0);
  const [activeType, setActiveType] = useState<string>("student");
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
      className="flex flex-col items-center  px-4 md:px-40"
      style={{ minHeight: `${availableHeight}px` }}
    >
      <div>
        <Switch activeType={activeType} setActiveType={setActiveType} />
      </div>
      <Stats />
    </div>
  );
};

export default DashBoard;
